import { useEffect } from "react";
import { fetchBodegas } from "../Function/fetchBodegas";

export function useFetchBodegas(setBodegas) {
  useEffect(() => {
    async function loadBodegas() {
      try {
        const data = await fetchBodegas();
        setBodegas(data);
      } catch (error) {}
    }
    loadBodegas()
  });
}
