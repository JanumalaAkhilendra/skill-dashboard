'use client';
import { useState } from "react";
import { BarChart3, BookOpen, GraduationCap, LayoutDashboard, Menu, X } from "lucide-react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";

export default function SkillTestDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="lg:hidden" onClick={() => setIsSidebarOpen(true)}>
            <Menu className="h-6 w-6" />
          </button>
          <div className="font-bold text-xl">WhatBytes</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-sm">Rahil Siddique</div>
          <div className="h-8 w-8 rounded-full bg-gray-200" />
        </div>
      </header>

      <div className="flex">
        {/* Sidebar (Mobile + Desktop) */}
        <aside
          className={`fixed inset-y-0 left-0 z-50 w-64 bg-white p-6 shadow-lg transition-transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:relative lg:translate-x-0 lg:shadow-none`}
        >
          <button className="absolute top-4 right-4 lg:hidden" onClick={() => setIsSidebarOpen(false)}>
            <X className="h-6 w-6" />
          </button>
          <nav className="space-y-2">
            <a href="#" className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-100">
              <LayoutDashboard className="h-5 w-5" />
              Dashboard
            </a>
            <a href="#" className="flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-blue-600">
              <GraduationCap className="h-5 w-5" />
              Skill Test
            </a>
            <a href="#" className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-100">
              <BookOpen className="h-5 w-5" />
              Internship
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <h1 className="mb-6 text-2xl font-semibold">Skill Test</h1>

          {/* Test Card */}
          <div className="mb-6 rounded-lg border bg-white p-6">
            <div className="flex flex-col md:flex-row items-start justify-between gap-4">
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded bg-orange-100 p-2">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(555)-W3u63PqAPx8sFw51MufDsgFyVS0FXV.png"
                    alt="HTML5 Logo"
                    width={32}
                    height={32}
                    className="h-8 w-8"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Hyper Text Markup Language</h2>
                  <p className="text-sm text-gray-500">Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
                </div>
              </div>
              <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                Update
              </button>
            </div>

            {/* Quick Statistics */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-lg border p-4 text-center">
                <div className="text-3xl font-bold">1</div>
                <div className="text-sm text-gray-500">YOUR RANK</div>
              </div>
              <div className="rounded-lg border p-4 text-center">
                <div className="text-3xl font-bold">30%</div>
                <div className="text-sm text-gray-500">PERCENTILE</div>
              </div>
              <div className="rounded-lg border p-4 text-center">
                <div className="text-3xl font-bold">10/15</div>
                <div className="text-sm text-gray-500">CORRECT ANSWERS</div>
              </div>
            </div>

            {/* Comparison Graph */}
            <div className="mt-6">
              <h3 className="mb-2 font-semibold">Comparison Graph</h3>
              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-gray-400" />
                  <p className="text-sm text-gray-600">
                    You scored 30% percentile, lower than the average 72% of engineers who took this assessment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Syllabus Analysis */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border bg-white p-6">
              <h3 className="mb-4 font-semibold">Syllabus Wise Analysis</h3>
              <div className="space-y-4">
                {[
                  { topic: "HTML Tools, Forms, History", score: 80, color: "bg-blue-500" },
                  { topic: "Tags & References in HTML", score: 60, color: "bg-orange-500" },
                  { topic: "Tables & References in HTML", score: 24, color: "bg-red-500" },
                  { topic: "Tables & CSS Basics", score: 96, color: "bg-green-500" },
                ].map(({ topic, score, color }, index) => (
                  <div key={index}>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>{topic}</span>
                      <span>{score}%</span>
                    </div>
                    <Progress value={score} className="h-2 bg-gray-100" indicatorClassName={color} />
                  </div>
                ))}
              </div>
            </div>

            {/* Question Analysis */}
            <div className="rounded-lg border bg-white p-6">
              <h3 className="mb-4 font-semibold">Question Analysis</h3>
              <div className="text-right text-2xl font-bold text-blue-600">10/15</div>
              <p className="mt-2 text-gray-600">You scored 10 correct answers out of 15. Some improvements are needed.</p>
            </div>
          </div>
        </main>
      </div>

      {/* Overlay for closing sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
