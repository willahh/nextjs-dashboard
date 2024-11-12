console.log('test');

export async function GET() {
  console.log('test2');
  return Response.json({ message: 'test4' });
}
