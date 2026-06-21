Step 1:
Gotot manifest.yml

Step 2:
Line Number 9, Change it to BTP Service name of Post gre SQL

Step 3:
cf push

Step 4:Not Required
cf ssh my-n8n-platform -L 15707:postgres-7983406c-eef6-40b5-8b10-37989698d156.cqryblsdrbcs.us-east-1.rds.amazonaws.com:5707


Step 6:

cf ssh my-n8n-platform -L 15707:postgres-7983406c-eef6-40b5-8b10-37989698d156.cqryblsdrbcs.us-east-1.rds.amazonaws.com:5707 -L 5678:127.0.0.1:5678

cf ssh my-n8n-platform -L 15707:postgres-7983406c-eef6-40b5-8b10-37989698d156.cqryblsdrbcs.us-east-1.rds.amazonaws.com:5707 -L 5678:0.0.0.0:5678

 Stop-Process -Id (Get-NetTCPConnection -LocalPort 15707).OwningProcess -Force

C:\Users\kalpa\OneDrive\Documents\Projects\n8n-cf-deploy> cf ssh my-n8n-platform -L 15707:postgres-7983406c-eef6-40b5-8b10-37989698d156.cqryblsdrbcs.us-east-1.rds.amazonaws.com:5707

cf ssh my-n8n-platform -L 15707:postgres-7983406c-eef6-40b5-8b10-37989698d156.cqryblsdrbcs.us-east-1.rds.amazonaws.com:5707 -L 5678:127.0.0.1:5678

Step 7:

http://127.0.0.1:5678


cf set-env my-n8n-platform N8N_PORT 5678

cf unset-env my-n8n-platform PORT

cf restart my-n8n-platform

cf ssh my-n8n-platform -L 15707:postgres-7983406c-eef6-40b5-8b10-37989698d156.cqryblsdrbcs.us-east-1.rds.amazonaws.com:5707 -L 5678:127.0.0.1:5678


localhost:5678

