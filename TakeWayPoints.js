/* 
==>Login Management 
    1) Register
        a) Register: =>Process:
            ->Schema =>:FullName, email, password,dob, gender,role(superAdmin,Admin,customer),isVerifiedEmail
            ->hash password
            ->save data with isVerifiedEmail(false)
            ->generate token
            ->link => frontend link
            ->send Mail with verification link
            b) Verify Email: =>Process:
            ->Send token from Postman
            ->get token
            ->verify token
            ->get _id from token
            ->make => isVerifiedEmail:true
    2) Login
        =>Process:
            ->email and password
            ->check if that email exist in our db (if email not found throw error)
            ->check if that email verify (if not, throw error)
            ->check if password match (if not throw error)
            -> generate token =>(Attached _id)
            ->send token to postman
    3) My Profile
        =>Process:
            1st Part
            ->Pass token from postman
            ->get token from postman
            ->Validate token (if token is not valid throw error)
            ->get _id from token
            ->pass _id to  another middleware
            2nd Part
            ->find details by using that _id
    4) My Profile Update
        =>Process:
            1st Step:
            ->Pass token from postman
            ->pass that token throw isAuthenticated
            ->get _id
            ->get data from body
            ->delete email password and phoneNumber from body data
            ->update profile
    5) Update Password
        =>Process:
            ->Pass token from postman
            ->pass that token throw isAuthenticated
            ->get _id
            ->get data from body (oldPassword, newPassword)
            ->check either oldPassword match with databasePassword(if not throw error)
            ->hash newPassword
            ->update to database
            ->send response
    6) Read all user
        =>Process:
            ->web-users/read =>get
    7) Read Specific user 
        =>Process:
            ->web-users/:id =>get
    8) Delete User
        =>Process:
            ->web-users/:id =>delete
    9) Update specific user
        =>Process:
            ->web-users/:id =>patch
    10) Forgot and Reset Password
    =>Forget password
        =>Process:
            ->pass email from postman
            ->get email
            ->check if that email exist in our database (if not throw error with status code 404)
            ->send email with link (frontend link with token)
            ->send response
    =>Reset password
        =>Process:
            ->pass token from postman
            ->pass password from postman
            ->pass through isAuthenticated
            ->get _id
            ->hash password
            ->update that _id
            ->send response
    11) Authorization
     =>include method of javascript
        let roles=["admin","supperAdmin"]
        console.log(roles.includes("admin"))=> true
        console.log(roles.includes("customer"))=> false
     =>learn middleware
        -> We can define middlewares in two different ways
            1.without function call
            2.with function call
        ->Eg.
        ->.get(middleware1,middleware2("admin"))
        -> how to define middleware1 and middleware2()

        let middleware1=async(req,res,next)=>{

        }
        let middleware2=(roles)=>{
            return(
                async(req,res,next)=>{

            })
        } 

    Authorization Process:
        ->pass token from postman
        ->pass through isAuthenticated
        ->get _id
        ->read details of that id
        ->get role of that details
        ->if the role is either admin or superadmin => call next() else throw error with status code 403
        ->Roles
            =>admin ->
            =>superadmin->
            =>customer  ->
    12) Status code
        a) Success: 2XX
            => When we pass data=>201
            ->Create:201
            ->Update:201
            =>Except: Create and Update =>200
            ->Read  :200
            ->delete:200
        b) Error  : 4XX
            ->Error (Bad Request): 400
            ->(Unauthorized):Token not valid, Credential does not match :401
            ->(Forbidden):Token is valid but not authorized :403
            ->(Request Timeout):408
            ->Conflict (duplicate) :409
            ->(Not Found):Api not found (Not Found) :404


        Extra:
            ->Informational responses (100 – 199)
            ->Successful responses (200 – 299)
            ->Redirection messages (300 – 399)
            ->Client error responses (400 – 499)
            ->Server error responses (500 – 599) 
*/
