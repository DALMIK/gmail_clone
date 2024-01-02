import { Photo, StarOutlineOutlined, WatchLaterOutlined, SendOutlined, InsertDriveFile, DeleteOutlined, MailOutlined } from '@mui/icons-material'


export const SIDEBAR_DATA = [
    {
        name : 'inbox',
        title : "Inbox",
        icon : Photo
    },
    {
        name : 'starred',
        title : "Starred",
        icon : StarOutlineOutlined
    },
    {
        name : 'snoozed',
        title : "Snoozed",
        icon : WatchLaterOutlined
    },
    {
        name : 'sent',
        title : "Sent",
        icon : SendOutlined
    },
    {
        name : 'InsertDriveFile',
        title : "Draft",
        icon : InsertDriveFile
    },
    {
        name : 'bin',
        title : "Trash",
        icon : DeleteOutlined
    },
    {
        name : 'allMail',
        title : "All mails",
        icon : MailOutlined
    }
];