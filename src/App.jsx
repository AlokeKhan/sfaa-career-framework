import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Users, Wrench, HardHat, Zap, Shield } from 'lucide-react';
import SiteExecutionFramework from "./SiteExecutionFramework";

const CareerFramework = () => {
  const [expandedRole, setExpandedRole] = useState('engineering');
  const [expandedLevel, setExpandedLevel] = useState({});

  const toggleLevel = (role, level) => {
    const key = `${role}-${level}`;
    setExpandedLevel(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const roles = {
    engineering: {
      title: "Engineering & Technical",
      icon: Wrench,
      color: "bg-blue-100 text-blue-700",
      tracks: ["Electrical", "Mechanical", "Civil", "Instrumentation & Controls"],
      levels: [
        {
          level: 1,
          title: "Junior Engineer / Technician",
          summary: "Learning the fundamentals and executing assigned tasks under supervision",
          autonomy: "Works under direct supervision with clear instructions and frequent check-ins",
          technical: "Developing foundational skills in their discipline. Learning company standards, safety protocols, and basic technical procedures",
          impact: "Contributes to small parts of projects. Focuses on individual tasks and assignments",
          leadership: "Focuses on personal learning and growth. Asks questions and seeks guidance",
          examples: [
            "Assists senior engineers with site inspections",
            "Performs basic testing and measurements under supervision",
            "Documents work according to company procedures",
            "Learns and follows safety protocols consistently"
          ]
        },
        {
          level: 2,
          title: "Engineer / Technician",
          summary: "Independently handling standard tasks and contributing to project execution",
          autonomy: "Works independently on well-defined tasks. Knows when to ask for help",
          technical: "Proficient in core technical skills for their discipline. Can handle standard installations, testing, and troubleshooting independently",
          impact: "Successfully completes project components independently. Delivers quality work on time",
          leadership: "Takes ownership of assigned work. Helps train junior team members. Demonstrates company values",
          examples: [
            "Independently conducts medium voltage testing and commissioning",
            "Leads small crews for routine installations",
            "Identifies and resolves common technical issues",
            "Mentors Junior Engineers on technical procedures"
          ]
        },
        {
          level: 3,
          title: "Senior Engineer / Lead Technician",
          summary: "Leading technical work, solving complex problems, and guiding others",
          autonomy: "Self-directed on complex tasks. Defines approach for technical challenges",
          technical: "Expert in their technical domain. Handles complex, non-standard projects. Stays current with industry developments and new technologies",
          impact: "Leads major project components or entire smaller projects. Work directly impacts project success and client satisfaction",
          leadership: "Mentors and develops team members. Makes technical decisions. Represents the company professionally with clients. Champions company values",
          examples: [
            "Designs solutions for complex electrical network upgrades",
            "Leads commissioning of critical systems",
            "Troubleshoots difficult technical problems others can't solve",
            "Trains and develops multiple junior engineers",
            "Interfaces directly with clients on technical matters"
          ]
        },
        {
          level: 4,
          title: "Principal Engineer / Technical Specialist",
          summary: "Setting technical direction, developing others, and driving excellence",
          autonomy: "Operates with full autonomy. Defines technical approaches and standards for projects",
          technical: "Deep expertise across multiple areas. Known internally and externally as a subject matter expert. Drives innovation and adoption of new technologies",
          impact: "Influences multiple projects and teams. Decisions affect company-wide technical direction. Builds client relationships that bring repeat business",
          leadership: "Develops engineering talent across the company. Sets technical standards. Represents SFAA at industry level. Embodies and teaches company values organization-wide",
          examples: [
            "Establishes technical standards and best practices company-wide",
            "Solves critical problems across multiple projects",
            "Develops new service offerings leveraging emerging technology",
            "Builds relationships with major clients (SEC, Petro Rabigh, etc.)",
            "Mentors Senior Engineers toward technical leadership"
          ]
        }
      ]
    },
    projectManagement: {
      title: "Project Management",
      icon: HardHat,
      color: "bg-orange-100 text-orange-700",
      tracks: ["Project Coordinators", "Project Managers", "Program Managers"],
      levels: [
        {
          level: 1,
          title: "Project Coordinator",
          summary: "Supporting project execution and learning project management fundamentals",
          autonomy: "Supports projects under guidance of Project Manager",
          technical: "Learning project management processes, documentation, and coordination. Understanding technical basics across disciplines",
          impact: "Ensures smooth project operations through effective coordination and administration",
          leadership: "Coordinates between teams. Maintains project documentation. Demonstrates reliability",
          examples: [
            "Tracks project schedules and updates status reports",
            "Coordinates material deliveries and site logistics",
            "Maintains project documentation and records",
            "Assists with client communications and reporting"
          ]
        },
        {
          level: 2,
          title: "Project Manager",
          summary: "Independently managing projects from initiation through closeout",
          autonomy: "Manages assigned projects independently with periodic oversight",
          technical: "Strong understanding of technical requirements across disciplines. Can coordinate multi-discipline work effectively",
          impact: "Delivers projects on time, on budget, meeting quality standards. Builds strong client relationships",
          leadership: "Leads project teams. Makes project decisions. Resolves conflicts. Develops project coordinators. Lives company values in client interactions",
          examples: [
            "Manages medium-sized projects (SAR 500K-3M) end-to-end",
            "Coordinates electrical, mechanical, and civil teams effectively",
            "Manages client expectations and communications",
            "Identifies and mitigates project risks proactively",
            "Ensures compliance with safety and quality standards"
          ]
        },
        {
          level: 3,
          title: "Senior Project Manager",
          summary: "Managing complex, high-value projects and mentoring other PMs",
          autonomy: "Full authority over assigned projects. Defines project approach and strategy",
          technical: "Deep understanding of complex technical challenges. Can evaluate engineering solutions and make informed decisions",
          impact: "Delivers large, complex projects successfully. Wins repeat business from major clients. Contributes to business development",
          leadership: "Develops other project managers. Builds strategic client relationships. Represents SFAA at executive level. Sets standards for project management excellence",
          examples: [
            "Manages large projects (SAR 3M+) or multiple concurrent projects",
            "Leads negotiations with major clients (SEC, SWCC, Marafiq)",
            "Mentors Project Managers and Coordinators",
            "Improves project management processes company-wide",
            "Contributes to strategic planning and business development"
          ]
        }
      ]
    },
    operations: {
      title: "Operations & Administration",
      icon: Users,
      color: "bg-green-100 text-green-700",
      tracks: ["Admin Staff", "Operations", "HR", "Finance"],
      levels: [
        {
          level: 1,
          title: "Coordinator / Administrator",
          summary: "Supporting operations through reliable execution of administrative duties",
          autonomy: "Executes defined processes with guidance",
          technical: "Learning company systems, processes, and administrative tools",
          impact: "Ensures smooth daily operations in their functional area",
          leadership: "Demonstrates reliability and attention to detail. Learns from feedback",
          examples: [
            "Processes documentation accurately and on time",
            "Maintains organized records and filing systems",
            "Responds to internal requests promptly",
            "Follows established procedures consistently"
          ]
        },
        {
          level: 2,
          title: "Specialist / Officer",
          summary: "Independently managing functional area responsibilities",
          autonomy: "Works independently on routine matters. Escalates exceptions appropriately",
          technical: "Proficient in functional area (HR, Finance, Operations, etc.). Handles standard situations confidently",
          impact: "Delivers reliable results in their functional area. Enables teams to work effectively",
          leadership: "Suggests process improvements. Helps train new team members. Models company values",
          examples: [
            "Manages vendor relationships independently",
            "Processes payroll or accounts with minimal errors",
            "Handles recruitment for standard positions",
            "Resolves routine operational issues"
          ]
        },
        {
          level: 3,
          title: "Senior Specialist / Manager",
          summary: "Leading functional area and driving continuous improvement",
          autonomy: "Full ownership of functional area with strategic input",
          technical: "Expert in functional domain. Stays current with best practices and regulations",
          impact: "Functional area operates smoothly and adds value to business. Makes strategic contributions",
          leadership: "Develops team members. Improves processes organization-wide. Partners with leadership on strategic initiatives. Champions company culture",
          examples: [
            "Redesigns processes to improve efficiency",
            "Manages complex vendor negotiations",
            "Develops and implements new HR policies",
            "Partners with leadership on strategic planning",
            "Builds capabilities of functional team members"
          ]
        }
      ]
    },
    safety: {
      title: "Safety & Quality",
      icon: Shield,
      color: "bg-red-100 text-red-700",
      tracks: ["Safety Officers", "Quality Inspectors"],
      levels: [
        {
          level: 1,
          title: "Safety Officer / Quality Inspector",
          summary: "Ensuring compliance with safety and quality standards on projects",
          autonomy: "Conducts inspections and audits following established protocols",
          technical: "Learning safety regulations, quality standards, and inspection procedures. Building certification knowledge",
          impact: "Identifies safety hazards and quality issues before they become problems",
          leadership: "Enforces standards professionally. Documents findings clearly",
          examples: [
            "Conducts daily site safety inspections",
            "Performs quality checks per project specifications",
            "Documents non-conformances and tracks corrections",
            "Ensures PPE compliance on site"
          ]
        },
        {
          level: 2,
          title: "Senior Safety Officer / Quality Manager",
          summary: "Leading safety and quality programs across multiple projects",
          autonomy: "Manages safety/quality programs independently",
          technical: "Expert in ISO standards, OSHA, civil defense requirements, and industry best practices. Holds advanced certifications",
          impact: "Maintains zero-injury record and high quality standards across projects. Ensures regulatory compliance",
          leadership: "Develops safety culture. Trains teams on safety and quality. Represents company in audits. Models 'Complete Honesty' in all reporting",
          examples: [
            "Manages ISO 9001/14001/45001 compliance programs",
            "Leads incident investigations and corrective actions",
            "Develops training programs for safety and quality",
            "Interfaces with regulatory authorities (Civil Defense, etc.)",
            "Drives continuous improvement in safety performance"
          ]
        }
      ]
    }
  };

  const LevelCard = ({ role, level, isExpanded, onToggle }) => {
    const Icon = isExpanded ? ChevronDown : ChevronRight;
    
    return (
      <div className="border border-gray-200 rounded-lg mb-3 overflow-hidden">
        <button
          onClick={onToggle}
          className="w-full px-4 py-3 bg-white hover:bg-gray-50 flex items-center justify-between transition-colors"
        >
          <div className="flex items-center gap-3">
            <Icon className="w-5 h-5 text-gray-400" />
            <div className="text-left">
              <div className="font-semibold text-gray-900">Level {level.level}: {level.title}</div>
              <div className="text-sm text-gray-600">{level.summary}</div>
            </div>
          </div>
        </button>
        
        {isExpanded && (
          <div className="px-4 py-4 bg-gray-50 border-t border-gray-200">
            <div className="space-y-4">
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase mb-1">Autonomy</div>
                <div className="text-sm text-gray-700">{level.autonomy}</div>
              </div>
              
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase mb-1">Technical Expertise</div>
                <div className="text-sm text-gray-700">{level.technical}</div>
              </div>
              
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase mb-1">Impact & Scope</div>
                <div className="text-sm text-gray-700">{level.impact}</div>
              </div>
              
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase mb-1">Leadership & Values</div>
                <div className="text-sm text-gray-700">{level.leadership}</div>
              </div>
              
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase mb-1">Examples</div>
                <ul className="text-sm text-gray-700 space-y-1">
                  {level.examples.map((example, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">SFAA Career Progression Framework</h1>
        <p className="text-gray-600 mb-4">
          Clear pathways for growth aligned with our values: No Egos • Extreme Ownership • Complete Honesty
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
          <h3 className="font-semibold text-blue-900 mb-2">Four Core Dimensions</h3>
          <div className="grid md:grid-cols-2 gap-3 text-sm text-blue-800">
            <div>
              <span className="font-semibold">Autonomy:</span> How independently you work
            </div>
            <div>
              <span className="font-semibold">Technical Expertise:</span> Your knowledge and skills
            </div>
            <div>
              <span className="font-semibold">Impact & Scope:</span> The breadth of your influence
            </div>
            <div>
              <span className="font-semibold">Leadership:</span> How you develop others and live our values
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {Object.entries(roles).map(([roleKey, roleData]) => {
          const RoleIcon = roleData.icon;
          const isExpanded = expandedRole === roleKey;
          
          return (
            <div key={roleKey} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                onClick={() => setExpandedRole(isExpanded ? null : roleKey)}
                className={`w-full px-6 py-4 flex items-center justify-between transition-colors ${
                  isExpanded ? 'bg-gray-50' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${roleData.color}`}>
                    <RoleIcon className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h2 className="text-xl font-bold text-gray-900">{roleData.title}</h2>
                    <p className="text-sm text-gray-600">
                      Includes: {roleData.tracks.join(', ')}
                    </p>
                  </div>
                </div>
                {isExpanded ? (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                ) : (
                  <ChevronRight className="w-6 h-6 text-gray-400" />
                )}
              </button>
              
              {isExpanded && (
                <div className="px-6 py-4 border-t border-gray-200">
                  {roleData.levels.map((level) => (
                    <LevelCard
                      key={`${roleKey}-${level.level}`}
                      role={roleKey}
                      level={level}
                      isExpanded={expandedLevel[`${roleKey}-${level.level}`]}
                      onToggle={() => toggleLevel(roleKey, level.level)}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-3">How to Use This Framework</h3>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex items-start gap-3">
            <div className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center font-semibold flex-shrink-0 mt-0.5">1</div>
            <div>
              <strong>For Performance Reviews:</strong> Managers should reference these descriptions when giving feedback. "You're demonstrating Level 2 autonomy but still building Level 2 technical expertise."
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center font-semibold flex-shrink-0 mt-0.5">2</div>
            <div>
              <strong>For Career Planning:</strong> Employees should identify their current level and what they need to demonstrate for the next level. Discuss growth plans with your manager.
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center font-semibold flex-shrink-0 mt-0.5">3</div>
            <div>
              <strong>For Promotions:</strong> To be promoted, you should consistently demonstrate all dimensions of the next level for at least 3-6 months.
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center font-semibold flex-shrink-0 mt-0.5">4</div>
            <div>
              <strong>Remember:</strong> Levels are cumulative. A Level 3 is expected to do everything from Level 2 plus the additional responsibilities at Level 3.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const App = () => {
  const [view, setView] = useState("career"); // "career" | "site"

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 pt-6">
        <div className="bg-white rounded-lg shadow-sm p-3 mb-6 flex gap-2">
          <button
            onClick={() => setView("career")}
            className={`px-4 py-2 rounded-md text-sm font-semibold border ${
              view === "career"
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
            }`}
          >
            Career Framework
          </button>

          <button
            onClick={() => setView("site")}
            className={`px-4 py-2 rounded-md text-sm font-semibold border ${
              view === "site"
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
            }`}
          >
            Site Execution
          </button>
        </div>
      </div>

      {view === "career" ? <CareerFramework /> : <SiteExecutionFramework />}
    </div>
  );
};

export default App;


