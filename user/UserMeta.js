module.exports = {

    // Platform permissions.
    
    //VIEW_DETAILED_ACCOUNTS: 1<<5,
    //DELETE_ACCOUNTS: 1<<6,

    //VIEW_REPORTS: 1<<10,
    //ACTION_WITHOUT_REPORT: 1<<11,

    //DISABLE_ACCOUNTS: 1<<15,
    //WARN_ACCOUNTS: 1<<16,
    //MODIFY_ACCOUNTS: 1<<17,

    //VIEW_PENDING_MODS: 1<<20,
    //HANDLE_PENDING_MODS: 1<<21,

    //MODIFY_MODS: 1<<25,
    //UNAPPROVE_MODS: 1<<26,

    default: function () {
        return 0;
    }
}
