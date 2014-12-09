Ext.define('GeoCon.model.MyTask', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
        'TaskID',
        'Title', //標題
        'Desc', //工作描述
        'Type',//工作類別
        'TaskTypeName', //dis_工作類別
        'TaskSource',//來自
        'TaskSourceName', //dis_來自
        'Priority', //重要性
        'PriorityTypeName', //dis_重要性
        'Owner', //指派人
        'str_Owner', //dis_指派人
        'AssignTo', //負責人                                     
        'str_AssignTo', //dis_負責人
        'Assist', //協辦
        'str_Assist', //dis_協辦
        'CCTo', //副本知會
        'str_CCTo', //dis_副本知會                                    
        'ProcessTypeName', //dis_工作進度
        'Process', //工作進度
        'TaskStatustTypeName', //dis_工作狀態
        'TaskStatus', //工作狀態
        'StartDate', //起始日
        'DueDate', //到期日
        'str_StartDate', //dis_起始日
        'str_DueDate', //dis_到期日
        'TaskStatustTypeName_v2', //工作狀態+工作進度
        'OverTime', //是否逾期
        'IsClose', //是否結案
        'IsRead', //是否已閱讀過TASK or Commands
        'ModifyDate' //修改日
      ]
    }
});
