export interface SkillCategory {
  label: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: "LANGUAGES",
    items: ["Python", "SQL", "MATLAB", "VBA", "DAX"],
  },
  {
    label: "ML / STATISTICS",
    items: [
      "NumPy",
      "pandas",
      "scikit-learn",
      "statsmodels",
      "XGBoost",
      "LightGBM",
      "CatBoost",
      "SHAP",
      "HMM",
      "GARCH",
    ],
  },
  {
    label: "DATA / CLOUD",
    items: [
      "AWS",
      "Databricks",
      "BigQuery",
      "Snowflake",
      "PySpark",
      "Power BI",
      "PostgreSQL",
    ],
  },
  {
    label: "ENGINEERING",
    items: ["Git", "GitHub Actions", "Docker", "FastAPI", "Flask", "Streamlit", "Airflow"],
  },
  {
    label: "AI / AUTOMATION",
    items: ["LangChain", "n8n", "AI Agents"],
  },
];
