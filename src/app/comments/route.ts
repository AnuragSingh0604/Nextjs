import { comments } from "./data" ;
import {type NextRequest} from "next/server";
import {headers,cookies} from "next/headers";
export async function GET(request:NextRequest){
  //const requestHeaders=new Headers(request.headers);
  //const auth= requestHeaders.get("Authorization");
  const headersList=await headers();
  console.log(headersList.get("Authorization"));
  const searchParams=request.nextUrl.searchParams;
  const query=searchParams.get("query");
  const filteredComments=query?comments.filter((comment)=>comment.text.includes(query)):comments;
  //getting cookies from nextRequest
  const theme=request.cookies.get("theme");
  // getting cookies from cookies method
  const cookieStore=await cookies();
  cookieStore.set("resultPerPage","20");
  console.log(cookieStore.get("resultsPerPage")); 
  return Response.json(filteredComments);
  return new Response("<h1>profile api data</>",{
    headers:{
      "Content-Type":"text/html",
      "Set-Cookie":"theme=dark",
    }
  });
}
export async function POST(request:Request){
  const comment=await request.json();
  const newComment={
    id:comment.length+1,
    text:comment.text,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment),{
    headers:{"Content-Type":"application/json"},
    status:201,
  })
}