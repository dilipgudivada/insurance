 import dateFormater from "../dateFormater"
 function eventDataformat(allEventData) {
console.log("visit type is coming here ",allEventData )
    var x=[]
    allEventData.usr.map(item => {
    var year = item.evnt_dte.slice(0, 4)
    var month = item.evnt_dte.slice(5,7)
    var day = item.evnt_dte.slice(8,10)
    var stimeh = item.evnt_start_tms.slice(0,2)
    var stimem = item.evnt_start_tms.slice(3,5)
    var etimeh = item.evnt_end_tms.slice(0,2)
    var etimem = item.evnt_end_tms.slice(3,5)

    x.push({
        cal_id : item.cal_id,
        cal_yr: item.cal_yr,
        district_name: item.district_name,
        dstrct_cde: item.dstrct_cde,
        dstrct_id: item.dstrct_id,
        evnt_active_yn: item.evnt_active_yn,
        evnt_cde: item.evnt_cde,
        evnt_deactive_dte: item.evnt_deactive_dte,
        evnt_desc: item.evnt_desc,
        evnt_dte: item.evnt_dte,
        evnt_end_tms: item.evnt_end_tms,
        evnt_id: item.evnt_id,
        evnt_initial_cnt: item.evnt_initial_cnt,
        evnt_notes: item.evnt_notes,
        evnt_organizer_id: item.evnt_organizer_id,
        evnt_start_tms: item.evnt_start_tms,
        evnt_status_id: item.evnt_status_id,
        evnt_survey_scanned_yn: item.evnt_survey_scanned_yn,
        evnt_tot_attended_cnt:item.evnt_tot_attended_cnt,
        evnt_type_cde: item.evnt_type_cde,
        evnt_type_id: item.evnt_type_id,
        fmly_evnt_type_cde: item.fmly_evnt_type_cde,
        fmly_evnt_type_id: item.fmly_evnt_type_id,
        loc_cde: item.loc_cde,
        loc_id: item.loc_id,
        ptlt_type_cde: item.ptlt_type_cde,
        ptlt_type_id: item.ptlt_type_id,
        schl_cde: item.schl_cde,
        schl_grd_lvl_cde: item.schl_grd_lvl_cde,
        schl_grd_lvl_id: item.schl_grd_lvl_id,
        schl_id: item.schl_id,
        school_name: item.school_name,
        stdnt_id: item.stdnt_id,
        stdnt_last_name: item.stdnt_last_name,
        sys_crte_tsp:  item.sys_crte_tsp,
        sys_last_updte_tsp: item.sys_last_updte_tsp,
        sys_user: item.sys_user,
        trng_type_cde: item.trng_type_cde,
        trng_type_id: item.trng_type_id,
        user_email: item.user_email,
        user_first_name: item.user_first_name,
        user_last_name: item.user_last_name,
        title: item.evnt_desc,
        startDate: new Date(year, month-1, day,stimeh, stimem),
        endDate: new Date(year, month-1, day, etimeh,etimem),
        id: item.evnt_id,
        location: item.school_name,
        vst_type_cde: item.vst_type_cde,
        vst_type_desc:item.vst_type_desc,
        vst_type_id: item.vst_type_id,
        acc_cal_id:item.acc_cal_id
    })
})


return x;
}

function eventDataForApi(data,allrefs,userInfo){
    console.log("incoming Data in formator",data,allrefs,userInfo)
    var calYear = 
     allrefs.calendar.map(e=>{
        if(e.cal_active_yn==='Y')
        return e.cal_id
    })
    var startDate = ""
    var endDate = ""
       var endTime = ""
       var startTime =""
       var year=""
    if(data.startDate ){
        startDate = dateFormater(data.startDate);
        startTime = data.startDate.toLocaleTimeString('it-IT')
    }
     if(data.endDate){
        endDate = dateFormater(data.endDate);
        endTime = data.endDate.toLocaleTimeString('it-IT')
     }
     if(data.year){
        year = dateFormater(data.year).slice(0, 4); 
     }
  var x=  {
    "user_email":userInfo.user.user_email,
    "user_id":userInfo.user.user_id,
    "evnt_cde": data.evnt_cde || 1,
    "evnt_desc": data.title || data.evnt_desc || "",
    "evnt_organizer_id": userInfo.user.user_id,
    "evnt_initial_cnt": data.initialCount ||data.evnt_initial_cnt || 0,
    "evnt_tot_attended_cnt": data.totalAttended ||data.evnt_tot_attended_cnt || 0,
    "evnt_notes": data.notes || data.evnt_notes|| 1,
    "evnt_survey_scanned_yn": "N",
    "evnt_start_tms": startTime || data.evnt_start_tms||"12:30:00",
    "evnt_end_tms":endTime || data.evnt_end_tms|| "13:00:00",
    "evnt_dte": startDate || data.evnt_dte,
    "evnt_status_id": data.evnt_status_id||1,
    "evnt_type_id": data.eventTypeId || data.evnt_type_id || 1,
    "trng_type_id": data.trainingType || data.trng_type_id || 1,
    "schl_id": data.schoolId || data.schl_id || 1,
    "ptlt_type_id": data.PtltSessionType || data.ptlt_type_id || 1,
    "fmly_evnt_type_id": data.familyEventType || data.fmly_evnt_type_id || 1,
    "loc_id": data.loc_id || 1,
    "schl_grd_lvl_id": data.PtltGrade|| 1,
    "acc_cal_id": year || data.acc_cal_id,
    "cal_id": calYear[0],
    "stdnt_id": 1,
    "vst_type_id": data.VName || data.vst_type_id || 1,
    "evnt_active_yn": data.evnt_active_yn || data.evnt_active_yn  || 'Y',
    "sys_user": userInfo.user.user_email||"cosalox1@cosalo.com",
    "evnt_active_yn":data.evnt_active_yn 

    
    }
    console.log("outgoing Data in formator",x)
        return x;
}
function roleCheck(data){
 if(data===2
    ||data===3
    ||data===7
    ||data===1
    ||data===19
    ||data===4
    ||data===21
    ){
return 1
 }
 else if(data===6){
    return 2
 }
 else 
 return 3
}
export const eventUtils = {
    eventDataformat,
    eventDataForApi,
    roleCheck
}