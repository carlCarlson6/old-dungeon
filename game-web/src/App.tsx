import Console, { useInputRef } from "./console/ui/Console"

function App() {
  const inputRef = useInputRef();
  const onClickAnywhere = () => inputRef.current?.focus();

  return (
    <div
      className="text-light-foreground dark:text-dark-foreground min-w-max text-xs md:min-w-full md:text-base h-full"
      onClick={onClickAnywhere}
    >
      <main className="bg-light-background dark:bg-dark-background w-full h-full p-2">
        <Console inputRef={inputRef}/>    
      </main>
    </div>
  )
}

export default App
