import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    FolderOpen,
    ScanSearch,
    Calendar,
    Bell,
    Settings,
    HelpCircle,
    Search,
    Filter,
    Columns,
    Plus,
    Clock
} from 'lucide-react';
import { useTheme } from './ThemeContext';
import mockData from '../mockData.json';

const SidebarItem = ({ icon: Icon, label, path, active }) => {
    return (
        <Link
            to={path}
            className={`flex items-center space-x-3 px-4 py-2.5 rounded-r-full transition-colors mb-2 text-sm font-medium relative border-l-2 ${active ? 'bg-[#0cc8a8]/10 text-[#0cc8a8] border-[#0cc8a8]' : 'border-transparent hover:bg-slate-100 dark:hover:bg-[#2A2A2A] text-slate-600 dark:text-slate-400'}`}
        >
            <Icon size={18} />
            <span>{label}</span>
        </Link>
    );
};

const SeverityCard = ({ title, count, changeText, changeType, iconBg, iconColor, icon: Icon }) => (
    <div className="flex flex-col border-r border-slate-200 dark:border-[#262626] last:border-r-0 px-8 py-4 flex-1">
        <div className="flex justify-between items-start mb-2">
            <h3 className="text-sm text-slate-600 dark:text-slate-400 font-medium">{title}</h3>
            <div className={`p-1.5 rounded-md ${iconBg} ${iconColor}`}>
                <Icon size={16} />
            </div>
        </div>
        <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-semibold text-slate-900 dark:text-white">{count}</span>
            <span className={`text-[10px] font-medium ${changeType === 'increase' ? 'text-red-500' : 'text-green-500'}`}>
                {changeType === 'increase' ? '↑' : '↓'} {changeText}
            </span>
        </div>
    </div>
);

const getStatusBadge = (status) => {
    // Glassmorphism classes: backdrop-blur combined with semi-transparent background.
    if (status === 'Completed') return <span className="text-[11px] font-bold text-green-700 dark:text-green-400 border border-green-500/20 bg-green-500/10 backdrop-blur-sm px-2.5 py-1 rounded">Completed</span>;
    if (status === 'Failed') return <span className="text-[11px] font-bold text-red-700 dark:text-red-400 border border-red-500/20 bg-red-500/10 backdrop-blur-sm px-2.5 py-1 rounded">Failed</span>;
    if (status === 'Scheduled') return <span className="text-[11px] font-bold text-gray-600 dark:text-gray-400 border border-gray-500/20 bg-gray-500/10 backdrop-blur-sm px-2.5 py-1 rounded">Scheduled</span>;
    if (status === 'In Progress') return <span className="text-[11px] font-bold text-blue-700 dark:text-blue-400 border border-blue-500/20 bg-blue-500/10 backdrop-blur-sm px-2.5 py-1 rounded">In Progress</span>;
    return <span className="text-[11px] font-bold text-gray-600 dark:text-gray-400 border border-gray-500/20 bg-gray-500/10 backdrop-blur-sm px-2.5 py-1 rounded">{status}</span>;
};

