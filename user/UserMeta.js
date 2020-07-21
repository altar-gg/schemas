module.exports = {
    // Account based booleans.
    EMAIL_VERIFIED: 1<<0,
    DISABLED: 1<<1,

    // Platform permissions.
    VIEW_DETAILED_ACCOUNTS: 1<<10,
    DELETE_ACCOUNTS: 1<<12,

    REPORT_ACCOUNTS: 1<<14,
    REPORT_MODS: 1<<15,

    VIEW_REPORTS: 1<<16,
    ACTION_WITHOUT_REPORT: 1<<17,

    DISABLE_ACCOUNTS: 1<<18,
    WARN_ACCOUNTS: 1<<19,
    MODIFY_ACCOUNTS: 1<<20,

    VIEW_PENDING_MODS: 1<<25,
    HANDLE_PENDING_MODS: 1<<26,

    MODIFY_MODS: 1<<27,
    UNAPPROVE_MODS: 1<<28,
    


}
