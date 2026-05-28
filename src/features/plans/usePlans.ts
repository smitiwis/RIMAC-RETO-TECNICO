import { useQuery } from "@tanstack/react-query";
import { quoteService } from "../../api/quoteService";
import { useQuoteStore } from "@/store/useQuoteStore";
import type { Plan } from "../../types";

function calculateAge(birthDayStr: string): number {
  if (!birthDayStr) return 30;

  let birthDate: Date;
  
  if (birthDayStr.includes("-")) {
    const parts = birthDayStr.split("-");
    if (parts.length === 3) {
      if (parts[2].length === 4) {
        const [day, month, year] = parts.map(Number);
        birthDate = new Date(year, month - 1, day);
      } else {
        const [year, month, day] = parts.map(Number);
        birthDate = new Date(year, month - 1, day);
      }
    } else {
      birthDate = new Date(birthDayStr);
    }
  } else if (birthDayStr.includes("/")) {
    const parts = birthDayStr.split("/");
    if (parts.length === 3) {
      if (parts[2].length === 4) {
        const [day, month, year] = parts.map(Number);
        birthDate = new Date(year, month - 1, day);
      } else {
        const [year, month, day] = parts.map(Number);
        birthDate = new Date(year, month - 1, day);
      }
    } else {
      birthDate = new Date(birthDayStr);
    }
  } else {
    birthDate = new Date(birthDayStr);
  }

  if (isNaN(birthDate.getTime())) {
    return 30;
  }

  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
}

export function usePlans(enabled = true) {
  const { user } = useQuoteStore();
  const userAge = user ? calculateAge(user.birthDay) : 30;

  return useQuery({
    queryKey: ["planes", userAge],
    queryFn: async () => {
      const { data } = await quoteService.getPlanes();
      
      const eligiblePlans = data.list.filter((plan) => userAge <= plan.age);
      
      const mapNameToId = (name: string): string => {
        const cleanName = name.toLowerCase().trim();
        if (cleanName.includes("bienestar")) return "plan-bienestar";
        if (cleanName.includes("fitness")) return "plan-fitness";
        if (cleanName.includes("chequeo")) return "plan-chequeo";
        if (cleanName.includes("clínica") || cleanName.includes("clinica")) return "plan-clinica";
        if (cleanName === "plan en casa") return "plan-casa";
        return cleanName.replace(/\s+/g, "-");
      };

      return eligiblePlans.map((plan): Plan => ({
        id: mapNameToId(plan.name),
        nombre: plan.name,
        precio: plan.price,
        tipo: "me",
        coberturas: plan.description,
      }));
    },
    enabled,
  });
}