export default function Dashboard() {
    // Generate an array of 20 realistic rows to match the screenshot density
    const tableData = Array(12).fill({
        name: 'Web App Servers',
        type: 'Greybox',
        status: 'Completed',
        progress: 100,
        vulns: { c: 5, h: 12, m: 23, l: 18 },
        time: '4d ago'
    });
    tableData[9] = { ...tableData[9], status: 'Scheduled', progress: 0 };
    tableData[10] = { ...tableData[10], status: 'Scheduled', progress: 0 };
    tableData[11] = { name: 'IoT Devices', type: 'Blackbox', status: 'Failed', progress: 10, vulns: { c: 2, h: 4, m: 8, l: 1 }, time: '3d ago' };

    return (
        <div className="min-h-screen bg-transparent flex font-sans text-[var(--text-primary)]">

            {/* Sidebar */}
            <aside className="w-[240px] flex-shrink-0 flex flex-col pt-6 pb-4 border-r border-slate-200 dark:border-[#262626]">
                <div className="px-6 flex items-center space-x-2 mb-10">
                    <div className="w-5 h-5 rounded-full bg-[#0cc8a8]"></div>
                    <span className="text-xl font-bold tracking-tight">aps</span>
                </div>

                <div className="px-3 flex-1 flex flex-col justify-between">
                    <div>
                        <SidebarItem icon={LayoutDashboard} label="Dashboard" path="/dashboard" active={true} />
                        <SidebarItem icon={FolderOpen} label="Projects" path="/projects" />
                        <SidebarItem icon={ScanSearch} label="Scans" path="/scans" />
                        <SidebarItem icon={Calendar} label="Schedule" path="/schedule" />
                    </div>

                    <div className="mt-8 pt-8 space-y-1">
                        <SidebarItem icon={Bell} label="Notifications" path="/notifications" />
                        <SidebarItem icon={Settings} label="Settings" path="/settings" />
                        <SidebarItem icon={HelpCircle} label="Support" path="/support" />
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0">

                {/* Top Header */}
                <header className="px-8 py-5 border-b border-slate-200 dark:border-[#262626] bg-white dark:bg-[#1A1A1A] flex justify-between items-center shadow-sm">
                    <div className="flex items-center text-sm font-medium">
                        <span className="text-slate-900 dark:text-white">Scan</span>
                        <span className="text-slate-400 mx-2">/</span>
                        <span className="text-slate-600 dark:text-slate-400">Private Assets</span>
                        <span className="text-slate-400 mx-2">/</span>
                        <span className="text-[#0cc8a8]">New Scan</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <button className="px-4 py-2 border border-[var(--border-color)] rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-[#222] transition">
                            Export Report
                        </button>
                        <button className="px-4 py-2 bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 rounded-lg text-sm font-medium hover:bg-red-100 dark:hover:bg-red-900/20 transition">
                            Stop Scan
                        </button>
                    </div>
                </header>

                <div className="p-8 pb-0">
                    {/* Meta Strip */}
                    <div className="flex items-center text-xs font-medium text-slate-600 dark:text-slate-400 mb-8 max-w-6xl">
                        <span className="mr-8">Org: <span className="text-slate-900 dark:text-white">Project X</span></span>
                        <span className="mr-12">Owner: <span className="text-slate-900 dark:text-white">Nammagiri</span></span>

                        <div className="flex gap-12 flex-1">
                            <span>Total Scans: <span className="text-slate-900 dark:text-white">100</span></span>
                            <span>Scheduled: <span className="text-slate-900 dark:text-white">1000</span></span>
                            <span>Rescans: <span className="text-slate-900 dark:text-white">100</span></span>
                            <span>Failed Scans: <span className="text-slate-900 dark:text-white">100</span></span>
                        </div>

                        <div className="flex items-center text-[#0cc8a8]">
                            <Clock size={14} className="mr-1.5" />
                            <span>10 Mins ago</span>
                        </div>
                    </div>

                    {/* Severity Summary Cards */}
                    <div className="flex border border-slate-200 dark:border-[#262626] bg-white dark:bg-[#1A1A1A] shadow-sm rounded-xl mb-8 overflow-hidden">
                        <SeverityCard
                            title="Critical Severity" count="86"
                            changeText="+2% increase than yesterday" changeType="increase"
                            iconBg="bg-red-50 dark:bg-red-900/10" iconColor="text-red-500" icon={() => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></svg>}
                        />
                        <SeverityCard
                            title="High Severity" count="16"
                            changeText="+0.9% increase than yesterday" changeType="increase"
                            iconBg="bg-orange-50 dark:bg-orange-900/10" iconColor="text-orange-500" icon={() => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>}
                        />
                        <SeverityCard
                            title="Medium Severity" count="26"
                            changeText="-0.9% decrease than yesterday" changeType="decrease"
                            iconBg="bg-yellow-50 dark:bg-yellow-900/10" iconColor="text-yellow-500" icon={() => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>}
                        />
                        <SeverityCard
                            title="Low Severity" count="16"
                            changeText="+0.9% increase than yesterday" changeType="increase"
                            iconBg="bg-blue-50 dark:bg-blue-900/10" iconColor="text-blue-500" icon={() => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>}
                        />
                    </div>
                </div>

                {/* Table Section */}
                <div className="flex-1 bg-transparent border-t border-slate-200 dark:border-[#262626] px-8 py-6">
                    <div className="bg-white dark:bg-[#1A1A1A] border border-slate-200 dark:border-[#262626] rounded-xl overflow-hidden h-full flex flex-col shadow-sm">

                        {/* Table Toolbar */}
                        <div className="p-4 border-b border-[var(--border-color)] flex justify-between items-center gap-4">
                            <div className="relative flex-1 max-w-md">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                <input
                                    type="text"
                                    placeholder="Search scans by name or type..."
                                    className="w-full pl-9 pr-4 py-2 text-sm bg-transparent border border-[var(--border-color)] rounded-lg focus:outline-none focus:border-[#0cc8a8]"
                                />
                            </div>
                            <div className="flex items-center space-x-3">
                                <button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 border border-[var(--border-color)] rounded-lg hover:bg-gray-50 dark:hover:bg-[#2A2A2A]">
                                    <Filter size={16} />
                                    <span>Filter</span>
                                </button>
                                <button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 border border-[var(--border-color)] rounded-lg hover:bg-gray-50 dark:hover:bg-[#2A2A2A]">
                                    <Columns size={16} />
                                    <span>Column</span>
                                </button>
                                <button className="flex items-center space-x-2 px-4 py-2 bg-[#0cc8a8] hover:bg-[#0ba389] text-white text-sm font-medium rounded-lg">
                                    <Plus size={16} />
                                    <span>New scan</span>
                                </button>
                            </div>
                        </div>

                        {/* Table Header */}
                        <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-slate-200 dark:border-[#262626] bg-slate-50 dark:bg-transparent text-xs font-semibold text-slate-900 dark:text-slate-400 uppercase tracking-wider">
                            <div className="col-span-3">Scan Name</div>
                            <div className="col-span-2">Type</div>
                            <div className="col-span-2">Status</div>
                            <div className="col-span-2">Progress</div>
                            <div className="col-span-2">Vulnerability</div>
                            <div className="col-span-1 text-right">Last Scan</div>
                        </div>

                        {/* Table Body */}
                        <div className="flex-1 overflow-y-auto">
                            {mockData.scans.map((row, idx) => (
                                <Link to={`/scan/${row.id}`} key={idx} className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-slate-200 dark:border-[#262626] last:border-b-0 items-center hover:bg-[#0CC8A8]/10 transition group text-sm">
                                    <div className="col-span-3 font-medium text-slate-900 dark:text-white truncate pr-4 group-hover:text-[#0cc8a8]">
                                        {row.name}
                                    </div>
                                    <div className="col-span-2 text-slate-600 dark:text-slate-400">
                                        {row.type}
                                    </div>
                                    <div className="col-span-2">
                                        {getStatusBadge(row.status)}
                                    </div>
                                    <div className="col-span-2 flex items-center pr-8">
                                        <div className="w-full h-1.5 bg-slate-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full rounded-full ${row.status === 'Failed' ? 'bg-red-500' : 'bg-gradient-to-r from-teal-600 to-[#0cc8a8]'}`}
                                                style={{ width: `${row.progress}%` }}
                                            />
                                        </div>
                                        <span className="ml-3 text-xs font-medium text-slate-600 dark:text-slate-400 w-8">{row.progress}%</span>
                                    </div>
                                    <div className="col-span-2 flex items-center space-x-1">
                                        <div className="w-6 h-6 flex items-center justify-center bg-[#EF4444] text-white text-[10px] font-bold rounded">{row.vulnerabilities.critical}</div>
                                        <div className="w-6 h-6 flex items-center justify-center bg-[#F97316] text-white text-[10px] font-bold rounded">{row.vulnerabilities.high}</div>
                                        <div className="w-6 h-6 flex items-center justify-center bg-[#EAB308] text-white text-[10px] font-bold rounded">{row.vulnerabilities.medium}</div>
                                        <div className="w-6 h-6 flex items-center justify-center bg-[#22C55E] text-white text-[10px] font-bold rounded">{row.vulnerabilities.low}</div>
                                    </div>
                                    <div className="col-span-1 text-right text-slate-600 dark:text-slate-400 text-xs font-medium">
                                        4d ago
                                    </div>
                                </Link>
                            ))}
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
