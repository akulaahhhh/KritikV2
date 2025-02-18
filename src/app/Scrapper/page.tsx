"use client";

import { useEffect, useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Lock, Link2, Terminal, Globe } from 'lucide-react';
import Navbar from "../Navbar";

const WebSocketClient = () => {
  const [url, setUrl] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [logs, setLogs] = useState<string[]>([]);

  const ws = useRef<WebSocket | null>(null);
  const apiUrl = process.env.BACKEND_API;
  console.log("API URL:", apiUrl);

  useEffect(() => {
    ws.current = new WebSocket(`${apiUrl}/ws`);

    ws.current.onopen = () => console.log("✅ WebSocket connected");
    ws.current.onmessage = (event) => {
      console.log("📩 Received:", event.data);
      setLogs((prevLogs) => [...prevLogs, event.data]);
    };
    ws.current.onerror = (error) => console.error("❌ WebSocket error:", error);
    ws.current.onclose = () => console.log("🔄 WebSocket closed");

    return () => {
      ws.current?.close();
    };
  }, []);

  const sendRequest = () => {
    if (!url || !username || !password) {
      alert("Please fill in all fields!");
      return;
    }

    setLogs([]);
    setLogs((prevLogs) => [...prevLogs, "Request sent..."]);

    if (ws.current?.readyState === WebSocket.OPEN) {
      ws.current.send(
        JSON.stringify({
          url: url,
          username: username,
          password: password
        })
      );
    } else {
      console.error("WebSocket is not open.");
      setLogs((prevLogs) => [...prevLogs, "❌ WebSocket not connected"]);
    }
  };

  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-900 dark:text-gray-100">
      <Navbar />
      <div className="flex items-center justify-center flex-1 p-6">
        <Card className="w-full max-w-4xl shadow-xl">
          <CardHeader className="space-y-4 pb-6">
            <div className="flex items-center gap-2">
              <Globe className="h-6 w-6 text-blue-500" />
              <CardTitle className="text-2xl font-bold">Kritik Auto</CardTitle>
            </div>
            <CardDescription className="text-base">
              Automated web scraping tool for Kritik.com.my | ZOHL Industries
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Credentials Section */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                WordPress Credentials
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="WordPress Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-10"
                  />
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
                <div className="relative">
                  <Input
                    type="password"
                    placeholder="WordPress Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                  />
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* URL Input Section */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Target URL
              </h3>
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <Input
                    type="text"
                    placeholder="Enter news URL to scrape"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="pl-10"
                  />
                  <Link2 className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
                <Button 
                  onClick={sendRequest}
                  size="lg"
                  className="px-8 "
                >
                  Start Scraping
                </Button>
              </div>
            </div>

            {/* Logs Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Terminal className="h-5 w-5 text-gray-500" />
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Process Logs
                </h3>
              </div>
              <div className="rounded-lg border bg-gray-50 dark:bg-gray-800 p-4 h-80 overflow-auto font-mono">
                {logs.map((log, index) => (
                  <p 
                    key={index} 
                    className="text-sm text-gray-600 dark:text-gray-300 py-0.5"
                  >
                    {log}
                  </p>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WebSocketClient;
