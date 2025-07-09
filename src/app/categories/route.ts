export const dynamic ="force-static";
export const revalidate=10;
export async function GET(){
  const categories=[
    {id:1,name:"Electronics"},
    {id:2,name:"Books"},
    {id:3,name:"clothing"},
    {id:4,name:"Home and Garden"},
  ]
  return Response.json(categories);
}