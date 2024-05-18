import { useEffect } from "react";
import { fetchPedidos } from "../Function/fetchPedidos";

export function useFetchPedidos(setPedidos) {
  useEffect(() => {
    async function loadPedidos() {
      try {
        const data = await fetchPedidos();
        setPedidos(data);
      } catch (error) {}
    }
    loadPedidos()
  });
}
