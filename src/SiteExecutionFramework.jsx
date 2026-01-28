import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  HardHat,
  Wrench,
  Users,
  Shield,
  Package,
  Truck,
} from "lucide-react";

/**
 * SiteExecutionFramework
 * A site/labor-focused progression framework designed for foremen and crews.
 * Uses concrete, observable standards: "What it looks like on site", authority markers, and promotion checklists.
 */
const SiteExecutionFramework = () => {
  const [expandedRole, setExpandedRole] = useState("siteLabor");
  const [expandedLevel, setExpandedLevel] = useState({});

  const toggleLevel = (role, level) => {
    const key = `${role}-${level}`;
    setExpandedLevel((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const roles = {
    siteLabor: {
      title: "Site Labor & Technical Crew",
      icon: Wrench,
      color: "bg-blue-100 text-blue-700",
      tracks: ["Civil Crew", "Electrical Crew", "Mechanical Crew", "I&C Crew"],
      note:
        "This ladder is for on-site labor and technicians. It focuses on execution, quality, safety, and reliability under real site conditions.",
      levels: [
        {
          level: 1,
          title: "Helper / Laborer",
          summary: "Executes basic tasks safely with direct supervision",
          whatItLooksLike: [
            "Arrives prepared (PPE, tools as assigned), ready at start time",
            "Follows instructions exactly; asks when unclear",
            "Keeps work area clean; separates scrap and usable material",
            "Handles materials correctly (no damage, correct storage)",
            "Reports hazards immediately",
          ],
          authority: [
            "No independent work area ownership",
            "May not operate powered tools/equipment unless trained and assigned",
            "Can stop work for immediate safety hazard and notify supervisor",
          ],
          measurableOutcomes: [
            "Zero safety violations; consistent PPE compliance",
            "No repeated mistakes on the same basic task after coaching",
            "Maintains housekeeping standard in assigned area",
          ],
          promotionChecklist: [
            "Attendance and punctuality consistent for 60–90 days",
            "Demonstrates safe behavior without reminders",
            "Can complete common helper tasks correctly (basic prep, carrying, cleaning, assisting)",
            "Understands basic site rules, access control, and reporting lines",
          ],
          coachingFocus: [
            "Safety basics, tool discipline, following method statements",
            "Learning names of materials, fittings, and common components",
          ],
        },
        {
          level: 2,
          title: "Skilled Worker / Technician",
          summary: "Owns standard tasks end-to-end with minimal supervision",
          whatItLooksLike: [
            "Completes assigned work packs or task areas without constant follow-up",
            "Reads and applies relevant drawings/specs for their scope",
            "Finishes work to standard (no rework), protects completed work",
            "Maintains correct installation sequence and housekeeping",
            "Raises RFIs/clarifications early when drawings conflict reality",
          ],
          authority: [
            "Can be assigned a defined work area or work pack",
            "Can direct Helpers on safe support tasks",
            "Can request materials and verify quantities against task needs",
            "Can stop work for quality/safety and escalate appropriately",
          ],
          measurableOutcomes: [
            "Low rework rate on assigned tasks",
            "Consistent daily productivity vs plan (foreman target)",
            "No repeated NCRs for the same issue",
          ],
          promotionChecklist: [
            "Demonstrates task ownership (start-to-finish responsibility)",
            "Quality holds: passes inspections consistently",
            "Can explain the standard method for routine tasks",
            "Trains at least one Helper to become reliable on support work",
          ],
          coachingFocus: [
            "Quality checkpoints, drawings discipline, productivity habits",
            "Problem reporting: early escalation with facts",
          ],
        },
        {
          level: 3,
          title: "Lead Technician / Foreman",
          summary: "Leads a small crew and drives daily execution in a zone",
          whatItLooksLike: [
            "Runs a crew of 3–8 and delivers daily targets",
            "Plans the day: materials, access, tools, sequence, constraints",
            "Ensures quality at each step before closing up work",
            "Coordinates with adjacent trades to avoid clashes and rework",
            "Maintains discipline: breaks, housekeeping, tool control",
          ],
          authority: [
            "Assigns daily tasks within the crew",
            "Verifies materials and controls small stores at workface",
            "Escalates blockers with proposed solutions",
            "Can request inspection and ensure readiness before calling QA/QC",
          ],
          measurableOutcomes: [
            "Crew output meets plan for 3+ consecutive cycles",
            "Reduced rework and better first-pass inspection rate",
            "Good coordination: fewer site conflicts and stop-start time",
          ],
          promotionChecklist: [
            "Has successfully led a crew for 3+ months",
            "Delivers consistent daily progress reporting (facts, quantities, issues)",
            "Coaches underperformers and stabilizes crew performance",
            "Demonstrates company values under pressure (no blame, honest reporting)",
          ],
          coachingFocus: [
            "Short-interval planning, crew leadership, constraint removal",
            "Progress reporting that matches reality (no inflation)",
          ],
        },
        {
          level: 4,
          title: "Site Supervisor",
          summary: "Owns execution for a section of work and manages multiple crews",
          whatItLooksLike: [
            "Runs daily plan and weekly lookahead with measurable targets",
            "Coordinates permits, access, outages, inspections, and handovers",
            "Tracks productivity by crew and adjusts staffing/sequence",
            "Enforces safety and quality standards consistently across teams",
            "Keeps client/site management aligned: issues surfaced early with options",
          ],
          authority: [
            "Assigns crews across areas and sets daily priorities",
            "Approves workface changes within defined limits; escalates beyond limits",
            "Stops work for safety/quality and initiates corrective action",
            "Signs off on completed work packages readiness for inspection/handover",
          ],
          measurableOutcomes: [
            "Schedule adherence within assigned section",
            "Strong first-pass inspection rate; reduced NCR volume",
            "Stable safety performance and near-miss reporting culture",
          ],
          promotionChecklist: [
            "Has run multiple crews successfully for 6+ months",
            "Produces reliable daily progress, constraints list, and recovery actions",
            "Demonstrates control of materials and minimizes wastage",
            "Client-facing professionalism; resolves issues without escalation where possible",
          ],
          coachingFocus: [
            "Planning cadence (daily/weekly), reporting discipline, trade coordination",
            "Leading through standards: consistent enforcement, not mood-based",
          ],
        },
      ],
    },

    safetyQualityOnSite: {
      title: "Site Safety & Quality (Field-Facing)",
      icon: Shield,
      color: "bg-red-100 text-red-700",
      tracks: ["Safety", "QA/QC", "Permit & Compliance"],
      note:
        "This ladder is for field safety and QC roles focused on workface controls, inspections, and compliance readiness.",
      levels: [
        {
          level: 1,
          title: "Field Safety / QC Inspector",
          summary: "Executes inspections, reports facts, drives corrective action follow-up",
          whatItLooksLike: [
            "Runs daily walkdowns with clear findings and photos where needed",
            "Verifies PPE, barricading, permits, and critical controls",
            "Checks workmanship against ITP/spec before closure",
            "Logs NCRs/observations with specific evidence and location",
          ],
          authority: [
            "Can stop unsafe work immediately",
            "Can reject work that fails defined acceptance criteria",
            "Escalates systemic issues (repeat defects, repeated violations)",
          ],
          measurableOutcomes: [
            "Findings are specific and actionable (not vague)",
            "Repeat issues reduce over time due to follow-up",
            "Audit readiness improves (documentation and site condition)",
          ],
          promotionChecklist: [
            "Demonstrates consistent, unbiased reporting",
            "Understands key standards/ITPs and can explain them to crews",
            "Follows up until closure (not just reporting)",
          ],
          coachingFocus: [
            "Evidence-based reporting, communication, consistency",
          ],
        },
        {
          level: 2,
          title: "Senior Field Safety / QC Lead",
          summary: "Leads safety/quality controls across multiple areas and coaches foremen",
          whatItLooksLike: [
            "Runs toolbox topics and targeted retraining after incidents/NCRs",
            "Leads investigations with root-cause focus and corrective actions",
            "Coordinates client inspections, audits, and closeout packages",
            "Builds a culture of honest reporting without fear",
          ],
          authority: [
            "Sets site safety/quality priorities and verification cadence",
            "Approves corrective action plans and verifies effectiveness",
            "Represents the company during audits and critical inspections",
          ],
          measurableOutcomes: [
            "Reduced incident rate and reduced repeat defects",
            "Improved first-pass inspection rate and fewer late rejections",
            "Consistent closeout documentation quality",
          ],
          promotionChecklist: [
            "Demonstrates cross-area impact for 6+ months",
            "Coaches foremen and leads measurable improvement",
            "Handles audits calmly with complete and accurate records",
          ],
          coachingFocus: [
            "Systems thinking, training programs, audit preparedness",
          ],
        },
      ],
    },

    logisticsMaterials: {
      title: "Site Logistics & Materials Control",
      icon: Package,
      color: "bg-green-100 text-green-700",
      tracks: ["Storekeeper", "Material Controller", "Site Logistics"],
      note:
        "This ladder is for the site material flow that directly affects productivity: receiving, storage, kitting, and workface delivery.",
      levels: [
        {
          level: 1,
          title: "Storekeeper / Site Logistics Assistant",
          summary: "Receives, stores, and issues materials accurately under supervision",
          whatItLooksLike: [
            "Receives deliveries and checks quantities against documents",
            "Labels, stores, and protects materials correctly (no damage, proper stacking)",
            "Issues material with traceability (who/where/when)",
            "Maintains housekeeping and safe storage layout",
          ],
          authority: [
            "Can refuse damaged deliveries pending supervisor review",
            "Can enforce issuance process (no informal material release)",
          ],
          measurableOutcomes: [
            "Low loss/damage rate",
            "Issuance records match reality",
            "Crews receive correct kits on time",
          ],
          promotionChecklist: [
            "Accurate receiving and issuing for 60–90 days",
            "No repeated stock discrepancies",
            "Understands critical items and protection requirements",
          ],
          coachingFocus: [
            "Traceability discipline, storage standards, kit preparation",
          ],
        },
        {
          level: 2,
          title: "Material Controller / Logistics Lead",
          summary: "Owns workface material availability and reduces downtime due to shortages",
          whatItLooksLike: [
            "Prepares kits by work pack and aligns deliveries to plan",
            "Flags shortages early and proposes substitutions/expedites",
            "Coordinates with procurement and foremen on priorities",
            "Maintains stock visibility and prevents hoarding",
          ],
          authority: [
            "Sets issuance priorities aligned to daily plan",
            "Escalates procurement actions with evidence and urgency",
            "Controls laydown areas and access to minimize losses",
          ],
          measurableOutcomes: [
            "Reduced crew waiting time due to materials",
            "Improved forecast accuracy for critical items",
            "Fewer emergency requests and last-minute shortages",
          ],
          promotionChecklist: [
            "Consistently supports multiple crews for 3+ months",
            "Demonstrates measurable reduction in material-related downtime",
            "Produces clear shortage reports and mitigation actions",
          ],
          coachingFocus: [
            "Planning integration, forecasting, constraints management",
          ],
        },
      ],
    },

    equipmentOperators: {
      title: "Equipment Operators (If Applicable)",
      icon: Truck,
      color: "bg-orange-100 text-orange-700",
      tracks: ["Forklift", "Boom Truck", "Excavator", "Crane Support"],
      note:
        "Include this only if you regularly run equipment on projects. This ladder emphasizes safety, competence, and reliability.",
      levels: [
        {
          level: 1,
          title: "Operator (Basic) / Certified",
          summary: "Operates assigned equipment safely within defined scope",
          whatItLooksLike: [
            "Performs pre-use inspections and logs defects immediately",
            "Operates within load limits and site rules",
            "Follows spotter instructions and maintains exclusion zones",
            "Avoids damage to assets, materials, and completed work",
          ],
          authority: [
            "Refuses unsafe lifts/moves",
            "Stops operation if conditions become unsafe",
          ],
          measurableOutcomes: [
            "Zero safety incidents and zero avoidable damages",
            "Consistent readiness (equipment checks completed)",
          ],
          promotionChecklist: [
            "Certified and competent on assigned equipment",
            "No safety violations; demonstrates disciplined operation",
            "Works smoothly with spotters and crews",
          ],
          coachingFocus: [
            "Lifting discipline, communication, hazard awareness",
          ],
        },
        {
          level: 2,
          title: "Senior Operator / Lead",
          summary: "Handles complex operations and coaches others on safe execution",
          whatItLooksLike: [
            "Executes complex moves/lifts with planning and control measures",
            "Coordinates with supervisors on sequencing and access",
            "Coaches junior operators and spotters",
            "Improves site flow by positioning and timing equipment use",
          ],
          authority: [
            "Advises on lift plans and access planning",
            "Sets operating standards for operator team",
          ],
          measurableOutcomes: [
            "Efficient operations with no incidents and minimal downtime",
            "Reduced congestion and improved material movement flow",
          ],
          promotionChecklist: [
            "Consistent complex operations without incidents",
            "Demonstrable coaching impact on team safety and efficiency",
          ],
          coachingFocus: [
            "Planning, coaching, coordination with project execution",
          ],
        },
      ],
    },
  };

  const LevelCard = ({ roleKey, levelObj, isExpanded, onToggle }) => {
    const Icon = isExpanded ? ChevronDown : ChevronRight;

    const Section = ({ title, items, type = "list" }) => {
      if (!items || items.length === 0) return null;
      return (
        <div>
          <div className="text-xs font-semibold text-gray-500 uppercase mb-2">
            {title}
          </div>
          {type === "list" ? (
            <ul className="text-sm text-gray-700 space-y-1">
              {items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-sm text-gray-700">{items}</div>
          )}
        </div>
      );
    };

    return (
      <div className="border border-gray-200 rounded-lg mb-3 overflow-hidden">
        <button
          onClick={onToggle}
          className="w-full px-4 py-3 bg-white hover:bg-gray-50 flex items-center justify-between transition-colors"
        >
          <div className="flex items-center gap-3">
            <Icon className="w-5 h-5 text-gray-400" />
            <div className="text-left">
              <div className="font-semibold text-gray-900">
                Level {levelObj.level}: {levelObj.title}
              </div>
              <div className="text-sm text-gray-600">{levelObj.summary}</div>
            </div>
          </div>
        </button>

        {isExpanded && (
          <div className="px-4 py-4 bg-gray-50 border-t border-gray-200">
            <div className="space-y-5">
              <Section
                title="What this looks like on site"
                items={levelObj.whatItLooksLike}
              />
              <Section
                title="Authority & trust markers"
                items={levelObj.authority}
              />
              <Section
                title="Measurable outcomes"
                items={levelObj.measurableOutcomes}
              />
              <Section
                title="Promotion checklist (yes/no)"
                items={levelObj.promotionChecklist}
              />
              <Section title="Coaching focus" items={levelObj.coachingFocus} />
              <div className="pt-2 text-xs text-gray-500">
                Values standard: No Egos (accept feedback), Extreme Ownership
                (solve and report), Complete Honesty (facts over optics).
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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          SFAA Site Execution Framework
        </h1>
        <p className="text-gray-600 mb-4">
          A field-focused progression and performance standard for crews,
          foremen, safety/quality, and site logistics.
        </p>

        <div className="bg-gray-50 border border-gray-200 p-4 rounded">
          <h3 className="font-semibold text-gray-900 mb-2">
            How this improves site performance
          </h3>
          <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
            <div>
              <span className="font-semibold">Clarity:</span> Everyone knows
              what “good” looks like today and what “next level” requires.
            </div>
            <div>
              <span className="font-semibold">Fairness:</span> Promotions are
              based on observed behaviors, not opinions.
            </div>
            <div>
              <span className="font-semibold">Control:</span> Foremen get a
              consistent coaching and enforcement standard.
            </div>
            <div>
              <span className="font-semibold">Results:</span> Less rework, fewer
              incidents, better daily productivity.
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {Object.entries(roles).map(([roleKey, roleData]) => {
          const RoleIcon = roleData.icon;
          const isExpanded = expandedRole === roleKey;

          return (
            <div
              key={roleKey}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setExpandedRole(isExpanded ? null : roleKey)}
                className={`w-full px-6 py-4 flex items-center justify-between transition-colors ${
                  isExpanded ? "bg-gray-50" : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${roleData.color}`}>
                    <RoleIcon className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h2 className="text-xl font-bold text-gray-900">
                      {roleData.title}
                    </h2>
                    <p className="text-sm text-gray-600">
                      Includes: {roleData.tracks.join(", ")}
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
                  {roleData.note && (
                    <div className="mb-4 text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded p-3">
                      {roleData.note}
                    </div>
                  )}

                  {roleData.levels.map((lvl) => (
                    <LevelCard
                      key={`${roleKey}-${lvl.level}`}
                      roleKey={roleKey}
                      levelObj={lvl}
                      isExpanded={!!expandedLevel[`${roleKey}-${lvl.level}`]}
                      onToggle={() => toggleLevel(roleKey, lvl.level)}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-3">
          Field rollout (recommended)
        </h3>
        <div className="space-y-2 text-sm text-gray-700">
          <div>
            1) Start with one discipline (Civil or Electrical), and apply it to
            one active site for 30 days.
          </div>
          <div>
            2) Foremen use the promotion checklist weekly to coach, not punish.
          </div>
          <div>
            3) Track: rework, first-pass inspections, incident/near-miss
            reporting, daily output vs plan.
          </div>
          <div>
            4) After 30 days, standardize wording and publish as the official
            site standard.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteExecutionFramework;
