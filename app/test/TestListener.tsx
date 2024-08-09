

export default async  function TestListener() {
  
      const response = await fetch('/api/sanity-webhook');
      const data = await response.json();

  return (
    <div>
      hola {data}
    </div>
  );
}

