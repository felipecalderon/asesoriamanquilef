import { Button } from "@nextui-org/react";

const ChatInputForm = ({ query, setQuery, handleSubmit }: { query: string, setQuery: React.Dispatch<React.SetStateAction<string>>, handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void> }) => {
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 bg-white rounded-lg dark:bg-violet-950">
            <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Escribe tu mensaje aquí..."
                className="p-3 h-32 text-sm text-gray-700 bg-gray-50 rounded-lg border border-gray-300 focus:ring-violet-500 focus:border-violet-500 resize-none dark:bg-violet-800 dark:text-white placeholder:dark:text-gray-200 placeholder:italic"
            />
            <Button 
                type="submit" 
                className="p-2 text-white bg-violet-500 hover:bg-violet-600 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50"
            >
                Enviar
            </Button>
        </form>
    );
};

export default ChatInputForm