import type { APIRoute } from 'astro';

// Crear un array para almacenar datos
const data = [];

export const POST: APIRoute = async ({ params, request }) => {
  try {
    
    const { id } = await request.json();   
    data.push(id);

    

    return new Response(JSON.stringify({ message: 'Operación exitosa' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error en la operación' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const GET:APIRoute=async({params, request})=>{
    try{
        return new Response(JSON.stringify(data),{
            status:200,
            headers: { 'Content-Type': 'application/json' },
        });
    }catch(error) {
        return new Response(JSON.stringify({ message: 'Error en la operación' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
      }
}


export const DELETE: APIRoute = async ({ params, request }) => {
    try {      
      const { id } = await request.json();
      const index = data.indexOf(id);
      console.log(index);
      if (index !== -1){
        data.splice(index, 1);
        return new Response(JSON.stringify({ message: 'Elemento eliminado correctamente' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          });
      }
      else{
        return new Response(JSON.stringify({ message: 'Elemento no encontrado' }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' },
          });
      }
      
    }catch(error){
        return new Response(JSON.stringify({ message: 'Error en la operación' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }, 
        });
    } 
};

