
//======== problem -2 ================


const PERMISSIONS={
    superadmin:['users','setting','logs'],
    member:['users','logs']
};

let initAccess=(role)=>{
    return (feature)=>{
    PERMISSIONS[role]?.includes(feature);
    }
}

function displayAccess(feature){
    let role=this.role
    let access=PERMISSIONS[this.role]?.includes(feature) || false;
    let message=access ?`${this.role} can access ${feature} `:`${this.role} cannot access ${feature}`
    console.log(message);
}


const saAccess = initAccess("superadmin");
console.log(saAccess("settings")); // true

const user = { role: "member" };
displayAccess.call(user, "users"); // Member can access users

const memberMessage = displayAccess.bind({ role: "member" });
memberMessage("settings");        // Member cannot access settings
