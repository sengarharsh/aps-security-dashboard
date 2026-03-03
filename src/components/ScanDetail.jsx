import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Terminal, ShieldAlert, Bug, Activity, Check } from 'lucide-react';
import mockData from '../mockData.json';

const stages = ['Spidering', 'Testing', 'Validating', 'Reporting'];
const currentStage = 1; // 'Testing' (0-indexed)

const SeverityBadge = ({ severity }) => {
    const styles = {
        Critical: 'bg-red-500/10 text-red-500 border border-red-500/20 backdrop-blur-sm',
        High: 'bg-orange-500/10 text-orange-500 border border-orange-500/20 backdrop-blur-sm',
        Medium: 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 backdrop-blur-sm',
        Low: 'bg-green-500/10 text-green-500 border border-green-500/20 backdrop-blur-sm',
    };

    return (
        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${styles[severity] || styles.Low}`}>
            {severity}
        </span>
    );
};

export default function ScanDetail() {
    const { id } = useParams();
    const { liveLogs, findings, scans } = mockData;
    const consoleRef = useRef(null);

    const scan = scans.find(s => s.id === id) || scans[0];

    useEffect(() => {
        if (consoleRef.current) {
            consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
        }
    }, []);

    return (
        <div className="min-h-screen bg-transparent font-sans flex flex-col">

            {/* Header */}
            <header className="bg-white dark:bg-[#1A1A1A] text-slate-900 dark:text-white border-b border-slate-200 dark:border-[#262626] px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
                <div className="flex items-center space-x-6">
                    <Link to="/dashboard" className="p-2 hover:bg-slate-100 dark:hover:bg-white/10 rounded-full transition-colors text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white">
                        <ArrowLeft size={20} />
                    </Link>
                    <div>
                        <h1 className="text-xl font-bold mb-0.5">{scan.name}</h1>
                        <p className="text-xs text-slate-500 dark:text-gray-400 flex items-center font-medium">
                            <Activity size={12} className="mr-1.5 text-slate-400 dark:text-gray-400" />
                            Active Scan &bull; ID: {scan.id}
                        </p>
                    </div>
                </div>
                <button className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-500 hover:bg-red-100 dark:hover:bg-red-900/40 hover:text-red-700 dark:hover:text-red-400 px-5 py-2 rounded-lg font-medium transition text-sm">
                    Stop Scan
                </button>
            </header>

            <main className="flex-1 p-6 md:p-8 max-w-7xl mx-auto w-full flex flex-col gap-6">

                {/* Progress Tracker Box */}
                <div className="bg-white dark:bg-[#1A1A1A] border border-slate-200 dark:border-[#262626] rounded-2xl shadow-sm w-full p-8 relative overflow-hidden">
                    <div className="max-w-4xl mx-auto relative">
                        {/* Connecting Line */}
                        <div className="absolute left-0 top-6 transform -translate-y-1/2 w-full h-[2px] bg-slate-200 dark:bg-[#262626] z-0"></div>
                        <div
                            className="absolute left-0 top-6 transform -translate-y-1/2 h-[2px] bg-[#0cc8a8] z-0 transition-all duration-500"
                            style={{ width: `${(currentStage / (stages.length - 1)) * 100}%` }}
                        ></div>

                        <div className="flex justify-between items-start relative z-10">
                            {stages.map((stage, index) => {
                                const isCompleted = index < currentStage;
                                const isActive = index === currentStage;
                                return (
                                    <div key={stage} className="flex flex-col items-center group w-24">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 mb-3
                                            ${isActive ? 'bg-white dark:bg-[#1A1A1A] border-2 border-[#0cc8a8] text-[#0cc8a8] shadow-[0_0_15px_rgba(12,200,168,0.2)]' :
                                                isCompleted ? 'bg-[#0cc8a8] border border-[#0cc8a8] text-white' :
                                                    'bg-slate-50 dark:bg-[#0F0F0F] border border-slate-200 dark:border-[#262626] text-slate-400 dark:text-gray-600'}`}
                                        >
                                            {isCompleted ? <Check size={18} /> : index + 1}
                                        </div>
                                        <span className={`text-sm font-medium ${isActive || isCompleted ? 'text-slate-900 dark:text-white' : 'text-slate-400 dark:text-gray-500'}`}>
                                            {stage}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Split Section */}
                <div className="flex-1 flex flex-col lg:flex-row gap-6 min-h-[500px]">

                    {/* Live Scan Console */}
                    <div className="flex-[3] bg-[#1C1F2B] rounded-2xl shadow-xl flex flex-col overflow-hidden border border-gray-800">
                        <div className="px-5 py-4 flex items-center justify-between border-b border-gray-800/50 bg-[#161821]">
                            <div className="flex items-center space-x-2 text-gray-300">
                                <span className="font-mono font-bold text-lg leading-none">{'>_'}</span>
                                <h2 className="text-sm font-semibold tracking-wide">Live Scan Console</h2>
                            </div>
                            <div className="flex space-x-1.5 focus:outline-none">
                                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                            </div>
                        </div>

                        <div
                            ref={consoleRef}
                            className="flex-1 p-5 overflow-y-auto font-mono text-[13px] leading-relaxed space-y-2"
                        >
                            {liveLogs.map((log, i) => {
                                let colorClass = "text-gray-300";
                                if (log.includes("[INFO]")) colorClass = "text-gray-400";
                                if (log.includes("[WARN]")) colorClass = "text-yellow-400/90";
                                if (log.includes("[CRITICAL]") || log.includes("[ALERT]")) colorClass = "text-red-400";

                                return (
                                    <div key={i} className="break-all flex">
                                        <span className="text-gray-600 mr-3 flex-shrink-0">{'>'}</span>
                                        <span className={colorClass}>{log}</span>
                                    </div>
                                );
                            })}
                            <div className="flex items-center text-gray-500 mt-2 animate-pulse">
                                <span className="mr-3">{'>'}</span>
                                <span className="w-1.5 h-4 bg-gray-400"></span>
                            </div>
                        </div>
                    </div>

                    {/* Finding Log */}
                    <div className="flex-[2] bg-white dark:bg-[#1A1A1A] rounded-2xl shadow-sm flex flex-col overflow-hidden border border-slate-200 dark:border-[#262626]">
                        <div className="px-5 py-4 border-b border-slate-200 dark:border-[#262626] flex items-center justify-between bg-slate-50 dark:bg-[#12141D]">
                            <div className="flex items-center space-x-2 text-slate-700 dark:text-gray-300">
                                <ShieldAlert size={18} />
                                <h2 className="text-sm font-semibold tracking-wide text-slate-900 dark:text-white">Finding Log</h2>
                            </div>
                            <span className="bg-slate-200 dark:bg-gray-800/80 text-slate-600 dark:text-gray-300 text-[11px] font-bold px-3 py-1 rounded-full border border-slate-300 dark:border-gray-700">
                                {findings.length} total
                            </span>
                        </div>

                        <div className="flex-1 overflow-y-auto p-5 space-y-3">
                            {findings.map((finding) => (
                                <div key={finding.id} className="p-4 bg-slate-50 dark:bg-[#161821] rounded-xl border border-slate-200 dark:border-gray-800/80 hover:border-slate-300 dark:hover:border-gray-600 transition-colors group">
                                    <div className="flex justify-between items-center mb-3">
                                        <SeverityBadge severity={finding.severity} />
                                        <span className="text-xs text-slate-500 font-medium">{finding.timestamp || 'Just now'}</span>
                                    </div>
                                    <h3 className="font-semibold text-slate-900 dark:text-gray-200 text-sm mb-3">
                                        {finding.type}
                                    </h3>
                                    <div className="flex items-center text-xs text-slate-600 dark:text-gray-400 bg-white dark:bg-black/40 px-3 py-2 rounded-lg border border-slate-200 dark:border-gray-800/50">
                                        <Bug size={14} className="mr-2 flex-shrink-0 text-slate-400 dark:text-gray-500" />
                                        <span className="truncate font-mono">{finding.path}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
