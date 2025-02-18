"use client";

import { useEffect, useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Navbar from "../Navbar";

const WebSocketClient = () => {
  const [url, setUrl] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [logs, setLogs] = useState<string[]>([]);

  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    ws.current = new WebSocket("ws://localhost:8000/ws");

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
    <div className="flex flex-col h-screen dark:bg-gray-900 dark:text-gray-100">
      <Navbar />
      <div className="flex items-center justify-center flex-1 p-4">
        <Card className="w-full max-w-4xl">
          <CardHeader>
            <CardTitle className="text-2xl">Kritik Auto</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="w-full space-y-4">
              <Input
                type="text"
                placeholder="WordPress Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                type="password"
                placeholder="WordPress Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="flex gap-2">
                <Input
                  className="flex-1"
                  type="text"
                  placeholder="Enter news URL"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
                <Button onClick={sendRequest}>GO</Button>
              </div>
            </div>
            <div className="rounded-lg border p-3 h-96 overflow-auto bg-gray-50 dark:bg-gray-800">
              {logs.map((log, index) => (
                <p key={index} className="text-sm">{log}</p>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WebSocketClient;
