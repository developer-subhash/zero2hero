export async function GET() {
    //DB logic to fetch data
    return Response.json({ name: "subhash", email: "subhash@gmail.com" })
  }

  export async function POST(req){
    const body = await req.json();
    console.log(body);

    return Response.json({
        message: "you are logged in"
    })
  }