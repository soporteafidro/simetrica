# Pre requisitos
#npm i -g cognito-backup
# cuenta origen
#sourceUserpoolId="us-east-2_85y9p90Pf"
#sourceProfile="defaultPROD"
#cognito-backup backup-users ${sourceUserpoolId} --profile ${sourceProfile} --file users.json

# Cuenta destino
targetUserpoolId="us-east-2_IjoMNScbX"
tempPassword="Abc1234@"
targetProfile="defaultnew"
cognito-backup restore-users ${targetUserpoolId} ${tempPassword} --profile ${targetProfile} --file users.json
echo "process finished"