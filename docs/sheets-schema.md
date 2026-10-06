# Proposed Sheets schema

## Assessments
`assessment_id | course_id | title | component | max_mark | weight | date`

## Learners
`learner_id | display_name | cohort | active`

## Results
`result_id | learner_id | assessment_id | raw_mark | percent | submitted_at`

## Boundaries
`boundary_set_id | grade | minimum_percent`

Weighting and grade calculations belong in a service/calculation layer rather than being duplicated in the browser UI.
