// MASTER
python3 ddb.py --rn 'us-east-1' --tn 'CIE10-jhxhelztabh2bma5h32vldykva-master' --lf 'arn:aws:lambda:us-east-1:704766592508:function:DdbToEsFn-jhxhelztabh2bma5h32vldykva-master'  --esarn 'arn:aws:dynamodb:us-east-1:704766592508:table/CIE10-jhxhelztabh2bma5h32vldykva-master/stream/2021-01-20T12:37:13.089'
                                                                                                                                                                                           
// QA
python3 ddb.py --rn 'us-east-1' --tn 'CIE10-zlcewkila5aqvnaajbp33e4ssu-qa' --lf 'arn:aws:lambda:us-east-1:704766592508:function:DdbToEsFn-zlcewkila5aqvnaajbp33e4ssu-qa'  --esarn 'arn:aws:dynamodb:us-east-1:704766592508:table/CIE10-zlcewkila5aqvnaajbp33e4ssu-qa/stream/2020-11-17T12:56:06.831'

// DEVELOP
python3 ddb.py --rn 'us-east-1' --tn 'CIE10-ogeleoqhmbbgzjscbwoeu4mwfa-dev' --lf 'arn:aws:lambda:us-east-1:704766592508:function:DdbToEsFn-ogeleoqhmbbgzjscbwoeu4mwfa-dev'  --esarn 'arn:aws:dynamodb:us-east-1:704766592508:table/CIE10-ogeleoqhmbbgzjscbwoeu4mwfa-dev/stream/2020-11-17T18:57:10.113'
