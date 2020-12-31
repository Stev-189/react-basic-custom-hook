import { useEffect, useState, useRef } from "react"

export const useFetch = (url) => {

  const isMounted = useRef(true)// mantine refernecias cunado elemento este montado

  const [state, setState] = useState({data: null, loading:true, error:null});

  useEffect(()=>{return()=>{isMounted.current=false}},[])// se ejecuta la primera ves y cunado se desmonta habisa la desmontada

  useEffect(() => {
    setState({data: null, loading:true, error:null});//cadavez que modifique la url se carga el loading

    fetch(url)
    .then(resp=>resp.json())
    .then(data=>{

        if(isMounted.current){// se verifica si esta desmontada no realise la render de un elemento no montado
          //evita errores graves
          setState({
            loading: false,
            error: null,
            data
          })
        } else {
          // console.log('useState no se monto');
        }
    })
    .catch(()=>{ setState({data: null, loading:false, error:'No se puedo cargar la info'})})// si hay error alerta dle error
  }, [url])

  return state
}
