const data = [];
const POST = async ({ params, request }) => {
  try {
    const { id } = await request.json();
    data.push(id);
    return new Response(JSON.stringify({ message: "Operación exitosa" }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error en la operación" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
const GET = async ({ params, request }) => {
  try {
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error en la operación" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
const DELETE = async ({ params, request }) => {
  try {
    const { id } = await request.json();
    const index = data.indexOf(id);
    console.log(index);
    if (index !== -1) {
      data.splice(index, 1);
      return new Response(JSON.stringify({ message: "Elemento eliminado correctamente" }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    } else {
      return new Response(JSON.stringify({ message: "Elemento no encontrado" }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error en la operación" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

export { DELETE, GET, POST };
