import React from 'react';
import { Star, Rocket } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col">
      <header className="p-4 flex items-center">
        <div className="flex items-center space-x-2">
          <Rocket className="text-blue-600" size={40} />
          <h2 className="text-2xl font-bold text-blue-800">MyApp</h2>
        </div>
      </header>
      
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white shadow-2xl rounded-xl p-8 max-w-md w-full text-center transform transition-all hover:scale-105">
          <h1 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Welcome to My Vite React App!
          </h1>
          <div className="space-y-3">
            {[
              "Simple app deployed on Vercel",
              "Powered by CI/CD with GitHub Actions",
              "Seamless development experience",
              "Modern React with Vite"
            ].map((text, index) => (
              <p 
                key={index} 
                className="text-lg text-gray-700 flex items-center justify-center"
              >
                <Star className="mr-2 text-yellow-500" size={20} />
                {text}
              </p>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;