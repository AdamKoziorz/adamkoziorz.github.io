---
title: "Side Project: Drift"
description: "Learn more about my Drift side project!"
pubDate: "April 23, 2026"
---

### Overview

While developing my other side project, Mealer, I have gotten a lot of exposure to software engineering, especially with respect to REST APIs and React. However, across all of my co-ops and courses, I arguably have more experience with data, and I feel like there are many skills for me to further hone and learn in this field. Thus, my inspiration for Drift was born.

Drift is a reproducible pipeline that integrates longitudinal census, housing, and urban activity data to construct tract-level indicators of neighbourhood change, exposed through an interactive dashboard. Though initially inspired by the idea of tracking gentrification within Toronto, gentrification has no universal definition and is not observible in raw data. My hopes is that by modelling income change over time, analyzing variables like housing, education, and demographics, and examining how these vary across space, users can come to their own conclusions on what is happening across Toronto. It is my goal that this dashboard could be used to support policy creation, decision making, and research.

This project presents a wide variety of interesting challenges for me, including but not limited to multi-source data integration, spatial analysis, longitudinal analysis, schema design, and pipeline reproducibility. By far the most challenging problem, however, that I expect to tackle is tract boundary harmonization (reconciling geospatial data over time).


### Proposed System Design

* **Data Sources**: Census data (income, education, demographics), Toronto Open Data (permits and 311 requests), CMHC (rent and vacancy data)
* **Orchestration**: Prefect
* **Storage & Transformation**: DuckDB (storage), dbt (data transformations)
* **Spatial Processing**: GeoPandas
* **Analytics**: OLS regression, Geographically Weighted Regression (GWR)
* **API and Interface**: FastAPI (serves results), and MapLibre GL (to serve the dashboard)


### Inspiration

* [UNI-CEN](https://edumaps.esri.ca/census/): Dashboard for tracking Census data across Canada
* [Exploring Patterns of Gentrification in Toronto (2001 to 2016) Through GWR](https://rshare.library.torontomu.ca/articles/thesis/Exploring_Patterns_of_Gentrification_in_Toronto_2001_to_2016_Through_Geographically_Weighted_Regression/26866669?file=48866890): Thesis paper that demonstrates a methodological approach to analyze gentrification in Toronto