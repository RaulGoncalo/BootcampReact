export default function Hearder({ children }) {
  return (
    <header>
      <div className="bg-blue-200 mx-auto p-4">
        <h1 className="text-center font-semibold text-xl">{children}</h1>
      </div>
    </header>
  );
}
