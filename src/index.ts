export class PredicateError {
    _ = 'error' as const
    code: number
    text: string
    constructor(options: {
        code: number
        text: string
    }) {
        this.code = options.code;
        this.text = options.text;
    }
}

export class PredicateInputPeerEmpty {
    _ = 'inputPeerEmpty' as const
}

export class PredicateInputPeerSelf {
    _ = 'inputPeerSelf' as const
}

export class PredicateInputPeerChat {
    _ = 'inputPeerChat' as const
    chat_id: string
    constructor(options: {
        chat_id: string
    }) {
        this.chat_id = options.chat_id;
    }
}

export class PredicateInputUserEmpty {
    _ = 'inputUserEmpty' as const
}

export class PredicateInputUserSelf {
    _ = 'inputUserSelf' as const
}

export class PredicateInputPhoneContact {
    _ = 'inputPhoneContact' as const
    client_id: string
    phone: string
    first_name: string
    last_name: string
    constructor(options: {
        client_id: string
        phone: string
        first_name: string
        last_name: string
    }) {
        this.client_id = options.client_id;
        this.phone = options.phone;
        this.first_name = options.first_name;
        this.last_name = options.last_name;
    }
}

export class PredicateInputFile {
    _ = 'inputFile' as const
    id: string
    parts: number
    name: string
    md5_checksum: string
    constructor(options: {
        id: string
        parts: number
        name: string
        md5_checksum: string
    }) {
        this.id = options.id;
        this.parts = options.parts;
        this.name = options.name;
        this.md5_checksum = options.md5_checksum;
    }
}

export class PredicateInputMediaEmpty {
    _ = 'inputMediaEmpty' as const
}

export class PredicateInputMediaUploadedPhoto {
    _ = 'inputMediaUploadedPhoto' as const
    file: InputFile
    stickers?: InputDocument[]
    ttl_seconds?: number
    constructor(options: {
        file: InputFile
        stickers?: InputDocument[]
        ttl_seconds?: number
    }) {
        this.file = options.file;
        this.stickers = options.stickers;
        this.ttl_seconds = options.ttl_seconds;
    }
}

export class PredicateInputMediaPhoto {
    _ = 'inputMediaPhoto' as const
    id: InputPhoto
    ttl_seconds?: number
    constructor(options: {
        id: InputPhoto
        ttl_seconds?: number
    }) {
        this.id = options.id;
        this.ttl_seconds = options.ttl_seconds;
    }
}

export class PredicateInputMediaGeoPoint {
    _ = 'inputMediaGeoPoint' as const
    geo_point: InputGeoPoint
    constructor(options: {
        geo_point: InputGeoPoint
    }) {
        this.geo_point = options.geo_point;
    }
}

export class PredicateInputMediaContact {
    _ = 'inputMediaContact' as const
    phone_number: string
    first_name: string
    last_name: string
    vcard: string
    constructor(options: {
        phone_number: string
        first_name: string
        last_name: string
        vcard: string
    }) {
        this.phone_number = options.phone_number;
        this.first_name = options.first_name;
        this.last_name = options.last_name;
        this.vcard = options.vcard;
    }
}

export class PredicateInputChatPhotoEmpty {
    _ = 'inputChatPhotoEmpty' as const
}

export class PredicateInputChatUploadedPhoto {
    _ = 'inputChatUploadedPhoto' as const
    file?: InputFile
    video?: InputFile
    video_start_ts?: number
    constructor(options: {
        file?: InputFile
        video?: InputFile
        video_start_ts?: number
    } = {}) {
        this.file = options.file;
        this.video = options.video;
        this.video_start_ts = options.video_start_ts;
    }
}

export class PredicateInputChatPhoto {
    _ = 'inputChatPhoto' as const
    id: InputPhoto
    constructor(options: {
        id: InputPhoto
    }) {
        this.id = options.id;
    }
}

export class PredicateInputGeoPointEmpty {
    _ = 'inputGeoPointEmpty' as const
}

export class PredicateInputGeoPoint {
    _ = 'inputGeoPoint' as const
    lat: number
    long: number
    accuracy_radius?: number
    constructor(options: {
        lat: number
        long: number
        accuracy_radius?: number
    }) {
        this.lat = options.lat;
        this.long = options.long;
        this.accuracy_radius = options.accuracy_radius;
    }
}

export class PredicateInputPhotoEmpty {
    _ = 'inputPhotoEmpty' as const
}

export class PredicateInputPhoto {
    _ = 'inputPhoto' as const
    id: string
    access_hash: string
    file_reference: Uint8Array
    constructor(options: {
        id: string
        access_hash: string
        file_reference: Uint8Array
    }) {
        this.id = options.id;
        this.access_hash = options.access_hash;
        this.file_reference = options.file_reference;
    }
}

export class PredicateInputFileLocation {
    _ = 'inputFileLocation' as const
    volume_id: string
    local_id: number
    secret: string
    file_reference: Uint8Array
    constructor(options: {
        volume_id: string
        local_id: number
        secret: string
        file_reference: Uint8Array
    }) {
        this.volume_id = options.volume_id;
        this.local_id = options.local_id;
        this.secret = options.secret;
        this.file_reference = options.file_reference;
    }
}

export class PredicatePeerUser {
    _ = 'peerUser' as const
    user_id: string
    constructor(options: {
        user_id: string
    }) {
        this.user_id = options.user_id;
    }
}

export class PredicatePeerChat {
    _ = 'peerChat' as const
    chat_id: string
    constructor(options: {
        chat_id: string
    }) {
        this.chat_id = options.chat_id;
    }
}

export class PredicateStorageFileUnknown {
    _ = 'storage.fileUnknown' as const
}

export class PredicateStorageFilePartial {
    _ = 'storage.filePartial' as const
}

export class PredicateStorageFileJpeg {
    _ = 'storage.fileJpeg' as const
}

export class PredicateStorageFileGif {
    _ = 'storage.fileGif' as const
}

export class PredicateStorageFilePng {
    _ = 'storage.filePng' as const
}

export class PredicateStorageFilePdf {
    _ = 'storage.filePdf' as const
}

export class PredicateStorageFileMp3 {
    _ = 'storage.fileMp3' as const
}

export class PredicateStorageFileMov {
    _ = 'storage.fileMov' as const
}

export class PredicateStorageFileMp4 {
    _ = 'storage.fileMp4' as const
}

export class PredicateStorageFileWebp {
    _ = 'storage.fileWebp' as const
}

export class PredicateUserEmpty {
    _ = 'userEmpty' as const
    id: string
    constructor(options: {
        id: string
    }) {
        this.id = options.id;
    }
}

export class PredicateUserProfilePhotoEmpty {
    _ = 'userProfilePhotoEmpty' as const
}

export class PredicateUserProfilePhoto {
    _ = 'userProfilePhoto' as const
    has_video?: true
    photo_id: string
    stripped_thumb?: Uint8Array
    dc_id: number
    constructor(options: {
        has_video?: true
        photo_id: string
        stripped_thumb?: Uint8Array
        dc_id: number
    }) {
        this.has_video = options.has_video;
        this.photo_id = options.photo_id;
        this.stripped_thumb = options.stripped_thumb;
        this.dc_id = options.dc_id;
    }
}

export class PredicateUserStatusEmpty {
    _ = 'userStatusEmpty' as const
}

export class PredicateUserStatusOnline {
    _ = 'userStatusOnline' as const
    expires: number
    constructor(options: {
        expires: number
    }) {
        this.expires = options.expires;
    }
}

export class PredicateUserStatusOffline {
    _ = 'userStatusOffline' as const
    was_online: number
    constructor(options: {
        was_online: number
    }) {
        this.was_online = options.was_online;
    }
}

export class PredicateChatEmpty {
    _ = 'chatEmpty' as const
    id: string
    constructor(options: {
        id: string
    }) {
        this.id = options.id;
    }
}

export class PredicateChat {
    _ = 'chat' as const
    creator?: true
    left?: true
    deactivated?: true
    call_active?: true
    call_not_empty?: true
    noforwards?: true
    id: string
    title: string
    photo: ChatPhoto
    participants_count: number
    date: number
    version: number
    migrated_to?: InputChannel
    admin_rights?: ChatAdminRights
    default_banned_rights?: ChatBannedRights
    constructor(options: {
        creator?: true
        left?: true
        deactivated?: true
        call_active?: true
        call_not_empty?: true
        noforwards?: true
        id: string
        title: string
        photo: ChatPhoto
        participants_count: number
        date: number
        version: number
        migrated_to?: InputChannel
        admin_rights?: ChatAdminRights
        default_banned_rights?: ChatBannedRights
    }) {
        this.creator = options.creator;
        this.left = options.left;
        this.deactivated = options.deactivated;
        this.call_active = options.call_active;
        this.call_not_empty = options.call_not_empty;
        this.noforwards = options.noforwards;
        this.id = options.id;
        this.title = options.title;
        this.photo = options.photo;
        this.participants_count = options.participants_count;
        this.date = options.date;
        this.version = options.version;
        this.migrated_to = options.migrated_to;
        this.admin_rights = options.admin_rights;
        this.default_banned_rights = options.default_banned_rights;
    }
}

export class PredicateChatForbidden {
    _ = 'chatForbidden' as const
    id: string
    title: string
    constructor(options: {
        id: string
        title: string
    }) {
        this.id = options.id;
        this.title = options.title;
    }
}

export class PredicateChatFull {
    _ = 'chatFull' as const
    can_set_username?: true
    has_scheduled?: true
    id: string
    about: string
    participants: ChatParticipants
    chat_photo?: Photo
    notify_settings: PeerNotifySettings
    exported_invite?: ExportedChatInvite
    bot_info?: BotInfo[]
    pinned_msg_id?: number
    folder_id?: number
    call?: InputGroupCall
    ttl_period?: number
    groupcall_default_join_as?: Peer
    theme_emoticon?: string
    requests_pending?: number
    recent_requesters?: string[]
    available_reactions?: string[]
    constructor(options: {
        can_set_username?: true
        has_scheduled?: true
        id: string
        about: string
        participants: ChatParticipants
        chat_photo?: Photo
        notify_settings: PeerNotifySettings
        exported_invite?: ExportedChatInvite
        bot_info?: BotInfo[]
        pinned_msg_id?: number
        folder_id?: number
        call?: InputGroupCall
        ttl_period?: number
        groupcall_default_join_as?: Peer
        theme_emoticon?: string
        requests_pending?: number
        recent_requesters?: string[]
        available_reactions?: string[]
    }) {
        this.can_set_username = options.can_set_username;
        this.has_scheduled = options.has_scheduled;
        this.id = options.id;
        this.about = options.about;
        this.participants = options.participants;
        this.chat_photo = options.chat_photo;
        this.notify_settings = options.notify_settings;
        this.exported_invite = options.exported_invite;
        this.bot_info = options.bot_info;
        this.pinned_msg_id = options.pinned_msg_id;
        this.folder_id = options.folder_id;
        this.call = options.call;
        this.ttl_period = options.ttl_period;
        this.groupcall_default_join_as = options.groupcall_default_join_as;
        this.theme_emoticon = options.theme_emoticon;
        this.requests_pending = options.requests_pending;
        this.recent_requesters = options.recent_requesters;
        this.available_reactions = options.available_reactions;
    }
}

export class PredicateChatParticipant {
    _ = 'chatParticipant' as const
    user_id: string
    inviter_id: string
    date: number
    constructor(options: {
        user_id: string
        inviter_id: string
        date: number
    }) {
        this.user_id = options.user_id;
        this.inviter_id = options.inviter_id;
        this.date = options.date;
    }
}

export class PredicateChatParticipantsForbidden {
    _ = 'chatParticipantsForbidden' as const
    chat_id: string
    self_participant?: ChatParticipant
    constructor(options: {
        chat_id: string
        self_participant?: ChatParticipant
    }) {
        this.chat_id = options.chat_id;
        this.self_participant = options.self_participant;
    }
}

export class PredicateChatParticipants {
    _ = 'chatParticipants' as const
    chat_id: string
    participants: ChatParticipant[]
    version: number
    constructor(options: {
        chat_id: string
        participants: ChatParticipant[]
        version: number
    }) {
        this.chat_id = options.chat_id;
        this.participants = options.participants;
        this.version = options.version;
    }
}

export class PredicateChatPhotoEmpty {
    _ = 'chatPhotoEmpty' as const
}

export class PredicateChatPhoto {
    _ = 'chatPhoto' as const
    has_video?: true
    photo_id: string
    stripped_thumb?: Uint8Array
    dc_id: number
    constructor(options: {
        has_video?: true
        photo_id: string
        stripped_thumb?: Uint8Array
        dc_id: number
    }) {
        this.has_video = options.has_video;
        this.photo_id = options.photo_id;
        this.stripped_thumb = options.stripped_thumb;
        this.dc_id = options.dc_id;
    }
}

export class PredicateMessageEmpty {
    _ = 'messageEmpty' as const
    id: number
    peer_id?: Peer
    constructor(options: {
        id: number
        peer_id?: Peer
    }) {
        this.id = options.id;
        this.peer_id = options.peer_id;
    }
}

export class PredicateMessage {
    _ = 'message' as const
    out?: true
    mentioned?: true
    media_unread?: true
    silent?: true
    post?: true
    from_scheduled?: true
    legacy?: true
    edit_hide?: true
    pinned?: true
    noforwards?: true
    id: number
    from_id?: Peer
    peer_id: Peer
    fwd_from?: MessageFwdHeader
    via_bot_id?: string
    reply_to?: MessageReplyHeader
    date: number
    message: string
    media?: MessageMedia
    reply_markup?: ReplyMarkup
    entities?: MessageEntity[]
    views?: number
    forwards?: number
    replies?: MessageReplies
    edit_date?: number
    post_author?: string
    grouped_id?: string
    reactions?: MessageReactions
    restriction_reason?: RestrictionReason[]
    ttl_period?: number
    constructor(options: {
        out?: true
        mentioned?: true
        media_unread?: true
        silent?: true
        post?: true
        from_scheduled?: true
        legacy?: true
        edit_hide?: true
        pinned?: true
        noforwards?: true
        id: number
        from_id?: Peer
        peer_id: Peer
        fwd_from?: MessageFwdHeader
        via_bot_id?: string
        reply_to?: MessageReplyHeader
        date: number
        message: string
        media?: MessageMedia
        reply_markup?: ReplyMarkup
        entities?: MessageEntity[]
        views?: number
        forwards?: number
        replies?: MessageReplies
        edit_date?: number
        post_author?: string
        grouped_id?: string
        reactions?: MessageReactions
        restriction_reason?: RestrictionReason[]
        ttl_period?: number
    }) {
        this.out = options.out;
        this.mentioned = options.mentioned;
        this.media_unread = options.media_unread;
        this.silent = options.silent;
        this.post = options.post;
        this.from_scheduled = options.from_scheduled;
        this.legacy = options.legacy;
        this.edit_hide = options.edit_hide;
        this.pinned = options.pinned;
        this.noforwards = options.noforwards;
        this.id = options.id;
        this.from_id = options.from_id;
        this.peer_id = options.peer_id;
        this.fwd_from = options.fwd_from;
        this.via_bot_id = options.via_bot_id;
        this.reply_to = options.reply_to;
        this.date = options.date;
        this.message = options.message;
        this.media = options.media;
        this.reply_markup = options.reply_markup;
        this.entities = options.entities;
        this.views = options.views;
        this.forwards = options.forwards;
        this.replies = options.replies;
        this.edit_date = options.edit_date;
        this.post_author = options.post_author;
        this.grouped_id = options.grouped_id;
        this.reactions = options.reactions;
        this.restriction_reason = options.restriction_reason;
        this.ttl_period = options.ttl_period;
    }
}

export class PredicateMessageService {
    _ = 'messageService' as const
    out?: true
    mentioned?: true
    media_unread?: true
    silent?: true
    post?: true
    legacy?: true
    id: number
    from_id?: Peer
    peer_id: Peer
    reply_to?: MessageReplyHeader
    date: number
    action: MessageAction
    ttl_period?: number
    constructor(options: {
        out?: true
        mentioned?: true
        media_unread?: true
        silent?: true
        post?: true
        legacy?: true
        id: number
        from_id?: Peer
        peer_id: Peer
        reply_to?: MessageReplyHeader
        date: number
        action: MessageAction
        ttl_period?: number
    }) {
        this.out = options.out;
        this.mentioned = options.mentioned;
        this.media_unread = options.media_unread;
        this.silent = options.silent;
        this.post = options.post;
        this.legacy = options.legacy;
        this.id = options.id;
        this.from_id = options.from_id;
        this.peer_id = options.peer_id;
        this.reply_to = options.reply_to;
        this.date = options.date;
        this.action = options.action;
        this.ttl_period = options.ttl_period;
    }
}

export class PredicateMessageMediaEmpty {
    _ = 'messageMediaEmpty' as const
}

export class PredicateMessageMediaPhoto {
    _ = 'messageMediaPhoto' as const
    photo?: Photo
    ttl_seconds?: number
    constructor(options: {
        photo?: Photo
        ttl_seconds?: number
    } = {}) {
        this.photo = options.photo;
        this.ttl_seconds = options.ttl_seconds;
    }
}

export class PredicateMessageMediaGeo {
    _ = 'messageMediaGeo' as const
    geo: GeoPoint
    constructor(options: {
        geo: GeoPoint
    }) {
        this.geo = options.geo;
    }
}

export class PredicateMessageMediaContact {
    _ = 'messageMediaContact' as const
    phone_number: string
    first_name: string
    last_name: string
    vcard: string
    user_id: string
    constructor(options: {
        phone_number: string
        first_name: string
        last_name: string
        vcard: string
        user_id: string
    }) {
        this.phone_number = options.phone_number;
        this.first_name = options.first_name;
        this.last_name = options.last_name;
        this.vcard = options.vcard;
        this.user_id = options.user_id;
    }
}

export class PredicateMessageMediaUnsupported {
    _ = 'messageMediaUnsupported' as const
}

export class PredicateMessageActionEmpty {
    _ = 'messageActionEmpty' as const
}

export class PredicateMessageActionChatCreate {
    _ = 'messageActionChatCreate' as const
    title: string
    users: string[]
    constructor(options: {
        title: string
        users: string[]
    }) {
        this.title = options.title;
        this.users = options.users;
    }
}

export class PredicateMessageActionChatEditTitle {
    _ = 'messageActionChatEditTitle' as const
    title: string
    constructor(options: {
        title: string
    }) {
        this.title = options.title;
    }
}

export class PredicateMessageActionChatEditPhoto {
    _ = 'messageActionChatEditPhoto' as const
    photo: Photo
    constructor(options: {
        photo: Photo
    }) {
        this.photo = options.photo;
    }
}

export class PredicateMessageActionChatDeletePhoto {
    _ = 'messageActionChatDeletePhoto' as const
}

export class PredicateMessageActionChatAddUser {
    _ = 'messageActionChatAddUser' as const
    users: string[]
    constructor(options: {
        users: string[]
    }) {
        this.users = options.users;
    }
}

export class PredicateMessageActionChatDeleteUser {
    _ = 'messageActionChatDeleteUser' as const
    user_id: string
    constructor(options: {
        user_id: string
    }) {
        this.user_id = options.user_id;
    }
}

export class PredicateDialog {
    _ = 'dialog' as const
    pinned?: true
    unread_mark?: true
    peer: Peer
    top_message: number
    read_inbox_max_id: number
    read_outbox_max_id: number
    unread_count: number
    unread_mentions_count: number
    unread_reactions_count: number
    notify_settings: PeerNotifySettings
    pts?: number
    draft?: DraftMessage
    folder_id?: number
    constructor(options: {
        pinned?: true
        unread_mark?: true
        peer: Peer
        top_message: number
        read_inbox_max_id: number
        read_outbox_max_id: number
        unread_count: number
        unread_mentions_count: number
        unread_reactions_count: number
        notify_settings: PeerNotifySettings
        pts?: number
        draft?: DraftMessage
        folder_id?: number
    }) {
        this.pinned = options.pinned;
        this.unread_mark = options.unread_mark;
        this.peer = options.peer;
        this.top_message = options.top_message;
        this.read_inbox_max_id = options.read_inbox_max_id;
        this.read_outbox_max_id = options.read_outbox_max_id;
        this.unread_count = options.unread_count;
        this.unread_mentions_count = options.unread_mentions_count;
        this.unread_reactions_count = options.unread_reactions_count;
        this.notify_settings = options.notify_settings;
        this.pts = options.pts;
        this.draft = options.draft;
        this.folder_id = options.folder_id;
    }
}

export class PredicatePhotoEmpty {
    _ = 'photoEmpty' as const
    id: string
    constructor(options: {
        id: string
    }) {
        this.id = options.id;
    }
}

export class PredicatePhoto {
    _ = 'photo' as const
    has_stickers?: true
    id: string
    access_hash: string
    file_reference: Uint8Array
    date: number
    sizes: PhotoSize[]
    video_sizes?: VideoSize[]
    dc_id: number
    constructor(options: {
        has_stickers?: true
        id: string
        access_hash: string
        file_reference: Uint8Array
        date: number
        sizes: PhotoSize[]
        video_sizes?: VideoSize[]
        dc_id: number
    }) {
        this.has_stickers = options.has_stickers;
        this.id = options.id;
        this.access_hash = options.access_hash;
        this.file_reference = options.file_reference;
        this.date = options.date;
        this.sizes = options.sizes;
        this.video_sizes = options.video_sizes;
        this.dc_id = options.dc_id;
    }
}

export class PredicatePhotoSizeEmpty {
    _ = 'photoSizeEmpty' as const
    type: string
    constructor(options: {
        type: string
    }) {
        this.type = options.type;
    }
}

export class PredicatePhotoSize {
    _ = 'photoSize' as const
    type: string
    w: number
    h: number
    size: number
    constructor(options: {
        type: string
        w: number
        h: number
        size: number
    }) {
        this.type = options.type;
        this.w = options.w;
        this.h = options.h;
        this.size = options.size;
    }
}

export class PredicatePhotoCachedSize {
    _ = 'photoCachedSize' as const
    type: string
    w: number
    h: number
    bytes: Uint8Array
    constructor(options: {
        type: string
        w: number
        h: number
        bytes: Uint8Array
    }) {
        this.type = options.type;
        this.w = options.w;
        this.h = options.h;
        this.bytes = options.bytes;
    }
}

export class PredicateGeoPointEmpty {
    _ = 'geoPointEmpty' as const
}

export class PredicateGeoPoint {
    _ = 'geoPoint' as const
    long: number
    lat: number
    access_hash: string
    accuracy_radius?: number
    constructor(options: {
        long: number
        lat: number
        access_hash: string
        accuracy_radius?: number
    }) {
        this.long = options.long;
        this.lat = options.lat;
        this.access_hash = options.access_hash;
        this.accuracy_radius = options.accuracy_radius;
    }
}

export class PredicateAuthSentCode {
    _ = 'auth.sentCode' as const
    type: AuthSentCodeType
    phone_code_hash: string
    next_type?: AuthCodeType
    timeout?: number
    constructor(options: {
        type: AuthSentCodeType
        phone_code_hash: string
        next_type?: AuthCodeType
        timeout?: number
    }) {
        this.type = options.type;
        this.phone_code_hash = options.phone_code_hash;
        this.next_type = options.next_type;
        this.timeout = options.timeout;
    }
}

export class PredicateAuthAuthorization {
    _ = 'auth.authorization' as const
    setup_password_required?: true
    otherwise_relogin_days?: number
    tmp_sessions?: number
    user: User
    constructor(options: {
        setup_password_required?: true
        otherwise_relogin_days?: number
        tmp_sessions?: number
        user: User
    }) {
        this.setup_password_required = options.setup_password_required;
        this.otherwise_relogin_days = options.otherwise_relogin_days;
        this.tmp_sessions = options.tmp_sessions;
        this.user = options.user;
    }
}

export class PredicateAuthExportedAuthorization {
    _ = 'auth.exportedAuthorization' as const
    id: string
    bytes: Uint8Array
    constructor(options: {
        id: string
        bytes: Uint8Array
    }) {
        this.id = options.id;
        this.bytes = options.bytes;
    }
}

export class PredicateInputNotifyPeer {
    _ = 'inputNotifyPeer' as const
    peer: InputPeer
    constructor(options: {
        peer: InputPeer
    }) {
        this.peer = options.peer;
    }
}

export class PredicateInputNotifyUsers {
    _ = 'inputNotifyUsers' as const
}

export class PredicateInputNotifyChats {
    _ = 'inputNotifyChats' as const
}

export class PredicateInputPeerNotifySettings {
    _ = 'inputPeerNotifySettings' as const
    show_previews?: boolean
    silent?: boolean
    mute_until?: number
    sound?: string
    constructor(options: {
        show_previews?: boolean
        silent?: boolean
        mute_until?: number
        sound?: string
    } = {}) {
        this.show_previews = options.show_previews;
        this.silent = options.silent;
        this.mute_until = options.mute_until;
        this.sound = options.sound;
    }
}

export class PredicatePeerNotifySettings {
    _ = 'peerNotifySettings' as const
    show_previews?: boolean
    silent?: boolean
    mute_until?: number
    sound?: string
    constructor(options: {
        show_previews?: boolean
        silent?: boolean
        mute_until?: number
        sound?: string
    } = {}) {
        this.show_previews = options.show_previews;
        this.silent = options.silent;
        this.mute_until = options.mute_until;
        this.sound = options.sound;
    }
}

export class PredicatePeerSettings {
    _ = 'peerSettings' as const
    report_spam?: true
    add_contact?: true
    block_contact?: true
    share_contact?: true
    need_contacts_exception?: true
    report_geo?: true
    autoarchived?: true
    invite_members?: true
    request_chat_broadcast?: true
    geo_distance?: number
    request_chat_title?: string
    request_chat_date?: number
    constructor(options: {
        report_spam?: true
        add_contact?: true
        block_contact?: true
        share_contact?: true
        need_contacts_exception?: true
        report_geo?: true
        autoarchived?: true
        invite_members?: true
        request_chat_broadcast?: true
        geo_distance?: number
        request_chat_title?: string
        request_chat_date?: number
    } = {}) {
        this.report_spam = options.report_spam;
        this.add_contact = options.add_contact;
        this.block_contact = options.block_contact;
        this.share_contact = options.share_contact;
        this.need_contacts_exception = options.need_contacts_exception;
        this.report_geo = options.report_geo;
        this.autoarchived = options.autoarchived;
        this.invite_members = options.invite_members;
        this.request_chat_broadcast = options.request_chat_broadcast;
        this.geo_distance = options.geo_distance;
        this.request_chat_title = options.request_chat_title;
        this.request_chat_date = options.request_chat_date;
    }
}

export class PredicateWallPaper {
    _ = 'wallPaper' as const
    id: string
    creator?: true
    default?: true
    pattern?: true
    dark?: true
    access_hash: string
    slug: string
    document: Document
    settings?: WallPaperSettings
    constructor(options: {
        id: string
        creator?: true
        default?: true
        pattern?: true
        dark?: true
        access_hash: string
        slug: string
        document: Document
        settings?: WallPaperSettings
    }) {
        this.id = options.id;
        this.creator = options.creator;
        this.default = options.default;
        this.pattern = options.pattern;
        this.dark = options.dark;
        this.access_hash = options.access_hash;
        this.slug = options.slug;
        this.document = options.document;
        this.settings = options.settings;
    }
}

export class PredicateInputReportReasonSpam {
    _ = 'inputReportReasonSpam' as const
}

export class PredicateInputReportReasonViolence {
    _ = 'inputReportReasonViolence' as const
}

export class PredicateInputReportReasonPornography {
    _ = 'inputReportReasonPornography' as const
}

export class PredicateInputReportReasonChildAbuse {
    _ = 'inputReportReasonChildAbuse' as const
}

export class PredicateInputReportReasonOther {
    _ = 'inputReportReasonOther' as const
}

export class PredicateUserFull {
    _ = 'userFull' as const
    blocked?: true
    phone_calls_available?: true
    phone_calls_private?: true
    can_pin_message?: true
    has_scheduled?: true
    video_calls_available?: true
    id: string
    about?: string
    settings: PeerSettings
    profile_photo?: Photo
    notify_settings: PeerNotifySettings
    bot_info?: BotInfo
    pinned_msg_id?: number
    common_chats_count: number
    folder_id?: number
    ttl_period?: number
    theme_emoticon?: string
    private_forward_name?: string
    constructor(options: {
        blocked?: true
        phone_calls_available?: true
        phone_calls_private?: true
        can_pin_message?: true
        has_scheduled?: true
        video_calls_available?: true
        id: string
        about?: string
        settings: PeerSettings
        profile_photo?: Photo
        notify_settings: PeerNotifySettings
        bot_info?: BotInfo
        pinned_msg_id?: number
        common_chats_count: number
        folder_id?: number
        ttl_period?: number
        theme_emoticon?: string
        private_forward_name?: string
    }) {
        this.blocked = options.blocked;
        this.phone_calls_available = options.phone_calls_available;
        this.phone_calls_private = options.phone_calls_private;
        this.can_pin_message = options.can_pin_message;
        this.has_scheduled = options.has_scheduled;
        this.video_calls_available = options.video_calls_available;
        this.id = options.id;
        this.about = options.about;
        this.settings = options.settings;
        this.profile_photo = options.profile_photo;
        this.notify_settings = options.notify_settings;
        this.bot_info = options.bot_info;
        this.pinned_msg_id = options.pinned_msg_id;
        this.common_chats_count = options.common_chats_count;
        this.folder_id = options.folder_id;
        this.ttl_period = options.ttl_period;
        this.theme_emoticon = options.theme_emoticon;
        this.private_forward_name = options.private_forward_name;
    }
}

export class PredicateContact {
    _ = 'contact' as const
    user_id: string
    mutual: boolean
    constructor(options: {
        user_id: string
        mutual: boolean
    }) {
        this.user_id = options.user_id;
        this.mutual = options.mutual;
    }
}

export class PredicateImportedContact {
    _ = 'importedContact' as const
    user_id: string
    client_id: string
    constructor(options: {
        user_id: string
        client_id: string
    }) {
        this.user_id = options.user_id;
        this.client_id = options.client_id;
    }
}

export class PredicateContactStatus {
    _ = 'contactStatus' as const
    user_id: string
    status: UserStatus
    constructor(options: {
        user_id: string
        status: UserStatus
    }) {
        this.user_id = options.user_id;
        this.status = options.status;
    }
}

export class PredicateContactsContactsNotModified {
    _ = 'contacts.contactsNotModified' as const
}

export class PredicateContactsContacts {
    _ = 'contacts.contacts' as const
    contacts: Contact[]
    saved_count: number
    users: User[]
    constructor(options: {
        contacts: Contact[]
        saved_count: number
        users: User[]
    }) {
        this.contacts = options.contacts;
        this.saved_count = options.saved_count;
        this.users = options.users;
    }
}

export class PredicateContactsImportedContacts {
    _ = 'contacts.importedContacts' as const
    imported: ImportedContact[]
    popular_invites: PopularContact[]
    retry_contacts: string[]
    users: User[]
    constructor(options: {
        imported: ImportedContact[]
        popular_invites: PopularContact[]
        retry_contacts: string[]
        users: User[]
    }) {
        this.imported = options.imported;
        this.popular_invites = options.popular_invites;
        this.retry_contacts = options.retry_contacts;
        this.users = options.users;
    }
}

export class PredicateContactsBlocked {
    _ = 'contacts.blocked' as const
    blocked: PeerBlocked[]
    chats: Chat[]
    users: User[]
    constructor(options: {
        blocked: PeerBlocked[]
        chats: Chat[]
        users: User[]
    }) {
        this.blocked = options.blocked;
        this.chats = options.chats;
        this.users = options.users;
    }
}

export class PredicateContactsBlockedSlice {
    _ = 'contacts.blockedSlice' as const
    count: number
    blocked: PeerBlocked[]
    chats: Chat[]
    users: User[]
    constructor(options: {
        count: number
        blocked: PeerBlocked[]
        chats: Chat[]
        users: User[]
    }) {
        this.count = options.count;
        this.blocked = options.blocked;
        this.chats = options.chats;
        this.users = options.users;
    }
}

export class PredicateMessagesDialogs {
    _ = 'messages.dialogs' as const
    dialogs: Dialog[]
    messages: Message[]
    chats: Chat[]
    users: User[]
    constructor(options: {
        dialogs: Dialog[]
        messages: Message[]
        chats: Chat[]
        users: User[]
    }) {
        this.dialogs = options.dialogs;
        this.messages = options.messages;
        this.chats = options.chats;
        this.users = options.users;
    }
}

export class PredicateMessagesDialogsSlice {
    _ = 'messages.dialogsSlice' as const
    count: number
    dialogs: Dialog[]
    messages: Message[]
    chats: Chat[]
    users: User[]
    constructor(options: {
        count: number
        dialogs: Dialog[]
        messages: Message[]
        chats: Chat[]
        users: User[]
    }) {
        this.count = options.count;
        this.dialogs = options.dialogs;
        this.messages = options.messages;
        this.chats = options.chats;
        this.users = options.users;
    }
}

export class PredicateMessagesMessages {
    _ = 'messages.messages' as const
    messages: Message[]
    chats: Chat[]
    users: User[]
    constructor(options: {
        messages: Message[]
        chats: Chat[]
        users: User[]
    }) {
        this.messages = options.messages;
        this.chats = options.chats;
        this.users = options.users;
    }
}

export class PredicateMessagesMessagesSlice {
    _ = 'messages.messagesSlice' as const
    inexact?: true
    count: number
    next_rate?: number
    offset_id_offset?: number
    messages: Message[]
    chats: Chat[]
    users: User[]
    constructor(options: {
        inexact?: true
        count: number
        next_rate?: number
        offset_id_offset?: number
        messages: Message[]
        chats: Chat[]
        users: User[]
    }) {
        this.inexact = options.inexact;
        this.count = options.count;
        this.next_rate = options.next_rate;
        this.offset_id_offset = options.offset_id_offset;
        this.messages = options.messages;
        this.chats = options.chats;
        this.users = options.users;
    }
}

export class PredicateMessagesChats {
    _ = 'messages.chats' as const
    chats: Chat[]
    constructor(options: {
        chats: Chat[]
    }) {
        this.chats = options.chats;
    }
}

export class PredicateMessagesChatFull {
    _ = 'messages.chatFull' as const
    full_chat: ChatFull
    chats: Chat[]
    users: User[]
    constructor(options: {
        full_chat: ChatFull
        chats: Chat[]
        users: User[]
    }) {
        this.full_chat = options.full_chat;
        this.chats = options.chats;
        this.users = options.users;
    }
}

export class PredicateMessagesAffectedHistory {
    _ = 'messages.affectedHistory' as const
    pts: number
    pts_count: number
    offset: number
    constructor(options: {
        pts: number
        pts_count: number
        offset: number
    }) {
        this.pts = options.pts;
        this.pts_count = options.pts_count;
        this.offset = options.offset;
    }
}

export class PredicateInputMessagesFilterEmpty {
    _ = 'inputMessagesFilterEmpty' as const
}

export class PredicateInputMessagesFilterPhotos {
    _ = 'inputMessagesFilterPhotos' as const
}

export class PredicateInputMessagesFilterVideo {
    _ = 'inputMessagesFilterVideo' as const
}

export class PredicateInputMessagesFilterPhotoVideo {
    _ = 'inputMessagesFilterPhotoVideo' as const
}

export class PredicateInputMessagesFilterDocument {
    _ = 'inputMessagesFilterDocument' as const
}

export class PredicateInputMessagesFilterUrl {
    _ = 'inputMessagesFilterUrl' as const
}

export class PredicateInputMessagesFilterGif {
    _ = 'inputMessagesFilterGif' as const
}

export class PredicateUpdateNewMessage {
    _ = 'updateNewMessage' as const
    message: Message
    pts: number
    pts_count: number
    constructor(options: {
        message: Message
        pts: number
        pts_count: number
    }) {
        this.message = options.message;
        this.pts = options.pts;
        this.pts_count = options.pts_count;
    }
}

export class PredicateUpdateMessageID {
    _ = 'updateMessageID' as const
    id: number
    random_id: string
    constructor(options: {
        id: number
        random_id: string
    }) {
        this.id = options.id;
        this.random_id = options.random_id;
    }
}

export class PredicateUpdateDeleteMessages {
    _ = 'updateDeleteMessages' as const
    messages: number[]
    pts: number
    pts_count: number
    constructor(options: {
        messages: number[]
        pts: number
        pts_count: number
    }) {
        this.messages = options.messages;
        this.pts = options.pts;
        this.pts_count = options.pts_count;
    }
}

export class PredicateUpdateUserTyping {
    _ = 'updateUserTyping' as const
    user_id: string
    action: SendMessageAction
    constructor(options: {
        user_id: string
        action: SendMessageAction
    }) {
        this.user_id = options.user_id;
        this.action = options.action;
    }
}

export class PredicateUpdateChatUserTyping {
    _ = 'updateChatUserTyping' as const
    chat_id: string
    from_id: Peer
    action: SendMessageAction
    constructor(options: {
        chat_id: string
        from_id: Peer
        action: SendMessageAction
    }) {
        this.chat_id = options.chat_id;
        this.from_id = options.from_id;
        this.action = options.action;
    }
}

export class PredicateUpdateChatParticipants {
    _ = 'updateChatParticipants' as const
    participants: ChatParticipants
    constructor(options: {
        participants: ChatParticipants
    }) {
        this.participants = options.participants;
    }
}

export class PredicateUpdateUserStatus {
    _ = 'updateUserStatus' as const
    user_id: string
    status: UserStatus
    constructor(options: {
        user_id: string
        status: UserStatus
    }) {
        this.user_id = options.user_id;
        this.status = options.status;
    }
}

export class PredicateUpdateUserName {
    _ = 'updateUserName' as const
    user_id: string
    first_name: string
    last_name: string
    username: string
    constructor(options: {
        user_id: string
        first_name: string
        last_name: string
        username: string
    }) {
        this.user_id = options.user_id;
        this.first_name = options.first_name;
        this.last_name = options.last_name;
        this.username = options.username;
    }
}

export class PredicateUpdateUserPhoto {
    _ = 'updateUserPhoto' as const
    user_id: string
    date: number
    photo: UserProfilePhoto
    previous: boolean
    constructor(options: {
        user_id: string
        date: number
        photo: UserProfilePhoto
        previous: boolean
    }) {
        this.user_id = options.user_id;
        this.date = options.date;
        this.photo = options.photo;
        this.previous = options.previous;
    }
}

export class PredicateUpdatesState {
    _ = 'updates.state' as const
    pts: number
    qts: number
    date: number
    seq: number
    unread_count: number
    constructor(options: {
        pts: number
        qts: number
        date: number
        seq: number
        unread_count: number
    }) {
        this.pts = options.pts;
        this.qts = options.qts;
        this.date = options.date;
        this.seq = options.seq;
        this.unread_count = options.unread_count;
    }
}

export class PredicateUpdatesDifferenceEmpty {
    _ = 'updates.differenceEmpty' as const
    date: number
    seq: number
    constructor(options: {
        date: number
        seq: number
    }) {
        this.date = options.date;
        this.seq = options.seq;
    }
}

export class PredicateUpdatesDifference {
    _ = 'updates.difference' as const
    new_messages: Message[]
    new_encrypted_messages: EncryptedMessage[]
    other_updates: Update[]
    chats: Chat[]
    users: User[]
    state: UpdatesState
    constructor(options: {
        new_messages: Message[]
        new_encrypted_messages: EncryptedMessage[]
        other_updates: Update[]
        chats: Chat[]
        users: User[]
        state: UpdatesState
    }) {
        this.new_messages = options.new_messages;
        this.new_encrypted_messages = options.new_encrypted_messages;
        this.other_updates = options.other_updates;
        this.chats = options.chats;
        this.users = options.users;
        this.state = options.state;
    }
}

export class PredicateUpdatesDifferenceSlice {
    _ = 'updates.differenceSlice' as const
    new_messages: Message[]
    new_encrypted_messages: EncryptedMessage[]
    other_updates: Update[]
    chats: Chat[]
    users: User[]
    intermediate_state: UpdatesState
    constructor(options: {
        new_messages: Message[]
        new_encrypted_messages: EncryptedMessage[]
        other_updates: Update[]
        chats: Chat[]
        users: User[]
        intermediate_state: UpdatesState
    }) {
        this.new_messages = options.new_messages;
        this.new_encrypted_messages = options.new_encrypted_messages;
        this.other_updates = options.other_updates;
        this.chats = options.chats;
        this.users = options.users;
        this.intermediate_state = options.intermediate_state;
    }
}

export class PredicateUpdatesTooLong {
    _ = 'updatesTooLong' as const
}

export class PredicateUpdateShortMessage {
    _ = 'updateShortMessage' as const
    out?: true
    mentioned?: true
    media_unread?: true
    silent?: true
    id: number
    user_id: string
    message: string
    pts: number
    pts_count: number
    date: number
    fwd_from?: MessageFwdHeader
    via_bot_id?: string
    reply_to?: MessageReplyHeader
    entities?: MessageEntity[]
    ttl_period?: number
    constructor(options: {
        out?: true
        mentioned?: true
        media_unread?: true
        silent?: true
        id: number
        user_id: string
        message: string
        pts: number
        pts_count: number
        date: number
        fwd_from?: MessageFwdHeader
        via_bot_id?: string
        reply_to?: MessageReplyHeader
        entities?: MessageEntity[]
        ttl_period?: number
    }) {
        this.out = options.out;
        this.mentioned = options.mentioned;
        this.media_unread = options.media_unread;
        this.silent = options.silent;
        this.id = options.id;
        this.user_id = options.user_id;
        this.message = options.message;
        this.pts = options.pts;
        this.pts_count = options.pts_count;
        this.date = options.date;
        this.fwd_from = options.fwd_from;
        this.via_bot_id = options.via_bot_id;
        this.reply_to = options.reply_to;
        this.entities = options.entities;
        this.ttl_period = options.ttl_period;
    }
}

export class PredicateUpdateShortChatMessage {
    _ = 'updateShortChatMessage' as const
    out?: true
    mentioned?: true
    media_unread?: true
    silent?: true
    id: number
    from_id: string
    chat_id: string
    message: string
    pts: number
    pts_count: number
    date: number
    fwd_from?: MessageFwdHeader
    via_bot_id?: string
    reply_to?: MessageReplyHeader
    entities?: MessageEntity[]
    ttl_period?: number
    constructor(options: {
        out?: true
        mentioned?: true
        media_unread?: true
        silent?: true
        id: number
        from_id: string
        chat_id: string
        message: string
        pts: number
        pts_count: number
        date: number
        fwd_from?: MessageFwdHeader
        via_bot_id?: string
        reply_to?: MessageReplyHeader
        entities?: MessageEntity[]
        ttl_period?: number
    }) {
        this.out = options.out;
        this.mentioned = options.mentioned;
        this.media_unread = options.media_unread;
        this.silent = options.silent;
        this.id = options.id;
        this.from_id = options.from_id;
        this.chat_id = options.chat_id;
        this.message = options.message;
        this.pts = options.pts;
        this.pts_count = options.pts_count;
        this.date = options.date;
        this.fwd_from = options.fwd_from;
        this.via_bot_id = options.via_bot_id;
        this.reply_to = options.reply_to;
        this.entities = options.entities;
        this.ttl_period = options.ttl_period;
    }
}

export class PredicateUpdateShort {
    _ = 'updateShort' as const
    update: Update
    date: number
    constructor(options: {
        update: Update
        date: number
    }) {
        this.update = options.update;
        this.date = options.date;
    }
}

export class PredicateUpdatesCombined {
    _ = 'updatesCombined' as const
    updates: Update[]
    users: User[]
    chats: Chat[]
    date: number
    seq_start: number
    seq: number
    constructor(options: {
        updates: Update[]
        users: User[]
        chats: Chat[]
        date: number
        seq_start: number
        seq: number
    }) {
        this.updates = options.updates;
        this.users = options.users;
        this.chats = options.chats;
        this.date = options.date;
        this.seq_start = options.seq_start;
        this.seq = options.seq;
    }
}

export class PredicateUpdates {
    _ = 'updates' as const
    updates: Update[]
    users: User[]
    chats: Chat[]
    date: number
    seq: number
    constructor(options: {
        updates: Update[]
        users: User[]
        chats: Chat[]
        date: number
        seq: number
    }) {
        this.updates = options.updates;
        this.users = options.users;
        this.chats = options.chats;
        this.date = options.date;
        this.seq = options.seq;
    }
}

export class PredicatePhotosPhotos {
    _ = 'photos.photos' as const
    photos: Photo[]
    users: User[]
    constructor(options: {
        photos: Photo[]
        users: User[]
    }) {
        this.photos = options.photos;
        this.users = options.users;
    }
}

export class PredicatePhotosPhotosSlice {
    _ = 'photos.photosSlice' as const
    count: number
    photos: Photo[]
    users: User[]
    constructor(options: {
        count: number
        photos: Photo[]
        users: User[]
    }) {
        this.count = options.count;
        this.photos = options.photos;
        this.users = options.users;
    }
}

export class PredicatePhotosPhoto {
    _ = 'photos.photo' as const
    photo: Photo
    users: User[]
    constructor(options: {
        photo: Photo
        users: User[]
    }) {
        this.photo = options.photo;
        this.users = options.users;
    }
}

export class PredicateUploadFile {
    _ = 'upload.file' as const
    type: StorageFileType
    mtime: number
    bytes: Uint8Array
    constructor(options: {
        type: StorageFileType
        mtime: number
        bytes: Uint8Array
    }) {
        this.type = options.type;
        this.mtime = options.mtime;
        this.bytes = options.bytes;
    }
}

export class PredicateDcOption {
    _ = 'dcOption' as const
    ipv6?: true
    media_only?: true
    tcpo_only?: true
    cdn?: true
    static?: true
    this_port_only?: true
    id: number
    ip_address: string
    port: number
    secret?: Uint8Array
    constructor(options: {
        ipv6?: true
        media_only?: true
        tcpo_only?: true
        cdn?: true
        static?: true
        this_port_only?: true
        id: number
        ip_address: string
        port: number
        secret?: Uint8Array
    }) {
        this.ipv6 = options.ipv6;
        this.media_only = options.media_only;
        this.tcpo_only = options.tcpo_only;
        this.cdn = options.cdn;
        this.static = options.static;
        this.this_port_only = options.this_port_only;
        this.id = options.id;
        this.ip_address = options.ip_address;
        this.port = options.port;
        this.secret = options.secret;
    }
}

export class PredicateConfig {
    _ = 'config' as const
    phonecalls_enabled?: true
    default_p2p_contacts?: true
    preload_featured_stickers?: true
    ignore_phone_entities?: true
    revoke_pm_inbox?: true
    blocked_mode?: true
    pfs_enabled?: true
    force_try_ipv6?: true
    date: number
    expires: number
    test_mode: boolean
    this_dc: number
    dc_options: DcOption[]
    dc_txt_domain_name: string
    chat_size_max: number
    megagroup_size_max: number
    forwarded_count_max: number
    online_update_period_ms: number
    offline_blur_timeout_ms: number
    offline_idle_timeout_ms: number
    online_cloud_timeout_ms: number
    notify_cloud_delay_ms: number
    notify_default_delay_ms: number
    push_chat_period_ms: number
    push_chat_limit: number
    saved_gifs_limit: number
    edit_time_limit: number
    revoke_time_limit: number
    revoke_pm_time_limit: number
    rating_e_decay: number
    stickers_recent_limit: number
    stickers_faved_limit: number
    channels_read_media_period: number
    tmp_sessions?: number
    pinned_dialogs_count_max: number
    pinned_infolder_count_max: number
    call_receive_timeout_ms: number
    call_ring_timeout_ms: number
    call_connect_timeout_ms: number
    call_packet_timeout_ms: number
    me_url_prefix: string
    autoupdate_url_prefix?: string
    gif_search_username?: string
    venue_search_username?: string
    img_search_username?: string
    static_maps_provider?: string
    caption_length_max: number
    message_length_max: number
    webfile_dc_id: number
    suggested_lang_code?: string
    lang_pack_version?: number
    base_lang_pack_version?: number
    constructor(options: {
        phonecalls_enabled?: true
        default_p2p_contacts?: true
        preload_featured_stickers?: true
        ignore_phone_entities?: true
        revoke_pm_inbox?: true
        blocked_mode?: true
        pfs_enabled?: true
        force_try_ipv6?: true
        date: number
        expires: number
        test_mode: boolean
        this_dc: number
        dc_options: DcOption[]
        dc_txt_domain_name: string
        chat_size_max: number
        megagroup_size_max: number
        forwarded_count_max: number
        online_update_period_ms: number
        offline_blur_timeout_ms: number
        offline_idle_timeout_ms: number
        online_cloud_timeout_ms: number
        notify_cloud_delay_ms: number
        notify_default_delay_ms: number
        push_chat_period_ms: number
        push_chat_limit: number
        saved_gifs_limit: number
        edit_time_limit: number
        revoke_time_limit: number
        revoke_pm_time_limit: number
        rating_e_decay: number
        stickers_recent_limit: number
        stickers_faved_limit: number
        channels_read_media_period: number
        tmp_sessions?: number
        pinned_dialogs_count_max: number
        pinned_infolder_count_max: number
        call_receive_timeout_ms: number
        call_ring_timeout_ms: number
        call_connect_timeout_ms: number
        call_packet_timeout_ms: number
        me_url_prefix: string
        autoupdate_url_prefix?: string
        gif_search_username?: string
        venue_search_username?: string
        img_search_username?: string
        static_maps_provider?: string
        caption_length_max: number
        message_length_max: number
        webfile_dc_id: number
        suggested_lang_code?: string
        lang_pack_version?: number
        base_lang_pack_version?: number
    }) {
        this.phonecalls_enabled = options.phonecalls_enabled;
        this.default_p2p_contacts = options.default_p2p_contacts;
        this.preload_featured_stickers = options.preload_featured_stickers;
        this.ignore_phone_entities = options.ignore_phone_entities;
        this.revoke_pm_inbox = options.revoke_pm_inbox;
        this.blocked_mode = options.blocked_mode;
        this.pfs_enabled = options.pfs_enabled;
        this.force_try_ipv6 = options.force_try_ipv6;
        this.date = options.date;
        this.expires = options.expires;
        this.test_mode = options.test_mode;
        this.this_dc = options.this_dc;
        this.dc_options = options.dc_options;
        this.dc_txt_domain_name = options.dc_txt_domain_name;
        this.chat_size_max = options.chat_size_max;
        this.megagroup_size_max = options.megagroup_size_max;
        this.forwarded_count_max = options.forwarded_count_max;
        this.online_update_period_ms = options.online_update_period_ms;
        this.offline_blur_timeout_ms = options.offline_blur_timeout_ms;
        this.offline_idle_timeout_ms = options.offline_idle_timeout_ms;
        this.online_cloud_timeout_ms = options.online_cloud_timeout_ms;
        this.notify_cloud_delay_ms = options.notify_cloud_delay_ms;
        this.notify_default_delay_ms = options.notify_default_delay_ms;
        this.push_chat_period_ms = options.push_chat_period_ms;
        this.push_chat_limit = options.push_chat_limit;
        this.saved_gifs_limit = options.saved_gifs_limit;
        this.edit_time_limit = options.edit_time_limit;
        this.revoke_time_limit = options.revoke_time_limit;
        this.revoke_pm_time_limit = options.revoke_pm_time_limit;
        this.rating_e_decay = options.rating_e_decay;
        this.stickers_recent_limit = options.stickers_recent_limit;
        this.stickers_faved_limit = options.stickers_faved_limit;
        this.channels_read_media_period = options.channels_read_media_period;
        this.tmp_sessions = options.tmp_sessions;
        this.pinned_dialogs_count_max = options.pinned_dialogs_count_max;
        this.pinned_infolder_count_max = options.pinned_infolder_count_max;
        this.call_receive_timeout_ms = options.call_receive_timeout_ms;
        this.call_ring_timeout_ms = options.call_ring_timeout_ms;
        this.call_connect_timeout_ms = options.call_connect_timeout_ms;
        this.call_packet_timeout_ms = options.call_packet_timeout_ms;
        this.me_url_prefix = options.me_url_prefix;
        this.autoupdate_url_prefix = options.autoupdate_url_prefix;
        this.gif_search_username = options.gif_search_username;
        this.venue_search_username = options.venue_search_username;
        this.img_search_username = options.img_search_username;
        this.static_maps_provider = options.static_maps_provider;
        this.caption_length_max = options.caption_length_max;
        this.message_length_max = options.message_length_max;
        this.webfile_dc_id = options.webfile_dc_id;
        this.suggested_lang_code = options.suggested_lang_code;
        this.lang_pack_version = options.lang_pack_version;
        this.base_lang_pack_version = options.base_lang_pack_version;
    }
}

export class PredicateNearestDc {
    _ = 'nearestDc' as const
    country: string
    this_dc: number
    nearest_dc: number
    constructor(options: {
        country: string
        this_dc: number
        nearest_dc: number
    }) {
        this.country = options.country;
        this.this_dc = options.this_dc;
        this.nearest_dc = options.nearest_dc;
    }
}

export class PredicateHelpAppUpdate {
    _ = 'help.appUpdate' as const
    can_not_skip?: true
    id: number
    version: string
    text: string
    entities: MessageEntity[]
    document?: Document
    url?: string
    sticker?: Document
    constructor(options: {
        can_not_skip?: true
        id: number
        version: string
        text: string
        entities: MessageEntity[]
        document?: Document
        url?: string
        sticker?: Document
    }) {
        this.can_not_skip = options.can_not_skip;
        this.id = options.id;
        this.version = options.version;
        this.text = options.text;
        this.entities = options.entities;
        this.document = options.document;
        this.url = options.url;
        this.sticker = options.sticker;
    }
}

export class PredicateHelpNoAppUpdate {
    _ = 'help.noAppUpdate' as const
}

export class PredicateHelpInviteText {
    _ = 'help.inviteText' as const
    message: string
    constructor(options: {
        message: string
    }) {
        this.message = options.message;
    }
}

export class PredicateUpdateNewEncryptedMessage {
    _ = 'updateNewEncryptedMessage' as const
    message: EncryptedMessage
    qts: number
    constructor(options: {
        message: EncryptedMessage
        qts: number
    }) {
        this.message = options.message;
        this.qts = options.qts;
    }
}

export class PredicateUpdateEncryptedChatTyping {
    _ = 'updateEncryptedChatTyping' as const
    chat_id: number
    constructor(options: {
        chat_id: number
    }) {
        this.chat_id = options.chat_id;
    }
}

export class PredicateUpdateEncryption {
    _ = 'updateEncryption' as const
    chat: EncryptedChat
    date: number
    constructor(options: {
        chat: EncryptedChat
        date: number
    }) {
        this.chat = options.chat;
        this.date = options.date;
    }
}

export class PredicateUpdateEncryptedMessagesRead {
    _ = 'updateEncryptedMessagesRead' as const
    chat_id: number
    max_date: number
    date: number
    constructor(options: {
        chat_id: number
        max_date: number
        date: number
    }) {
        this.chat_id = options.chat_id;
        this.max_date = options.max_date;
        this.date = options.date;
    }
}

export class PredicateEncryptedChatEmpty {
    _ = 'encryptedChatEmpty' as const
    id: number
    constructor(options: {
        id: number
    }) {
        this.id = options.id;
    }
}

export class PredicateEncryptedChatWaiting {
    _ = 'encryptedChatWaiting' as const
    id: number
    access_hash: string
    date: number
    admin_id: string
    participant_id: string
    constructor(options: {
        id: number
        access_hash: string
        date: number
        admin_id: string
        participant_id: string
    }) {
        this.id = options.id;
        this.access_hash = options.access_hash;
        this.date = options.date;
        this.admin_id = options.admin_id;
        this.participant_id = options.participant_id;
    }
}

export class PredicateEncryptedChatRequested {
    _ = 'encryptedChatRequested' as const
    folder_id?: number
    id: number
    access_hash: string
    date: number
    admin_id: string
    participant_id: string
    g_a: Uint8Array
    constructor(options: {
        folder_id?: number
        id: number
        access_hash: string
        date: number
        admin_id: string
        participant_id: string
        g_a: Uint8Array
    }) {
        this.folder_id = options.folder_id;
        this.id = options.id;
        this.access_hash = options.access_hash;
        this.date = options.date;
        this.admin_id = options.admin_id;
        this.participant_id = options.participant_id;
        this.g_a = options.g_a;
    }
}

export class PredicateEncryptedChat {
    _ = 'encryptedChat' as const
    id: number
    access_hash: string
    date: number
    admin_id: string
    participant_id: string
    g_a_or_b: Uint8Array
    key_fingerprint: string
    constructor(options: {
        id: number
        access_hash: string
        date: number
        admin_id: string
        participant_id: string
        g_a_or_b: Uint8Array
        key_fingerprint: string
    }) {
        this.id = options.id;
        this.access_hash = options.access_hash;
        this.date = options.date;
        this.admin_id = options.admin_id;
        this.participant_id = options.participant_id;
        this.g_a_or_b = options.g_a_or_b;
        this.key_fingerprint = options.key_fingerprint;
    }
}

export class PredicateEncryptedChatDiscarded {
    _ = 'encryptedChatDiscarded' as const
    history_deleted?: true
    id: number
    constructor(options: {
        history_deleted?: true
        id: number
    }) {
        this.history_deleted = options.history_deleted;
        this.id = options.id;
    }
}

export class PredicateInputEncryptedChat {
    _ = 'inputEncryptedChat' as const
    chat_id: number
    access_hash: string
    constructor(options: {
        chat_id: number
        access_hash: string
    }) {
        this.chat_id = options.chat_id;
        this.access_hash = options.access_hash;
    }
}

export class PredicateEncryptedFileEmpty {
    _ = 'encryptedFileEmpty' as const
}

export class PredicateEncryptedFile {
    _ = 'encryptedFile' as const
    id: string
    access_hash: string
    size: number
    dc_id: number
    key_fingerprint: number
    constructor(options: {
        id: string
        access_hash: string
        size: number
        dc_id: number
        key_fingerprint: number
    }) {
        this.id = options.id;
        this.access_hash = options.access_hash;
        this.size = options.size;
        this.dc_id = options.dc_id;
        this.key_fingerprint = options.key_fingerprint;
    }
}

export class PredicateInputEncryptedFileEmpty {
    _ = 'inputEncryptedFileEmpty' as const
}

export class PredicateInputEncryptedFileUploaded {
    _ = 'inputEncryptedFileUploaded' as const
    id: string
    parts: number
    md5_checksum: string
    key_fingerprint: number
    constructor(options: {
        id: string
        parts: number
        md5_checksum: string
        key_fingerprint: number
    }) {
        this.id = options.id;
        this.parts = options.parts;
        this.md5_checksum = options.md5_checksum;
        this.key_fingerprint = options.key_fingerprint;
    }
}

export class PredicateInputEncryptedFile {
    _ = 'inputEncryptedFile' as const
    id: string
    access_hash: string
    constructor(options: {
        id: string
        access_hash: string
    }) {
        this.id = options.id;
        this.access_hash = options.access_hash;
    }
}

export class PredicateInputEncryptedFileLocation {
    _ = 'inputEncryptedFileLocation' as const
    id: string
    access_hash: string
    constructor(options: {
        id: string
        access_hash: string
    }) {
        this.id = options.id;
        this.access_hash = options.access_hash;
    }
}

export class PredicateEncryptedMessage {
    _ = 'encryptedMessage' as const
    random_id: string
    chat_id: number
    date: number
    bytes: Uint8Array
    file: EncryptedFile
    constructor(options: {
        random_id: string
        chat_id: number
        date: number
        bytes: Uint8Array
        file: EncryptedFile
    }) {
        this.random_id = options.random_id;
        this.chat_id = options.chat_id;
        this.date = options.date;
        this.bytes = options.bytes;
        this.file = options.file;
    }
}

export class PredicateEncryptedMessageService {
    _ = 'encryptedMessageService' as const
    random_id: string
    chat_id: number
    date: number
    bytes: Uint8Array
    constructor(options: {
        random_id: string
        chat_id: number
        date: number
        bytes: Uint8Array
    }) {
        this.random_id = options.random_id;
        this.chat_id = options.chat_id;
        this.date = options.date;
        this.bytes = options.bytes;
    }
}

export class PredicateMessagesDhConfigNotModified {
    _ = 'messages.dhConfigNotModified' as const
    random: Uint8Array
    constructor(options: {
        random: Uint8Array
    }) {
        this.random = options.random;
    }
}

export class PredicateMessagesDhConfig {
    _ = 'messages.dhConfig' as const
    g: number
    p: Uint8Array
    version: number
    random: Uint8Array
    constructor(options: {
        g: number
        p: Uint8Array
        version: number
        random: Uint8Array
    }) {
        this.g = options.g;
        this.p = options.p;
        this.version = options.version;
        this.random = options.random;
    }
}

export class PredicateMessagesSentEncryptedMessage {
    _ = 'messages.sentEncryptedMessage' as const
    date: number
    constructor(options: {
        date: number
    }) {
        this.date = options.date;
    }
}

export class PredicateMessagesSentEncryptedFile {
    _ = 'messages.sentEncryptedFile' as const
    date: number
    file: EncryptedFile
    constructor(options: {
        date: number
        file: EncryptedFile
    }) {
        this.date = options.date;
        this.file = options.file;
    }
}

export class PredicateInputFileBig {
    _ = 'inputFileBig' as const
    id: string
    parts: number
    name: string
    constructor(options: {
        id: string
        parts: number
        name: string
    }) {
        this.id = options.id;
        this.parts = options.parts;
        this.name = options.name;
    }
}

export class PredicateInputEncryptedFileBigUploaded {
    _ = 'inputEncryptedFileBigUploaded' as const
    id: string
    parts: number
    key_fingerprint: number
    constructor(options: {
        id: string
        parts: number
        key_fingerprint: number
    }) {
        this.id = options.id;
        this.parts = options.parts;
        this.key_fingerprint = options.key_fingerprint;
    }
}

export class PredicateUpdateChatParticipantAdd {
    _ = 'updateChatParticipantAdd' as const
    chat_id: string
    user_id: string
    inviter_id: string
    date: number
    version: number
    constructor(options: {
        chat_id: string
        user_id: string
        inviter_id: string
        date: number
        version: number
    }) {
        this.chat_id = options.chat_id;
        this.user_id = options.user_id;
        this.inviter_id = options.inviter_id;
        this.date = options.date;
        this.version = options.version;
    }
}

export class PredicateUpdateChatParticipantDelete {
    _ = 'updateChatParticipantDelete' as const
    chat_id: string
    user_id: string
    version: number
    constructor(options: {
        chat_id: string
        user_id: string
        version: number
    }) {
        this.chat_id = options.chat_id;
        this.user_id = options.user_id;
        this.version = options.version;
    }
}

export class PredicateUpdateDcOptions {
    _ = 'updateDcOptions' as const
    dc_options: DcOption[]
    constructor(options: {
        dc_options: DcOption[]
    }) {
        this.dc_options = options.dc_options;
    }
}

export class PredicateInputMediaUploadedDocument {
    _ = 'inputMediaUploadedDocument' as const
    nosound_video?: true
    force_file?: true
    file: InputFile
    thumb?: InputFile
    mime_type: string
    attributes: DocumentAttribute[]
    stickers?: InputDocument[]
    ttl_seconds?: number
    constructor(options: {
        nosound_video?: true
        force_file?: true
        file: InputFile
        thumb?: InputFile
        mime_type: string
        attributes: DocumentAttribute[]
        stickers?: InputDocument[]
        ttl_seconds?: number
    }) {
        this.nosound_video = options.nosound_video;
        this.force_file = options.force_file;
        this.file = options.file;
        this.thumb = options.thumb;
        this.mime_type = options.mime_type;
        this.attributes = options.attributes;
        this.stickers = options.stickers;
        this.ttl_seconds = options.ttl_seconds;
    }
}

export class PredicateInputMediaDocument {
    _ = 'inputMediaDocument' as const
    id: InputDocument
    ttl_seconds?: number
    query?: string
    constructor(options: {
        id: InputDocument
        ttl_seconds?: number
        query?: string
    }) {
        this.id = options.id;
        this.ttl_seconds = options.ttl_seconds;
        this.query = options.query;
    }
}

export class PredicateMessageMediaDocument {
    _ = 'messageMediaDocument' as const
    document?: Document
    ttl_seconds?: number
    constructor(options: {
        document?: Document
        ttl_seconds?: number
    } = {}) {
        this.document = options.document;
        this.ttl_seconds = options.ttl_seconds;
    }
}

export class PredicateInputDocumentEmpty {
    _ = 'inputDocumentEmpty' as const
}

export class PredicateInputDocument {
    _ = 'inputDocument' as const
    id: string
    access_hash: string
    file_reference: Uint8Array
    constructor(options: {
        id: string
        access_hash: string
        file_reference: Uint8Array
    }) {
        this.id = options.id;
        this.access_hash = options.access_hash;
        this.file_reference = options.file_reference;
    }
}

export class PredicateInputDocumentFileLocation {
    _ = 'inputDocumentFileLocation' as const
    id: string
    access_hash: string
    file_reference: Uint8Array
    thumb_size: string
    constructor(options: {
        id: string
        access_hash: string
        file_reference: Uint8Array
        thumb_size: string
    }) {
        this.id = options.id;
        this.access_hash = options.access_hash;
        this.file_reference = options.file_reference;
        this.thumb_size = options.thumb_size;
    }
}

export class PredicateDocumentEmpty {
    _ = 'documentEmpty' as const
    id: string
    constructor(options: {
        id: string
    }) {
        this.id = options.id;
    }
}

export class PredicateDocument {
    _ = 'document' as const
    id: string
    access_hash: string
    file_reference: Uint8Array
    date: number
    mime_type: string
    size: number
    thumbs?: PhotoSize[]
    video_thumbs?: VideoSize[]
    dc_id: number
    attributes: DocumentAttribute[]
    constructor(options: {
        id: string
        access_hash: string
        file_reference: Uint8Array
        date: number
        mime_type: string
        size: number
        thumbs?: PhotoSize[]
        video_thumbs?: VideoSize[]
        dc_id: number
        attributes: DocumentAttribute[]
    }) {
        this.id = options.id;
        this.access_hash = options.access_hash;
        this.file_reference = options.file_reference;
        this.date = options.date;
        this.mime_type = options.mime_type;
        this.size = options.size;
        this.thumbs = options.thumbs;
        this.video_thumbs = options.video_thumbs;
        this.dc_id = options.dc_id;
        this.attributes = options.attributes;
    }
}

export class PredicateHelpSupport {
    _ = 'help.support' as const
    phone_number: string
    user: User
    constructor(options: {
        phone_number: string
        user: User
    }) {
        this.phone_number = options.phone_number;
        this.user = options.user;
    }
}

export class PredicateNotifyPeer {
    _ = 'notifyPeer' as const
    peer: Peer
    constructor(options: {
        peer: Peer
    }) {
        this.peer = options.peer;
    }
}

export class PredicateNotifyUsers {
    _ = 'notifyUsers' as const
}

export class PredicateNotifyChats {
    _ = 'notifyChats' as const
}

export class PredicateUpdateNotifySettings {
    _ = 'updateNotifySettings' as const
    peer: NotifyPeer
    notify_settings: PeerNotifySettings
    constructor(options: {
        peer: NotifyPeer
        notify_settings: PeerNotifySettings
    }) {
        this.peer = options.peer;
        this.notify_settings = options.notify_settings;
    }
}

export class PredicateSendMessageTypingAction {
    _ = 'sendMessageTypingAction' as const
}

export class PredicateSendMessageCancelAction {
    _ = 'sendMessageCancelAction' as const
}

export class PredicateSendMessageRecordVideoAction {
    _ = 'sendMessageRecordVideoAction' as const
}

export class PredicateSendMessageUploadVideoAction {
    _ = 'sendMessageUploadVideoAction' as const
    progress: number
    constructor(options: {
        progress: number
    }) {
        this.progress = options.progress;
    }
}

export class PredicateSendMessageRecordAudioAction {
    _ = 'sendMessageRecordAudioAction' as const
}

export class PredicateSendMessageUploadAudioAction {
    _ = 'sendMessageUploadAudioAction' as const
    progress: number
    constructor(options: {
        progress: number
    }) {
        this.progress = options.progress;
    }
}

export class PredicateSendMessageUploadPhotoAction {
    _ = 'sendMessageUploadPhotoAction' as const
    progress: number
    constructor(options: {
        progress: number
    }) {
        this.progress = options.progress;
    }
}

export class PredicateSendMessageUploadDocumentAction {
    _ = 'sendMessageUploadDocumentAction' as const
    progress: number
    constructor(options: {
        progress: number
    }) {
        this.progress = options.progress;
    }
}

export class PredicateSendMessageGeoLocationAction {
    _ = 'sendMessageGeoLocationAction' as const
}

export class PredicateSendMessageChooseContactAction {
    _ = 'sendMessageChooseContactAction' as const
}

export class PredicateContactsFound {
    _ = 'contacts.found' as const
    my_results: Peer[]
    results: Peer[]
    chats: Chat[]
    users: User[]
    constructor(options: {
        my_results: Peer[]
        results: Peer[]
        chats: Chat[]
        users: User[]
    }) {
        this.my_results = options.my_results;
        this.results = options.results;
        this.chats = options.chats;
        this.users = options.users;
    }
}

export class PredicateUpdateServiceNotification {
    _ = 'updateServiceNotification' as const
    popup?: true
    inbox_date?: number
    type: string
    message: string
    media: MessageMedia
    entities: MessageEntity[]
    constructor(options: {
        popup?: true
        inbox_date?: number
        type: string
        message: string
        media: MessageMedia
        entities: MessageEntity[]
    }) {
        this.popup = options.popup;
        this.inbox_date = options.inbox_date;
        this.type = options.type;
        this.message = options.message;
        this.media = options.media;
        this.entities = options.entities;
    }
}

export class PredicateUserStatusRecently {
    _ = 'userStatusRecently' as const
}

export class PredicateUserStatusLastWeek {
    _ = 'userStatusLastWeek' as const
}

export class PredicateUserStatusLastMonth {
    _ = 'userStatusLastMonth' as const
}

export class PredicateUpdatePrivacy {
    _ = 'updatePrivacy' as const
    key: PrivacyKey
    rules: PrivacyRule[]
    constructor(options: {
        key: PrivacyKey
        rules: PrivacyRule[]
    }) {
        this.key = options.key;
        this.rules = options.rules;
    }
}

export class PredicateInputPrivacyKeyStatusTimestamp {
    _ = 'inputPrivacyKeyStatusTimestamp' as const
}

export class PredicatePrivacyKeyStatusTimestamp {
    _ = 'privacyKeyStatusTimestamp' as const
}

export class PredicateInputPrivacyValueAllowContacts {
    _ = 'inputPrivacyValueAllowContacts' as const
}

export class PredicateInputPrivacyValueAllowAll {
    _ = 'inputPrivacyValueAllowAll' as const
}

export class PredicateInputPrivacyValueAllowUsers {
    _ = 'inputPrivacyValueAllowUsers' as const
    users: InputUser[]
    constructor(options: {
        users: InputUser[]
    }) {
        this.users = options.users;
    }
}

export class PredicateInputPrivacyValueDisallowContacts {
    _ = 'inputPrivacyValueDisallowContacts' as const
}

export class PredicateInputPrivacyValueDisallowAll {
    _ = 'inputPrivacyValueDisallowAll' as const
}

export class PredicateInputPrivacyValueDisallowUsers {
    _ = 'inputPrivacyValueDisallowUsers' as const
    users: InputUser[]
    constructor(options: {
        users: InputUser[]
    }) {
        this.users = options.users;
    }
}

export class PredicatePrivacyValueAllowContacts {
    _ = 'privacyValueAllowContacts' as const
}

export class PredicatePrivacyValueAllowAll {
    _ = 'privacyValueAllowAll' as const
}

export class PredicatePrivacyValueAllowUsers {
    _ = 'privacyValueAllowUsers' as const
    users: string[]
    constructor(options: {
        users: string[]
    }) {
        this.users = options.users;
    }
}

export class PredicatePrivacyValueDisallowContacts {
    _ = 'privacyValueDisallowContacts' as const
}

export class PredicatePrivacyValueDisallowAll {
    _ = 'privacyValueDisallowAll' as const
}

export class PredicatePrivacyValueDisallowUsers {
    _ = 'privacyValueDisallowUsers' as const
    users: string[]
    constructor(options: {
        users: string[]
    }) {
        this.users = options.users;
    }
}

export class PredicateAccountPrivacyRules {
    _ = 'account.privacyRules' as const
    rules: PrivacyRule[]
    chats: Chat[]
    users: User[]
    constructor(options: {
        rules: PrivacyRule[]
        chats: Chat[]
        users: User[]
    }) {
        this.rules = options.rules;
        this.chats = options.chats;
        this.users = options.users;
    }
}

export class PredicateAccountDaysTTL {
    _ = 'accountDaysTTL' as const
    days: number
    constructor(options: {
        days: number
    }) {
        this.days = options.days;
    }
}

export class PredicateUpdateUserPhone {
    _ = 'updateUserPhone' as const
    user_id: string
    phone: string
    constructor(options: {
        user_id: string
        phone: string
    }) {
        this.user_id = options.user_id;
        this.phone = options.phone;
    }
}

export class PredicateDocumentAttributeImageSize {
    _ = 'documentAttributeImageSize' as const
    w: number
    h: number
    constructor(options: {
        w: number
        h: number
    }) {
        this.w = options.w;
        this.h = options.h;
    }
}

export class PredicateDocumentAttributeAnimated {
    _ = 'documentAttributeAnimated' as const
}

export class PredicateDocumentAttributeSticker {
    _ = 'documentAttributeSticker' as const
    mask?: true
    alt: string
    stickerset: InputStickerSet
    mask_coords?: MaskCoords
    constructor(options: {
        mask?: true
        alt: string
        stickerset: InputStickerSet
        mask_coords?: MaskCoords
    }) {
        this.mask = options.mask;
        this.alt = options.alt;
        this.stickerset = options.stickerset;
        this.mask_coords = options.mask_coords;
    }
}

export class PredicateDocumentAttributeVideo {
    _ = 'documentAttributeVideo' as const
    round_message?: true
    supports_streaming?: true
    duration: number
    w: number
    h: number
    constructor(options: {
        round_message?: true
        supports_streaming?: true
        duration: number
        w: number
        h: number
    }) {
        this.round_message = options.round_message;
        this.supports_streaming = options.supports_streaming;
        this.duration = options.duration;
        this.w = options.w;
        this.h = options.h;
    }
}

export class PredicateDocumentAttributeAudio {
    _ = 'documentAttributeAudio' as const
    voice?: true
    duration: number
    title?: string
    performer?: string
    waveform?: Uint8Array
    constructor(options: {
        voice?: true
        duration: number
        title?: string
        performer?: string
        waveform?: Uint8Array
    }) {
        this.voice = options.voice;
        this.duration = options.duration;
        this.title = options.title;
        this.performer = options.performer;
        this.waveform = options.waveform;
    }
}

export class PredicateDocumentAttributeFilename {
    _ = 'documentAttributeFilename' as const
    file_name: string
    constructor(options: {
        file_name: string
    }) {
        this.file_name = options.file_name;
    }
}

export class PredicateMessagesStickersNotModified {
    _ = 'messages.stickersNotModified' as const
}

export class PredicateMessagesStickers {
    _ = 'messages.stickers' as const
    hash: string
    stickers: Document[]
    constructor(options: {
        hash: string
        stickers: Document[]
    }) {
        this.hash = options.hash;
        this.stickers = options.stickers;
    }
}

export class PredicateStickerPack {
    _ = 'stickerPack' as const
    emoticon: string
    documents: string[]
    constructor(options: {
        emoticon: string
        documents: string[]
    }) {
        this.emoticon = options.emoticon;
        this.documents = options.documents;
    }
}

export class PredicateMessagesAllStickersNotModified {
    _ = 'messages.allStickersNotModified' as const
}

export class PredicateMessagesAllStickers {
    _ = 'messages.allStickers' as const
    hash: string
    sets: StickerSet[]
    constructor(options: {
        hash: string
        sets: StickerSet[]
    }) {
        this.hash = options.hash;
        this.sets = options.sets;
    }
}

export class PredicateUpdateReadHistoryInbox {
    _ = 'updateReadHistoryInbox' as const
    folder_id?: number
    peer: Peer
    max_id: number
    still_unread_count: number
    pts: number
    pts_count: number
    constructor(options: {
        folder_id?: number
        peer: Peer
        max_id: number
        still_unread_count: number
        pts: number
        pts_count: number
    }) {
        this.folder_id = options.folder_id;
        this.peer = options.peer;
        this.max_id = options.max_id;
        this.still_unread_count = options.still_unread_count;
        this.pts = options.pts;
        this.pts_count = options.pts_count;
    }
}

export class PredicateUpdateReadHistoryOutbox {
    _ = 'updateReadHistoryOutbox' as const
    peer: Peer
    max_id: number
    pts: number
    pts_count: number
    constructor(options: {
        peer: Peer
        max_id: number
        pts: number
        pts_count: number
    }) {
        this.peer = options.peer;
        this.max_id = options.max_id;
        this.pts = options.pts;
        this.pts_count = options.pts_count;
    }
}

export class PredicateMessagesAffectedMessages {
    _ = 'messages.affectedMessages' as const
    pts: number
    pts_count: number
    constructor(options: {
        pts: number
        pts_count: number
    }) {
        this.pts = options.pts;
        this.pts_count = options.pts_count;
    }
}

export class PredicateUpdateWebPage {
    _ = 'updateWebPage' as const
    webpage: WebPage
    pts: number
    pts_count: number
    constructor(options: {
        webpage: WebPage
        pts: number
        pts_count: number
    }) {
        this.webpage = options.webpage;
        this.pts = options.pts;
        this.pts_count = options.pts_count;
    }
}

export class PredicateWebPageEmpty {
    _ = 'webPageEmpty' as const
    id: string
    constructor(options: {
        id: string
    }) {
        this.id = options.id;
    }
}

export class PredicateWebPagePending {
    _ = 'webPagePending' as const
    id: string
    date: number
    constructor(options: {
        id: string
        date: number
    }) {
        this.id = options.id;
        this.date = options.date;
    }
}

export class PredicateWebPage {
    _ = 'webPage' as const
    id: string
    url: string
    display_url: string
    hash: number
    type?: string
    site_name?: string
    title?: string
    description?: string
    photo?: Photo
    embed_url?: string
    embed_type?: string
    embed_width?: number
    embed_height?: number
    duration?: number
    author?: string
    document?: Document
    cached_page?: Page
    attributes?: WebPageAttribute[]
    constructor(options: {
        id: string
        url: string
        display_url: string
        hash: number
        type?: string
        site_name?: string
        title?: string
        description?: string
        photo?: Photo
        embed_url?: string
        embed_type?: string
        embed_width?: number
        embed_height?: number
        duration?: number
        author?: string
        document?: Document
        cached_page?: Page
        attributes?: WebPageAttribute[]
    }) {
        this.id = options.id;
        this.url = options.url;
        this.display_url = options.display_url;
        this.hash = options.hash;
        this.type = options.type;
        this.site_name = options.site_name;
        this.title = options.title;
        this.description = options.description;
        this.photo = options.photo;
        this.embed_url = options.embed_url;
        this.embed_type = options.embed_type;
        this.embed_width = options.embed_width;
        this.embed_height = options.embed_height;
        this.duration = options.duration;
        this.author = options.author;
        this.document = options.document;
        this.cached_page = options.cached_page;
        this.attributes = options.attributes;
    }
}

export class PredicateMessageMediaWebPage {
    _ = 'messageMediaWebPage' as const
    webpage: WebPage
    constructor(options: {
        webpage: WebPage
    }) {
        this.webpage = options.webpage;
    }
}

export class PredicateAuthorization {
    _ = 'authorization' as const
    current?: true
    official_app?: true
    password_pending?: true
    encrypted_requests_disabled?: true
    call_requests_disabled?: true
    hash: string
    device_model: string
    platform: string
    system_version: string
    api_id: number
    app_name: string
    app_version: string
    date_created: number
    date_active: number
    ip: string
    country: string
    region: string
    constructor(options: {
        current?: true
        official_app?: true
        password_pending?: true
        encrypted_requests_disabled?: true
        call_requests_disabled?: true
        hash: string
        device_model: string
        platform: string
        system_version: string
        api_id: number
        app_name: string
        app_version: string
        date_created: number
        date_active: number
        ip: string
        country: string
        region: string
    }) {
        this.current = options.current;
        this.official_app = options.official_app;
        this.password_pending = options.password_pending;
        this.encrypted_requests_disabled = options.encrypted_requests_disabled;
        this.call_requests_disabled = options.call_requests_disabled;
        this.hash = options.hash;
        this.device_model = options.device_model;
        this.platform = options.platform;
        this.system_version = options.system_version;
        this.api_id = options.api_id;
        this.app_name = options.app_name;
        this.app_version = options.app_version;
        this.date_created = options.date_created;
        this.date_active = options.date_active;
        this.ip = options.ip;
        this.country = options.country;
        this.region = options.region;
    }
}

export class PredicateAccountAuthorizations {
    _ = 'account.authorizations' as const
    authorization_ttl_days: number
    authorizations: Authorization[]
    constructor(options: {
        authorization_ttl_days: number
        authorizations: Authorization[]
    }) {
        this.authorization_ttl_days = options.authorization_ttl_days;
        this.authorizations = options.authorizations;
    }
}

export class PredicateAccountPassword {
    _ = 'account.password' as const
    has_recovery?: true
    has_secure_values?: true
    has_password?: true
    current_algo?: PasswordKdfAlgo
    srp_B?: Uint8Array
    srp_id?: string
    hint?: string
    email_unconfirmed_pattern?: string
    new_algo: PasswordKdfAlgo
    new_secure_algo: SecurePasswordKdfAlgo
    secure_random: Uint8Array
    pending_reset_date?: number
    constructor(options: {
        has_recovery?: true
        has_secure_values?: true
        has_password?: true
        current_algo?: PasswordKdfAlgo
        srp_B?: Uint8Array
        srp_id?: string
        hint?: string
        email_unconfirmed_pattern?: string
        new_algo: PasswordKdfAlgo
        new_secure_algo: SecurePasswordKdfAlgo
        secure_random: Uint8Array
        pending_reset_date?: number
    }) {
        this.has_recovery = options.has_recovery;
        this.has_secure_values = options.has_secure_values;
        this.has_password = options.has_password;
        this.current_algo = options.current_algo;
        this.srp_B = options.srp_B;
        this.srp_id = options.srp_id;
        this.hint = options.hint;
        this.email_unconfirmed_pattern = options.email_unconfirmed_pattern;
        this.new_algo = options.new_algo;
        this.new_secure_algo = options.new_secure_algo;
        this.secure_random = options.secure_random;
        this.pending_reset_date = options.pending_reset_date;
    }
}

export class PredicateAccountPasswordSettings {
    _ = 'account.passwordSettings' as const
    email?: string
    secure_settings?: SecureSecretSettings
    constructor(options: {
        email?: string
        secure_settings?: SecureSecretSettings
    } = {}) {
        this.email = options.email;
        this.secure_settings = options.secure_settings;
    }
}

export class PredicateAccountPasswordInputSettings {
    _ = 'account.passwordInputSettings' as const
    new_algo?: PasswordKdfAlgo
    new_password_hash?: Uint8Array
    hint?: string
    email?: string
    new_secure_settings?: SecureSecretSettings
    constructor(options: {
        new_algo?: PasswordKdfAlgo
        new_password_hash?: Uint8Array
        hint?: string
        email?: string
        new_secure_settings?: SecureSecretSettings
    } = {}) {
        this.new_algo = options.new_algo;
        this.new_password_hash = options.new_password_hash;
        this.hint = options.hint;
        this.email = options.email;
        this.new_secure_settings = options.new_secure_settings;
    }
}

export class PredicateAuthPasswordRecovery {
    _ = 'auth.passwordRecovery' as const
    email_pattern: string
    constructor(options: {
        email_pattern: string
    }) {
        this.email_pattern = options.email_pattern;
    }
}

export class PredicateInputMediaVenue {
    _ = 'inputMediaVenue' as const
    geo_point: InputGeoPoint
    title: string
    address: string
    provider: string
    venue_id: string
    venue_type: string
    constructor(options: {
        geo_point: InputGeoPoint
        title: string
        address: string
        provider: string
        venue_id: string
        venue_type: string
    }) {
        this.geo_point = options.geo_point;
        this.title = options.title;
        this.address = options.address;
        this.provider = options.provider;
        this.venue_id = options.venue_id;
        this.venue_type = options.venue_type;
    }
}

export class PredicateMessageMediaVenue {
    _ = 'messageMediaVenue' as const
    geo: GeoPoint
    title: string
    address: string
    provider: string
    venue_id: string
    venue_type: string
    constructor(options: {
        geo: GeoPoint
        title: string
        address: string
        provider: string
        venue_id: string
        venue_type: string
    }) {
        this.geo = options.geo;
        this.title = options.title;
        this.address = options.address;
        this.provider = options.provider;
        this.venue_id = options.venue_id;
        this.venue_type = options.venue_type;
    }
}

export class PredicateReceivedNotifyMessage {
    _ = 'receivedNotifyMessage' as const
    id: number
    flags: number
    constructor(options: {
        id: number
        flags: number
    }) {
        this.id = options.id;
        this.flags = options.flags;
    }
}

export class PredicateChatInviteExported {
    _ = 'chatInviteExported' as const
    revoked?: true
    permanent?: true
    request_needed?: true
    link: string
    admin_id: string
    date: number
    start_date?: number
    expire_date?: number
    usage_limit?: number
    usage?: number
    requested?: number
    title?: string
    constructor(options: {
        revoked?: true
        permanent?: true
        request_needed?: true
        link: string
        admin_id: string
        date: number
        start_date?: number
        expire_date?: number
        usage_limit?: number
        usage?: number
        requested?: number
        title?: string
    }) {
        this.revoked = options.revoked;
        this.permanent = options.permanent;
        this.request_needed = options.request_needed;
        this.link = options.link;
        this.admin_id = options.admin_id;
        this.date = options.date;
        this.start_date = options.start_date;
        this.expire_date = options.expire_date;
        this.usage_limit = options.usage_limit;
        this.usage = options.usage;
        this.requested = options.requested;
        this.title = options.title;
    }
}

export class PredicateChatInviteAlready {
    _ = 'chatInviteAlready' as const
    chat: Chat
    constructor(options: {
        chat: Chat
    }) {
        this.chat = options.chat;
    }
}

export class PredicateChatInvite {
    _ = 'chatInvite' as const
    channel?: true
    broadcast?: true
    public?: true
    megagroup?: true
    request_needed?: true
    title: string
    about?: string
    photo: Photo
    participants_count: number
    participants?: User[]
    constructor(options: {
        channel?: true
        broadcast?: true
        public?: true
        megagroup?: true
        request_needed?: true
        title: string
        about?: string
        photo: Photo
        participants_count: number
        participants?: User[]
    }) {
        this.channel = options.channel;
        this.broadcast = options.broadcast;
        this.public = options.public;
        this.megagroup = options.megagroup;
        this.request_needed = options.request_needed;
        this.title = options.title;
        this.about = options.about;
        this.photo = options.photo;
        this.participants_count = options.participants_count;
        this.participants = options.participants;
    }
}

export class PredicateMessageActionChatJoinedByLink {
    _ = 'messageActionChatJoinedByLink' as const
    inviter_id: string
    constructor(options: {
        inviter_id: string
    }) {
        this.inviter_id = options.inviter_id;
    }
}

export class PredicateUpdateReadMessagesContents {
    _ = 'updateReadMessagesContents' as const
    messages: number[]
    pts: number
    pts_count: number
    constructor(options: {
        messages: number[]
        pts: number
        pts_count: number
    }) {
        this.messages = options.messages;
        this.pts = options.pts;
        this.pts_count = options.pts_count;
    }
}

export class PredicateInputStickerSetEmpty {
    _ = 'inputStickerSetEmpty' as const
}

export class PredicateInputStickerSetID {
    _ = 'inputStickerSetID' as const
    id: string
    access_hash: string
    constructor(options: {
        id: string
        access_hash: string
    }) {
        this.id = options.id;
        this.access_hash = options.access_hash;
    }
}

export class PredicateInputStickerSetShortName {
    _ = 'inputStickerSetShortName' as const
    short_name: string
    constructor(options: {
        short_name: string
    }) {
        this.short_name = options.short_name;
    }
}

export class PredicateStickerSet {
    _ = 'stickerSet' as const
    archived?: true
    official?: true
    masks?: true
    animated?: true
    videos?: true
    emojis?: true
    installed_date?: number
    id: string
    access_hash: string
    title: string
    short_name: string
    thumbs?: PhotoSize[]
    thumb_dc_id?: number
    thumb_version?: number
    count: number
    hash: number
    constructor(options: {
        archived?: true
        official?: true
        masks?: true
        animated?: true
        videos?: true
        emojis?: true
        installed_date?: number
        id: string
        access_hash: string
        title: string
        short_name: string
        thumbs?: PhotoSize[]
        thumb_dc_id?: number
        thumb_version?: number
        count: number
        hash: number
    }) {
        this.archived = options.archived;
        this.official = options.official;
        this.masks = options.masks;
        this.animated = options.animated;
        this.videos = options.videos;
        this.emojis = options.emojis;
        this.installed_date = options.installed_date;
        this.id = options.id;
        this.access_hash = options.access_hash;
        this.title = options.title;
        this.short_name = options.short_name;
        this.thumbs = options.thumbs;
        this.thumb_dc_id = options.thumb_dc_id;
        this.thumb_version = options.thumb_version;
        this.count = options.count;
        this.hash = options.hash;
    }
}

export class PredicateMessagesStickerSet {
    _ = 'messages.stickerSet' as const
    set: StickerSet
    packs: StickerPack[]
    documents: Document[]
    constructor(options: {
        set: StickerSet
        packs: StickerPack[]
        documents: Document[]
    }) {
        this.set = options.set;
        this.packs = options.packs;
        this.documents = options.documents;
    }
}

export class PredicateUser {
    _ = 'user' as const
    self?: true
    contact?: true
    mutual_contact?: true
    deleted?: true
    bot?: true
    bot_chat_history?: true
    bot_nochats?: true
    verified?: true
    restricted?: true
    min?: true
    bot_inline_geo?: true
    support?: true
    scam?: true
    apply_min_photo?: true
    fake?: true
    id: string
    access_hash?: string
    first_name?: string
    last_name?: string
    username?: string
    phone?: string
    photo?: UserProfilePhoto
    status?: UserStatus
    bot_info_version?: number
    restriction_reason?: RestrictionReason[]
    bot_inline_placeholder?: string
    lang_code?: string
    constructor(options: {
        self?: true
        contact?: true
        mutual_contact?: true
        deleted?: true
        bot?: true
        bot_chat_history?: true
        bot_nochats?: true
        verified?: true
        restricted?: true
        min?: true
        bot_inline_geo?: true
        support?: true
        scam?: true
        apply_min_photo?: true
        fake?: true
        id: string
        access_hash?: string
        first_name?: string
        last_name?: string
        username?: string
        phone?: string
        photo?: UserProfilePhoto
        status?: UserStatus
        bot_info_version?: number
        restriction_reason?: RestrictionReason[]
        bot_inline_placeholder?: string
        lang_code?: string
    }) {
        this.self = options.self;
        this.contact = options.contact;
        this.mutual_contact = options.mutual_contact;
        this.deleted = options.deleted;
        this.bot = options.bot;
        this.bot_chat_history = options.bot_chat_history;
        this.bot_nochats = options.bot_nochats;
        this.verified = options.verified;
        this.restricted = options.restricted;
        this.min = options.min;
        this.bot_inline_geo = options.bot_inline_geo;
        this.support = options.support;
        this.scam = options.scam;
        this.apply_min_photo = options.apply_min_photo;
        this.fake = options.fake;
        this.id = options.id;
        this.access_hash = options.access_hash;
        this.first_name = options.first_name;
        this.last_name = options.last_name;
        this.username = options.username;
        this.phone = options.phone;
        this.photo = options.photo;
        this.status = options.status;
        this.bot_info_version = options.bot_info_version;
        this.restriction_reason = options.restriction_reason;
        this.bot_inline_placeholder = options.bot_inline_placeholder;
        this.lang_code = options.lang_code;
    }
}

export class PredicateBotCommand {
    _ = 'botCommand' as const
    command: string
    description: string
    constructor(options: {
        command: string
        description: string
    }) {
        this.command = options.command;
        this.description = options.description;
    }
}

export class PredicateBotInfo {
    _ = 'botInfo' as const
    user_id: string
    description: string
    commands: BotCommand[]
    constructor(options: {
        user_id: string
        description: string
        commands: BotCommand[]
    }) {
        this.user_id = options.user_id;
        this.description = options.description;
        this.commands = options.commands;
    }
}

export class PredicateKeyboardButton {
    _ = 'keyboardButton' as const
    text: string
    constructor(options: {
        text: string
    }) {
        this.text = options.text;
    }
}

export class PredicateKeyboardButtonRow {
    _ = 'keyboardButtonRow' as const
    buttons: KeyboardButton[]
    constructor(options: {
        buttons: KeyboardButton[]
    }) {
        this.buttons = options.buttons;
    }
}

export class PredicateReplyKeyboardHide {
    _ = 'replyKeyboardHide' as const
    selective?: true
    constructor(options: {
        selective?: true
    } = {}) {
        this.selective = options.selective;
    }
}

export class PredicateReplyKeyboardForceReply {
    _ = 'replyKeyboardForceReply' as const
    single_use?: true
    selective?: true
    placeholder?: string
    constructor(options: {
        single_use?: true
        selective?: true
        placeholder?: string
    } = {}) {
        this.single_use = options.single_use;
        this.selective = options.selective;
        this.placeholder = options.placeholder;
    }
}

export class PredicateReplyKeyboardMarkup {
    _ = 'replyKeyboardMarkup' as const
    resize?: true
    single_use?: true
    selective?: true
    rows: KeyboardButtonRow[]
    placeholder?: string
    constructor(options: {
        resize?: true
        single_use?: true
        selective?: true
        rows: KeyboardButtonRow[]
        placeholder?: string
    }) {
        this.resize = options.resize;
        this.single_use = options.single_use;
        this.selective = options.selective;
        this.rows = options.rows;
        this.placeholder = options.placeholder;
    }
}

export class PredicateInputPeerUser {
    _ = 'inputPeerUser' as const
    user_id: string
    access_hash: string
    constructor(options: {
        user_id: string
        access_hash: string
    }) {
        this.user_id = options.user_id;
        this.access_hash = options.access_hash;
    }
}

export class PredicateInputUser {
    _ = 'inputUser' as const
    user_id: string
    access_hash: string
    constructor(options: {
        user_id: string
        access_hash: string
    }) {
        this.user_id = options.user_id;
        this.access_hash = options.access_hash;
    }
}

export class PredicateMessageEntityUnknown {
    _ = 'messageEntityUnknown' as const
    offset: number
    length: number
    constructor(options: {
        offset: number
        length: number
    }) {
        this.offset = options.offset;
        this.length = options.length;
    }
}

export class PredicateMessageEntityMention {
    _ = 'messageEntityMention' as const
    offset: number
    length: number
    constructor(options: {
        offset: number
        length: number
    }) {
        this.offset = options.offset;
        this.length = options.length;
    }
}

export class PredicateMessageEntityHashtag {
    _ = 'messageEntityHashtag' as const
    offset: number
    length: number
    constructor(options: {
        offset: number
        length: number
    }) {
        this.offset = options.offset;
        this.length = options.length;
    }
}

export class PredicateMessageEntityBotCommand {
    _ = 'messageEntityBotCommand' as const
    offset: number
    length: number
    constructor(options: {
        offset: number
        length: number
    }) {
        this.offset = options.offset;
        this.length = options.length;
    }
}

export class PredicateMessageEntityUrl {
    _ = 'messageEntityUrl' as const
    offset: number
    length: number
    constructor(options: {
        offset: number
        length: number
    }) {
        this.offset = options.offset;
        this.length = options.length;
    }
}

export class PredicateMessageEntityEmail {
    _ = 'messageEntityEmail' as const
    offset: number
    length: number
    constructor(options: {
        offset: number
        length: number
    }) {
        this.offset = options.offset;
        this.length = options.length;
    }
}

export class PredicateMessageEntityBold {
    _ = 'messageEntityBold' as const
    offset: number
    length: number
    constructor(options: {
        offset: number
        length: number
    }) {
        this.offset = options.offset;
        this.length = options.length;
    }
}

export class PredicateMessageEntityItalic {
    _ = 'messageEntityItalic' as const
    offset: number
    length: number
    constructor(options: {
        offset: number
        length: number
    }) {
        this.offset = options.offset;
        this.length = options.length;
    }
}

export class PredicateMessageEntityCode {
    _ = 'messageEntityCode' as const
    offset: number
    length: number
    constructor(options: {
        offset: number
        length: number
    }) {
        this.offset = options.offset;
        this.length = options.length;
    }
}

export class PredicateMessageEntityPre {
    _ = 'messageEntityPre' as const
    offset: number
    length: number
    language: string
    constructor(options: {
        offset: number
        length: number
        language: string
    }) {
        this.offset = options.offset;
        this.length = options.length;
        this.language = options.language;
    }
}

export class PredicateMessageEntityTextUrl {
    _ = 'messageEntityTextUrl' as const
    offset: number
    length: number
    url: string
    constructor(options: {
        offset: number
        length: number
        url: string
    }) {
        this.offset = options.offset;
        this.length = options.length;
        this.url = options.url;
    }
}

export class PredicateUpdateShortSentMessage {
    _ = 'updateShortSentMessage' as const
    out?: true
    id: number
    pts: number
    pts_count: number
    date: number
    media?: MessageMedia
    entities?: MessageEntity[]
    ttl_period?: number
    constructor(options: {
        out?: true
        id: number
        pts: number
        pts_count: number
        date: number
        media?: MessageMedia
        entities?: MessageEntity[]
        ttl_period?: number
    }) {
        this.out = options.out;
        this.id = options.id;
        this.pts = options.pts;
        this.pts_count = options.pts_count;
        this.date = options.date;
        this.media = options.media;
        this.entities = options.entities;
        this.ttl_period = options.ttl_period;
    }
}

export class PredicateInputChannelEmpty {
    _ = 'inputChannelEmpty' as const
}

export class PredicateInputChannel {
    _ = 'inputChannel' as const
    channel_id: string
    access_hash: string
    constructor(options: {
        channel_id: string
        access_hash: string
    }) {
        this.channel_id = options.channel_id;
        this.access_hash = options.access_hash;
    }
}

export class PredicatePeerChannel {
    _ = 'peerChannel' as const
    channel_id: string
    constructor(options: {
        channel_id: string
    }) {
        this.channel_id = options.channel_id;
    }
}

export class PredicateInputPeerChannel {
    _ = 'inputPeerChannel' as const
    channel_id: string
    access_hash: string
    constructor(options: {
        channel_id: string
        access_hash: string
    }) {
        this.channel_id = options.channel_id;
        this.access_hash = options.access_hash;
    }
}

export class PredicateChannel {
    _ = 'channel' as const
    creator?: true
    left?: true
    broadcast?: true
    verified?: true
    megagroup?: true
    restricted?: true
    signatures?: true
    min?: true
    scam?: true
    has_link?: true
    has_geo?: true
    slowmode_enabled?: true
    call_active?: true
    call_not_empty?: true
    fake?: true
    gigagroup?: true
    noforwards?: true
    join_to_send?: true
    join_request?: true
    id: string
    access_hash?: string
    title: string
    username?: string
    photo: ChatPhoto
    date: number
    restriction_reason?: RestrictionReason[]
    admin_rights?: ChatAdminRights
    banned_rights?: ChatBannedRights
    default_banned_rights?: ChatBannedRights
    participants_count?: number
    constructor(options: {
        creator?: true
        left?: true
        broadcast?: true
        verified?: true
        megagroup?: true
        restricted?: true
        signatures?: true
        min?: true
        scam?: true
        has_link?: true
        has_geo?: true
        slowmode_enabled?: true
        call_active?: true
        call_not_empty?: true
        fake?: true
        gigagroup?: true
        noforwards?: true
        join_to_send?: true
        join_request?: true
        id: string
        access_hash?: string
        title: string
        username?: string
        photo: ChatPhoto
        date: number
        restriction_reason?: RestrictionReason[]
        admin_rights?: ChatAdminRights
        banned_rights?: ChatBannedRights
        default_banned_rights?: ChatBannedRights
        participants_count?: number
    }) {
        this.creator = options.creator;
        this.left = options.left;
        this.broadcast = options.broadcast;
        this.verified = options.verified;
        this.megagroup = options.megagroup;
        this.restricted = options.restricted;
        this.signatures = options.signatures;
        this.min = options.min;
        this.scam = options.scam;
        this.has_link = options.has_link;
        this.has_geo = options.has_geo;
        this.slowmode_enabled = options.slowmode_enabled;
        this.call_active = options.call_active;
        this.call_not_empty = options.call_not_empty;
        this.fake = options.fake;
        this.gigagroup = options.gigagroup;
        this.noforwards = options.noforwards;
        this.join_to_send = options.join_to_send;
        this.join_request = options.join_request;
        this.id = options.id;
        this.access_hash = options.access_hash;
        this.title = options.title;
        this.username = options.username;
        this.photo = options.photo;
        this.date = options.date;
        this.restriction_reason = options.restriction_reason;
        this.admin_rights = options.admin_rights;
        this.banned_rights = options.banned_rights;
        this.default_banned_rights = options.default_banned_rights;
        this.participants_count = options.participants_count;
    }
}

export class PredicateChannelForbidden {
    _ = 'channelForbidden' as const
    broadcast?: true
    megagroup?: true
    id: string
    access_hash: string
    title: string
    until_date?: number
    constructor(options: {
        broadcast?: true
        megagroup?: true
        id: string
        access_hash: string
        title: string
        until_date?: number
    }) {
        this.broadcast = options.broadcast;
        this.megagroup = options.megagroup;
        this.id = options.id;
        this.access_hash = options.access_hash;
        this.title = options.title;
        this.until_date = options.until_date;
    }
}

export class PredicateContactsResolvedPeer {
    _ = 'contacts.resolvedPeer' as const
    peer: Peer
    chats: Chat[]
    users: User[]
    constructor(options: {
        peer: Peer
        chats: Chat[]
        users: User[]
    }) {
        this.peer = options.peer;
        this.chats = options.chats;
        this.users = options.users;
    }
}

export class PredicateChannelFull {
    _ = 'channelFull' as const
    can_view_participants?: true
    can_set_username?: true
    can_set_stickers?: true
    hidden_prehistory?: true
    can_set_location?: true
    has_scheduled?: true
    can_view_stats?: true
    blocked?: true
    id: string
    about: string
    participants_count?: number
    admins_count?: number
    kicked_count?: number
    banned_count?: number
    online_count?: number
    read_inbox_max_id: number
    read_outbox_max_id: number
    unread_count: number
    chat_photo: Photo
    notify_settings: PeerNotifySettings
    exported_invite?: ExportedChatInvite
    bot_info: BotInfo[]
    migrated_from_chat_id?: string
    migrated_from_max_id?: number
    pinned_msg_id?: number
    stickerset?: StickerSet
    available_min_id?: number
    folder_id?: number
    linked_chat_id?: string
    location?: ChannelLocation
    slowmode_seconds?: number
    slowmode_next_send_date?: number
    stats_dc?: number
    pts: number
    call?: InputGroupCall
    ttl_period?: number
    pending_suggestions?: string[]
    groupcall_default_join_as?: Peer
    theme_emoticon?: string
    requests_pending?: number
    recent_requesters?: string[]
    default_send_as?: Peer
    available_reactions?: string[]
    constructor(options: {
        can_view_participants?: true
        can_set_username?: true
        can_set_stickers?: true
        hidden_prehistory?: true
        can_set_location?: true
        has_scheduled?: true
        can_view_stats?: true
        blocked?: true
        id: string
        about: string
        participants_count?: number
        admins_count?: number
        kicked_count?: number
        banned_count?: number
        online_count?: number
        read_inbox_max_id: number
        read_outbox_max_id: number
        unread_count: number
        chat_photo: Photo
        notify_settings: PeerNotifySettings
        exported_invite?: ExportedChatInvite
        bot_info: BotInfo[]
        migrated_from_chat_id?: string
        migrated_from_max_id?: number
        pinned_msg_id?: number
        stickerset?: StickerSet
        available_min_id?: number
        folder_id?: number
        linked_chat_id?: string
        location?: ChannelLocation
        slowmode_seconds?: number
        slowmode_next_send_date?: number
        stats_dc?: number
        pts: number
        call?: InputGroupCall
        ttl_period?: number
        pending_suggestions?: string[]
        groupcall_default_join_as?: Peer
        theme_emoticon?: string
        requests_pending?: number
        recent_requesters?: string[]
        default_send_as?: Peer
        available_reactions?: string[]
    }) {
        this.can_view_participants = options.can_view_participants;
        this.can_set_username = options.can_set_username;
        this.can_set_stickers = options.can_set_stickers;
        this.hidden_prehistory = options.hidden_prehistory;
        this.can_set_location = options.can_set_location;
        this.has_scheduled = options.has_scheduled;
        this.can_view_stats = options.can_view_stats;
        this.blocked = options.blocked;
        this.id = options.id;
        this.about = options.about;
        this.participants_count = options.participants_count;
        this.admins_count = options.admins_count;
        this.kicked_count = options.kicked_count;
        this.banned_count = options.banned_count;
        this.online_count = options.online_count;
        this.read_inbox_max_id = options.read_inbox_max_id;
        this.read_outbox_max_id = options.read_outbox_max_id;
        this.unread_count = options.unread_count;
        this.chat_photo = options.chat_photo;
        this.notify_settings = options.notify_settings;
        this.exported_invite = options.exported_invite;
        this.bot_info = options.bot_info;
        this.migrated_from_chat_id = options.migrated_from_chat_id;
        this.migrated_from_max_id = options.migrated_from_max_id;
        this.pinned_msg_id = options.pinned_msg_id;
        this.stickerset = options.stickerset;
        this.available_min_id = options.available_min_id;
        this.folder_id = options.folder_id;
        this.linked_chat_id = options.linked_chat_id;
        this.location = options.location;
        this.slowmode_seconds = options.slowmode_seconds;
        this.slowmode_next_send_date = options.slowmode_next_send_date;
        this.stats_dc = options.stats_dc;
        this.pts = options.pts;
        this.call = options.call;
        this.ttl_period = options.ttl_period;
        this.pending_suggestions = options.pending_suggestions;
        this.groupcall_default_join_as = options.groupcall_default_join_as;
        this.theme_emoticon = options.theme_emoticon;
        this.requests_pending = options.requests_pending;
        this.recent_requesters = options.recent_requesters;
        this.default_send_as = options.default_send_as;
        this.available_reactions = options.available_reactions;
    }
}

export class PredicateMessageRange {
    _ = 'messageRange' as const
    min_id: number
    max_id: number
    constructor(options: {
        min_id: number
        max_id: number
    }) {
        this.min_id = options.min_id;
        this.max_id = options.max_id;
    }
}

export class PredicateMessagesChannelMessages {
    _ = 'messages.channelMessages' as const
    inexact?: true
    pts: number
    count: number
    offset_id_offset?: number
    messages: Message[]
    chats: Chat[]
    users: User[]
    constructor(options: {
        inexact?: true
        pts: number
        count: number
        offset_id_offset?: number
        messages: Message[]
        chats: Chat[]
        users: User[]
    }) {
        this.inexact = options.inexact;
        this.pts = options.pts;
        this.count = options.count;
        this.offset_id_offset = options.offset_id_offset;
        this.messages = options.messages;
        this.chats = options.chats;
        this.users = options.users;
    }
}

export class PredicateMessageActionChannelCreate {
    _ = 'messageActionChannelCreate' as const
    title: string
    constructor(options: {
        title: string
    }) {
        this.title = options.title;
    }
}

export class PredicateUpdateChannelTooLong {
    _ = 'updateChannelTooLong' as const
    channel_id: string
    pts?: number
    constructor(options: {
        channel_id: string
        pts?: number
    }) {
        this.channel_id = options.channel_id;
        this.pts = options.pts;
    }
}

export class PredicateUpdateChannel {
    _ = 'updateChannel' as const
    channel_id: string
    constructor(options: {
        channel_id: string
    }) {
        this.channel_id = options.channel_id;
    }
}

export class PredicateUpdateNewChannelMessage {
    _ = 'updateNewChannelMessage' as const
    message: Message
    pts: number
    pts_count: number
    constructor(options: {
        message: Message
        pts: number
        pts_count: number
    }) {
        this.message = options.message;
        this.pts = options.pts;
        this.pts_count = options.pts_count;
    }
}

export class PredicateUpdateReadChannelInbox {
    _ = 'updateReadChannelInbox' as const
    folder_id?: number
    channel_id: string
    max_id: number
    still_unread_count: number
    pts: number
    constructor(options: {
        folder_id?: number
        channel_id: string
        max_id: number
        still_unread_count: number
        pts: number
    }) {
        this.folder_id = options.folder_id;
        this.channel_id = options.channel_id;
        this.max_id = options.max_id;
        this.still_unread_count = options.still_unread_count;
        this.pts = options.pts;
    }
}

export class PredicateUpdateDeleteChannelMessages {
    _ = 'updateDeleteChannelMessages' as const
    channel_id: string
    messages: number[]
    pts: number
    pts_count: number
    constructor(options: {
        channel_id: string
        messages: number[]
        pts: number
        pts_count: number
    }) {
        this.channel_id = options.channel_id;
        this.messages = options.messages;
        this.pts = options.pts;
        this.pts_count = options.pts_count;
    }
}

export class PredicateUpdateChannelMessageViews {
    _ = 'updateChannelMessageViews' as const
    channel_id: string
    id: number
    views: number
    constructor(options: {
        channel_id: string
        id: number
        views: number
    }) {
        this.channel_id = options.channel_id;
        this.id = options.id;
        this.views = options.views;
    }
}

export class PredicateUpdatesChannelDifferenceEmpty {
    _ = 'updates.channelDifferenceEmpty' as const
    final?: true
    pts: number
    timeout?: number
    constructor(options: {
        final?: true
        pts: number
        timeout?: number
    }) {
        this.final = options.final;
        this.pts = options.pts;
        this.timeout = options.timeout;
    }
}

export class PredicateUpdatesChannelDifferenceTooLong {
    _ = 'updates.channelDifferenceTooLong' as const
    final?: true
    timeout?: number
    dialog: Dialog
    messages: Message[]
    chats: Chat[]
    users: User[]
    constructor(options: {
        final?: true
        timeout?: number
        dialog: Dialog
        messages: Message[]
        chats: Chat[]
        users: User[]
    }) {
        this.final = options.final;
        this.timeout = options.timeout;
        this.dialog = options.dialog;
        this.messages = options.messages;
        this.chats = options.chats;
        this.users = options.users;
    }
}

export class PredicateUpdatesChannelDifference {
    _ = 'updates.channelDifference' as const
    final?: true
    pts: number
    timeout?: number
    new_messages: Message[]
    other_updates: Update[]
    chats: Chat[]
    users: User[]
    constructor(options: {
        final?: true
        pts: number
        timeout?: number
        new_messages: Message[]
        other_updates: Update[]
        chats: Chat[]
        users: User[]
    }) {
        this.final = options.final;
        this.pts = options.pts;
        this.timeout = options.timeout;
        this.new_messages = options.new_messages;
        this.other_updates = options.other_updates;
        this.chats = options.chats;
        this.users = options.users;
    }
}

export class PredicateChannelMessagesFilterEmpty {
    _ = 'channelMessagesFilterEmpty' as const
}

export class PredicateChannelMessagesFilter {
    _ = 'channelMessagesFilter' as const
    exclude_new_messages?: true
    ranges: MessageRange[]
    constructor(options: {
        exclude_new_messages?: true
        ranges: MessageRange[]
    }) {
        this.exclude_new_messages = options.exclude_new_messages;
        this.ranges = options.ranges;
    }
}

export class PredicateChannelParticipant {
    _ = 'channelParticipant' as const
    user_id: string
    date: number
    constructor(options: {
        user_id: string
        date: number
    }) {
        this.user_id = options.user_id;
        this.date = options.date;
    }
}

export class PredicateChannelParticipantSelf {
    _ = 'channelParticipantSelf' as const
    via_request?: true
    user_id: string
    inviter_id: string
    date: number
    constructor(options: {
        via_request?: true
        user_id: string
        inviter_id: string
        date: number
    }) {
        this.via_request = options.via_request;
        this.user_id = options.user_id;
        this.inviter_id = options.inviter_id;
        this.date = options.date;
    }
}

export class PredicateChannelParticipantCreator {
    _ = 'channelParticipantCreator' as const
    user_id: string
    admin_rights: ChatAdminRights
    rank?: string
    constructor(options: {
        user_id: string
        admin_rights: ChatAdminRights
        rank?: string
    }) {
        this.user_id = options.user_id;
        this.admin_rights = options.admin_rights;
        this.rank = options.rank;
    }
}

export class PredicateChannelParticipantsRecent {
    _ = 'channelParticipantsRecent' as const
}

export class PredicateChannelParticipantsAdmins {
    _ = 'channelParticipantsAdmins' as const
}

export class PredicateChannelParticipantsKicked {
    _ = 'channelParticipantsKicked' as const
    q: string
    constructor(options: {
        q: string
    }) {
        this.q = options.q;
    }
}

export class PredicateChannelsChannelParticipants {
    _ = 'channels.channelParticipants' as const
    count: number
    participants: ChannelParticipant[]
    chats: Chat[]
    users: User[]
    constructor(options: {
        count: number
        participants: ChannelParticipant[]
        chats: Chat[]
        users: User[]
    }) {
        this.count = options.count;
        this.participants = options.participants;
        this.chats = options.chats;
        this.users = options.users;
    }
}

export class PredicateChannelsChannelParticipant {
    _ = 'channels.channelParticipant' as const
    participant: ChannelParticipant
    chats: Chat[]
    users: User[]
    constructor(options: {
        participant: ChannelParticipant
        chats: Chat[]
        users: User[]
    }) {
        this.participant = options.participant;
        this.chats = options.chats;
        this.users = options.users;
    }
}

export class PredicateChatParticipantCreator {
    _ = 'chatParticipantCreator' as const
    user_id: string
    constructor(options: {
        user_id: string
    }) {
        this.user_id = options.user_id;
    }
}

export class PredicateChatParticipantAdmin {
    _ = 'chatParticipantAdmin' as const
    user_id: string
    inviter_id: string
    date: number
    constructor(options: {
        user_id: string
        inviter_id: string
        date: number
    }) {
        this.user_id = options.user_id;
        this.inviter_id = options.inviter_id;
        this.date = options.date;
    }
}

export class PredicateUpdateChatParticipantAdmin {
    _ = 'updateChatParticipantAdmin' as const
    chat_id: string
    user_id: string
    is_admin: boolean
    version: number
    constructor(options: {
        chat_id: string
        user_id: string
        is_admin: boolean
        version: number
    }) {
        this.chat_id = options.chat_id;
        this.user_id = options.user_id;
        this.is_admin = options.is_admin;
        this.version = options.version;
    }
}

export class PredicateMessageActionChatMigrateTo {
    _ = 'messageActionChatMigrateTo' as const
    channel_id: string
    constructor(options: {
        channel_id: string
    }) {
        this.channel_id = options.channel_id;
    }
}

export class PredicateMessageActionChannelMigrateFrom {
    _ = 'messageActionChannelMigrateFrom' as const
    title: string
    chat_id: string
    constructor(options: {
        title: string
        chat_id: string
    }) {
        this.title = options.title;
        this.chat_id = options.chat_id;
    }
}

export class PredicateChannelParticipantsBots {
    _ = 'channelParticipantsBots' as const
}

export class PredicateHelpTermsOfService {
    _ = 'help.termsOfService' as const
    popup?: true
    id: DataJSON
    text: string
    entities: MessageEntity[]
    min_age_confirm?: number
    constructor(options: {
        popup?: true
        id: DataJSON
        text: string
        entities: MessageEntity[]
        min_age_confirm?: number
    }) {
        this.popup = options.popup;
        this.id = options.id;
        this.text = options.text;
        this.entities = options.entities;
        this.min_age_confirm = options.min_age_confirm;
    }
}

export class PredicateUpdateNewStickerSet {
    _ = 'updateNewStickerSet' as const
    stickerset: MessagesStickerSet
    constructor(options: {
        stickerset: MessagesStickerSet
    }) {
        this.stickerset = options.stickerset;
    }
}

export class PredicateUpdateStickerSetsOrder {
    _ = 'updateStickerSetsOrder' as const
    masks?: true
    emojis?: true
    order: string[]
    constructor(options: {
        masks?: true
        emojis?: true
        order: string[]
    }) {
        this.masks = options.masks;
        this.emojis = options.emojis;
        this.order = options.order;
    }
}

export class PredicateUpdateStickerSets {
    _ = 'updateStickerSets' as const
}

export class PredicateMessagesSavedGifsNotModified {
    _ = 'messages.savedGifsNotModified' as const
}

export class PredicateMessagesSavedGifs {
    _ = 'messages.savedGifs' as const
    hash: string
    gifs: Document[]
    constructor(options: {
        hash: string
        gifs: Document[]
    }) {
        this.hash = options.hash;
        this.gifs = options.gifs;
    }
}

export class PredicateUpdateSavedGifs {
    _ = 'updateSavedGifs' as const
}

export class PredicateInputBotInlineMessageMediaAuto {
    _ = 'inputBotInlineMessageMediaAuto' as const
    message: string
    entities?: MessageEntity[]
    reply_markup?: ReplyMarkup
    constructor(options: {
        message: string
        entities?: MessageEntity[]
        reply_markup?: ReplyMarkup
    }) {
        this.message = options.message;
        this.entities = options.entities;
        this.reply_markup = options.reply_markup;
    }
}

export class PredicateInputBotInlineMessageText {
    _ = 'inputBotInlineMessageText' as const
    no_webpage?: true
    message: string
    entities?: MessageEntity[]
    reply_markup?: ReplyMarkup
    constructor(options: {
        no_webpage?: true
        message: string
        entities?: MessageEntity[]
        reply_markup?: ReplyMarkup
    }) {
        this.no_webpage = options.no_webpage;
        this.message = options.message;
        this.entities = options.entities;
        this.reply_markup = options.reply_markup;
    }
}

export class PredicateInputBotInlineResult {
    _ = 'inputBotInlineResult' as const
    id: string
    type: string
    title?: string
    description?: string
    url?: string
    thumb?: InputWebDocument
    content?: InputWebDocument
    send_message: InputBotInlineMessage
    constructor(options: {
        id: string
        type: string
        title?: string
        description?: string
        url?: string
        thumb?: InputWebDocument
        content?: InputWebDocument
        send_message: InputBotInlineMessage
    }) {
        this.id = options.id;
        this.type = options.type;
        this.title = options.title;
        this.description = options.description;
        this.url = options.url;
        this.thumb = options.thumb;
        this.content = options.content;
        this.send_message = options.send_message;
    }
}

export class PredicateBotInlineMessageMediaAuto {
    _ = 'botInlineMessageMediaAuto' as const
    message: string
    entities?: MessageEntity[]
    reply_markup?: ReplyMarkup
    constructor(options: {
        message: string
        entities?: MessageEntity[]
        reply_markup?: ReplyMarkup
    }) {
        this.message = options.message;
        this.entities = options.entities;
        this.reply_markup = options.reply_markup;
    }
}

export class PredicateBotInlineMessageText {
    _ = 'botInlineMessageText' as const
    no_webpage?: true
    message: string
    entities?: MessageEntity[]
    reply_markup?: ReplyMarkup
    constructor(options: {
        no_webpage?: true
        message: string
        entities?: MessageEntity[]
        reply_markup?: ReplyMarkup
    }) {
        this.no_webpage = options.no_webpage;
        this.message = options.message;
        this.entities = options.entities;
        this.reply_markup = options.reply_markup;
    }
}

export class PredicateBotInlineResult {
    _ = 'botInlineResult' as const
    id: string
    type: string
    title?: string
    description?: string
    url?: string
    thumb?: WebDocument
    content?: WebDocument
    send_message: BotInlineMessage
    constructor(options: {
        id: string
        type: string
        title?: string
        description?: string
        url?: string
        thumb?: WebDocument
        content?: WebDocument
        send_message: BotInlineMessage
    }) {
        this.id = options.id;
        this.type = options.type;
        this.title = options.title;
        this.description = options.description;
        this.url = options.url;
        this.thumb = options.thumb;
        this.content = options.content;
        this.send_message = options.send_message;
    }
}

export class PredicateMessagesBotResults {
    _ = 'messages.botResults' as const
    gallery?: true
    query_id: string
    next_offset?: string
    switch_pm?: InlineBotSwitchPM
    results: BotInlineResult[]
    cache_time: number
    users: User[]
    constructor(options: {
        gallery?: true
        query_id: string
        next_offset?: string
        switch_pm?: InlineBotSwitchPM
        results: BotInlineResult[]
        cache_time: number
        users: User[]
    }) {
        this.gallery = options.gallery;
        this.query_id = options.query_id;
        this.next_offset = options.next_offset;
        this.switch_pm = options.switch_pm;
        this.results = options.results;
        this.cache_time = options.cache_time;
        this.users = options.users;
    }
}

export class PredicateUpdateBotInlineQuery {
    _ = 'updateBotInlineQuery' as const
    query_id: string
    user_id: string
    query: string
    geo?: GeoPoint
    peer_type?: InlineQueryPeerType
    offset: string
    constructor(options: {
        query_id: string
        user_id: string
        query: string
        geo?: GeoPoint
        peer_type?: InlineQueryPeerType
        offset: string
    }) {
        this.query_id = options.query_id;
        this.user_id = options.user_id;
        this.query = options.query;
        this.geo = options.geo;
        this.peer_type = options.peer_type;
        this.offset = options.offset;
    }
}

export class PredicateUpdateBotInlineSend {
    _ = 'updateBotInlineSend' as const
    user_id: string
    query: string
    geo?: GeoPoint
    id: string
    msg_id?: InputBotInlineMessageID
    constructor(options: {
        user_id: string
        query: string
        geo?: GeoPoint
        id: string
        msg_id?: InputBotInlineMessageID
    }) {
        this.user_id = options.user_id;
        this.query = options.query;
        this.geo = options.geo;
        this.id = options.id;
        this.msg_id = options.msg_id;
    }
}

export class PredicateInputMessagesFilterVoice {
    _ = 'inputMessagesFilterVoice' as const
}

export class PredicateInputMessagesFilterMusic {
    _ = 'inputMessagesFilterMusic' as const
}

export class PredicateInputPrivacyKeyChatInvite {
    _ = 'inputPrivacyKeyChatInvite' as const
}

export class PredicatePrivacyKeyChatInvite {
    _ = 'privacyKeyChatInvite' as const
}

export class PredicateExportedMessageLink {
    _ = 'exportedMessageLink' as const
    link: string
    html: string
    constructor(options: {
        link: string
        html: string
    }) {
        this.link = options.link;
        this.html = options.html;
    }
}

export class PredicateMessageFwdHeader {
    _ = 'messageFwdHeader' as const
    imported?: true
    from_id?: Peer
    from_name?: string
    date: number
    channel_post?: number
    post_author?: string
    saved_from_peer?: Peer
    saved_from_msg_id?: number
    psa_type?: string
    constructor(options: {
        imported?: true
        from_id?: Peer
        from_name?: string
        date: number
        channel_post?: number
        post_author?: string
        saved_from_peer?: Peer
        saved_from_msg_id?: number
        psa_type?: string
    }) {
        this.imported = options.imported;
        this.from_id = options.from_id;
        this.from_name = options.from_name;
        this.date = options.date;
        this.channel_post = options.channel_post;
        this.post_author = options.post_author;
        this.saved_from_peer = options.saved_from_peer;
        this.saved_from_msg_id = options.saved_from_msg_id;
        this.psa_type = options.psa_type;
    }
}

export class PredicateUpdateEditChannelMessage {
    _ = 'updateEditChannelMessage' as const
    message: Message
    pts: number
    pts_count: number
    constructor(options: {
        message: Message
        pts: number
        pts_count: number
    }) {
        this.message = options.message;
        this.pts = options.pts;
        this.pts_count = options.pts_count;
    }
}

export class PredicateMessageActionPinMessage {
    _ = 'messageActionPinMessage' as const
}

export class PredicateAuthCodeTypeSms {
    _ = 'auth.codeTypeSms' as const
}

export class PredicateAuthCodeTypeCall {
    _ = 'auth.codeTypeCall' as const
}

export class PredicateAuthCodeTypeFlashCall {
    _ = 'auth.codeTypeFlashCall' as const
}

export class PredicateAuthSentCodeTypeApp {
    _ = 'auth.sentCodeTypeApp' as const
    length: number
    constructor(options: {
        length: number
    }) {
        this.length = options.length;
    }
}

export class PredicateAuthSentCodeTypeSms {
    _ = 'auth.sentCodeTypeSms' as const
    length: number
    constructor(options: {
        length: number
    }) {
        this.length = options.length;
    }
}

export class PredicateAuthSentCodeTypeCall {
    _ = 'auth.sentCodeTypeCall' as const
    length: number
    constructor(options: {
        length: number
    }) {
        this.length = options.length;
    }
}

export class PredicateAuthSentCodeTypeFlashCall {
    _ = 'auth.sentCodeTypeFlashCall' as const
    pattern: string
    constructor(options: {
        pattern: string
    }) {
        this.pattern = options.pattern;
    }
}

export class PredicateKeyboardButtonUrl {
    _ = 'keyboardButtonUrl' as const
    text: string
    url: string
    constructor(options: {
        text: string
        url: string
    }) {
        this.text = options.text;
        this.url = options.url;
    }
}

export class PredicateKeyboardButtonCallback {
    _ = 'keyboardButtonCallback' as const
    requires_password?: true
    text: string
    data: Uint8Array
    constructor(options: {
        requires_password?: true
        text: string
        data: Uint8Array
    }) {
        this.requires_password = options.requires_password;
        this.text = options.text;
        this.data = options.data;
    }
}

export class PredicateKeyboardButtonRequestPhone {
    _ = 'keyboardButtonRequestPhone' as const
    text: string
    constructor(options: {
        text: string
    }) {
        this.text = options.text;
    }
}

export class PredicateKeyboardButtonRequestGeoLocation {
    _ = 'keyboardButtonRequestGeoLocation' as const
    text: string
    constructor(options: {
        text: string
    }) {
        this.text = options.text;
    }
}

export class PredicateKeyboardButtonSwitchInline {
    _ = 'keyboardButtonSwitchInline' as const
    same_peer?: true
    text: string
    query: string
    constructor(options: {
        same_peer?: true
        text: string
        query: string
    }) {
        this.same_peer = options.same_peer;
        this.text = options.text;
        this.query = options.query;
    }
}

export class PredicateReplyInlineMarkup {
    _ = 'replyInlineMarkup' as const
    rows: KeyboardButtonRow[]
    constructor(options: {
        rows: KeyboardButtonRow[]
    }) {
        this.rows = options.rows;
    }
}

export class PredicateMessagesBotCallbackAnswer {
    _ = 'messages.botCallbackAnswer' as const
    alert?: true
    has_url?: true
    native_ui?: true
    message?: string
    url?: string
    cache_time: number
    constructor(options: {
        alert?: true
        has_url?: true
        native_ui?: true
        message?: string
        url?: string
        cache_time: number
    }) {
        this.alert = options.alert;
        this.has_url = options.has_url;
        this.native_ui = options.native_ui;
        this.message = options.message;
        this.url = options.url;
        this.cache_time = options.cache_time;
    }
}

export class PredicateUpdateBotCallbackQuery {
    _ = 'updateBotCallbackQuery' as const
    query_id: string
    user_id: string
    peer: Peer
    msg_id: number
    chat_instance: string
    data?: Uint8Array
    game_short_name?: string
    constructor(options: {
        query_id: string
        user_id: string
        peer: Peer
        msg_id: number
        chat_instance: string
        data?: Uint8Array
        game_short_name?: string
    }) {
        this.query_id = options.query_id;
        this.user_id = options.user_id;
        this.peer = options.peer;
        this.msg_id = options.msg_id;
        this.chat_instance = options.chat_instance;
        this.data = options.data;
        this.game_short_name = options.game_short_name;
    }
}

export class PredicateMessagesMessageEditData {
    _ = 'messages.messageEditData' as const
    caption?: true
    constructor(options: {
        caption?: true
    } = {}) {
        this.caption = options.caption;
    }
}

export class PredicateUpdateEditMessage {
    _ = 'updateEditMessage' as const
    message: Message
    pts: number
    pts_count: number
    constructor(options: {
        message: Message
        pts: number
        pts_count: number
    }) {
        this.message = options.message;
        this.pts = options.pts;
        this.pts_count = options.pts_count;
    }
}

export class PredicateInputBotInlineMessageMediaGeo {
    _ = 'inputBotInlineMessageMediaGeo' as const
    geo_point: InputGeoPoint
    heading?: number
    period?: number
    proximity_notification_radius?: number
    reply_markup?: ReplyMarkup
    constructor(options: {
        geo_point: InputGeoPoint
        heading?: number
        period?: number
        proximity_notification_radius?: number
        reply_markup?: ReplyMarkup
    }) {
        this.geo_point = options.geo_point;
        this.heading = options.heading;
        this.period = options.period;
        this.proximity_notification_radius = options.proximity_notification_radius;
        this.reply_markup = options.reply_markup;
    }
}

export class PredicateInputBotInlineMessageMediaVenue {
    _ = 'inputBotInlineMessageMediaVenue' as const
    geo_point: InputGeoPoint
    title: string
    address: string
    provider: string
    venue_id: string
    venue_type: string
    reply_markup?: ReplyMarkup
    constructor(options: {
        geo_point: InputGeoPoint
        title: string
        address: string
        provider: string
        venue_id: string
        venue_type: string
        reply_markup?: ReplyMarkup
    }) {
        this.geo_point = options.geo_point;
        this.title = options.title;
        this.address = options.address;
        this.provider = options.provider;
        this.venue_id = options.venue_id;
        this.venue_type = options.venue_type;
        this.reply_markup = options.reply_markup;
    }
}

export class PredicateInputBotInlineMessageMediaContact {
    _ = 'inputBotInlineMessageMediaContact' as const
    phone_number: string
    first_name: string
    last_name: string
    vcard: string
    reply_markup?: ReplyMarkup
    constructor(options: {
        phone_number: string
        first_name: string
        last_name: string
        vcard: string
        reply_markup?: ReplyMarkup
    }) {
        this.phone_number = options.phone_number;
        this.first_name = options.first_name;
        this.last_name = options.last_name;
        this.vcard = options.vcard;
        this.reply_markup = options.reply_markup;
    }
}

export class PredicateBotInlineMessageMediaGeo {
    _ = 'botInlineMessageMediaGeo' as const
    geo: GeoPoint
    heading?: number
    period?: number
    proximity_notification_radius?: number
    reply_markup?: ReplyMarkup
    constructor(options: {
        geo: GeoPoint
        heading?: number
        period?: number
        proximity_notification_radius?: number
        reply_markup?: ReplyMarkup
    }) {
        this.geo = options.geo;
        this.heading = options.heading;
        this.period = options.period;
        this.proximity_notification_radius = options.proximity_notification_radius;
        this.reply_markup = options.reply_markup;
    }
}

export class PredicateBotInlineMessageMediaVenue {
    _ = 'botInlineMessageMediaVenue' as const
    geo: GeoPoint
    title: string
    address: string
    provider: string
    venue_id: string
    venue_type: string
    reply_markup?: ReplyMarkup
    constructor(options: {
        geo: GeoPoint
        title: string
        address: string
        provider: string
        venue_id: string
        venue_type: string
        reply_markup?: ReplyMarkup
    }) {
        this.geo = options.geo;
        this.title = options.title;
        this.address = options.address;
        this.provider = options.provider;
        this.venue_id = options.venue_id;
        this.venue_type = options.venue_type;
        this.reply_markup = options.reply_markup;
    }
}

export class PredicateBotInlineMessageMediaContact {
    _ = 'botInlineMessageMediaContact' as const
    phone_number: string
    first_name: string
    last_name: string
    vcard: string
    reply_markup?: ReplyMarkup
    constructor(options: {
        phone_number: string
        first_name: string
        last_name: string
        vcard: string
        reply_markup?: ReplyMarkup
    }) {
        this.phone_number = options.phone_number;
        this.first_name = options.first_name;
        this.last_name = options.last_name;
        this.vcard = options.vcard;
        this.reply_markup = options.reply_markup;
    }
}

export class PredicateInputBotInlineResultPhoto {
    _ = 'inputBotInlineResultPhoto' as const
    id: string
    type: string
    photo: InputPhoto
    send_message: InputBotInlineMessage
    constructor(options: {
        id: string
        type: string
        photo: InputPhoto
        send_message: InputBotInlineMessage
    }) {
        this.id = options.id;
        this.type = options.type;
        this.photo = options.photo;
        this.send_message = options.send_message;
    }
}

export class PredicateInputBotInlineResultDocument {
    _ = 'inputBotInlineResultDocument' as const
    id: string
    type: string
    title?: string
    description?: string
    document: InputDocument
    send_message: InputBotInlineMessage
    constructor(options: {
        id: string
        type: string
        title?: string
        description?: string
        document: InputDocument
        send_message: InputBotInlineMessage
    }) {
        this.id = options.id;
        this.type = options.type;
        this.title = options.title;
        this.description = options.description;
        this.document = options.document;
        this.send_message = options.send_message;
    }
}

export class PredicateBotInlineMediaResult {
    _ = 'botInlineMediaResult' as const
    id: string
    type: string
    photo?: Photo
    document?: Document
    title?: string
    description?: string
    send_message: BotInlineMessage
    constructor(options: {
        id: string
        type: string
        photo?: Photo
        document?: Document
        title?: string
        description?: string
        send_message: BotInlineMessage
    }) {
        this.id = options.id;
        this.type = options.type;
        this.photo = options.photo;
        this.document = options.document;
        this.title = options.title;
        this.description = options.description;
        this.send_message = options.send_message;
    }
}

export class PredicateInputBotInlineMessageID {
    _ = 'inputBotInlineMessageID' as const
    dc_id: number
    id: string
    access_hash: string
    constructor(options: {
        dc_id: number
        id: string
        access_hash: string
    }) {
        this.dc_id = options.dc_id;
        this.id = options.id;
        this.access_hash = options.access_hash;
    }
}

export class PredicateUpdateInlineBotCallbackQuery {
    _ = 'updateInlineBotCallbackQuery' as const
    query_id: string
    user_id: string
    msg_id: InputBotInlineMessageID
    chat_instance: string
    data?: Uint8Array
    game_short_name?: string
    constructor(options: {
        query_id: string
        user_id: string
        msg_id: InputBotInlineMessageID
        chat_instance: string
        data?: Uint8Array
        game_short_name?: string
    }) {
        this.query_id = options.query_id;
        this.user_id = options.user_id;
        this.msg_id = options.msg_id;
        this.chat_instance = options.chat_instance;
        this.data = options.data;
        this.game_short_name = options.game_short_name;
    }
}

export class PredicateInlineBotSwitchPM {
    _ = 'inlineBotSwitchPM' as const
    text: string
    start_param: string
    constructor(options: {
        text: string
        start_param: string
    }) {
        this.text = options.text;
        this.start_param = options.start_param;
    }
}

export class PredicateMessagesPeerDialogs {
    _ = 'messages.peerDialogs' as const
    dialogs: Dialog[]
    messages: Message[]
    chats: Chat[]
    users: User[]
    state: UpdatesState
    constructor(options: {
        dialogs: Dialog[]
        messages: Message[]
        chats: Chat[]
        users: User[]
        state: UpdatesState
    }) {
        this.dialogs = options.dialogs;
        this.messages = options.messages;
        this.chats = options.chats;
        this.users = options.users;
        this.state = options.state;
    }
}

export class PredicateTopPeer {
    _ = 'topPeer' as const
    peer: Peer
    rating: number
    constructor(options: {
        peer: Peer
        rating: number
    }) {
        this.peer = options.peer;
        this.rating = options.rating;
    }
}

export class PredicateTopPeerCategoryBotsPM {
    _ = 'topPeerCategoryBotsPM' as const
}

export class PredicateTopPeerCategoryBotsInline {
    _ = 'topPeerCategoryBotsInline' as const
}

export class PredicateTopPeerCategoryCorrespondents {
    _ = 'topPeerCategoryCorrespondents' as const
}

export class PredicateTopPeerCategoryGroups {
    _ = 'topPeerCategoryGroups' as const
}

export class PredicateTopPeerCategoryChannels {
    _ = 'topPeerCategoryChannels' as const
}

export class PredicateTopPeerCategoryPeers {
    _ = 'topPeerCategoryPeers' as const
    category: TopPeerCategory
    count: number
    peers: TopPeer[]
    constructor(options: {
        category: TopPeerCategory
        count: number
        peers: TopPeer[]
    }) {
        this.category = options.category;
        this.count = options.count;
        this.peers = options.peers;
    }
}

export class PredicateContactsTopPeersNotModified {
    _ = 'contacts.topPeersNotModified' as const
}

export class PredicateContactsTopPeers {
    _ = 'contacts.topPeers' as const
    categories: TopPeerCategoryPeers[]
    chats: Chat[]
    users: User[]
    constructor(options: {
        categories: TopPeerCategoryPeers[]
        chats: Chat[]
        users: User[]
    }) {
        this.categories = options.categories;
        this.chats = options.chats;
        this.users = options.users;
    }
}

export class PredicateMessageEntityMentionName {
    _ = 'messageEntityMentionName' as const
    offset: number
    length: number
    user_id: string
    constructor(options: {
        offset: number
        length: number
        user_id: string
    }) {
        this.offset = options.offset;
        this.length = options.length;
        this.user_id = options.user_id;
    }
}

export class PredicateInputMessageEntityMentionName {
    _ = 'inputMessageEntityMentionName' as const
    offset: number
    length: number
    user_id: InputUser
    constructor(options: {
        offset: number
        length: number
        user_id: InputUser
    }) {
        this.offset = options.offset;
        this.length = options.length;
        this.user_id = options.user_id;
    }
}

export class PredicateInputMessagesFilterChatPhotos {
    _ = 'inputMessagesFilterChatPhotos' as const
}

export class PredicateUpdateReadChannelOutbox {
    _ = 'updateReadChannelOutbox' as const
    channel_id: string
    max_id: number
    constructor(options: {
        channel_id: string
        max_id: number
    }) {
        this.channel_id = options.channel_id;
        this.max_id = options.max_id;
    }
}

export class PredicateUpdateDraftMessage {
    _ = 'updateDraftMessage' as const
    peer: Peer
    draft: DraftMessage
    constructor(options: {
        peer: Peer
        draft: DraftMessage
    }) {
        this.peer = options.peer;
        this.draft = options.draft;
    }
}

export class PredicateDraftMessageEmpty {
    _ = 'draftMessageEmpty' as const
    date?: number
    constructor(options: {
        date?: number
    } = {}) {
        this.date = options.date;
    }
}

export class PredicateDraftMessage {
    _ = 'draftMessage' as const
    no_webpage?: true
    reply_to_msg_id?: number
    message: string
    entities?: MessageEntity[]
    date: number
    constructor(options: {
        no_webpage?: true
        reply_to_msg_id?: number
        message: string
        entities?: MessageEntity[]
        date: number
    }) {
        this.no_webpage = options.no_webpage;
        this.reply_to_msg_id = options.reply_to_msg_id;
        this.message = options.message;
        this.entities = options.entities;
        this.date = options.date;
    }
}

export class PredicateMessageActionHistoryClear {
    _ = 'messageActionHistoryClear' as const
}

export class PredicateMessagesFeaturedStickersNotModified {
    _ = 'messages.featuredStickersNotModified' as const
    count: number
    constructor(options: {
        count: number
    }) {
        this.count = options.count;
    }
}

export class PredicateMessagesFeaturedStickers {
    _ = 'messages.featuredStickers' as const
    hash: string
    count: number
    sets: StickerSetCovered[]
    unread: string[]
    constructor(options: {
        hash: string
        count: number
        sets: StickerSetCovered[]
        unread: string[]
    }) {
        this.hash = options.hash;
        this.count = options.count;
        this.sets = options.sets;
        this.unread = options.unread;
    }
}

export class PredicateUpdateReadFeaturedStickers {
    _ = 'updateReadFeaturedStickers' as const
}

export class PredicateMessagesRecentStickersNotModified {
    _ = 'messages.recentStickersNotModified' as const
}

export class PredicateMessagesRecentStickers {
    _ = 'messages.recentStickers' as const
    hash: string
    packs: StickerPack[]
    stickers: Document[]
    dates: number[]
    constructor(options: {
        hash: string
        packs: StickerPack[]
        stickers: Document[]
        dates: number[]
    }) {
        this.hash = options.hash;
        this.packs = options.packs;
        this.stickers = options.stickers;
        this.dates = options.dates;
    }
}

export class PredicateUpdateRecentStickers {
    _ = 'updateRecentStickers' as const
}

export class PredicateMessagesArchivedStickers {
    _ = 'messages.archivedStickers' as const
    count: number
    sets: StickerSetCovered[]
    constructor(options: {
        count: number
        sets: StickerSetCovered[]
    }) {
        this.count = options.count;
        this.sets = options.sets;
    }
}

export class PredicateMessagesStickerSetInstallResultSuccess {
    _ = 'messages.stickerSetInstallResultSuccess' as const
}

export class PredicateMessagesStickerSetInstallResultArchive {
    _ = 'messages.stickerSetInstallResultArchive' as const
    sets: StickerSetCovered[]
    constructor(options: {
        sets: StickerSetCovered[]
    }) {
        this.sets = options.sets;
    }
}

export class PredicateStickerSetCovered {
    _ = 'stickerSetCovered' as const
    set: StickerSet
    cover: Document
    constructor(options: {
        set: StickerSet
        cover: Document
    }) {
        this.set = options.set;
        this.cover = options.cover;
    }
}

export class PredicateUpdateConfig {
    _ = 'updateConfig' as const
}

export class PredicateUpdatePtsChanged {
    _ = 'updatePtsChanged' as const
}

export class PredicateInputMediaPhotoExternal {
    _ = 'inputMediaPhotoExternal' as const
    url: string
    ttl_seconds?: number
    constructor(options: {
        url: string
        ttl_seconds?: number
    }) {
        this.url = options.url;
        this.ttl_seconds = options.ttl_seconds;
    }
}

export class PredicateInputMediaDocumentExternal {
    _ = 'inputMediaDocumentExternal' as const
    url: string
    ttl_seconds?: number
    constructor(options: {
        url: string
        ttl_seconds?: number
    }) {
        this.url = options.url;
        this.ttl_seconds = options.ttl_seconds;
    }
}

export class PredicateStickerSetMultiCovered {
    _ = 'stickerSetMultiCovered' as const
    set: StickerSet
    covers: Document[]
    constructor(options: {
        set: StickerSet
        covers: Document[]
    }) {
        this.set = options.set;
        this.covers = options.covers;
    }
}

export class PredicateMaskCoords {
    _ = 'maskCoords' as const
    n: number
    x: number
    y: number
    zoom: number
    constructor(options: {
        n: number
        x: number
        y: number
        zoom: number
    }) {
        this.n = options.n;
        this.x = options.x;
        this.y = options.y;
        this.zoom = options.zoom;
    }
}

export class PredicateDocumentAttributeHasStickers {
    _ = 'documentAttributeHasStickers' as const
}

export class PredicateInputStickeredMediaPhoto {
    _ = 'inputStickeredMediaPhoto' as const
    id: InputPhoto
    constructor(options: {
        id: InputPhoto
    }) {
        this.id = options.id;
    }
}

export class PredicateInputStickeredMediaDocument {
    _ = 'inputStickeredMediaDocument' as const
    id: InputDocument
    constructor(options: {
        id: InputDocument
    }) {
        this.id = options.id;
    }
}

export class PredicateGame {
    _ = 'game' as const
    id: string
    access_hash: string
    short_name: string
    title: string
    description: string
    photo: Photo
    document?: Document
    constructor(options: {
        id: string
        access_hash: string
        short_name: string
        title: string
        description: string
        photo: Photo
        document?: Document
    }) {
        this.id = options.id;
        this.access_hash = options.access_hash;
        this.short_name = options.short_name;
        this.title = options.title;
        this.description = options.description;
        this.photo = options.photo;
        this.document = options.document;
    }
}

export class PredicateInputBotInlineResultGame {
    _ = 'inputBotInlineResultGame' as const
    id: string
    short_name: string
    send_message: InputBotInlineMessage
    constructor(options: {
        id: string
        short_name: string
        send_message: InputBotInlineMessage
    }) {
        this.id = options.id;
        this.short_name = options.short_name;
        this.send_message = options.send_message;
    }
}

export class PredicateInputBotInlineMessageGame {
    _ = 'inputBotInlineMessageGame' as const
    reply_markup?: ReplyMarkup
    constructor(options: {
        reply_markup?: ReplyMarkup
    } = {}) {
        this.reply_markup = options.reply_markup;
    }
}

export class PredicateMessageMediaGame {
    _ = 'messageMediaGame' as const
    game: Game
    constructor(options: {
        game: Game
    }) {
        this.game = options.game;
    }
}

export class PredicateInputMediaGame {
    _ = 'inputMediaGame' as const
    id: InputGame
    constructor(options: {
        id: InputGame
    }) {
        this.id = options.id;
    }
}

export class PredicateInputGameID {
    _ = 'inputGameID' as const
    id: string
    access_hash: string
    constructor(options: {
        id: string
        access_hash: string
    }) {
        this.id = options.id;
        this.access_hash = options.access_hash;
    }
}

export class PredicateInputGameShortName {
    _ = 'inputGameShortName' as const
    bot_id: InputUser
    short_name: string
    constructor(options: {
        bot_id: InputUser
        short_name: string
    }) {
        this.bot_id = options.bot_id;
        this.short_name = options.short_name;
    }
}

export class PredicateKeyboardButtonGame {
    _ = 'keyboardButtonGame' as const
    text: string
    constructor(options: {
        text: string
    }) {
        this.text = options.text;
    }
}

export class PredicateMessageActionGameScore {
    _ = 'messageActionGameScore' as const
    game_id: string
    score: number
    constructor(options: {
        game_id: string
        score: number
    }) {
        this.game_id = options.game_id;
        this.score = options.score;
    }
}

export class PredicateHighScore {
    _ = 'highScore' as const
    pos: number
    user_id: string
    score: number
    constructor(options: {
        pos: number
        user_id: string
        score: number
    }) {
        this.pos = options.pos;
        this.user_id = options.user_id;
        this.score = options.score;
    }
}

export class PredicateMessagesHighScores {
    _ = 'messages.highScores' as const
    scores: HighScore[]
    users: User[]
    constructor(options: {
        scores: HighScore[]
        users: User[]
    }) {
        this.scores = options.scores;
        this.users = options.users;
    }
}

export class PredicateUpdatesDifferenceTooLong {
    _ = 'updates.differenceTooLong' as const
    pts: number
    constructor(options: {
        pts: number
    }) {
        this.pts = options.pts;
    }
}

export class PredicateUpdateChannelWebPage {
    _ = 'updateChannelWebPage' as const
    channel_id: string
    webpage: WebPage
    pts: number
    pts_count: number
    constructor(options: {
        channel_id: string
        webpage: WebPage
        pts: number
        pts_count: number
    }) {
        this.channel_id = options.channel_id;
        this.webpage = options.webpage;
        this.pts = options.pts;
        this.pts_count = options.pts_count;
    }
}

export class PredicateMessagesChatsSlice {
    _ = 'messages.chatsSlice' as const
    count: number
    chats: Chat[]
    constructor(options: {
        count: number
        chats: Chat[]
    }) {
        this.count = options.count;
        this.chats = options.chats;
    }
}

export class PredicateTextEmpty {
    _ = 'textEmpty' as const
}

export class PredicateTextPlain {
    _ = 'textPlain' as const
    text: string
    constructor(options: {
        text: string
    }) {
        this.text = options.text;
    }
}

export class PredicateTextBold {
    _ = 'textBold' as const
    text: RichText
    constructor(options: {
        text: RichText
    }) {
        this.text = options.text;
    }
}

export class PredicateTextItalic {
    _ = 'textItalic' as const
    text: RichText
    constructor(options: {
        text: RichText
    }) {
        this.text = options.text;
    }
}

export class PredicateTextUnderline {
    _ = 'textUnderline' as const
    text: RichText
    constructor(options: {
        text: RichText
    }) {
        this.text = options.text;
    }
}

export class PredicateTextStrike {
    _ = 'textStrike' as const
    text: RichText
    constructor(options: {
        text: RichText
    }) {
        this.text = options.text;
    }
}

export class PredicateTextFixed {
    _ = 'textFixed' as const
    text: RichText
    constructor(options: {
        text: RichText
    }) {
        this.text = options.text;
    }
}

export class PredicateTextUrl {
    _ = 'textUrl' as const
    text: RichText
    url: string
    webpage_id: string
    constructor(options: {
        text: RichText
        url: string
        webpage_id: string
    }) {
        this.text = options.text;
        this.url = options.url;
        this.webpage_id = options.webpage_id;
    }
}

export class PredicateTextEmail {
    _ = 'textEmail' as const
    text: RichText
    email: string
    constructor(options: {
        text: RichText
        email: string
    }) {
        this.text = options.text;
        this.email = options.email;
    }
}

export class PredicateTextConcat {
    _ = 'textConcat' as const
    texts: RichText[]
    constructor(options: {
        texts: RichText[]
    }) {
        this.texts = options.texts;
    }
}

export class PredicatePageBlockUnsupported {
    _ = 'pageBlockUnsupported' as const
}

export class PredicatePageBlockTitle {
    _ = 'pageBlockTitle' as const
    text: RichText
    constructor(options: {
        text: RichText
    }) {
        this.text = options.text;
    }
}

export class PredicatePageBlockSubtitle {
    _ = 'pageBlockSubtitle' as const
    text: RichText
    constructor(options: {
        text: RichText
    }) {
        this.text = options.text;
    }
}

export class PredicatePageBlockAuthorDate {
    _ = 'pageBlockAuthorDate' as const
    author: RichText
    published_date: number
    constructor(options: {
        author: RichText
        published_date: number
    }) {
        this.author = options.author;
        this.published_date = options.published_date;
    }
}

export class PredicatePageBlockHeader {
    _ = 'pageBlockHeader' as const
    text: RichText
    constructor(options: {
        text: RichText
    }) {
        this.text = options.text;
    }
}

export class PredicatePageBlockSubheader {
    _ = 'pageBlockSubheader' as const
    text: RichText
    constructor(options: {
        text: RichText
    }) {
        this.text = options.text;
    }
}

export class PredicatePageBlockParagraph {
    _ = 'pageBlockParagraph' as const
    text: RichText
    constructor(options: {
        text: RichText
    }) {
        this.text = options.text;
    }
}

export class PredicatePageBlockPreformatted {
    _ = 'pageBlockPreformatted' as const
    text: RichText
    language: string
    constructor(options: {
        text: RichText
        language: string
    }) {
        this.text = options.text;
        this.language = options.language;
    }
}

export class PredicatePageBlockFooter {
    _ = 'pageBlockFooter' as const
    text: RichText
    constructor(options: {
        text: RichText
    }) {
        this.text = options.text;
    }
}

export class PredicatePageBlockDivider {
    _ = 'pageBlockDivider' as const
}

export class PredicatePageBlockAnchor {
    _ = 'pageBlockAnchor' as const
    name: string
    constructor(options: {
        name: string
    }) {
        this.name = options.name;
    }
}

export class PredicatePageBlockList {
    _ = 'pageBlockList' as const
    items: PageListItem[]
    constructor(options: {
        items: PageListItem[]
    }) {
        this.items = options.items;
    }
}

export class PredicatePageBlockBlockquote {
    _ = 'pageBlockBlockquote' as const
    text: RichText
    caption: RichText
    constructor(options: {
        text: RichText
        caption: RichText
    }) {
        this.text = options.text;
        this.caption = options.caption;
    }
}

export class PredicatePageBlockPullquote {
    _ = 'pageBlockPullquote' as const
    text: RichText
    caption: RichText
    constructor(options: {
        text: RichText
        caption: RichText
    }) {
        this.text = options.text;
        this.caption = options.caption;
    }
}

export class PredicatePageBlockPhoto {
    _ = 'pageBlockPhoto' as const
    photo_id: string
    caption: PageCaption
    url?: string
    webpage_id?: string
    constructor(options: {
        photo_id: string
        caption: PageCaption
        url?: string
        webpage_id?: string
    }) {
        this.photo_id = options.photo_id;
        this.caption = options.caption;
        this.url = options.url;
        this.webpage_id = options.webpage_id;
    }
}

export class PredicatePageBlockVideo {
    _ = 'pageBlockVideo' as const
    autoplay?: true
    loop?: true
    video_id: string
    caption: PageCaption
    constructor(options: {
        autoplay?: true
        loop?: true
        video_id: string
        caption: PageCaption
    }) {
        this.autoplay = options.autoplay;
        this.loop = options.loop;
        this.video_id = options.video_id;
        this.caption = options.caption;
    }
}

export class PredicatePageBlockCover {
    _ = 'pageBlockCover' as const
    cover: PageBlock
    constructor(options: {
        cover: PageBlock
    }) {
        this.cover = options.cover;
    }
}

export class PredicatePageBlockEmbed {
    _ = 'pageBlockEmbed' as const
    full_width?: true
    allow_scrolling?: true
    url?: string
    html?: string
    poster_photo_id?: string
    w?: number
    h?: number
    caption: PageCaption
    constructor(options: {
        full_width?: true
        allow_scrolling?: true
        url?: string
        html?: string
        poster_photo_id?: string
        w?: number
        h?: number
        caption: PageCaption
    }) {
        this.full_width = options.full_width;
        this.allow_scrolling = options.allow_scrolling;
        this.url = options.url;
        this.html = options.html;
        this.poster_photo_id = options.poster_photo_id;
        this.w = options.w;
        this.h = options.h;
        this.caption = options.caption;
    }
}

export class PredicatePageBlockEmbedPost {
    _ = 'pageBlockEmbedPost' as const
    url: string
    webpage_id: string
    author_photo_id: string
    author: string
    date: number
    blocks: PageBlock[]
    caption: PageCaption
    constructor(options: {
        url: string
        webpage_id: string
        author_photo_id: string
        author: string
        date: number
        blocks: PageBlock[]
        caption: PageCaption
    }) {
        this.url = options.url;
        this.webpage_id = options.webpage_id;
        this.author_photo_id = options.author_photo_id;
        this.author = options.author;
        this.date = options.date;
        this.blocks = options.blocks;
        this.caption = options.caption;
    }
}

export class PredicatePageBlockCollage {
    _ = 'pageBlockCollage' as const
    items: PageBlock[]
    caption: PageCaption
    constructor(options: {
        items: PageBlock[]
        caption: PageCaption
    }) {
        this.items = options.items;
        this.caption = options.caption;
    }
}

export class PredicatePageBlockSlideshow {
    _ = 'pageBlockSlideshow' as const
    items: PageBlock[]
    caption: PageCaption
    constructor(options: {
        items: PageBlock[]
        caption: PageCaption
    }) {
        this.items = options.items;
        this.caption = options.caption;
    }
}

export class PredicateWebPageNotModified {
    _ = 'webPageNotModified' as const
    cached_page_views?: number
    constructor(options: {
        cached_page_views?: number
    } = {}) {
        this.cached_page_views = options.cached_page_views;
    }
}

export class PredicateInputPrivacyKeyPhoneCall {
    _ = 'inputPrivacyKeyPhoneCall' as const
}

export class PredicatePrivacyKeyPhoneCall {
    _ = 'privacyKeyPhoneCall' as const
}

export class PredicateSendMessageGamePlayAction {
    _ = 'sendMessageGamePlayAction' as const
}

export class PredicatePhoneCallDiscardReasonMissed {
    _ = 'phoneCallDiscardReasonMissed' as const
}

export class PredicatePhoneCallDiscardReasonDisconnect {
    _ = 'phoneCallDiscardReasonDisconnect' as const
}

export class PredicatePhoneCallDiscardReasonHangup {
    _ = 'phoneCallDiscardReasonHangup' as const
}

export class PredicatePhoneCallDiscardReasonBusy {
    _ = 'phoneCallDiscardReasonBusy' as const
}

export class PredicateUpdateDialogPinned {
    _ = 'updateDialogPinned' as const
    pinned?: true
    folder_id?: number
    peer: DialogPeer
    constructor(options: {
        pinned?: true
        folder_id?: number
        peer: DialogPeer
    }) {
        this.pinned = options.pinned;
        this.folder_id = options.folder_id;
        this.peer = options.peer;
    }
}

export class PredicateUpdatePinnedDialogs {
    _ = 'updatePinnedDialogs' as const
    folder_id?: number
    order?: DialogPeer[]
    constructor(options: {
        folder_id?: number
        order?: DialogPeer[]
    } = {}) {
        this.folder_id = options.folder_id;
        this.order = options.order;
    }
}

export class PredicateDataJSON {
    _ = 'dataJSON' as const
    data: string
    constructor(options: {
        data: string
    }) {
        this.data = options.data;
    }
}

export class PredicateUpdateBotWebhookJSON {
    _ = 'updateBotWebhookJSON' as const
    data: DataJSON
    constructor(options: {
        data: DataJSON
    }) {
        this.data = options.data;
    }
}

export class PredicateUpdateBotWebhookJSONQuery {
    _ = 'updateBotWebhookJSONQuery' as const
    query_id: string
    data: DataJSON
    timeout: number
    constructor(options: {
        query_id: string
        data: DataJSON
        timeout: number
    }) {
        this.query_id = options.query_id;
        this.data = options.data;
        this.timeout = options.timeout;
    }
}

export class PredicateLabeledPrice {
    _ = 'labeledPrice' as const
    label: string
    amount: string
    constructor(options: {
        label: string
        amount: string
    }) {
        this.label = options.label;
        this.amount = options.amount;
    }
}

export class PredicateInvoice {
    _ = 'invoice' as const
    test?: true
    name_requested?: true
    phone_requested?: true
    email_requested?: true
    shipping_address_requested?: true
    flexible?: true
    phone_to_provider?: true
    email_to_provider?: true
    currency: string
    prices: LabeledPrice[]
    max_tip_amount?: string
    suggested_tip_amounts?: string[]
    constructor(options: {
        test?: true
        name_requested?: true
        phone_requested?: true
        email_requested?: true
        shipping_address_requested?: true
        flexible?: true
        phone_to_provider?: true
        email_to_provider?: true
        currency: string
        prices: LabeledPrice[]
        max_tip_amount?: string
        suggested_tip_amounts?: string[]
    }) {
        this.test = options.test;
        this.name_requested = options.name_requested;
        this.phone_requested = options.phone_requested;
        this.email_requested = options.email_requested;
        this.shipping_address_requested = options.shipping_address_requested;
        this.flexible = options.flexible;
        this.phone_to_provider = options.phone_to_provider;
        this.email_to_provider = options.email_to_provider;
        this.currency = options.currency;
        this.prices = options.prices;
        this.max_tip_amount = options.max_tip_amount;
        this.suggested_tip_amounts = options.suggested_tip_amounts;
    }
}

export class PredicateInputMediaInvoice {
    _ = 'inputMediaInvoice' as const
    title: string
    description: string
    photo?: InputWebDocument
    invoice: Invoice
    payload: Uint8Array
    provider: string
    provider_data: DataJSON
    start_param?: string
    constructor(options: {
        title: string
        description: string
        photo?: InputWebDocument
        invoice: Invoice
        payload: Uint8Array
        provider: string
        provider_data: DataJSON
        start_param?: string
    }) {
        this.title = options.title;
        this.description = options.description;
        this.photo = options.photo;
        this.invoice = options.invoice;
        this.payload = options.payload;
        this.provider = options.provider;
        this.provider_data = options.provider_data;
        this.start_param = options.start_param;
    }
}

export class PredicatePaymentCharge {
    _ = 'paymentCharge' as const
    id: string
    provider_charge_id: string
    constructor(options: {
        id: string
        provider_charge_id: string
    }) {
        this.id = options.id;
        this.provider_charge_id = options.provider_charge_id;
    }
}

export class PredicateMessageActionPaymentSentMe {
    _ = 'messageActionPaymentSentMe' as const
    currency: string
    total_amount: string
    payload: Uint8Array
    info?: PaymentRequestedInfo
    shipping_option_id?: string
    charge: PaymentCharge
    constructor(options: {
        currency: string
        total_amount: string
        payload: Uint8Array
        info?: PaymentRequestedInfo
        shipping_option_id?: string
        charge: PaymentCharge
    }) {
        this.currency = options.currency;
        this.total_amount = options.total_amount;
        this.payload = options.payload;
        this.info = options.info;
        this.shipping_option_id = options.shipping_option_id;
        this.charge = options.charge;
    }
}

export class PredicateMessageMediaInvoice {
    _ = 'messageMediaInvoice' as const
    shipping_address_requested?: true
    test?: true
    title: string
    description: string
    photo?: WebDocument
    receipt_msg_id?: number
    currency: string
    total_amount: string
    start_param: string
    constructor(options: {
        shipping_address_requested?: true
        test?: true
        title: string
        description: string
        photo?: WebDocument
        receipt_msg_id?: number
        currency: string
        total_amount: string
        start_param: string
    }) {
        this.shipping_address_requested = options.shipping_address_requested;
        this.test = options.test;
        this.title = options.title;
        this.description = options.description;
        this.photo = options.photo;
        this.receipt_msg_id = options.receipt_msg_id;
        this.currency = options.currency;
        this.total_amount = options.total_amount;
        this.start_param = options.start_param;
    }
}

export class PredicatePostAddress {
    _ = 'postAddress' as const
    street_line1: string
    street_line2: string
    city: string
    state: string
    country_iso2: string
    post_code: string
    constructor(options: {
        street_line1: string
        street_line2: string
        city: string
        state: string
        country_iso2: string
        post_code: string
    }) {
        this.street_line1 = options.street_line1;
        this.street_line2 = options.street_line2;
        this.city = options.city;
        this.state = options.state;
        this.country_iso2 = options.country_iso2;
        this.post_code = options.post_code;
    }
}

export class PredicatePaymentRequestedInfo {
    _ = 'paymentRequestedInfo' as const
    name?: string
    phone?: string
    email?: string
    shipping_address?: PostAddress
    constructor(options: {
        name?: string
        phone?: string
        email?: string
        shipping_address?: PostAddress
    } = {}) {
        this.name = options.name;
        this.phone = options.phone;
        this.email = options.email;
        this.shipping_address = options.shipping_address;
    }
}

export class PredicateKeyboardButtonBuy {
    _ = 'keyboardButtonBuy' as const
    text: string
    constructor(options: {
        text: string
    }) {
        this.text = options.text;
    }
}

export class PredicateMessageActionPaymentSent {
    _ = 'messageActionPaymentSent' as const
    currency: string
    total_amount: string
    constructor(options: {
        currency: string
        total_amount: string
    }) {
        this.currency = options.currency;
        this.total_amount = options.total_amount;
    }
}

export class PredicatePaymentSavedCredentialsCard {
    _ = 'paymentSavedCredentialsCard' as const
    id: string
    title: string
    constructor(options: {
        id: string
        title: string
    }) {
        this.id = options.id;
        this.title = options.title;
    }
}

export class PredicateWebDocument {
    _ = 'webDocument' as const
    url: string
    access_hash: string
    size: number
    mime_type: string
    attributes: DocumentAttribute[]
    constructor(options: {
        url: string
        access_hash: string
        size: number
        mime_type: string
        attributes: DocumentAttribute[]
    }) {
        this.url = options.url;
        this.access_hash = options.access_hash;
        this.size = options.size;
        this.mime_type = options.mime_type;
        this.attributes = options.attributes;
    }
}

export class PredicateInputWebDocument {
    _ = 'inputWebDocument' as const
    url: string
    size: number
    mime_type: string
    attributes: DocumentAttribute[]
    constructor(options: {
        url: string
        size: number
        mime_type: string
        attributes: DocumentAttribute[]
    }) {
        this.url = options.url;
        this.size = options.size;
        this.mime_type = options.mime_type;
        this.attributes = options.attributes;
    }
}

export class PredicateInputWebFileLocation {
    _ = 'inputWebFileLocation' as const
    url: string
    access_hash: string
    constructor(options: {
        url: string
        access_hash: string
    }) {
        this.url = options.url;
        this.access_hash = options.access_hash;
    }
}

export class PredicateUploadWebFile {
    _ = 'upload.webFile' as const
    size: number
    mime_type: string
    file_type: StorageFileType
    mtime: number
    bytes: Uint8Array
    constructor(options: {
        size: number
        mime_type: string
        file_type: StorageFileType
        mtime: number
        bytes: Uint8Array
    }) {
        this.size = options.size;
        this.mime_type = options.mime_type;
        this.file_type = options.file_type;
        this.mtime = options.mtime;
        this.bytes = options.bytes;
    }
}

export class PredicatePaymentsPaymentForm {
    _ = 'payments.paymentForm' as const
    can_save_credentials?: true
    password_missing?: true
    form_id: string
    bot_id: string
    invoice: Invoice
    provider_id: string
    url: string
    native_provider?: string
    native_params?: DataJSON
    saved_info?: PaymentRequestedInfo
    saved_credentials?: PaymentSavedCredentials
    users: User[]
    constructor(options: {
        can_save_credentials?: true
        password_missing?: true
        form_id: string
        bot_id: string
        invoice: Invoice
        provider_id: string
        url: string
        native_provider?: string
        native_params?: DataJSON
        saved_info?: PaymentRequestedInfo
        saved_credentials?: PaymentSavedCredentials
        users: User[]
    }) {
        this.can_save_credentials = options.can_save_credentials;
        this.password_missing = options.password_missing;
        this.form_id = options.form_id;
        this.bot_id = options.bot_id;
        this.invoice = options.invoice;
        this.provider_id = options.provider_id;
        this.url = options.url;
        this.native_provider = options.native_provider;
        this.native_params = options.native_params;
        this.saved_info = options.saved_info;
        this.saved_credentials = options.saved_credentials;
        this.users = options.users;
    }
}

export class PredicatePaymentsValidatedRequestedInfo {
    _ = 'payments.validatedRequestedInfo' as const
    id?: string
    shipping_options?: ShippingOption[]
    constructor(options: {
        id?: string
        shipping_options?: ShippingOption[]
    } = {}) {
        this.id = options.id;
        this.shipping_options = options.shipping_options;
    }
}

export class PredicatePaymentsPaymentResult {
    _ = 'payments.paymentResult' as const
    updates: Updates
    constructor(options: {
        updates: Updates
    }) {
        this.updates = options.updates;
    }
}

export class PredicatePaymentsPaymentReceipt {
    _ = 'payments.paymentReceipt' as const
    date: number
    bot_id: string
    provider_id: string
    title: string
    description: string
    photo?: WebDocument
    invoice: Invoice
    info?: PaymentRequestedInfo
    shipping?: ShippingOption
    tip_amount?: string
    currency: string
    total_amount: string
    credentials_title: string
    users: User[]
    constructor(options: {
        date: number
        bot_id: string
        provider_id: string
        title: string
        description: string
        photo?: WebDocument
        invoice: Invoice
        info?: PaymentRequestedInfo
        shipping?: ShippingOption
        tip_amount?: string
        currency: string
        total_amount: string
        credentials_title: string
        users: User[]
    }) {
        this.date = options.date;
        this.bot_id = options.bot_id;
        this.provider_id = options.provider_id;
        this.title = options.title;
        this.description = options.description;
        this.photo = options.photo;
        this.invoice = options.invoice;
        this.info = options.info;
        this.shipping = options.shipping;
        this.tip_amount = options.tip_amount;
        this.currency = options.currency;
        this.total_amount = options.total_amount;
        this.credentials_title = options.credentials_title;
        this.users = options.users;
    }
}

export class PredicatePaymentsSavedInfo {
    _ = 'payments.savedInfo' as const
    has_saved_credentials?: true
    saved_info?: PaymentRequestedInfo
    constructor(options: {
        has_saved_credentials?: true
        saved_info?: PaymentRequestedInfo
    } = {}) {
        this.has_saved_credentials = options.has_saved_credentials;
        this.saved_info = options.saved_info;
    }
}

export class PredicateInputPaymentCredentialsSaved {
    _ = 'inputPaymentCredentialsSaved' as const
    id: string
    tmp_password: Uint8Array
    constructor(options: {
        id: string
        tmp_password: Uint8Array
    }) {
        this.id = options.id;
        this.tmp_password = options.tmp_password;
    }
}

export class PredicateInputPaymentCredentials {
    _ = 'inputPaymentCredentials' as const
    save?: true
    data: DataJSON
    constructor(options: {
        save?: true
        data: DataJSON
    }) {
        this.save = options.save;
        this.data = options.data;
    }
}

export class PredicateAccountTmpPassword {
    _ = 'account.tmpPassword' as const
    tmp_password: Uint8Array
    valid_until: number
    constructor(options: {
        tmp_password: Uint8Array
        valid_until: number
    }) {
        this.tmp_password = options.tmp_password;
        this.valid_until = options.valid_until;
    }
}

export class PredicateShippingOption {
    _ = 'shippingOption' as const
    id: string
    title: string
    prices: LabeledPrice[]
    constructor(options: {
        id: string
        title: string
        prices: LabeledPrice[]
    }) {
        this.id = options.id;
        this.title = options.title;
        this.prices = options.prices;
    }
}

export class PredicateUpdateBotShippingQuery {
    _ = 'updateBotShippingQuery' as const
    query_id: string
    user_id: string
    payload: Uint8Array
    shipping_address: PostAddress
    constructor(options: {
        query_id: string
        user_id: string
        payload: Uint8Array
        shipping_address: PostAddress
    }) {
        this.query_id = options.query_id;
        this.user_id = options.user_id;
        this.payload = options.payload;
        this.shipping_address = options.shipping_address;
    }
}

export class PredicateUpdateBotPrecheckoutQuery {
    _ = 'updateBotPrecheckoutQuery' as const
    query_id: string
    user_id: string
    payload: Uint8Array
    info?: PaymentRequestedInfo
    shipping_option_id?: string
    currency: string
    total_amount: string
    constructor(options: {
        query_id: string
        user_id: string
        payload: Uint8Array
        info?: PaymentRequestedInfo
        shipping_option_id?: string
        currency: string
        total_amount: string
    }) {
        this.query_id = options.query_id;
        this.user_id = options.user_id;
        this.payload = options.payload;
        this.info = options.info;
        this.shipping_option_id = options.shipping_option_id;
        this.currency = options.currency;
        this.total_amount = options.total_amount;
    }
}

export class PredicateInputStickerSetItem {
    _ = 'inputStickerSetItem' as const
    document: InputDocument
    emoji: string
    mask_coords?: MaskCoords
    constructor(options: {
        document: InputDocument
        emoji: string
        mask_coords?: MaskCoords
    }) {
        this.document = options.document;
        this.emoji = options.emoji;
        this.mask_coords = options.mask_coords;
    }
}

export class PredicateUpdatePhoneCall {
    _ = 'updatePhoneCall' as const
    phone_call: PhoneCall
    constructor(options: {
        phone_call: PhoneCall
    }) {
        this.phone_call = options.phone_call;
    }
}

export class PredicateInputPhoneCall {
    _ = 'inputPhoneCall' as const
    id: string
    access_hash: string
    constructor(options: {
        id: string
        access_hash: string
    }) {
        this.id = options.id;
        this.access_hash = options.access_hash;
    }
}

export class PredicatePhoneCallEmpty {
    _ = 'phoneCallEmpty' as const
    id: string
    constructor(options: {
        id: string
    }) {
        this.id = options.id;
    }
}

export class PredicatePhoneCallWaiting {
    _ = 'phoneCallWaiting' as const
    video?: true
    id: string
    access_hash: string
    date: number
    admin_id: string
    participant_id: string
    protocol: PhoneCallProtocol
    receive_date?: number
    constructor(options: {
        video?: true
        id: string
        access_hash: string
        date: number
        admin_id: string
        participant_id: string
        protocol: PhoneCallProtocol
        receive_date?: number
    }) {
        this.video = options.video;
        this.id = options.id;
        this.access_hash = options.access_hash;
        this.date = options.date;
        this.admin_id = options.admin_id;
        this.participant_id = options.participant_id;
        this.protocol = options.protocol;
        this.receive_date = options.receive_date;
    }
}

export class PredicatePhoneCallRequested {
    _ = 'phoneCallRequested' as const
    video?: true
    id: string
    access_hash: string
    date: number
    admin_id: string
    participant_id: string
    g_a_hash: Uint8Array
    protocol: PhoneCallProtocol
    constructor(options: {
        video?: true
        id: string
        access_hash: string
        date: number
        admin_id: string
        participant_id: string
        g_a_hash: Uint8Array
        protocol: PhoneCallProtocol
    }) {
        this.video = options.video;
        this.id = options.id;
        this.access_hash = options.access_hash;
        this.date = options.date;
        this.admin_id = options.admin_id;
        this.participant_id = options.participant_id;
        this.g_a_hash = options.g_a_hash;
        this.protocol = options.protocol;
    }
}

export class PredicatePhoneCallAccepted {
    _ = 'phoneCallAccepted' as const
    video?: true
    id: string
    access_hash: string
    date: number
    admin_id: string
    participant_id: string
    g_b: Uint8Array
    protocol: PhoneCallProtocol
    constructor(options: {
        video?: true
        id: string
        access_hash: string
        date: number
        admin_id: string
        participant_id: string
        g_b: Uint8Array
        protocol: PhoneCallProtocol
    }) {
        this.video = options.video;
        this.id = options.id;
        this.access_hash = options.access_hash;
        this.date = options.date;
        this.admin_id = options.admin_id;
        this.participant_id = options.participant_id;
        this.g_b = options.g_b;
        this.protocol = options.protocol;
    }
}

export class PredicatePhoneCall {
    _ = 'phoneCall' as const
    p2p_allowed?: true
    video?: true
    id: string
    access_hash: string
    date: number
    admin_id: string
    participant_id: string
    g_a_or_b: Uint8Array
    key_fingerprint: string
    protocol: PhoneCallProtocol
    connections: PhoneConnection[]
    start_date: number
    constructor(options: {
        p2p_allowed?: true
        video?: true
        id: string
        access_hash: string
        date: number
        admin_id: string
        participant_id: string
        g_a_or_b: Uint8Array
        key_fingerprint: string
        protocol: PhoneCallProtocol
        connections: PhoneConnection[]
        start_date: number
    }) {
        this.p2p_allowed = options.p2p_allowed;
        this.video = options.video;
        this.id = options.id;
        this.access_hash = options.access_hash;
        this.date = options.date;
        this.admin_id = options.admin_id;
        this.participant_id = options.participant_id;
        this.g_a_or_b = options.g_a_or_b;
        this.key_fingerprint = options.key_fingerprint;
        this.protocol = options.protocol;
        this.connections = options.connections;
        this.start_date = options.start_date;
    }
}

export class PredicatePhoneCallDiscarded {
    _ = 'phoneCallDiscarded' as const
    need_rating?: true
    need_debug?: true
    video?: true
    id: string
    reason?: PhoneCallDiscardReason
    duration?: number
    constructor(options: {
        need_rating?: true
        need_debug?: true
        video?: true
        id: string
        reason?: PhoneCallDiscardReason
        duration?: number
    }) {
        this.need_rating = options.need_rating;
        this.need_debug = options.need_debug;
        this.video = options.video;
        this.id = options.id;
        this.reason = options.reason;
        this.duration = options.duration;
    }
}

export class PredicatePhoneConnection {
    _ = 'phoneConnection' as const
    id: string
    ip: string
    ipv6: string
    port: number
    peer_tag: Uint8Array
    constructor(options: {
        id: string
        ip: string
        ipv6: string
        port: number
        peer_tag: Uint8Array
    }) {
        this.id = options.id;
        this.ip = options.ip;
        this.ipv6 = options.ipv6;
        this.port = options.port;
        this.peer_tag = options.peer_tag;
    }
}

export class PredicatePhoneCallProtocol {
    _ = 'phoneCallProtocol' as const
    udp_p2p?: true
    udp_reflector?: true
    min_layer: number
    max_layer: number
    library_versions: string[]
    constructor(options: {
        udp_p2p?: true
        udp_reflector?: true
        min_layer: number
        max_layer: number
        library_versions: string[]
    }) {
        this.udp_p2p = options.udp_p2p;
        this.udp_reflector = options.udp_reflector;
        this.min_layer = options.min_layer;
        this.max_layer = options.max_layer;
        this.library_versions = options.library_versions;
    }
}

export class PredicatePhonePhoneCall {
    _ = 'phone.phoneCall' as const
    phone_call: PhoneCall
    users: User[]
    constructor(options: {
        phone_call: PhoneCall
        users: User[]
    }) {
        this.phone_call = options.phone_call;
        this.users = options.users;
    }
}

export class PredicateInputMessagesFilterPhoneCalls {
    _ = 'inputMessagesFilterPhoneCalls' as const
    missed?: true
    constructor(options: {
        missed?: true
    } = {}) {
        this.missed = options.missed;
    }
}

export class PredicateMessageActionPhoneCall {
    _ = 'messageActionPhoneCall' as const
    video?: true
    call_id: string
    reason?: PhoneCallDiscardReason
    duration?: number
    constructor(options: {
        video?: true
        call_id: string
        reason?: PhoneCallDiscardReason
        duration?: number
    }) {
        this.video = options.video;
        this.call_id = options.call_id;
        this.reason = options.reason;
        this.duration = options.duration;
    }
}

export class PredicateInputMessagesFilterRoundVoice {
    _ = 'inputMessagesFilterRoundVoice' as const
}

export class PredicateInputMessagesFilterRoundVideo {
    _ = 'inputMessagesFilterRoundVideo' as const
}

export class PredicateSendMessageRecordRoundAction {
    _ = 'sendMessageRecordRoundAction' as const
}

export class PredicateSendMessageUploadRoundAction {
    _ = 'sendMessageUploadRoundAction' as const
    progress: number
    constructor(options: {
        progress: number
    }) {
        this.progress = options.progress;
    }
}

export class PredicateUploadFileCdnRedirect {
    _ = 'upload.fileCdnRedirect' as const
    dc_id: number
    file_token: Uint8Array
    encryption_key: Uint8Array
    encryption_iv: Uint8Array
    file_hashes: FileHash[]
    constructor(options: {
        dc_id: number
        file_token: Uint8Array
        encryption_key: Uint8Array
        encryption_iv: Uint8Array
        file_hashes: FileHash[]
    }) {
        this.dc_id = options.dc_id;
        this.file_token = options.file_token;
        this.encryption_key = options.encryption_key;
        this.encryption_iv = options.encryption_iv;
        this.file_hashes = options.file_hashes;
    }
}

export class PredicateUploadCdnFileReuploadNeeded {
    _ = 'upload.cdnFileReuploadNeeded' as const
    request_token: Uint8Array
    constructor(options: {
        request_token: Uint8Array
    }) {
        this.request_token = options.request_token;
    }
}

export class PredicateUploadCdnFile {
    _ = 'upload.cdnFile' as const
    bytes: Uint8Array
    constructor(options: {
        bytes: Uint8Array
    }) {
        this.bytes = options.bytes;
    }
}

export class PredicateCdnPublicKey {
    _ = 'cdnPublicKey' as const
    dc_id: number
    public_key: string
    constructor(options: {
        dc_id: number
        public_key: string
    }) {
        this.dc_id = options.dc_id;
        this.public_key = options.public_key;
    }
}

export class PredicateCdnConfig {
    _ = 'cdnConfig' as const
    public_keys: CdnPublicKey[]
    constructor(options: {
        public_keys: CdnPublicKey[]
    }) {
        this.public_keys = options.public_keys;
    }
}

export class PredicatePageBlockChannel {
    _ = 'pageBlockChannel' as const
    channel: Chat
    constructor(options: {
        channel: Chat
    }) {
        this.channel = options.channel;
    }
}

export class PredicateLangPackString {
    _ = 'langPackString' as const
    key: string
    value: string
    constructor(options: {
        key: string
        value: string
    }) {
        this.key = options.key;
        this.value = options.value;
    }
}

export class PredicateLangPackStringPluralized {
    _ = 'langPackStringPluralized' as const
    key: string
    zero_value?: string
    one_value?: string
    two_value?: string
    few_value?: string
    many_value?: string
    other_value: string
    constructor(options: {
        key: string
        zero_value?: string
        one_value?: string
        two_value?: string
        few_value?: string
        many_value?: string
        other_value: string
    }) {
        this.key = options.key;
        this.zero_value = options.zero_value;
        this.one_value = options.one_value;
        this.two_value = options.two_value;
        this.few_value = options.few_value;
        this.many_value = options.many_value;
        this.other_value = options.other_value;
    }
}

export class PredicateLangPackStringDeleted {
    _ = 'langPackStringDeleted' as const
    key: string
    constructor(options: {
        key: string
    }) {
        this.key = options.key;
    }
}

export class PredicateLangPackDifference {
    _ = 'langPackDifference' as const
    lang_code: string
    from_version: number
    version: number
    strings: LangPackString[]
    constructor(options: {
        lang_code: string
        from_version: number
        version: number
        strings: LangPackString[]
    }) {
        this.lang_code = options.lang_code;
        this.from_version = options.from_version;
        this.version = options.version;
        this.strings = options.strings;
    }
}

export class PredicateLangPackLanguage {
    _ = 'langPackLanguage' as const
    official?: true
    rtl?: true
    beta?: true
    name: string
    native_name: string
    lang_code: string
    base_lang_code?: string
    plural_code: string
    strings_count: number
    translated_count: number
    translations_url: string
    constructor(options: {
        official?: true
        rtl?: true
        beta?: true
        name: string
        native_name: string
        lang_code: string
        base_lang_code?: string
        plural_code: string
        strings_count: number
        translated_count: number
        translations_url: string
    }) {
        this.official = options.official;
        this.rtl = options.rtl;
        this.beta = options.beta;
        this.name = options.name;
        this.native_name = options.native_name;
        this.lang_code = options.lang_code;
        this.base_lang_code = options.base_lang_code;
        this.plural_code = options.plural_code;
        this.strings_count = options.strings_count;
        this.translated_count = options.translated_count;
        this.translations_url = options.translations_url;
    }
}

export class PredicateUpdateLangPackTooLong {
    _ = 'updateLangPackTooLong' as const
    lang_code: string
    constructor(options: {
        lang_code: string
    }) {
        this.lang_code = options.lang_code;
    }
}

export class PredicateUpdateLangPack {
    _ = 'updateLangPack' as const
    difference: LangPackDifference
    constructor(options: {
        difference: LangPackDifference
    }) {
        this.difference = options.difference;
    }
}

export class PredicateChannelParticipantAdmin {
    _ = 'channelParticipantAdmin' as const
    can_edit?: true
    self?: true
    user_id: string
    inviter_id?: string
    promoted_by: string
    date: number
    admin_rights: ChatAdminRights
    rank?: string
    constructor(options: {
        can_edit?: true
        self?: true
        user_id: string
        inviter_id?: string
        promoted_by: string
        date: number
        admin_rights: ChatAdminRights
        rank?: string
    }) {
        this.can_edit = options.can_edit;
        this.self = options.self;
        this.user_id = options.user_id;
        this.inviter_id = options.inviter_id;
        this.promoted_by = options.promoted_by;
        this.date = options.date;
        this.admin_rights = options.admin_rights;
        this.rank = options.rank;
    }
}

export class PredicateChannelParticipantBanned {
    _ = 'channelParticipantBanned' as const
    left?: true
    peer: Peer
    kicked_by: string
    date: number
    banned_rights: ChatBannedRights
    constructor(options: {
        left?: true
        peer: Peer
        kicked_by: string
        date: number
        banned_rights: ChatBannedRights
    }) {
        this.left = options.left;
        this.peer = options.peer;
        this.kicked_by = options.kicked_by;
        this.date = options.date;
        this.banned_rights = options.banned_rights;
    }
}

export class PredicateChannelParticipantsBanned {
    _ = 'channelParticipantsBanned' as const
    q: string
    constructor(options: {
        q: string
    }) {
        this.q = options.q;
    }
}

export class PredicateChannelParticipantsSearch {
    _ = 'channelParticipantsSearch' as const
    q: string
    constructor(options: {
        q: string
    }) {
        this.q = options.q;
    }
}

export class PredicateChannelAdminLogEventActionChangeTitle {
    _ = 'channelAdminLogEventActionChangeTitle' as const
    prev_value: string
    new_value: string
    constructor(options: {
        prev_value: string
        new_value: string
    }) {
        this.prev_value = options.prev_value;
        this.new_value = options.new_value;
    }
}

export class PredicateChannelAdminLogEventActionChangeAbout {
    _ = 'channelAdminLogEventActionChangeAbout' as const
    prev_value: string
    new_value: string
    constructor(options: {
        prev_value: string
        new_value: string
    }) {
        this.prev_value = options.prev_value;
        this.new_value = options.new_value;
    }
}

export class PredicateChannelAdminLogEventActionChangeUsername {
    _ = 'channelAdminLogEventActionChangeUsername' as const
    prev_value: string
    new_value: string
    constructor(options: {
        prev_value: string
        new_value: string
    }) {
        this.prev_value = options.prev_value;
        this.new_value = options.new_value;
    }
}

export class PredicateChannelAdminLogEventActionChangePhoto {
    _ = 'channelAdminLogEventActionChangePhoto' as const
    prev_photo: Photo
    new_photo: Photo
    constructor(options: {
        prev_photo: Photo
        new_photo: Photo
    }) {
        this.prev_photo = options.prev_photo;
        this.new_photo = options.new_photo;
    }
}

export class PredicateChannelAdminLogEventActionToggleInvites {
    _ = 'channelAdminLogEventActionToggleInvites' as const
    new_value: boolean
    constructor(options: {
        new_value: boolean
    }) {
        this.new_value = options.new_value;
    }
}

export class PredicateChannelAdminLogEventActionToggleSignatures {
    _ = 'channelAdminLogEventActionToggleSignatures' as const
    new_value: boolean
    constructor(options: {
        new_value: boolean
    }) {
        this.new_value = options.new_value;
    }
}

export class PredicateChannelAdminLogEventActionUpdatePinned {
    _ = 'channelAdminLogEventActionUpdatePinned' as const
    message: Message
    constructor(options: {
        message: Message
    }) {
        this.message = options.message;
    }
}

export class PredicateChannelAdminLogEventActionEditMessage {
    _ = 'channelAdminLogEventActionEditMessage' as const
    prev_message: Message
    new_message: Message
    constructor(options: {
        prev_message: Message
        new_message: Message
    }) {
        this.prev_message = options.prev_message;
        this.new_message = options.new_message;
    }
}

export class PredicateChannelAdminLogEventActionDeleteMessage {
    _ = 'channelAdminLogEventActionDeleteMessage' as const
    message: Message
    constructor(options: {
        message: Message
    }) {
        this.message = options.message;
    }
}

export class PredicateChannelAdminLogEventActionParticipantJoin {
    _ = 'channelAdminLogEventActionParticipantJoin' as const
}

export class PredicateChannelAdminLogEventActionParticipantLeave {
    _ = 'channelAdminLogEventActionParticipantLeave' as const
}

export class PredicateChannelAdminLogEventActionParticipantInvite {
    _ = 'channelAdminLogEventActionParticipantInvite' as const
    participant: ChannelParticipant
    constructor(options: {
        participant: ChannelParticipant
    }) {
        this.participant = options.participant;
    }
}

export class PredicateChannelAdminLogEventActionParticipantToggleBan {
    _ = 'channelAdminLogEventActionParticipantToggleBan' as const
    prev_participant: ChannelParticipant
    new_participant: ChannelParticipant
    constructor(options: {
        prev_participant: ChannelParticipant
        new_participant: ChannelParticipant
    }) {
        this.prev_participant = options.prev_participant;
        this.new_participant = options.new_participant;
    }
}

export class PredicateChannelAdminLogEventActionParticipantToggleAdmin {
    _ = 'channelAdminLogEventActionParticipantToggleAdmin' as const
    prev_participant: ChannelParticipant
    new_participant: ChannelParticipant
    constructor(options: {
        prev_participant: ChannelParticipant
        new_participant: ChannelParticipant
    }) {
        this.prev_participant = options.prev_participant;
        this.new_participant = options.new_participant;
    }
}

export class PredicateChannelAdminLogEvent {
    _ = 'channelAdminLogEvent' as const
    id: string
    date: number
    user_id: string
    action: ChannelAdminLogEventAction
    constructor(options: {
        id: string
        date: number
        user_id: string
        action: ChannelAdminLogEventAction
    }) {
        this.id = options.id;
        this.date = options.date;
        this.user_id = options.user_id;
        this.action = options.action;
    }
}

export class PredicateChannelsAdminLogResults {
    _ = 'channels.adminLogResults' as const
    events: ChannelAdminLogEvent[]
    chats: Chat[]
    users: User[]
    constructor(options: {
        events: ChannelAdminLogEvent[]
        chats: Chat[]
        users: User[]
    }) {
        this.events = options.events;
        this.chats = options.chats;
        this.users = options.users;
    }
}

export class PredicateChannelAdminLogEventsFilter {
    _ = 'channelAdminLogEventsFilter' as const
    join?: true
    leave?: true
    invite?: true
    ban?: true
    unban?: true
    kick?: true
    unkick?: true
    promote?: true
    demote?: true
    info?: true
    settings?: true
    pinned?: true
    edit?: true
    delete?: true
    group_call?: true
    invites?: true
    send?: true
    constructor(options: {
        join?: true
        leave?: true
        invite?: true
        ban?: true
        unban?: true
        kick?: true
        unkick?: true
        promote?: true
        demote?: true
        info?: true
        settings?: true
        pinned?: true
        edit?: true
        delete?: true
        group_call?: true
        invites?: true
        send?: true
    } = {}) {
        this.join = options.join;
        this.leave = options.leave;
        this.invite = options.invite;
        this.ban = options.ban;
        this.unban = options.unban;
        this.kick = options.kick;
        this.unkick = options.unkick;
        this.promote = options.promote;
        this.demote = options.demote;
        this.info = options.info;
        this.settings = options.settings;
        this.pinned = options.pinned;
        this.edit = options.edit;
        this.delete = options.delete;
        this.group_call = options.group_call;
        this.invites = options.invites;
        this.send = options.send;
    }
}

export class PredicateTopPeerCategoryPhoneCalls {
    _ = 'topPeerCategoryPhoneCalls' as const
}

export class PredicatePageBlockAudio {
    _ = 'pageBlockAudio' as const
    audio_id: string
    caption: PageCaption
    constructor(options: {
        audio_id: string
        caption: PageCaption
    }) {
        this.audio_id = options.audio_id;
        this.caption = options.caption;
    }
}

export class PredicatePopularContact {
    _ = 'popularContact' as const
    client_id: string
    importers: number
    constructor(options: {
        client_id: string
        importers: number
    }) {
        this.client_id = options.client_id;
        this.importers = options.importers;
    }
}

export class PredicateMessageActionScreenshotTaken {
    _ = 'messageActionScreenshotTaken' as const
}

export class PredicateMessagesFavedStickersNotModified {
    _ = 'messages.favedStickersNotModified' as const
}

export class PredicateMessagesFavedStickers {
    _ = 'messages.favedStickers' as const
    hash: string
    packs: StickerPack[]
    stickers: Document[]
    constructor(options: {
        hash: string
        packs: StickerPack[]
        stickers: Document[]
    }) {
        this.hash = options.hash;
        this.packs = options.packs;
        this.stickers = options.stickers;
    }
}

export class PredicateUpdateFavedStickers {
    _ = 'updateFavedStickers' as const
}

export class PredicateUpdateChannelReadMessagesContents {
    _ = 'updateChannelReadMessagesContents' as const
    channel_id: string
    messages: number[]
    constructor(options: {
        channel_id: string
        messages: number[]
    }) {
        this.channel_id = options.channel_id;
        this.messages = options.messages;
    }
}

export class PredicateInputMessagesFilterMyMentions {
    _ = 'inputMessagesFilterMyMentions' as const
}

export class PredicateUpdateContactsReset {
    _ = 'updateContactsReset' as const
}

export class PredicateChannelAdminLogEventActionChangeStickerSet {
    _ = 'channelAdminLogEventActionChangeStickerSet' as const
    prev_stickerset: InputStickerSet
    new_stickerset: InputStickerSet
    constructor(options: {
        prev_stickerset: InputStickerSet
        new_stickerset: InputStickerSet
    }) {
        this.prev_stickerset = options.prev_stickerset;
        this.new_stickerset = options.new_stickerset;
    }
}

export class PredicateMessageActionCustomAction {
    _ = 'messageActionCustomAction' as const
    message: string
    constructor(options: {
        message: string
    }) {
        this.message = options.message;
    }
}

export class PredicateInputPaymentCredentialsApplePay {
    _ = 'inputPaymentCredentialsApplePay' as const
    payment_data: DataJSON
    constructor(options: {
        payment_data: DataJSON
    }) {
        this.payment_data = options.payment_data;
    }
}

export class PredicateInputMessagesFilterGeo {
    _ = 'inputMessagesFilterGeo' as const
}

export class PredicateInputMessagesFilterContacts {
    _ = 'inputMessagesFilterContacts' as const
}

export class PredicateUpdateChannelAvailableMessages {
    _ = 'updateChannelAvailableMessages' as const
    channel_id: string
    available_min_id: number
    constructor(options: {
        channel_id: string
        available_min_id: number
    }) {
        this.channel_id = options.channel_id;
        this.available_min_id = options.available_min_id;
    }
}

export class PredicateChannelAdminLogEventActionTogglePreHistoryHidden {
    _ = 'channelAdminLogEventActionTogglePreHistoryHidden' as const
    new_value: boolean
    constructor(options: {
        new_value: boolean
    }) {
        this.new_value = options.new_value;
    }
}

export class PredicateInputMediaGeoLive {
    _ = 'inputMediaGeoLive' as const
    stopped?: true
    geo_point: InputGeoPoint
    heading?: number
    period?: number
    proximity_notification_radius?: number
    constructor(options: {
        stopped?: true
        geo_point: InputGeoPoint
        heading?: number
        period?: number
        proximity_notification_radius?: number
    }) {
        this.stopped = options.stopped;
        this.geo_point = options.geo_point;
        this.heading = options.heading;
        this.period = options.period;
        this.proximity_notification_radius = options.proximity_notification_radius;
    }
}

export class PredicateMessageMediaGeoLive {
    _ = 'messageMediaGeoLive' as const
    geo: GeoPoint
    heading?: number
    period: number
    proximity_notification_radius?: number
    constructor(options: {
        geo: GeoPoint
        heading?: number
        period: number
        proximity_notification_radius?: number
    }) {
        this.geo = options.geo;
        this.heading = options.heading;
        this.period = options.period;
        this.proximity_notification_radius = options.proximity_notification_radius;
    }
}

export class PredicateRecentMeUrlUnknown {
    _ = 'recentMeUrlUnknown' as const
    url: string
    constructor(options: {
        url: string
    }) {
        this.url = options.url;
    }
}

export class PredicateRecentMeUrlUser {
    _ = 'recentMeUrlUser' as const
    url: string
    user_id: string
    constructor(options: {
        url: string
        user_id: string
    }) {
        this.url = options.url;
        this.user_id = options.user_id;
    }
}

export class PredicateRecentMeUrlChat {
    _ = 'recentMeUrlChat' as const
    url: string
    chat_id: string
    constructor(options: {
        url: string
        chat_id: string
    }) {
        this.url = options.url;
        this.chat_id = options.chat_id;
    }
}

export class PredicateRecentMeUrlChatInvite {
    _ = 'recentMeUrlChatInvite' as const
    url: string
    chat_invite: ChatInvite
    constructor(options: {
        url: string
        chat_invite: ChatInvite
    }) {
        this.url = options.url;
        this.chat_invite = options.chat_invite;
    }
}

export class PredicateRecentMeUrlStickerSet {
    _ = 'recentMeUrlStickerSet' as const
    url: string
    set: StickerSetCovered
    constructor(options: {
        url: string
        set: StickerSetCovered
    }) {
        this.url = options.url;
        this.set = options.set;
    }
}

export class PredicateHelpRecentMeUrls {
    _ = 'help.recentMeUrls' as const
    urls: RecentMeUrl[]
    chats: Chat[]
    users: User[]
    constructor(options: {
        urls: RecentMeUrl[]
        chats: Chat[]
        users: User[]
    }) {
        this.urls = options.urls;
        this.chats = options.chats;
        this.users = options.users;
    }
}

export class PredicateChannelsChannelParticipantsNotModified {
    _ = 'channels.channelParticipantsNotModified' as const
}

export class PredicateMessagesMessagesNotModified {
    _ = 'messages.messagesNotModified' as const
    count: number
    constructor(options: {
        count: number
    }) {
        this.count = options.count;
    }
}

export class PredicateInputSingleMedia {
    _ = 'inputSingleMedia' as const
    media: InputMedia
    random_id: string
    message: string
    entities?: MessageEntity[]
    constructor(options: {
        media: InputMedia
        random_id: string
        message: string
        entities?: MessageEntity[]
    }) {
        this.media = options.media;
        this.random_id = options.random_id;
        this.message = options.message;
        this.entities = options.entities;
    }
}

export class PredicateWebAuthorization {
    _ = 'webAuthorization' as const
    hash: string
    bot_id: string
    domain: string
    browser: string
    platform: string
    date_created: number
    date_active: number
    ip: string
    region: string
    constructor(options: {
        hash: string
        bot_id: string
        domain: string
        browser: string
        platform: string
        date_created: number
        date_active: number
        ip: string
        region: string
    }) {
        this.hash = options.hash;
        this.bot_id = options.bot_id;
        this.domain = options.domain;
        this.browser = options.browser;
        this.platform = options.platform;
        this.date_created = options.date_created;
        this.date_active = options.date_active;
        this.ip = options.ip;
        this.region = options.region;
    }
}

export class PredicateAccountWebAuthorizations {
    _ = 'account.webAuthorizations' as const
    authorizations: WebAuthorization[]
    users: User[]
    constructor(options: {
        authorizations: WebAuthorization[]
        users: User[]
    }) {
        this.authorizations = options.authorizations;
        this.users = options.users;
    }
}

export class PredicateInputMessageID {
    _ = 'inputMessageID' as const
    id: number
    constructor(options: {
        id: number
    }) {
        this.id = options.id;
    }
}

export class PredicateInputMessageReplyTo {
    _ = 'inputMessageReplyTo' as const
    id: number
    constructor(options: {
        id: number
    }) {
        this.id = options.id;
    }
}

export class PredicateInputMessagePinned {
    _ = 'inputMessagePinned' as const
}

export class PredicateMessageEntityPhone {
    _ = 'messageEntityPhone' as const
    offset: number
    length: number
    constructor(options: {
        offset: number
        length: number
    }) {
        this.offset = options.offset;
        this.length = options.length;
    }
}

export class PredicateMessageEntityCashtag {
    _ = 'messageEntityCashtag' as const
    offset: number
    length: number
    constructor(options: {
        offset: number
        length: number
    }) {
        this.offset = options.offset;
        this.length = options.length;
    }
}

export class PredicateMessageActionBotAllowed {
    _ = 'messageActionBotAllowed' as const
    domain: string
    constructor(options: {
        domain: string
    }) {
        this.domain = options.domain;
    }
}

export class PredicateInputDialogPeer {
    _ = 'inputDialogPeer' as const
    peer: InputPeer
    constructor(options: {
        peer: InputPeer
    }) {
        this.peer = options.peer;
    }
}

export class PredicateDialogPeer {
    _ = 'dialogPeer' as const
    peer: Peer
    constructor(options: {
        peer: Peer
    }) {
        this.peer = options.peer;
    }
}

export class PredicateMessagesFoundStickerSetsNotModified {
    _ = 'messages.foundStickerSetsNotModified' as const
}

export class PredicateMessagesFoundStickerSets {
    _ = 'messages.foundStickerSets' as const
    hash: string
    sets: StickerSetCovered[]
    constructor(options: {
        hash: string
        sets: StickerSetCovered[]
    }) {
        this.hash = options.hash;
        this.sets = options.sets;
    }
}

export class PredicateFileHash {
    _ = 'fileHash' as const
    offset: number
    limit: number
    hash: Uint8Array
    constructor(options: {
        offset: number
        limit: number
        hash: Uint8Array
    }) {
        this.offset = options.offset;
        this.limit = options.limit;
        this.hash = options.hash;
    }
}

export class PredicateWebDocumentNoProxy {
    _ = 'webDocumentNoProxy' as const
    url: string
    size: number
    mime_type: string
    attributes: DocumentAttribute[]
    constructor(options: {
        url: string
        size: number
        mime_type: string
        attributes: DocumentAttribute[]
    }) {
        this.url = options.url;
        this.size = options.size;
        this.mime_type = options.mime_type;
        this.attributes = options.attributes;
    }
}

export class PredicateInputClientProxy {
    _ = 'inputClientProxy' as const
    address: string
    port: number
    constructor(options: {
        address: string
        port: number
    }) {
        this.address = options.address;
        this.port = options.port;
    }
}

export class PredicateHelpTermsOfServiceUpdateEmpty {
    _ = 'help.termsOfServiceUpdateEmpty' as const
    expires: number
    constructor(options: {
        expires: number
    }) {
        this.expires = options.expires;
    }
}

export class PredicateHelpTermsOfServiceUpdate {
    _ = 'help.termsOfServiceUpdate' as const
    expires: number
    terms_of_service: HelpTermsOfService
    constructor(options: {
        expires: number
        terms_of_service: HelpTermsOfService
    }) {
        this.expires = options.expires;
        this.terms_of_service = options.terms_of_service;
    }
}

export class PredicateInputSecureFileUploaded {
    _ = 'inputSecureFileUploaded' as const
    id: string
    parts: number
    md5_checksum: string
    file_hash: Uint8Array
    secret: Uint8Array
    constructor(options: {
        id: string
        parts: number
        md5_checksum: string
        file_hash: Uint8Array
        secret: Uint8Array
    }) {
        this.id = options.id;
        this.parts = options.parts;
        this.md5_checksum = options.md5_checksum;
        this.file_hash = options.file_hash;
        this.secret = options.secret;
    }
}

export class PredicateInputSecureFile {
    _ = 'inputSecureFile' as const
    id: string
    access_hash: string
    constructor(options: {
        id: string
        access_hash: string
    }) {
        this.id = options.id;
        this.access_hash = options.access_hash;
    }
}

export class PredicateInputSecureFileLocation {
    _ = 'inputSecureFileLocation' as const
    id: string
    access_hash: string
    constructor(options: {
        id: string
        access_hash: string
    }) {
        this.id = options.id;
        this.access_hash = options.access_hash;
    }
}

export class PredicateSecureFileEmpty {
    _ = 'secureFileEmpty' as const
}

export class PredicateSecureFile {
    _ = 'secureFile' as const
    id: string
    access_hash: string
    size: number
    dc_id: number
    date: number
    file_hash: Uint8Array
    secret: Uint8Array
    constructor(options: {
        id: string
        access_hash: string
        size: number
        dc_id: number
        date: number
        file_hash: Uint8Array
        secret: Uint8Array
    }) {
        this.id = options.id;
        this.access_hash = options.access_hash;
        this.size = options.size;
        this.dc_id = options.dc_id;
        this.date = options.date;
        this.file_hash = options.file_hash;
        this.secret = options.secret;
    }
}

export class PredicateSecureData {
    _ = 'secureData' as const
    data: Uint8Array
    data_hash: Uint8Array
    secret: Uint8Array
    constructor(options: {
        data: Uint8Array
        data_hash: Uint8Array
        secret: Uint8Array
    }) {
        this.data = options.data;
        this.data_hash = options.data_hash;
        this.secret = options.secret;
    }
}

export class PredicateSecurePlainPhone {
    _ = 'securePlainPhone' as const
    phone: string
    constructor(options: {
        phone: string
    }) {
        this.phone = options.phone;
    }
}

export class PredicateSecurePlainEmail {
    _ = 'securePlainEmail' as const
    email: string
    constructor(options: {
        email: string
    }) {
        this.email = options.email;
    }
}

export class PredicateSecureValueTypePersonalDetails {
    _ = 'secureValueTypePersonalDetails' as const
}

export class PredicateSecureValueTypePassport {
    _ = 'secureValueTypePassport' as const
}

export class PredicateSecureValueTypeDriverLicense {
    _ = 'secureValueTypeDriverLicense' as const
}

export class PredicateSecureValueTypeIdentityCard {
    _ = 'secureValueTypeIdentityCard' as const
}

export class PredicateSecureValueTypeInternalPassport {
    _ = 'secureValueTypeInternalPassport' as const
}

export class PredicateSecureValueTypeAddress {
    _ = 'secureValueTypeAddress' as const
}

export class PredicateSecureValueTypeUtilityBill {
    _ = 'secureValueTypeUtilityBill' as const
}

export class PredicateSecureValueTypeBankStatement {
    _ = 'secureValueTypeBankStatement' as const
}

export class PredicateSecureValueTypeRentalAgreement {
    _ = 'secureValueTypeRentalAgreement' as const
}

export class PredicateSecureValueTypePassportRegistration {
    _ = 'secureValueTypePassportRegistration' as const
}

export class PredicateSecureValueTypeTemporaryRegistration {
    _ = 'secureValueTypeTemporaryRegistration' as const
}

export class PredicateSecureValueTypePhone {
    _ = 'secureValueTypePhone' as const
}

export class PredicateSecureValueTypeEmail {
    _ = 'secureValueTypeEmail' as const
}

export class PredicateSecureValue {
    _ = 'secureValue' as const
    type: SecureValueType
    data?: SecureData
    front_side?: SecureFile
    reverse_side?: SecureFile
    selfie?: SecureFile
    translation?: SecureFile[]
    files?: SecureFile[]
    plain_data?: SecurePlainData
    hash: Uint8Array
    constructor(options: {
        type: SecureValueType
        data?: SecureData
        front_side?: SecureFile
        reverse_side?: SecureFile
        selfie?: SecureFile
        translation?: SecureFile[]
        files?: SecureFile[]
        plain_data?: SecurePlainData
        hash: Uint8Array
    }) {
        this.type = options.type;
        this.data = options.data;
        this.front_side = options.front_side;
        this.reverse_side = options.reverse_side;
        this.selfie = options.selfie;
        this.translation = options.translation;
        this.files = options.files;
        this.plain_data = options.plain_data;
        this.hash = options.hash;
    }
}

export class PredicateInputSecureValue {
    _ = 'inputSecureValue' as const
    type: SecureValueType
    data?: SecureData
    front_side?: InputSecureFile
    reverse_side?: InputSecureFile
    selfie?: InputSecureFile
    translation?: InputSecureFile[]
    files?: InputSecureFile[]
    plain_data?: SecurePlainData
    constructor(options: {
        type: SecureValueType
        data?: SecureData
        front_side?: InputSecureFile
        reverse_side?: InputSecureFile
        selfie?: InputSecureFile
        translation?: InputSecureFile[]
        files?: InputSecureFile[]
        plain_data?: SecurePlainData
    }) {
        this.type = options.type;
        this.data = options.data;
        this.front_side = options.front_side;
        this.reverse_side = options.reverse_side;
        this.selfie = options.selfie;
        this.translation = options.translation;
        this.files = options.files;
        this.plain_data = options.plain_data;
    }
}

export class PredicateSecureValueHash {
    _ = 'secureValueHash' as const
    type: SecureValueType
    hash: Uint8Array
    constructor(options: {
        type: SecureValueType
        hash: Uint8Array
    }) {
        this.type = options.type;
        this.hash = options.hash;
    }
}

export class PredicateSecureValueErrorData {
    _ = 'secureValueErrorData' as const
    type: SecureValueType
    data_hash: Uint8Array
    field: string
    text: string
    constructor(options: {
        type: SecureValueType
        data_hash: Uint8Array
        field: string
        text: string
    }) {
        this.type = options.type;
        this.data_hash = options.data_hash;
        this.field = options.field;
        this.text = options.text;
    }
}

export class PredicateSecureValueErrorFrontSide {
    _ = 'secureValueErrorFrontSide' as const
    type: SecureValueType
    file_hash: Uint8Array
    text: string
    constructor(options: {
        type: SecureValueType
        file_hash: Uint8Array
        text: string
    }) {
        this.type = options.type;
        this.file_hash = options.file_hash;
        this.text = options.text;
    }
}

export class PredicateSecureValueErrorReverseSide {
    _ = 'secureValueErrorReverseSide' as const
    type: SecureValueType
    file_hash: Uint8Array
    text: string
    constructor(options: {
        type: SecureValueType
        file_hash: Uint8Array
        text: string
    }) {
        this.type = options.type;
        this.file_hash = options.file_hash;
        this.text = options.text;
    }
}

export class PredicateSecureValueErrorSelfie {
    _ = 'secureValueErrorSelfie' as const
    type: SecureValueType
    file_hash: Uint8Array
    text: string
    constructor(options: {
        type: SecureValueType
        file_hash: Uint8Array
        text: string
    }) {
        this.type = options.type;
        this.file_hash = options.file_hash;
        this.text = options.text;
    }
}

export class PredicateSecureValueErrorFile {
    _ = 'secureValueErrorFile' as const
    type: SecureValueType
    file_hash: Uint8Array
    text: string
    constructor(options: {
        type: SecureValueType
        file_hash: Uint8Array
        text: string
    }) {
        this.type = options.type;
        this.file_hash = options.file_hash;
        this.text = options.text;
    }
}

export class PredicateSecureValueErrorFiles {
    _ = 'secureValueErrorFiles' as const
    type: SecureValueType
    file_hash: Uint8Array[]
    text: string
    constructor(options: {
        type: SecureValueType
        file_hash: Uint8Array[]
        text: string
    }) {
        this.type = options.type;
        this.file_hash = options.file_hash;
        this.text = options.text;
    }
}

export class PredicateSecureCredentialsEncrypted {
    _ = 'secureCredentialsEncrypted' as const
    data: Uint8Array
    hash: Uint8Array
    secret: Uint8Array
    constructor(options: {
        data: Uint8Array
        hash: Uint8Array
        secret: Uint8Array
    }) {
        this.data = options.data;
        this.hash = options.hash;
        this.secret = options.secret;
    }
}

export class PredicateAccountAuthorizationForm {
    _ = 'account.authorizationForm' as const
    required_types: SecureRequiredType[]
    values: SecureValue[]
    errors: SecureValueError[]
    users: User[]
    privacy_policy_url?: string
    constructor(options: {
        required_types: SecureRequiredType[]
        values: SecureValue[]
        errors: SecureValueError[]
        users: User[]
        privacy_policy_url?: string
    }) {
        this.required_types = options.required_types;
        this.values = options.values;
        this.errors = options.errors;
        this.users = options.users;
        this.privacy_policy_url = options.privacy_policy_url;
    }
}

export class PredicateAccountSentEmailCode {
    _ = 'account.sentEmailCode' as const
    email_pattern: string
    length: number
    constructor(options: {
        email_pattern: string
        length: number
    }) {
        this.email_pattern = options.email_pattern;
        this.length = options.length;
    }
}

export class PredicateMessageActionSecureValuesSentMe {
    _ = 'messageActionSecureValuesSentMe' as const
    values: SecureValue[]
    credentials: SecureCredentialsEncrypted
    constructor(options: {
        values: SecureValue[]
        credentials: SecureCredentialsEncrypted
    }) {
        this.values = options.values;
        this.credentials = options.credentials;
    }
}

export class PredicateMessageActionSecureValuesSent {
    _ = 'messageActionSecureValuesSent' as const
    types: SecureValueType[]
    constructor(options: {
        types: SecureValueType[]
    }) {
        this.types = options.types;
    }
}

export class PredicateHelpDeepLinkInfoEmpty {
    _ = 'help.deepLinkInfoEmpty' as const
}

export class PredicateHelpDeepLinkInfo {
    _ = 'help.deepLinkInfo' as const
    update_app?: true
    message: string
    entities?: MessageEntity[]
    constructor(options: {
        update_app?: true
        message: string
        entities?: MessageEntity[]
    }) {
        this.update_app = options.update_app;
        this.message = options.message;
        this.entities = options.entities;
    }
}

export class PredicateSavedPhoneContact {
    _ = 'savedPhoneContact' as const
    phone: string
    first_name: string
    last_name: string
    date: number
    constructor(options: {
        phone: string
        first_name: string
        last_name: string
        date: number
    }) {
        this.phone = options.phone;
        this.first_name = options.first_name;
        this.last_name = options.last_name;
        this.date = options.date;
    }
}

export class PredicateAccountTakeout {
    _ = 'account.takeout' as const
    id: string
    constructor(options: {
        id: string
    }) {
        this.id = options.id;
    }
}

export class PredicateInputTakeoutFileLocation {
    _ = 'inputTakeoutFileLocation' as const
}

export class PredicateUpdateDialogUnreadMark {
    _ = 'updateDialogUnreadMark' as const
    unread?: true
    peer: DialogPeer
    constructor(options: {
        unread?: true
        peer: DialogPeer
    }) {
        this.unread = options.unread;
        this.peer = options.peer;
    }
}

export class PredicateMessagesDialogsNotModified {
    _ = 'messages.dialogsNotModified' as const
    count: number
    constructor(options: {
        count: number
    }) {
        this.count = options.count;
    }
}

export class PredicateInputWebFileGeoPointLocation {
    _ = 'inputWebFileGeoPointLocation' as const
    geo_point: InputGeoPoint
    access_hash: string
    w: number
    h: number
    zoom: number
    scale: number
    constructor(options: {
        geo_point: InputGeoPoint
        access_hash: string
        w: number
        h: number
        zoom: number
        scale: number
    }) {
        this.geo_point = options.geo_point;
        this.access_hash = options.access_hash;
        this.w = options.w;
        this.h = options.h;
        this.zoom = options.zoom;
        this.scale = options.scale;
    }
}

export class PredicateContactsTopPeersDisabled {
    _ = 'contacts.topPeersDisabled' as const
}

export class PredicateInputReportReasonCopyright {
    _ = 'inputReportReasonCopyright' as const
}

export class PredicatePasswordKdfAlgoUnknown {
    _ = 'passwordKdfAlgoUnknown' as const
}

export class PredicateSecurePasswordKdfAlgoUnknown {
    _ = 'securePasswordKdfAlgoUnknown' as const
}

export class PredicateSecurePasswordKdfAlgoPBKDF2HMACSHA512iter100000 {
    _ = 'securePasswordKdfAlgoPBKDF2HMACSHA512iter100000' as const
    salt: Uint8Array
    constructor(options: {
        salt: Uint8Array
    }) {
        this.salt = options.salt;
    }
}

export class PredicateSecurePasswordKdfAlgoSHA512 {
    _ = 'securePasswordKdfAlgoSHA512' as const
    salt: Uint8Array
    constructor(options: {
        salt: Uint8Array
    }) {
        this.salt = options.salt;
    }
}

export class PredicateSecureSecretSettings {
    _ = 'secureSecretSettings' as const
    secure_algo: SecurePasswordKdfAlgo
    secure_secret: Uint8Array
    secure_secret_id: string
    constructor(options: {
        secure_algo: SecurePasswordKdfAlgo
        secure_secret: Uint8Array
        secure_secret_id: string
    }) {
        this.secure_algo = options.secure_algo;
        this.secure_secret = options.secure_secret;
        this.secure_secret_id = options.secure_secret_id;
    }
}

export class PredicatePasswordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow {
    _ = 'passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow' as const
    salt1: Uint8Array
    salt2: Uint8Array
    g: number
    p: Uint8Array
    constructor(options: {
        salt1: Uint8Array
        salt2: Uint8Array
        g: number
        p: Uint8Array
    }) {
        this.salt1 = options.salt1;
        this.salt2 = options.salt2;
        this.g = options.g;
        this.p = options.p;
    }
}

export class PredicateInputCheckPasswordEmpty {
    _ = 'inputCheckPasswordEmpty' as const
}

export class PredicateInputCheckPasswordSRP {
    _ = 'inputCheckPasswordSRP' as const
    srp_id: string
    A: Uint8Array
    M1: Uint8Array
    constructor(options: {
        srp_id: string
        A: Uint8Array
        M1: Uint8Array
    }) {
        this.srp_id = options.srp_id;
        this.A = options.A;
        this.M1 = options.M1;
    }
}

export class PredicateSecureValueError {
    _ = 'secureValueError' as const
    type: SecureValueType
    hash: Uint8Array
    text: string
    constructor(options: {
        type: SecureValueType
        hash: Uint8Array
        text: string
    }) {
        this.type = options.type;
        this.hash = options.hash;
        this.text = options.text;
    }
}

export class PredicateSecureValueErrorTranslationFile {
    _ = 'secureValueErrorTranslationFile' as const
    type: SecureValueType
    file_hash: Uint8Array
    text: string
    constructor(options: {
        type: SecureValueType
        file_hash: Uint8Array
        text: string
    }) {
        this.type = options.type;
        this.file_hash = options.file_hash;
        this.text = options.text;
    }
}

export class PredicateSecureValueErrorTranslationFiles {
    _ = 'secureValueErrorTranslationFiles' as const
    type: SecureValueType
    file_hash: Uint8Array[]
    text: string
    constructor(options: {
        type: SecureValueType
        file_hash: Uint8Array[]
        text: string
    }) {
        this.type = options.type;
        this.file_hash = options.file_hash;
        this.text = options.text;
    }
}

export class PredicateSecureRequiredType {
    _ = 'secureRequiredType' as const
    native_names?: true
    selfie_required?: true
    translation_required?: true
    type: SecureValueType
    constructor(options: {
        native_names?: true
        selfie_required?: true
        translation_required?: true
        type: SecureValueType
    }) {
        this.native_names = options.native_names;
        this.selfie_required = options.selfie_required;
        this.translation_required = options.translation_required;
        this.type = options.type;
    }
}

export class PredicateSecureRequiredTypeOneOf {
    _ = 'secureRequiredTypeOneOf' as const
    types: SecureRequiredType[]
    constructor(options: {
        types: SecureRequiredType[]
    }) {
        this.types = options.types;
    }
}

export class PredicateHelpPassportConfigNotModified {
    _ = 'help.passportConfigNotModified' as const
}

export class PredicateHelpPassportConfig {
    _ = 'help.passportConfig' as const
    hash: number
    countries_langs: DataJSON
    constructor(options: {
        hash: number
        countries_langs: DataJSON
    }) {
        this.hash = options.hash;
        this.countries_langs = options.countries_langs;
    }
}

export class PredicateInputAppEvent {
    _ = 'inputAppEvent' as const
    time: number
    type: string
    peer: string
    data: JSONValue
    constructor(options: {
        time: number
        type: string
        peer: string
        data: JSONValue
    }) {
        this.time = options.time;
        this.type = options.type;
        this.peer = options.peer;
        this.data = options.data;
    }
}

export class PredicateJsonObjectValue {
    _ = 'jsonObjectValue' as const
    key: string
    value: JSONValue
    constructor(options: {
        key: string
        value: JSONValue
    }) {
        this.key = options.key;
        this.value = options.value;
    }
}

export class PredicateJsonNull {
    _ = 'jsonNull' as const
}

export class PredicateJsonBool {
    _ = 'jsonBool' as const
    value: boolean
    constructor(options: {
        value: boolean
    }) {
        this.value = options.value;
    }
}

export class PredicateJsonNumber {
    _ = 'jsonNumber' as const
    value: number
    constructor(options: {
        value: number
    }) {
        this.value = options.value;
    }
}

export class PredicateJsonString {
    _ = 'jsonString' as const
    value: string
    constructor(options: {
        value: string
    }) {
        this.value = options.value;
    }
}

export class PredicateJsonArray {
    _ = 'jsonArray' as const
    value: JSONValue[]
    constructor(options: {
        value: JSONValue[]
    }) {
        this.value = options.value;
    }
}

export class PredicateJsonObject {
    _ = 'jsonObject' as const
    value: JSONObjectValue[]
    constructor(options: {
        value: JSONObjectValue[]
    }) {
        this.value = options.value;
    }
}

export class PredicateInputNotifyBroadcasts {
    _ = 'inputNotifyBroadcasts' as const
}

export class PredicateNotifyBroadcasts {
    _ = 'notifyBroadcasts' as const
}

export class PredicateTextSubscript {
    _ = 'textSubscript' as const
    text: RichText
    constructor(options: {
        text: RichText
    }) {
        this.text = options.text;
    }
}

export class PredicateTextSuperscript {
    _ = 'textSuperscript' as const
    text: RichText
    constructor(options: {
        text: RichText
    }) {
        this.text = options.text;
    }
}

export class PredicateTextMarked {
    _ = 'textMarked' as const
    text: RichText
    constructor(options: {
        text: RichText
    }) {
        this.text = options.text;
    }
}

export class PredicateTextPhone {
    _ = 'textPhone' as const
    text: RichText
    phone: string
    constructor(options: {
        text: RichText
        phone: string
    }) {
        this.text = options.text;
        this.phone = options.phone;
    }
}

export class PredicateTextImage {
    _ = 'textImage' as const
    document_id: string
    w: number
    h: number
    constructor(options: {
        document_id: string
        w: number
        h: number
    }) {
        this.document_id = options.document_id;
        this.w = options.w;
        this.h = options.h;
    }
}

export class PredicatePageBlockKicker {
    _ = 'pageBlockKicker' as const
    text: RichText
    constructor(options: {
        text: RichText
    }) {
        this.text = options.text;
    }
}

export class PredicatePageTableCell {
    _ = 'pageTableCell' as const
    header?: true
    align_center?: true
    align_right?: true
    valign_middle?: true
    valign_bottom?: true
    text?: RichText
    colspan?: number
    rowspan?: number
    constructor(options: {
        header?: true
        align_center?: true
        align_right?: true
        valign_middle?: true
        valign_bottom?: true
        text?: RichText
        colspan?: number
        rowspan?: number
    } = {}) {
        this.header = options.header;
        this.align_center = options.align_center;
        this.align_right = options.align_right;
        this.valign_middle = options.valign_middle;
        this.valign_bottom = options.valign_bottom;
        this.text = options.text;
        this.colspan = options.colspan;
        this.rowspan = options.rowspan;
    }
}

export class PredicatePageTableRow {
    _ = 'pageTableRow' as const
    cells: PageTableCell[]
    constructor(options: {
        cells: PageTableCell[]
    }) {
        this.cells = options.cells;
    }
}

export class PredicatePageBlockTable {
    _ = 'pageBlockTable' as const
    bordered?: true
    striped?: true
    title: RichText
    rows: PageTableRow[]
    constructor(options: {
        bordered?: true
        striped?: true
        title: RichText
        rows: PageTableRow[]
    }) {
        this.bordered = options.bordered;
        this.striped = options.striped;
        this.title = options.title;
        this.rows = options.rows;
    }
}

export class PredicatePageCaption {
    _ = 'pageCaption' as const
    text: RichText
    credit: RichText
    constructor(options: {
        text: RichText
        credit: RichText
    }) {
        this.text = options.text;
        this.credit = options.credit;
    }
}

export class PredicatePageListItemText {
    _ = 'pageListItemText' as const
    text: RichText
    constructor(options: {
        text: RichText
    }) {
        this.text = options.text;
    }
}

export class PredicatePageListItemBlocks {
    _ = 'pageListItemBlocks' as const
    blocks: PageBlock[]
    constructor(options: {
        blocks: PageBlock[]
    }) {
        this.blocks = options.blocks;
    }
}

export class PredicatePageListOrderedItemText {
    _ = 'pageListOrderedItemText' as const
    num: string
    text: RichText
    constructor(options: {
        num: string
        text: RichText
    }) {
        this.num = options.num;
        this.text = options.text;
    }
}

export class PredicatePageListOrderedItemBlocks {
    _ = 'pageListOrderedItemBlocks' as const
    num: string
    blocks: PageBlock[]
    constructor(options: {
        num: string
        blocks: PageBlock[]
    }) {
        this.num = options.num;
        this.blocks = options.blocks;
    }
}

export class PredicatePageBlockOrderedList {
    _ = 'pageBlockOrderedList' as const
    items: PageListOrderedItem[]
    constructor(options: {
        items: PageListOrderedItem[]
    }) {
        this.items = options.items;
    }
}

export class PredicatePageBlockDetails {
    _ = 'pageBlockDetails' as const
    open?: true
    blocks: PageBlock[]
    title: RichText
    constructor(options: {
        open?: true
        blocks: PageBlock[]
        title: RichText
    }) {
        this.open = options.open;
        this.blocks = options.blocks;
        this.title = options.title;
    }
}

export class PredicatePageRelatedArticle {
    _ = 'pageRelatedArticle' as const
    url: string
    webpage_id: string
    title?: string
    description?: string
    photo_id?: string
    author?: string
    published_date?: number
    constructor(options: {
        url: string
        webpage_id: string
        title?: string
        description?: string
        photo_id?: string
        author?: string
        published_date?: number
    }) {
        this.url = options.url;
        this.webpage_id = options.webpage_id;
        this.title = options.title;
        this.description = options.description;
        this.photo_id = options.photo_id;
        this.author = options.author;
        this.published_date = options.published_date;
    }
}

export class PredicatePageBlockRelatedArticles {
    _ = 'pageBlockRelatedArticles' as const
    title: RichText
    articles: PageRelatedArticle[]
    constructor(options: {
        title: RichText
        articles: PageRelatedArticle[]
    }) {
        this.title = options.title;
        this.articles = options.articles;
    }
}

export class PredicatePageBlockMap {
    _ = 'pageBlockMap' as const
    geo: GeoPoint
    zoom: number
    w: number
    h: number
    caption: PageCaption
    constructor(options: {
        geo: GeoPoint
        zoom: number
        w: number
        h: number
        caption: PageCaption
    }) {
        this.geo = options.geo;
        this.zoom = options.zoom;
        this.w = options.w;
        this.h = options.h;
        this.caption = options.caption;
    }
}

export class PredicatePage {
    _ = 'page' as const
    part?: true
    rtl?: true
    v2?: true
    url: string
    blocks: PageBlock[]
    photos: Photo[]
    documents: Document[]
    views?: number
    constructor(options: {
        part?: true
        rtl?: true
        v2?: true
        url: string
        blocks: PageBlock[]
        photos: Photo[]
        documents: Document[]
        views?: number
    }) {
        this.part = options.part;
        this.rtl = options.rtl;
        this.v2 = options.v2;
        this.url = options.url;
        this.blocks = options.blocks;
        this.photos = options.photos;
        this.documents = options.documents;
        this.views = options.views;
    }
}

export class PredicateInputPrivacyKeyPhoneP2P {
    _ = 'inputPrivacyKeyPhoneP2P' as const
}

export class PredicatePrivacyKeyPhoneP2P {
    _ = 'privacyKeyPhoneP2P' as const
}

export class PredicateTextAnchor {
    _ = 'textAnchor' as const
    text: RichText
    name: string
    constructor(options: {
        text: RichText
        name: string
    }) {
        this.text = options.text;
        this.name = options.name;
    }
}

export class PredicateHelpSupportName {
    _ = 'help.supportName' as const
    name: string
    constructor(options: {
        name: string
    }) {
        this.name = options.name;
    }
}

export class PredicateHelpUserInfoEmpty {
    _ = 'help.userInfoEmpty' as const
}

export class PredicateHelpUserInfo {
    _ = 'help.userInfo' as const
    message: string
    entities: MessageEntity[]
    author: string
    date: number
    constructor(options: {
        message: string
        entities: MessageEntity[]
        author: string
        date: number
    }) {
        this.message = options.message;
        this.entities = options.entities;
        this.author = options.author;
        this.date = options.date;
    }
}

export class PredicateMessageActionContactSignUp {
    _ = 'messageActionContactSignUp' as const
}

export class PredicateUpdateMessagePoll {
    _ = 'updateMessagePoll' as const
    poll_id: string
    poll?: Poll
    results: PollResults
    constructor(options: {
        poll_id: string
        poll?: Poll
        results: PollResults
    }) {
        this.poll_id = options.poll_id;
        this.poll = options.poll;
        this.results = options.results;
    }
}

export class PredicatePollAnswer {
    _ = 'pollAnswer' as const
    text: string
    option: Uint8Array
    constructor(options: {
        text: string
        option: Uint8Array
    }) {
        this.text = options.text;
        this.option = options.option;
    }
}

export class PredicatePoll {
    _ = 'poll' as const
    id: string
    closed?: true
    public_voters?: true
    multiple_choice?: true
    quiz?: true
    question: string
    answers: PollAnswer[]
    close_period?: number
    close_date?: number
    constructor(options: {
        id: string
        closed?: true
        public_voters?: true
        multiple_choice?: true
        quiz?: true
        question: string
        answers: PollAnswer[]
        close_period?: number
        close_date?: number
    }) {
        this.id = options.id;
        this.closed = options.closed;
        this.public_voters = options.public_voters;
        this.multiple_choice = options.multiple_choice;
        this.quiz = options.quiz;
        this.question = options.question;
        this.answers = options.answers;
        this.close_period = options.close_period;
        this.close_date = options.close_date;
    }
}

export class PredicatePollAnswerVoters {
    _ = 'pollAnswerVoters' as const
    chosen?: true
    correct?: true
    option: Uint8Array
    voters: number
    constructor(options: {
        chosen?: true
        correct?: true
        option: Uint8Array
        voters: number
    }) {
        this.chosen = options.chosen;
        this.correct = options.correct;
        this.option = options.option;
        this.voters = options.voters;
    }
}

export class PredicatePollResults {
    _ = 'pollResults' as const
    min?: true
    results?: PollAnswerVoters[]
    total_voters?: number
    recent_voters?: string[]
    solution?: string
    solution_entities?: MessageEntity[]
    constructor(options: {
        min?: true
        results?: PollAnswerVoters[]
        total_voters?: number
        recent_voters?: string[]
        solution?: string
        solution_entities?: MessageEntity[]
    } = {}) {
        this.min = options.min;
        this.results = options.results;
        this.total_voters = options.total_voters;
        this.recent_voters = options.recent_voters;
        this.solution = options.solution;
        this.solution_entities = options.solution_entities;
    }
}

export class PredicateInputMediaPoll {
    _ = 'inputMediaPoll' as const
    poll: Poll
    correct_answers?: Uint8Array[]
    solution?: string
    solution_entities?: MessageEntity[]
    constructor(options: {
        poll: Poll
        correct_answers?: Uint8Array[]
        solution?: string
        solution_entities?: MessageEntity[]
    }) {
        this.poll = options.poll;
        this.correct_answers = options.correct_answers;
        this.solution = options.solution;
        this.solution_entities = options.solution_entities;
    }
}

export class PredicateMessageMediaPoll {
    _ = 'messageMediaPoll' as const
    poll: Poll
    results: PollResults
    constructor(options: {
        poll: Poll
        results: PollResults
    }) {
        this.poll = options.poll;
        this.results = options.results;
    }
}

export class PredicateChatOnlines {
    _ = 'chatOnlines' as const
    onlines: number
    constructor(options: {
        onlines: number
    }) {
        this.onlines = options.onlines;
    }
}

export class PredicateStatsURL {
    _ = 'statsURL' as const
    url: string
    constructor(options: {
        url: string
    }) {
        this.url = options.url;
    }
}

export class PredicatePhotoStrippedSize {
    _ = 'photoStrippedSize' as const
    type: string
    bytes: Uint8Array
    constructor(options: {
        type: string
        bytes: Uint8Array
    }) {
        this.type = options.type;
        this.bytes = options.bytes;
    }
}

export class PredicateChatAdminRights {
    _ = 'chatAdminRights' as const
    change_info?: true
    post_messages?: true
    edit_messages?: true
    delete_messages?: true
    ban_users?: true
    invite_users?: true
    pin_messages?: true
    add_admins?: true
    anonymous?: true
    manage_call?: true
    other?: true
    constructor(options: {
        change_info?: true
        post_messages?: true
        edit_messages?: true
        delete_messages?: true
        ban_users?: true
        invite_users?: true
        pin_messages?: true
        add_admins?: true
        anonymous?: true
        manage_call?: true
        other?: true
    } = {}) {
        this.change_info = options.change_info;
        this.post_messages = options.post_messages;
        this.edit_messages = options.edit_messages;
        this.delete_messages = options.delete_messages;
        this.ban_users = options.ban_users;
        this.invite_users = options.invite_users;
        this.pin_messages = options.pin_messages;
        this.add_admins = options.add_admins;
        this.anonymous = options.anonymous;
        this.manage_call = options.manage_call;
        this.other = options.other;
    }
}

export class PredicateChatBannedRights {
    _ = 'chatBannedRights' as const
    view_messages?: true
    send_messages?: true
    send_media?: true
    send_stickers?: true
    send_gifs?: true
    send_games?: true
    send_inline?: true
    embed_links?: true
    send_polls?: true
    change_info?: true
    invite_users?: true
    pin_messages?: true
    until_date: number
    constructor(options: {
        view_messages?: true
        send_messages?: true
        send_media?: true
        send_stickers?: true
        send_gifs?: true
        send_games?: true
        send_inline?: true
        embed_links?: true
        send_polls?: true
        change_info?: true
        invite_users?: true
        pin_messages?: true
        until_date: number
    }) {
        this.view_messages = options.view_messages;
        this.send_messages = options.send_messages;
        this.send_media = options.send_media;
        this.send_stickers = options.send_stickers;
        this.send_gifs = options.send_gifs;
        this.send_games = options.send_games;
        this.send_inline = options.send_inline;
        this.embed_links = options.embed_links;
        this.send_polls = options.send_polls;
        this.change_info = options.change_info;
        this.invite_users = options.invite_users;
        this.pin_messages = options.pin_messages;
        this.until_date = options.until_date;
    }
}

export class PredicateUpdateChatDefaultBannedRights {
    _ = 'updateChatDefaultBannedRights' as const
    peer: Peer
    default_banned_rights: ChatBannedRights
    version: number
    constructor(options: {
        peer: Peer
        default_banned_rights: ChatBannedRights
        version: number
    }) {
        this.peer = options.peer;
        this.default_banned_rights = options.default_banned_rights;
        this.version = options.version;
    }
}

export class PredicateInputWallPaper {
    _ = 'inputWallPaper' as const
    id: string
    access_hash: string
    constructor(options: {
        id: string
        access_hash: string
    }) {
        this.id = options.id;
        this.access_hash = options.access_hash;
    }
}

export class PredicateInputWallPaperSlug {
    _ = 'inputWallPaperSlug' as const
    slug: string
    constructor(options: {
        slug: string
    }) {
        this.slug = options.slug;
    }
}

export class PredicateChannelParticipantsContacts {
    _ = 'channelParticipantsContacts' as const
    q: string
    constructor(options: {
        q: string
    }) {
        this.q = options.q;
    }
}

export class PredicateChannelAdminLogEventActionDefaultBannedRights {
    _ = 'channelAdminLogEventActionDefaultBannedRights' as const
    prev_banned_rights: ChatBannedRights
    new_banned_rights: ChatBannedRights
    constructor(options: {
        prev_banned_rights: ChatBannedRights
        new_banned_rights: ChatBannedRights
    }) {
        this.prev_banned_rights = options.prev_banned_rights;
        this.new_banned_rights = options.new_banned_rights;
    }
}

export class PredicateChannelAdminLogEventActionStopPoll {
    _ = 'channelAdminLogEventActionStopPoll' as const
    message: Message
    constructor(options: {
        message: Message
    }) {
        this.message = options.message;
    }
}

export class PredicateAccountWallPapersNotModified {
    _ = 'account.wallPapersNotModified' as const
}

export class PredicateAccountWallPapers {
    _ = 'account.wallPapers' as const
    hash: string
    wallpapers: WallPaper[]
    constructor(options: {
        hash: string
        wallpapers: WallPaper[]
    }) {
        this.hash = options.hash;
        this.wallpapers = options.wallpapers;
    }
}

export class PredicateCodeSettings {
    _ = 'codeSettings' as const
    allow_flashcall?: true
    current_number?: true
    allow_app_hash?: true
    allow_missed_call?: true
    logout_tokens?: Uint8Array[]
    constructor(options: {
        allow_flashcall?: true
        current_number?: true
        allow_app_hash?: true
        allow_missed_call?: true
        logout_tokens?: Uint8Array[]
    } = {}) {
        this.allow_flashcall = options.allow_flashcall;
        this.current_number = options.current_number;
        this.allow_app_hash = options.allow_app_hash;
        this.allow_missed_call = options.allow_missed_call;
        this.logout_tokens = options.logout_tokens;
    }
}

export class PredicateWallPaperSettings {
    _ = 'wallPaperSettings' as const
    blur?: true
    motion?: true
    background_color?: number
    second_background_color?: number
    third_background_color?: number
    fourth_background_color?: number
    intensity?: number
    rotation?: number
    constructor(options: {
        blur?: true
        motion?: true
        background_color?: number
        second_background_color?: number
        third_background_color?: number
        fourth_background_color?: number
        intensity?: number
        rotation?: number
    } = {}) {
        this.blur = options.blur;
        this.motion = options.motion;
        this.background_color = options.background_color;
        this.second_background_color = options.second_background_color;
        this.third_background_color = options.third_background_color;
        this.fourth_background_color = options.fourth_background_color;
        this.intensity = options.intensity;
        this.rotation = options.rotation;
    }
}

export class PredicateAutoDownloadSettings {
    _ = 'autoDownloadSettings' as const
    disabled?: true
    video_preload_large?: true
    audio_preload_next?: true
    phonecalls_less_data?: true
    photo_size_max: number
    video_size_max: number
    file_size_max: number
    video_upload_maxbitrate: number
    constructor(options: {
        disabled?: true
        video_preload_large?: true
        audio_preload_next?: true
        phonecalls_less_data?: true
        photo_size_max: number
        video_size_max: number
        file_size_max: number
        video_upload_maxbitrate: number
    }) {
        this.disabled = options.disabled;
        this.video_preload_large = options.video_preload_large;
        this.audio_preload_next = options.audio_preload_next;
        this.phonecalls_less_data = options.phonecalls_less_data;
        this.photo_size_max = options.photo_size_max;
        this.video_size_max = options.video_size_max;
        this.file_size_max = options.file_size_max;
        this.video_upload_maxbitrate = options.video_upload_maxbitrate;
    }
}

export class PredicateAccountAutoDownloadSettings {
    _ = 'account.autoDownloadSettings' as const
    low: AutoDownloadSettings
    medium: AutoDownloadSettings
    high: AutoDownloadSettings
    constructor(options: {
        low: AutoDownloadSettings
        medium: AutoDownloadSettings
        high: AutoDownloadSettings
    }) {
        this.low = options.low;
        this.medium = options.medium;
        this.high = options.high;
    }
}

export class PredicateEmojiKeyword {
    _ = 'emojiKeyword' as const
    keyword: string
    emoticons: string[]
    constructor(options: {
        keyword: string
        emoticons: string[]
    }) {
        this.keyword = options.keyword;
        this.emoticons = options.emoticons;
    }
}

export class PredicateEmojiKeywordDeleted {
    _ = 'emojiKeywordDeleted' as const
    keyword: string
    emoticons: string[]
    constructor(options: {
        keyword: string
        emoticons: string[]
    }) {
        this.keyword = options.keyword;
        this.emoticons = options.emoticons;
    }
}

export class PredicateEmojiKeywordsDifference {
    _ = 'emojiKeywordsDifference' as const
    lang_code: string
    from_version: number
    version: number
    keywords: EmojiKeyword[]
    constructor(options: {
        lang_code: string
        from_version: number
        version: number
        keywords: EmojiKeyword[]
    }) {
        this.lang_code = options.lang_code;
        this.from_version = options.from_version;
        this.version = options.version;
        this.keywords = options.keywords;
    }
}

export class PredicateEmojiURL {
    _ = 'emojiURL' as const
    url: string
    constructor(options: {
        url: string
    }) {
        this.url = options.url;
    }
}

export class PredicateEmojiLanguage {
    _ = 'emojiLanguage' as const
    lang_code: string
    constructor(options: {
        lang_code: string
    }) {
        this.lang_code = options.lang_code;
    }
}

export class PredicateInputPrivacyKeyForwards {
    _ = 'inputPrivacyKeyForwards' as const
}

export class PredicatePrivacyKeyForwards {
    _ = 'privacyKeyForwards' as const
}

export class PredicateInputPrivacyKeyProfilePhoto {
    _ = 'inputPrivacyKeyProfilePhoto' as const
}

export class PredicatePrivacyKeyProfilePhoto {
    _ = 'privacyKeyProfilePhoto' as const
}

export class PredicateInputPhotoFileLocation {
    _ = 'inputPhotoFileLocation' as const
    id: string
    access_hash: string
    file_reference: Uint8Array
    thumb_size: string
    constructor(options: {
        id: string
        access_hash: string
        file_reference: Uint8Array
        thumb_size: string
    }) {
        this.id = options.id;
        this.access_hash = options.access_hash;
        this.file_reference = options.file_reference;
        this.thumb_size = options.thumb_size;
    }
}

export class PredicateInputPhotoLegacyFileLocation {
    _ = 'inputPhotoLegacyFileLocation' as const
    id: string
    access_hash: string
    file_reference: Uint8Array
    volume_id: string
    local_id: number
    secret: string
    constructor(options: {
        id: string
        access_hash: string
        file_reference: Uint8Array
        volume_id: string
        local_id: number
        secret: string
    }) {
        this.id = options.id;
        this.access_hash = options.access_hash;
        this.file_reference = options.file_reference;
        this.volume_id = options.volume_id;
        this.local_id = options.local_id;
        this.secret = options.secret;
    }
}

export class PredicateInputPeerPhotoFileLocation {
    _ = 'inputPeerPhotoFileLocation' as const
    big?: true
    peer: InputPeer
    photo_id: string
    constructor(options: {
        big?: true
        peer: InputPeer
        photo_id: string
    }) {
        this.big = options.big;
        this.peer = options.peer;
        this.photo_id = options.photo_id;
    }
}

export class PredicateInputStickerSetThumb {
    _ = 'inputStickerSetThumb' as const
    stickerset: InputStickerSet
    thumb_version: number
    constructor(options: {
        stickerset: InputStickerSet
        thumb_version: number
    }) {
        this.stickerset = options.stickerset;
        this.thumb_version = options.thumb_version;
    }
}

export class PredicateFolder {
    _ = 'folder' as const
    autofill_new_broadcasts?: true
    autofill_public_groups?: true
    autofill_new_correspondents?: true
    id: number
    title: string
    photo?: ChatPhoto
    constructor(options: {
        autofill_new_broadcasts?: true
        autofill_public_groups?: true
        autofill_new_correspondents?: true
        id: number
        title: string
        photo?: ChatPhoto
    }) {
        this.autofill_new_broadcasts = options.autofill_new_broadcasts;
        this.autofill_public_groups = options.autofill_public_groups;
        this.autofill_new_correspondents = options.autofill_new_correspondents;
        this.id = options.id;
        this.title = options.title;
        this.photo = options.photo;
    }
}

export class PredicateDialogFolder {
    _ = 'dialogFolder' as const
    pinned?: true
    folder: Folder
    peer: Peer
    top_message: number
    unread_muted_peers_count: number
    unread_unmuted_peers_count: number
    unread_muted_messages_count: number
    unread_unmuted_messages_count: number
    constructor(options: {
        pinned?: true
        folder: Folder
        peer: Peer
        top_message: number
        unread_muted_peers_count: number
        unread_unmuted_peers_count: number
        unread_muted_messages_count: number
        unread_unmuted_messages_count: number
    }) {
        this.pinned = options.pinned;
        this.folder = options.folder;
        this.peer = options.peer;
        this.top_message = options.top_message;
        this.unread_muted_peers_count = options.unread_muted_peers_count;
        this.unread_unmuted_peers_count = options.unread_unmuted_peers_count;
        this.unread_muted_messages_count = options.unread_muted_messages_count;
        this.unread_unmuted_messages_count = options.unread_unmuted_messages_count;
    }
}

export class PredicateInputDialogPeerFolder {
    _ = 'inputDialogPeerFolder' as const
    folder_id: number
    constructor(options: {
        folder_id: number
    }) {
        this.folder_id = options.folder_id;
    }
}

export class PredicateDialogPeerFolder {
    _ = 'dialogPeerFolder' as const
    folder_id: number
    constructor(options: {
        folder_id: number
    }) {
        this.folder_id = options.folder_id;
    }
}

export class PredicateInputFolderPeer {
    _ = 'inputFolderPeer' as const
    peer: InputPeer
    folder_id: number
    constructor(options: {
        peer: InputPeer
        folder_id: number
    }) {
        this.peer = options.peer;
        this.folder_id = options.folder_id;
    }
}

export class PredicateFolderPeer {
    _ = 'folderPeer' as const
    peer: Peer
    folder_id: number
    constructor(options: {
        peer: Peer
        folder_id: number
    }) {
        this.peer = options.peer;
        this.folder_id = options.folder_id;
    }
}

export class PredicateUpdateFolderPeers {
    _ = 'updateFolderPeers' as const
    folder_peers: FolderPeer[]
    pts: number
    pts_count: number
    constructor(options: {
        folder_peers: FolderPeer[]
        pts: number
        pts_count: number
    }) {
        this.folder_peers = options.folder_peers;
        this.pts = options.pts;
        this.pts_count = options.pts_count;
    }
}

export class PredicateInputUserFromMessage {
    _ = 'inputUserFromMessage' as const
    peer: InputPeer
    msg_id: number
    user_id: string
    constructor(options: {
        peer: InputPeer
        msg_id: number
        user_id: string
    }) {
        this.peer = options.peer;
        this.msg_id = options.msg_id;
        this.user_id = options.user_id;
    }
}

export class PredicateInputChannelFromMessage {
    _ = 'inputChannelFromMessage' as const
    peer: InputPeer
    msg_id: number
    channel_id: string
    constructor(options: {
        peer: InputPeer
        msg_id: number
        channel_id: string
    }) {
        this.peer = options.peer;
        this.msg_id = options.msg_id;
        this.channel_id = options.channel_id;
    }
}

export class PredicateInputPeerUserFromMessage {
    _ = 'inputPeerUserFromMessage' as const
    peer: InputPeer
    msg_id: number
    user_id: string
    constructor(options: {
        peer: InputPeer
        msg_id: number
        user_id: string
    }) {
        this.peer = options.peer;
        this.msg_id = options.msg_id;
        this.user_id = options.user_id;
    }
}

export class PredicateInputPeerChannelFromMessage {
    _ = 'inputPeerChannelFromMessage' as const
    peer: InputPeer
    msg_id: number
    channel_id: string
    constructor(options: {
        peer: InputPeer
        msg_id: number
        channel_id: string
    }) {
        this.peer = options.peer;
        this.msg_id = options.msg_id;
        this.channel_id = options.channel_id;
    }
}

export class PredicateInputPrivacyKeyPhoneNumber {
    _ = 'inputPrivacyKeyPhoneNumber' as const
}

export class PredicatePrivacyKeyPhoneNumber {
    _ = 'privacyKeyPhoneNumber' as const
}

export class PredicateTopPeerCategoryForwardUsers {
    _ = 'topPeerCategoryForwardUsers' as const
}

export class PredicateTopPeerCategoryForwardChats {
    _ = 'topPeerCategoryForwardChats' as const
}

export class PredicateChannelAdminLogEventActionChangeLinkedChat {
    _ = 'channelAdminLogEventActionChangeLinkedChat' as const
    prev_value: string
    new_value: string
    constructor(options: {
        prev_value: string
        new_value: string
    }) {
        this.prev_value = options.prev_value;
        this.new_value = options.new_value;
    }
}

export class PredicateMessagesSearchCounter {
    _ = 'messages.searchCounter' as const
    inexact?: true
    filter: MessagesFilter
    count: number
    constructor(options: {
        inexact?: true
        filter: MessagesFilter
        count: number
    }) {
        this.inexact = options.inexact;
        this.filter = options.filter;
        this.count = options.count;
    }
}

export class PredicateKeyboardButtonUrlAuth {
    _ = 'keyboardButtonUrlAuth' as const
    text: string
    fwd_text?: string
    url: string
    button_id: number
    constructor(options: {
        text: string
        fwd_text?: string
        url: string
        button_id: number
    }) {
        this.text = options.text;
        this.fwd_text = options.fwd_text;
        this.url = options.url;
        this.button_id = options.button_id;
    }
}

export class PredicateInputKeyboardButtonUrlAuth {
    _ = 'inputKeyboardButtonUrlAuth' as const
    request_write_access?: true
    text: string
    fwd_text?: string
    url: string
    bot: InputUser
    constructor(options: {
        request_write_access?: true
        text: string
        fwd_text?: string
        url: string
        bot: InputUser
    }) {
        this.request_write_access = options.request_write_access;
        this.text = options.text;
        this.fwd_text = options.fwd_text;
        this.url = options.url;
        this.bot = options.bot;
    }
}

export class PredicateUrlAuthResultRequest {
    _ = 'urlAuthResultRequest' as const
    request_write_access?: true
    bot: User
    domain: string
    constructor(options: {
        request_write_access?: true
        bot: User
        domain: string
    }) {
        this.request_write_access = options.request_write_access;
        this.bot = options.bot;
        this.domain = options.domain;
    }
}

export class PredicateUrlAuthResultAccepted {
    _ = 'urlAuthResultAccepted' as const
    url: string
    constructor(options: {
        url: string
    }) {
        this.url = options.url;
    }
}

export class PredicateUrlAuthResultDefault {
    _ = 'urlAuthResultDefault' as const
}

export class PredicateInputPrivacyValueAllowChatParticipants {
    _ = 'inputPrivacyValueAllowChatParticipants' as const
    chats: string[]
    constructor(options: {
        chats: string[]
    }) {
        this.chats = options.chats;
    }
}

export class PredicateInputPrivacyValueDisallowChatParticipants {
    _ = 'inputPrivacyValueDisallowChatParticipants' as const
    chats: string[]
    constructor(options: {
        chats: string[]
    }) {
        this.chats = options.chats;
    }
}

export class PredicatePrivacyValueAllowChatParticipants {
    _ = 'privacyValueAllowChatParticipants' as const
    chats: string[]
    constructor(options: {
        chats: string[]
    }) {
        this.chats = options.chats;
    }
}

export class PredicatePrivacyValueDisallowChatParticipants {
    _ = 'privacyValueDisallowChatParticipants' as const
    chats: string[]
    constructor(options: {
        chats: string[]
    }) {
        this.chats = options.chats;
    }
}

export class PredicateMessageEntityUnderline {
    _ = 'messageEntityUnderline' as const
    offset: number
    length: number
    constructor(options: {
        offset: number
        length: number
    }) {
        this.offset = options.offset;
        this.length = options.length;
    }
}

export class PredicateMessageEntityStrike {
    _ = 'messageEntityStrike' as const
    offset: number
    length: number
    constructor(options: {
        offset: number
        length: number
    }) {
        this.offset = options.offset;
        this.length = options.length;
    }
}

export class PredicateMessageEntityBlockquote {
    _ = 'messageEntityBlockquote' as const
    offset: number
    length: number
    constructor(options: {
        offset: number
        length: number
    }) {
        this.offset = options.offset;
        this.length = options.length;
    }
}

export class PredicateUpdatePeerSettings {
    _ = 'updatePeerSettings' as const
    peer: Peer
    settings: PeerSettings
    constructor(options: {
        peer: Peer
        settings: PeerSettings
    }) {
        this.peer = options.peer;
        this.settings = options.settings;
    }
}

export class PredicateChannelLocationEmpty {
    _ = 'channelLocationEmpty' as const
}

export class PredicateChannelLocation {
    _ = 'channelLocation' as const
    geo_point: GeoPoint
    address: string
    constructor(options: {
        geo_point: GeoPoint
        address: string
    }) {
        this.geo_point = options.geo_point;
        this.address = options.address;
    }
}

export class PredicatePeerLocated {
    _ = 'peerLocated' as const
    peer: Peer
    expires: number
    distance: number
    constructor(options: {
        peer: Peer
        expires: number
        distance: number
    }) {
        this.peer = options.peer;
        this.expires = options.expires;
        this.distance = options.distance;
    }
}

export class PredicateUpdatePeerLocated {
    _ = 'updatePeerLocated' as const
    peers: PeerLocated[]
    constructor(options: {
        peers: PeerLocated[]
    }) {
        this.peers = options.peers;
    }
}

export class PredicateChannelAdminLogEventActionChangeLocation {
    _ = 'channelAdminLogEventActionChangeLocation' as const
    prev_value: ChannelLocation
    new_value: ChannelLocation
    constructor(options: {
        prev_value: ChannelLocation
        new_value: ChannelLocation
    }) {
        this.prev_value = options.prev_value;
        this.new_value = options.new_value;
    }
}

export class PredicateInputReportReasonGeoIrrelevant {
    _ = 'inputReportReasonGeoIrrelevant' as const
}

export class PredicateChannelAdminLogEventActionToggleSlowMode {
    _ = 'channelAdminLogEventActionToggleSlowMode' as const
    prev_value: number
    new_value: number
    constructor(options: {
        prev_value: number
        new_value: number
    }) {
        this.prev_value = options.prev_value;
        this.new_value = options.new_value;
    }
}

export class PredicateAuthAuthorizationSignUpRequired {
    _ = 'auth.authorizationSignUpRequired' as const
    terms_of_service?: HelpTermsOfService
    constructor(options: {
        terms_of_service?: HelpTermsOfService
    } = {}) {
        this.terms_of_service = options.terms_of_service;
    }
}

export class PredicatePaymentsPaymentVerificationNeeded {
    _ = 'payments.paymentVerificationNeeded' as const
    url: string
    constructor(options: {
        url: string
    }) {
        this.url = options.url;
    }
}

export class PredicateInputStickerSetAnimatedEmoji {
    _ = 'inputStickerSetAnimatedEmoji' as const
}

export class PredicateUpdateNewScheduledMessage {
    _ = 'updateNewScheduledMessage' as const
    message: Message
    constructor(options: {
        message: Message
    }) {
        this.message = options.message;
    }
}

export class PredicateUpdateDeleteScheduledMessages {
    _ = 'updateDeleteScheduledMessages' as const
    peer: Peer
    messages: number[]
    constructor(options: {
        peer: Peer
        messages: number[]
    }) {
        this.peer = options.peer;
        this.messages = options.messages;
    }
}

export class PredicateRestrictionReason {
    _ = 'restrictionReason' as const
    platform: string
    reason: string
    text: string
    constructor(options: {
        platform: string
        reason: string
        text: string
    }) {
        this.platform = options.platform;
        this.reason = options.reason;
        this.text = options.text;
    }
}

export class PredicateInputTheme {
    _ = 'inputTheme' as const
    id: string
    access_hash: string
    constructor(options: {
        id: string
        access_hash: string
    }) {
        this.id = options.id;
        this.access_hash = options.access_hash;
    }
}

export class PredicateInputThemeSlug {
    _ = 'inputThemeSlug' as const
    slug: string
    constructor(options: {
        slug: string
    }) {
        this.slug = options.slug;
    }
}

export class PredicateTheme {
    _ = 'theme' as const
    creator?: true
    default?: true
    for_chat?: true
    id: string
    access_hash: string
    slug: string
    title: string
    document?: Document
    settings?: ThemeSettings[]
    emoticon?: string
    installs_count?: number
    constructor(options: {
        creator?: true
        default?: true
        for_chat?: true
        id: string
        access_hash: string
        slug: string
        title: string
        document?: Document
        settings?: ThemeSettings[]
        emoticon?: string
        installs_count?: number
    }) {
        this.creator = options.creator;
        this.default = options.default;
        this.for_chat = options.for_chat;
        this.id = options.id;
        this.access_hash = options.access_hash;
        this.slug = options.slug;
        this.title = options.title;
        this.document = options.document;
        this.settings = options.settings;
        this.emoticon = options.emoticon;
        this.installs_count = options.installs_count;
    }
}

export class PredicateAccountThemesNotModified {
    _ = 'account.themesNotModified' as const
}

export class PredicateAccountThemes {
    _ = 'account.themes' as const
    hash: string
    themes: Theme[]
    constructor(options: {
        hash: string
        themes: Theme[]
    }) {
        this.hash = options.hash;
        this.themes = options.themes;
    }
}

export class PredicateUpdateTheme {
    _ = 'updateTheme' as const
    theme: Theme
    constructor(options: {
        theme: Theme
    }) {
        this.theme = options.theme;
    }
}

export class PredicateInputPrivacyKeyAddedByPhone {
    _ = 'inputPrivacyKeyAddedByPhone' as const
}

export class PredicatePrivacyKeyAddedByPhone {
    _ = 'privacyKeyAddedByPhone' as const
}

export class PredicateUpdateGeoLiveViewed {
    _ = 'updateGeoLiveViewed' as const
    peer: Peer
    msg_id: number
    constructor(options: {
        peer: Peer
        msg_id: number
    }) {
        this.peer = options.peer;
        this.msg_id = options.msg_id;
    }
}

export class PredicateUpdateLoginToken {
    _ = 'updateLoginToken' as const
}

export class PredicateAuthLoginToken {
    _ = 'auth.loginToken' as const
    expires: number
    token: Uint8Array
    constructor(options: {
        expires: number
        token: Uint8Array
    }) {
        this.expires = options.expires;
        this.token = options.token;
    }
}

export class PredicateAuthLoginTokenMigrateTo {
    _ = 'auth.loginTokenMigrateTo' as const
    dc_id: number
    token: Uint8Array
    constructor(options: {
        dc_id: number
        token: Uint8Array
    }) {
        this.dc_id = options.dc_id;
        this.token = options.token;
    }
}

export class PredicateAuthLoginTokenSuccess {
    _ = 'auth.loginTokenSuccess' as const
    authorization: AuthAuthorization
    constructor(options: {
        authorization: AuthAuthorization
    }) {
        this.authorization = options.authorization;
    }
}

export class PredicateAccountContentSettings {
    _ = 'account.contentSettings' as const
    sensitive_enabled?: true
    sensitive_can_change?: true
    constructor(options: {
        sensitive_enabled?: true
        sensitive_can_change?: true
    } = {}) {
        this.sensitive_enabled = options.sensitive_enabled;
        this.sensitive_can_change = options.sensitive_can_change;
    }
}

export class PredicateMessagesInactiveChats {
    _ = 'messages.inactiveChats' as const
    dates: number[]
    chats: Chat[]
    users: User[]
    constructor(options: {
        dates: number[]
        chats: Chat[]
        users: User[]
    }) {
        this.dates = options.dates;
        this.chats = options.chats;
        this.users = options.users;
    }
}

export class PredicateBaseThemeClassic {
    _ = 'baseThemeClassic' as const
}

export class PredicateBaseThemeDay {
    _ = 'baseThemeDay' as const
}

export class PredicateBaseThemeNight {
    _ = 'baseThemeNight' as const
}

export class PredicateBaseThemeTinted {
    _ = 'baseThemeTinted' as const
}

export class PredicateBaseThemeArctic {
    _ = 'baseThemeArctic' as const
}

export class PredicateInputWallPaperNoFile {
    _ = 'inputWallPaperNoFile' as const
    id: string
    constructor(options: {
        id: string
    }) {
        this.id = options.id;
    }
}

export class PredicateWallPaperNoFile {
    _ = 'wallPaperNoFile' as const
    id: string
    default?: true
    dark?: true
    settings?: WallPaperSettings
    constructor(options: {
        id: string
        default?: true
        dark?: true
        settings?: WallPaperSettings
    }) {
        this.id = options.id;
        this.default = options.default;
        this.dark = options.dark;
        this.settings = options.settings;
    }
}

export class PredicateInputThemeSettings {
    _ = 'inputThemeSettings' as const
    message_colors_animated?: true
    base_theme: BaseTheme
    accent_color: number
    outbox_accent_color?: number
    message_colors?: number[]
    wallpaper?: InputWallPaper
    wallpaper_settings?: WallPaperSettings
    constructor(options: {
        message_colors_animated?: true
        base_theme: BaseTheme
        accent_color: number
        outbox_accent_color?: number
        message_colors?: number[]
        wallpaper?: InputWallPaper
        wallpaper_settings?: WallPaperSettings
    }) {
        this.message_colors_animated = options.message_colors_animated;
        this.base_theme = options.base_theme;
        this.accent_color = options.accent_color;
        this.outbox_accent_color = options.outbox_accent_color;
        this.message_colors = options.message_colors;
        this.wallpaper = options.wallpaper;
        this.wallpaper_settings = options.wallpaper_settings;
    }
}

export class PredicateThemeSettings {
    _ = 'themeSettings' as const
    message_colors_animated?: true
    base_theme: BaseTheme
    accent_color: number
    outbox_accent_color?: number
    message_colors?: number[]
    wallpaper?: WallPaper
    constructor(options: {
        message_colors_animated?: true
        base_theme: BaseTheme
        accent_color: number
        outbox_accent_color?: number
        message_colors?: number[]
        wallpaper?: WallPaper
    }) {
        this.message_colors_animated = options.message_colors_animated;
        this.base_theme = options.base_theme;
        this.accent_color = options.accent_color;
        this.outbox_accent_color = options.outbox_accent_color;
        this.message_colors = options.message_colors;
        this.wallpaper = options.wallpaper;
    }
}

export class PredicateWebPageAttributeTheme {
    _ = 'webPageAttributeTheme' as const
    documents?: Document[]
    settings?: ThemeSettings
    constructor(options: {
        documents?: Document[]
        settings?: ThemeSettings
    } = {}) {
        this.documents = options.documents;
        this.settings = options.settings;
    }
}

export class PredicateUpdateMessagePollVote {
    _ = 'updateMessagePollVote' as const
    poll_id: string
    user_id: string
    options: Uint8Array[]
    qts: number
    constructor(options: {
        poll_id: string
        user_id: string
        options: Uint8Array[]
        qts: number
    }) {
        this.poll_id = options.poll_id;
        this.user_id = options.user_id;
        this.options = options.options;
        this.qts = options.qts;
    }
}

export class PredicateMessageUserVote {
    _ = 'messageUserVote' as const
    user_id: string
    option: Uint8Array
    date: number
    constructor(options: {
        user_id: string
        option: Uint8Array
        date: number
    }) {
        this.user_id = options.user_id;
        this.option = options.option;
        this.date = options.date;
    }
}

export class PredicateMessageUserVoteInputOption {
    _ = 'messageUserVoteInputOption' as const
    user_id: string
    date: number
    constructor(options: {
        user_id: string
        date: number
    }) {
        this.user_id = options.user_id;
        this.date = options.date;
    }
}

export class PredicateMessageUserVoteMultiple {
    _ = 'messageUserVoteMultiple' as const
    user_id: string
    options: Uint8Array[]
    date: number
    constructor(options: {
        user_id: string
        options: Uint8Array[]
        date: number
    }) {
        this.user_id = options.user_id;
        this.options = options.options;
        this.date = options.date;
    }
}

export class PredicateMessagesVotesList {
    _ = 'messages.votesList' as const
    count: number
    votes: MessageUserVote[]
    users: User[]
    next_offset?: string
    constructor(options: {
        count: number
        votes: MessageUserVote[]
        users: User[]
        next_offset?: string
    }) {
        this.count = options.count;
        this.votes = options.votes;
        this.users = options.users;
        this.next_offset = options.next_offset;
    }
}

export class PredicateKeyboardButtonRequestPoll {
    _ = 'keyboardButtonRequestPoll' as const
    quiz?: boolean
    text: string
    constructor(options: {
        quiz?: boolean
        text: string
    }) {
        this.quiz = options.quiz;
        this.text = options.text;
    }
}

export class PredicateMessageEntityBankCard {
    _ = 'messageEntityBankCard' as const
    offset: number
    length: number
    constructor(options: {
        offset: number
        length: number
    }) {
        this.offset = options.offset;
        this.length = options.length;
    }
}

export class PredicateBankCardOpenUrl {
    _ = 'bankCardOpenUrl' as const
    url: string
    name: string
    constructor(options: {
        url: string
        name: string
    }) {
        this.url = options.url;
        this.name = options.name;
    }
}

export class PredicatePaymentsBankCardData {
    _ = 'payments.bankCardData' as const
    title: string
    open_urls: BankCardOpenUrl[]
    constructor(options: {
        title: string
        open_urls: BankCardOpenUrl[]
    }) {
        this.title = options.title;
        this.open_urls = options.open_urls;
    }
}

export class PredicatePeerSelfLocated {
    _ = 'peerSelfLocated' as const
    expires: number
    constructor(options: {
        expires: number
    }) {
        this.expires = options.expires;
    }
}

export class PredicateDialogFilter {
    _ = 'dialogFilter' as const
    contacts?: true
    non_contacts?: true
    groups?: true
    broadcasts?: true
    bots?: true
    exclude_muted?: true
    exclude_read?: true
    exclude_archived?: true
    id: number
    title: string
    emoticon?: string
    pinned_peers: InputPeer[]
    include_peers: InputPeer[]
    exclude_peers: InputPeer[]
    constructor(options: {
        contacts?: true
        non_contacts?: true
        groups?: true
        broadcasts?: true
        bots?: true
        exclude_muted?: true
        exclude_read?: true
        exclude_archived?: true
        id: number
        title: string
        emoticon?: string
        pinned_peers: InputPeer[]
        include_peers: InputPeer[]
        exclude_peers: InputPeer[]
    }) {
        this.contacts = options.contacts;
        this.non_contacts = options.non_contacts;
        this.groups = options.groups;
        this.broadcasts = options.broadcasts;
        this.bots = options.bots;
        this.exclude_muted = options.exclude_muted;
        this.exclude_read = options.exclude_read;
        this.exclude_archived = options.exclude_archived;
        this.id = options.id;
        this.title = options.title;
        this.emoticon = options.emoticon;
        this.pinned_peers = options.pinned_peers;
        this.include_peers = options.include_peers;
        this.exclude_peers = options.exclude_peers;
    }
}

export class PredicateDialogFilterSuggested {
    _ = 'dialogFilterSuggested' as const
    filter: DialogFilter
    description: string
    constructor(options: {
        filter: DialogFilter
        description: string
    }) {
        this.filter = options.filter;
        this.description = options.description;
    }
}

export class PredicateUpdateDialogFilter {
    _ = 'updateDialogFilter' as const
    id: number
    filter?: DialogFilter
    constructor(options: {
        id: number
        filter?: DialogFilter
    }) {
        this.id = options.id;
        this.filter = options.filter;
    }
}

export class PredicateUpdateDialogFilterOrder {
    _ = 'updateDialogFilterOrder' as const
    order: number[]
    constructor(options: {
        order: number[]
    }) {
        this.order = options.order;
    }
}

export class PredicateUpdateDialogFilters {
    _ = 'updateDialogFilters' as const
}

export class PredicateStatsDateRangeDays {
    _ = 'statsDateRangeDays' as const
    min_date: number
    max_date: number
    constructor(options: {
        min_date: number
        max_date: number
    }) {
        this.min_date = options.min_date;
        this.max_date = options.max_date;
    }
}

export class PredicateStatsAbsValueAndPrev {
    _ = 'statsAbsValueAndPrev' as const
    current: number
    previous: number
    constructor(options: {
        current: number
        previous: number
    }) {
        this.current = options.current;
        this.previous = options.previous;
    }
}

export class PredicateStatsPercentValue {
    _ = 'statsPercentValue' as const
    part: number
    total: number
    constructor(options: {
        part: number
        total: number
    }) {
        this.part = options.part;
        this.total = options.total;
    }
}

export class PredicateStatsGraphAsync {
    _ = 'statsGraphAsync' as const
    token: string
    constructor(options: {
        token: string
    }) {
        this.token = options.token;
    }
}

export class PredicateStatsGraphError {
    _ = 'statsGraphError' as const
    error: string
    constructor(options: {
        error: string
    }) {
        this.error = options.error;
    }
}

export class PredicateStatsGraph {
    _ = 'statsGraph' as const
    json: DataJSON
    zoom_token?: string
    constructor(options: {
        json: DataJSON
        zoom_token?: string
    }) {
        this.json = options.json;
        this.zoom_token = options.zoom_token;
    }
}

export class PredicateMessageInteractionCounters {
    _ = 'messageInteractionCounters' as const
    msg_id: number
    views: number
    forwards: number
    constructor(options: {
        msg_id: number
        views: number
        forwards: number
    }) {
        this.msg_id = options.msg_id;
        this.views = options.views;
        this.forwards = options.forwards;
    }
}

export class PredicateStatsBroadcastStats {
    _ = 'stats.broadcastStats' as const
    period: StatsDateRangeDays
    followers: StatsAbsValueAndPrev
    views_per_post: StatsAbsValueAndPrev
    shares_per_post: StatsAbsValueAndPrev
    enabled_notifications: StatsPercentValue
    growth_graph: StatsGraph
    followers_graph: StatsGraph
    mute_graph: StatsGraph
    top_hours_graph: StatsGraph
    interactions_graph: StatsGraph
    iv_interactions_graph: StatsGraph
    views_by_source_graph: StatsGraph
    new_followers_by_source_graph: StatsGraph
    languages_graph: StatsGraph
    recent_message_interactions: MessageInteractionCounters[]
    constructor(options: {
        period: StatsDateRangeDays
        followers: StatsAbsValueAndPrev
        views_per_post: StatsAbsValueAndPrev
        shares_per_post: StatsAbsValueAndPrev
        enabled_notifications: StatsPercentValue
        growth_graph: StatsGraph
        followers_graph: StatsGraph
        mute_graph: StatsGraph
        top_hours_graph: StatsGraph
        interactions_graph: StatsGraph
        iv_interactions_graph: StatsGraph
        views_by_source_graph: StatsGraph
        new_followers_by_source_graph: StatsGraph
        languages_graph: StatsGraph
        recent_message_interactions: MessageInteractionCounters[]
    }) {
        this.period = options.period;
        this.followers = options.followers;
        this.views_per_post = options.views_per_post;
        this.shares_per_post = options.shares_per_post;
        this.enabled_notifications = options.enabled_notifications;
        this.growth_graph = options.growth_graph;
        this.followers_graph = options.followers_graph;
        this.mute_graph = options.mute_graph;
        this.top_hours_graph = options.top_hours_graph;
        this.interactions_graph = options.interactions_graph;
        this.iv_interactions_graph = options.iv_interactions_graph;
        this.views_by_source_graph = options.views_by_source_graph;
        this.new_followers_by_source_graph = options.new_followers_by_source_graph;
        this.languages_graph = options.languages_graph;
        this.recent_message_interactions = options.recent_message_interactions;
    }
}

export class PredicateInputMediaDice {
    _ = 'inputMediaDice' as const
    emoticon: string
    constructor(options: {
        emoticon: string
    }) {
        this.emoticon = options.emoticon;
    }
}

export class PredicateMessageMediaDice {
    _ = 'messageMediaDice' as const
    value: number
    emoticon: string
    constructor(options: {
        value: number
        emoticon: string
    }) {
        this.value = options.value;
        this.emoticon = options.emoticon;
    }
}

export class PredicateInputStickerSetDice {
    _ = 'inputStickerSetDice' as const
    emoticon: string
    constructor(options: {
        emoticon: string
    }) {
        this.emoticon = options.emoticon;
    }
}

export class PredicateHelpPromoDataEmpty {
    _ = 'help.promoDataEmpty' as const
    expires: number
    constructor(options: {
        expires: number
    }) {
        this.expires = options.expires;
    }
}

export class PredicateHelpPromoData {
    _ = 'help.promoData' as const
    proxy?: true
    expires: number
    peer: Peer
    chats: Chat[]
    users: User[]
    psa_type?: string
    psa_message?: string
    constructor(options: {
        proxy?: true
        expires: number
        peer: Peer
        chats: Chat[]
        users: User[]
        psa_type?: string
        psa_message?: string
    }) {
        this.proxy = options.proxy;
        this.expires = options.expires;
        this.peer = options.peer;
        this.chats = options.chats;
        this.users = options.users;
        this.psa_type = options.psa_type;
        this.psa_message = options.psa_message;
    }
}

export class PredicateVideoSize {
    _ = 'videoSize' as const
    type: string
    w: number
    h: number
    size: number
    video_start_ts?: number
    constructor(options: {
        type: string
        w: number
        h: number
        size: number
        video_start_ts?: number
    }) {
        this.type = options.type;
        this.w = options.w;
        this.h = options.h;
        this.size = options.size;
        this.video_start_ts = options.video_start_ts;
    }
}

export class PredicateUpdatePhoneCallSignalingData {
    _ = 'updatePhoneCallSignalingData' as const
    phone_call_id: string
    data: Uint8Array
    constructor(options: {
        phone_call_id: string
        data: Uint8Array
    }) {
        this.phone_call_id = options.phone_call_id;
        this.data = options.data;
    }
}

export class PredicateChatInvitePeek {
    _ = 'chatInvitePeek' as const
    chat: Chat
    expires: number
    constructor(options: {
        chat: Chat
        expires: number
    }) {
        this.chat = options.chat;
        this.expires = options.expires;
    }
}

export class PredicateStatsGroupTopPoster {
    _ = 'statsGroupTopPoster' as const
    user_id: string
    messages: number
    avg_chars: number
    constructor(options: {
        user_id: string
        messages: number
        avg_chars: number
    }) {
        this.user_id = options.user_id;
        this.messages = options.messages;
        this.avg_chars = options.avg_chars;
    }
}

export class PredicateStatsGroupTopAdmin {
    _ = 'statsGroupTopAdmin' as const
    user_id: string
    deleted: number
    kicked: number
    banned: number
    constructor(options: {
        user_id: string
        deleted: number
        kicked: number
        banned: number
    }) {
        this.user_id = options.user_id;
        this.deleted = options.deleted;
        this.kicked = options.kicked;
        this.banned = options.banned;
    }
}

export class PredicateStatsGroupTopInviter {
    _ = 'statsGroupTopInviter' as const
    user_id: string
    invitations: number
    constructor(options: {
        user_id: string
        invitations: number
    }) {
        this.user_id = options.user_id;
        this.invitations = options.invitations;
    }
}

export class PredicateStatsMegagroupStats {
    _ = 'stats.megagroupStats' as const
    period: StatsDateRangeDays
    members: StatsAbsValueAndPrev
    messages: StatsAbsValueAndPrev
    viewers: StatsAbsValueAndPrev
    posters: StatsAbsValueAndPrev
    growth_graph: StatsGraph
    members_graph: StatsGraph
    new_members_by_source_graph: StatsGraph
    languages_graph: StatsGraph
    messages_graph: StatsGraph
    actions_graph: StatsGraph
    top_hours_graph: StatsGraph
    weekdays_graph: StatsGraph
    top_posters: StatsGroupTopPoster[]
    top_admins: StatsGroupTopAdmin[]
    top_inviters: StatsGroupTopInviter[]
    users: User[]
    constructor(options: {
        period: StatsDateRangeDays
        members: StatsAbsValueAndPrev
        messages: StatsAbsValueAndPrev
        viewers: StatsAbsValueAndPrev
        posters: StatsAbsValueAndPrev
        growth_graph: StatsGraph
        members_graph: StatsGraph
        new_members_by_source_graph: StatsGraph
        languages_graph: StatsGraph
        messages_graph: StatsGraph
        actions_graph: StatsGraph
        top_hours_graph: StatsGraph
        weekdays_graph: StatsGraph
        top_posters: StatsGroupTopPoster[]
        top_admins: StatsGroupTopAdmin[]
        top_inviters: StatsGroupTopInviter[]
        users: User[]
    }) {
        this.period = options.period;
        this.members = options.members;
        this.messages = options.messages;
        this.viewers = options.viewers;
        this.posters = options.posters;
        this.growth_graph = options.growth_graph;
        this.members_graph = options.members_graph;
        this.new_members_by_source_graph = options.new_members_by_source_graph;
        this.languages_graph = options.languages_graph;
        this.messages_graph = options.messages_graph;
        this.actions_graph = options.actions_graph;
        this.top_hours_graph = options.top_hours_graph;
        this.weekdays_graph = options.weekdays_graph;
        this.top_posters = options.top_posters;
        this.top_admins = options.top_admins;
        this.top_inviters = options.top_inviters;
        this.users = options.users;
    }
}

export class PredicateGlobalPrivacySettings {
    _ = 'globalPrivacySettings' as const
    archive_and_mute_new_noncontact_peers?: boolean
    constructor(options: {
        archive_and_mute_new_noncontact_peers?: boolean
    } = {}) {
        this.archive_and_mute_new_noncontact_peers = options.archive_and_mute_new_noncontact_peers;
    }
}

export class PredicatePhoneConnectionWebrtc {
    _ = 'phoneConnectionWebrtc' as const
    turn?: true
    stun?: true
    id: string
    ip: string
    ipv6: string
    port: number
    username: string
    password: string
    constructor(options: {
        turn?: true
        stun?: true
        id: string
        ip: string
        ipv6: string
        port: number
        username: string
        password: string
    }) {
        this.turn = options.turn;
        this.stun = options.stun;
        this.id = options.id;
        this.ip = options.ip;
        this.ipv6 = options.ipv6;
        this.port = options.port;
        this.username = options.username;
        this.password = options.password;
    }
}

export class PredicateHelpCountryCode {
    _ = 'help.countryCode' as const
    country_code: string
    prefixes?: string[]
    patterns?: string[]
    constructor(options: {
        country_code: string
        prefixes?: string[]
        patterns?: string[]
    }) {
        this.country_code = options.country_code;
        this.prefixes = options.prefixes;
        this.patterns = options.patterns;
    }
}

export class PredicateHelpCountry {
    _ = 'help.country' as const
    hidden?: true
    iso2: string
    default_name: string
    name?: string
    country_codes: HelpCountryCode[]
    constructor(options: {
        hidden?: true
        iso2: string
        default_name: string
        name?: string
        country_codes: HelpCountryCode[]
    }) {
        this.hidden = options.hidden;
        this.iso2 = options.iso2;
        this.default_name = options.default_name;
        this.name = options.name;
        this.country_codes = options.country_codes;
    }
}

export class PredicateHelpCountriesListNotModified {
    _ = 'help.countriesListNotModified' as const
}

export class PredicateHelpCountriesList {
    _ = 'help.countriesList' as const
    countries: HelpCountry[]
    hash: number
    constructor(options: {
        countries: HelpCountry[]
        hash: number
    }) {
        this.countries = options.countries;
        this.hash = options.hash;
    }
}

export class PredicateMessageViews {
    _ = 'messageViews' as const
    views?: number
    forwards?: number
    replies?: MessageReplies
    constructor(options: {
        views?: number
        forwards?: number
        replies?: MessageReplies
    } = {}) {
        this.views = options.views;
        this.forwards = options.forwards;
        this.replies = options.replies;
    }
}

export class PredicateUpdateChannelMessageForwards {
    _ = 'updateChannelMessageForwards' as const
    channel_id: string
    id: number
    forwards: number
    constructor(options: {
        channel_id: string
        id: number
        forwards: number
    }) {
        this.channel_id = options.channel_id;
        this.id = options.id;
        this.forwards = options.forwards;
    }
}

export class PredicatePhotoSizeProgressive {
    _ = 'photoSizeProgressive' as const
    type: string
    w: number
    h: number
    sizes: number[]
    constructor(options: {
        type: string
        w: number
        h: number
        sizes: number[]
    }) {
        this.type = options.type;
        this.w = options.w;
        this.h = options.h;
        this.sizes = options.sizes;
    }
}

export class PredicateMessagesMessageViews {
    _ = 'messages.messageViews' as const
    views: MessageViews[]
    chats: Chat[]
    users: User[]
    constructor(options: {
        views: MessageViews[]
        chats: Chat[]
        users: User[]
    }) {
        this.views = options.views;
        this.chats = options.chats;
        this.users = options.users;
    }
}

export class PredicateUpdateReadChannelDiscussionInbox {
    _ = 'updateReadChannelDiscussionInbox' as const
    channel_id: string
    top_msg_id: number
    read_max_id: number
    broadcast_id?: string
    broadcast_post?: number
    constructor(options: {
        channel_id: string
        top_msg_id: number
        read_max_id: number
        broadcast_id?: string
        broadcast_post?: number
    }) {
        this.channel_id = options.channel_id;
        this.top_msg_id = options.top_msg_id;
        this.read_max_id = options.read_max_id;
        this.broadcast_id = options.broadcast_id;
        this.broadcast_post = options.broadcast_post;
    }
}

export class PredicateUpdateReadChannelDiscussionOutbox {
    _ = 'updateReadChannelDiscussionOutbox' as const
    channel_id: string
    top_msg_id: number
    read_max_id: number
    constructor(options: {
        channel_id: string
        top_msg_id: number
        read_max_id: number
    }) {
        this.channel_id = options.channel_id;
        this.top_msg_id = options.top_msg_id;
        this.read_max_id = options.read_max_id;
    }
}

export class PredicateMessagesDiscussionMessage {
    _ = 'messages.discussionMessage' as const
    messages: Message[]
    max_id?: number
    read_inbox_max_id?: number
    read_outbox_max_id?: number
    unread_count: number
    chats: Chat[]
    users: User[]
    constructor(options: {
        messages: Message[]
        max_id?: number
        read_inbox_max_id?: number
        read_outbox_max_id?: number
        unread_count: number
        chats: Chat[]
        users: User[]
    }) {
        this.messages = options.messages;
        this.max_id = options.max_id;
        this.read_inbox_max_id = options.read_inbox_max_id;
        this.read_outbox_max_id = options.read_outbox_max_id;
        this.unread_count = options.unread_count;
        this.chats = options.chats;
        this.users = options.users;
    }
}

export class PredicateMessageReplyHeader {
    _ = 'messageReplyHeader' as const
    reply_to_scheduled?: true
    reply_to_msg_id: number
    reply_to_peer_id?: Peer
    reply_to_top_id?: number
    constructor(options: {
        reply_to_scheduled?: true
        reply_to_msg_id: number
        reply_to_peer_id?: Peer
        reply_to_top_id?: number
    }) {
        this.reply_to_scheduled = options.reply_to_scheduled;
        this.reply_to_msg_id = options.reply_to_msg_id;
        this.reply_to_peer_id = options.reply_to_peer_id;
        this.reply_to_top_id = options.reply_to_top_id;
    }
}

export class PredicateMessageReplies {
    _ = 'messageReplies' as const
    comments?: true
    replies: number
    replies_pts: number
    recent_repliers?: Peer[]
    channel_id?: string
    max_id?: number
    read_max_id?: number
    constructor(options: {
        comments?: true
        replies: number
        replies_pts: number
        recent_repliers?: Peer[]
        channel_id?: string
        max_id?: number
        read_max_id?: number
    }) {
        this.comments = options.comments;
        this.replies = options.replies;
        this.replies_pts = options.replies_pts;
        this.recent_repliers = options.recent_repliers;
        this.channel_id = options.channel_id;
        this.max_id = options.max_id;
        this.read_max_id = options.read_max_id;
    }
}

export class PredicateUpdatePeerBlocked {
    _ = 'updatePeerBlocked' as const
    peer_id: Peer
    blocked: boolean
    constructor(options: {
        peer_id: Peer
        blocked: boolean
    }) {
        this.peer_id = options.peer_id;
        this.blocked = options.blocked;
    }
}

export class PredicatePeerBlocked {
    _ = 'peerBlocked' as const
    peer_id: Peer
    date: number
    constructor(options: {
        peer_id: Peer
        date: number
    }) {
        this.peer_id = options.peer_id;
        this.date = options.date;
    }
}

export class PredicateUpdateChannelUserTyping {
    _ = 'updateChannelUserTyping' as const
    channel_id: string
    top_msg_id?: number
    from_id: Peer
    action: SendMessageAction
    constructor(options: {
        channel_id: string
        top_msg_id?: number
        from_id: Peer
        action: SendMessageAction
    }) {
        this.channel_id = options.channel_id;
        this.top_msg_id = options.top_msg_id;
        this.from_id = options.from_id;
        this.action = options.action;
    }
}

export class PredicateInputMessageCallbackQuery {
    _ = 'inputMessageCallbackQuery' as const
    id: number
    query_id: string
    constructor(options: {
        id: number
        query_id: string
    }) {
        this.id = options.id;
        this.query_id = options.query_id;
    }
}

export class PredicateChannelParticipantLeft {
    _ = 'channelParticipantLeft' as const
    peer: Peer
    constructor(options: {
        peer: Peer
    }) {
        this.peer = options.peer;
    }
}

export class PredicateChannelParticipantsMentions {
    _ = 'channelParticipantsMentions' as const
    q?: string
    top_msg_id?: number
    constructor(options: {
        q?: string
        top_msg_id?: number
    } = {}) {
        this.q = options.q;
        this.top_msg_id = options.top_msg_id;
    }
}

export class PredicateUpdatePinnedMessages {
    _ = 'updatePinnedMessages' as const
    pinned?: true
    peer: Peer
    messages: number[]
    pts: number
    pts_count: number
    constructor(options: {
        pinned?: true
        peer: Peer
        messages: number[]
        pts: number
        pts_count: number
    }) {
        this.pinned = options.pinned;
        this.peer = options.peer;
        this.messages = options.messages;
        this.pts = options.pts;
        this.pts_count = options.pts_count;
    }
}

export class PredicateUpdatePinnedChannelMessages {
    _ = 'updatePinnedChannelMessages' as const
    pinned?: true
    channel_id: string
    messages: number[]
    pts: number
    pts_count: number
    constructor(options: {
        pinned?: true
        channel_id: string
        messages: number[]
        pts: number
        pts_count: number
    }) {
        this.pinned = options.pinned;
        this.channel_id = options.channel_id;
        this.messages = options.messages;
        this.pts = options.pts;
        this.pts_count = options.pts_count;
    }
}

export class PredicateInputMessagesFilterPinned {
    _ = 'inputMessagesFilterPinned' as const
}

export class PredicateStatsMessageStats {
    _ = 'stats.messageStats' as const
    views_graph: StatsGraph
    constructor(options: {
        views_graph: StatsGraph
    }) {
        this.views_graph = options.views_graph;
    }
}

export class PredicateMessageActionGeoProximityReached {
    _ = 'messageActionGeoProximityReached' as const
    from_id: Peer
    to_id: Peer
    distance: number
    constructor(options: {
        from_id: Peer
        to_id: Peer
        distance: number
    }) {
        this.from_id = options.from_id;
        this.to_id = options.to_id;
        this.distance = options.distance;
    }
}

export class PredicatePhotoPathSize {
    _ = 'photoPathSize' as const
    type: string
    bytes: Uint8Array
    constructor(options: {
        type: string
        bytes: Uint8Array
    }) {
        this.type = options.type;
        this.bytes = options.bytes;
    }
}

export class PredicateSpeakingInGroupCallAction {
    _ = 'speakingInGroupCallAction' as const
}

export class PredicateGroupCallDiscarded {
    _ = 'groupCallDiscarded' as const
    id: string
    access_hash: string
    duration: number
    constructor(options: {
        id: string
        access_hash: string
        duration: number
    }) {
        this.id = options.id;
        this.access_hash = options.access_hash;
        this.duration = options.duration;
    }
}

export class PredicateGroupCall {
    _ = 'groupCall' as const
    join_muted?: true
    can_change_join_muted?: true
    join_date_asc?: true
    schedule_start_subscribed?: true
    can_start_video?: true
    record_video_active?: true
    rtmp_stream?: true
    listeners_hidden?: true
    id: string
    access_hash: string
    participants_count: number
    title?: string
    stream_dc_id?: number
    record_start_date?: number
    schedule_date?: number
    unmuted_video_count?: number
    unmuted_video_limit: number
    version: number
    constructor(options: {
        join_muted?: true
        can_change_join_muted?: true
        join_date_asc?: true
        schedule_start_subscribed?: true
        can_start_video?: true
        record_video_active?: true
        rtmp_stream?: true
        listeners_hidden?: true
        id: string
        access_hash: string
        participants_count: number
        title?: string
        stream_dc_id?: number
        record_start_date?: number
        schedule_date?: number
        unmuted_video_count?: number
        unmuted_video_limit: number
        version: number
    }) {
        this.join_muted = options.join_muted;
        this.can_change_join_muted = options.can_change_join_muted;
        this.join_date_asc = options.join_date_asc;
        this.schedule_start_subscribed = options.schedule_start_subscribed;
        this.can_start_video = options.can_start_video;
        this.record_video_active = options.record_video_active;
        this.rtmp_stream = options.rtmp_stream;
        this.listeners_hidden = options.listeners_hidden;
        this.id = options.id;
        this.access_hash = options.access_hash;
        this.participants_count = options.participants_count;
        this.title = options.title;
        this.stream_dc_id = options.stream_dc_id;
        this.record_start_date = options.record_start_date;
        this.schedule_date = options.schedule_date;
        this.unmuted_video_count = options.unmuted_video_count;
        this.unmuted_video_limit = options.unmuted_video_limit;
        this.version = options.version;
    }
}

export class PredicateInputGroupCall {
    _ = 'inputGroupCall' as const
    id: string
    access_hash: string
    constructor(options: {
        id: string
        access_hash: string
    }) {
        this.id = options.id;
        this.access_hash = options.access_hash;
    }
}

export class PredicateMessageActionGroupCall {
    _ = 'messageActionGroupCall' as const
    call: InputGroupCall
    duration?: number
    constructor(options: {
        call: InputGroupCall
        duration?: number
    }) {
        this.call = options.call;
        this.duration = options.duration;
    }
}

export class PredicateMessageActionInviteToGroupCall {
    _ = 'messageActionInviteToGroupCall' as const
    call: InputGroupCall
    users: string[]
    constructor(options: {
        call: InputGroupCall
        users: string[]
    }) {
        this.call = options.call;
        this.users = options.users;
    }
}

export class PredicateGroupCallParticipant {
    _ = 'groupCallParticipant' as const
    muted?: true
    left?: true
    can_self_unmute?: true
    just_joined?: true
    versioned?: true
    min?: true
    muted_by_you?: true
    volume_by_admin?: true
    self?: true
    video_joined?: true
    peer: Peer
    date: number
    active_date?: number
    source: number
    volume?: number
    about?: string
    raise_hand_rating?: string
    video?: GroupCallParticipantVideo
    presentation?: GroupCallParticipantVideo
    constructor(options: {
        muted?: true
        left?: true
        can_self_unmute?: true
        just_joined?: true
        versioned?: true
        min?: true
        muted_by_you?: true
        volume_by_admin?: true
        self?: true
        video_joined?: true
        peer: Peer
        date: number
        active_date?: number
        source: number
        volume?: number
        about?: string
        raise_hand_rating?: string
        video?: GroupCallParticipantVideo
        presentation?: GroupCallParticipantVideo
    }) {
        this.muted = options.muted;
        this.left = options.left;
        this.can_self_unmute = options.can_self_unmute;
        this.just_joined = options.just_joined;
        this.versioned = options.versioned;
        this.min = options.min;
        this.muted_by_you = options.muted_by_you;
        this.volume_by_admin = options.volume_by_admin;
        this.self = options.self;
        this.video_joined = options.video_joined;
        this.peer = options.peer;
        this.date = options.date;
        this.active_date = options.active_date;
        this.source = options.source;
        this.volume = options.volume;
        this.about = options.about;
        this.raise_hand_rating = options.raise_hand_rating;
        this.video = options.video;
        this.presentation = options.presentation;
    }
}

export class PredicateUpdateChat {
    _ = 'updateChat' as const
    chat_id: string
    constructor(options: {
        chat_id: string
    }) {
        this.chat_id = options.chat_id;
    }
}

export class PredicateUpdateGroupCallParticipants {
    _ = 'updateGroupCallParticipants' as const
    call: InputGroupCall
    participants: GroupCallParticipant[]
    version: number
    constructor(options: {
        call: InputGroupCall
        participants: GroupCallParticipant[]
        version: number
    }) {
        this.call = options.call;
        this.participants = options.participants;
        this.version = options.version;
    }
}

export class PredicateUpdateGroupCall {
    _ = 'updateGroupCall' as const
    chat_id: string
    call: GroupCall
    constructor(options: {
        chat_id: string
        call: GroupCall
    }) {
        this.chat_id = options.chat_id;
        this.call = options.call;
    }
}

export class PredicatePhoneGroupCall {
    _ = 'phone.groupCall' as const
    call: GroupCall
    participants: GroupCallParticipant[]
    participants_next_offset: string
    chats: Chat[]
    users: User[]
    constructor(options: {
        call: GroupCall
        participants: GroupCallParticipant[]
        participants_next_offset: string
        chats: Chat[]
        users: User[]
    }) {
        this.call = options.call;
        this.participants = options.participants;
        this.participants_next_offset = options.participants_next_offset;
        this.chats = options.chats;
        this.users = options.users;
    }
}

export class PredicatePhoneGroupParticipants {
    _ = 'phone.groupParticipants' as const
    count: number
    participants: GroupCallParticipant[]
    next_offset: string
    chats: Chat[]
    users: User[]
    version: number
    constructor(options: {
        count: number
        participants: GroupCallParticipant[]
        next_offset: string
        chats: Chat[]
        users: User[]
        version: number
    }) {
        this.count = options.count;
        this.participants = options.participants;
        this.next_offset = options.next_offset;
        this.chats = options.chats;
        this.users = options.users;
        this.version = options.version;
    }
}

export class PredicateInlineQueryPeerTypeSameBotPM {
    _ = 'inlineQueryPeerTypeSameBotPM' as const
}

export class PredicateInlineQueryPeerTypePM {
    _ = 'inlineQueryPeerTypePM' as const
}

export class PredicateInlineQueryPeerTypeChat {
    _ = 'inlineQueryPeerTypeChat' as const
}

export class PredicateInlineQueryPeerTypeMegagroup {
    _ = 'inlineQueryPeerTypeMegagroup' as const
}

export class PredicateInlineQueryPeerTypeBroadcast {
    _ = 'inlineQueryPeerTypeBroadcast' as const
}

export class PredicateChannelAdminLogEventActionStartGroupCall {
    _ = 'channelAdminLogEventActionStartGroupCall' as const
    call: InputGroupCall
    constructor(options: {
        call: InputGroupCall
    }) {
        this.call = options.call;
    }
}

export class PredicateChannelAdminLogEventActionDiscardGroupCall {
    _ = 'channelAdminLogEventActionDiscardGroupCall' as const
    call: InputGroupCall
    constructor(options: {
        call: InputGroupCall
    }) {
        this.call = options.call;
    }
}

export class PredicateChannelAdminLogEventActionParticipantMute {
    _ = 'channelAdminLogEventActionParticipantMute' as const
    participant: GroupCallParticipant
    constructor(options: {
        participant: GroupCallParticipant
    }) {
        this.participant = options.participant;
    }
}

export class PredicateChannelAdminLogEventActionParticipantUnmute {
    _ = 'channelAdminLogEventActionParticipantUnmute' as const
    participant: GroupCallParticipant
    constructor(options: {
        participant: GroupCallParticipant
    }) {
        this.participant = options.participant;
    }
}

export class PredicateChannelAdminLogEventActionToggleGroupCallSetting {
    _ = 'channelAdminLogEventActionToggleGroupCallSetting' as const
    join_muted: boolean
    constructor(options: {
        join_muted: boolean
    }) {
        this.join_muted = options.join_muted;
    }
}

export class PredicateInputPaymentCredentialsGooglePay {
    _ = 'inputPaymentCredentialsGooglePay' as const
    payment_token: DataJSON
    constructor(options: {
        payment_token: DataJSON
    }) {
        this.payment_token = options.payment_token;
    }
}

export class PredicateMessagesHistoryImport {
    _ = 'messages.historyImport' as const
    id: string
    constructor(options: {
        id: string
    }) {
        this.id = options.id;
    }
}

export class PredicateSendMessageHistoryImportAction {
    _ = 'sendMessageHistoryImportAction' as const
    progress: number
    constructor(options: {
        progress: number
    }) {
        this.progress = options.progress;
    }
}

export class PredicateMessagesHistoryImportParsed {
    _ = 'messages.historyImportParsed' as const
    pm?: true
    group?: true
    title?: string
    constructor(options: {
        pm?: true
        group?: true
        title?: string
    } = {}) {
        this.pm = options.pm;
        this.group = options.group;
        this.title = options.title;
    }
}

export class PredicateInputReportReasonFake {
    _ = 'inputReportReasonFake' as const
}

export class PredicateMessagesAffectedFoundMessages {
    _ = 'messages.affectedFoundMessages' as const
    pts: number
    pts_count: number
    offset: number
    messages: number[]
    constructor(options: {
        pts: number
        pts_count: number
        offset: number
        messages: number[]
    }) {
        this.pts = options.pts;
        this.pts_count = options.pts_count;
        this.offset = options.offset;
        this.messages = options.messages;
    }
}

export class PredicateMessageActionSetMessagesTTL {
    _ = 'messageActionSetMessagesTTL' as const
    period: number
    constructor(options: {
        period: number
    }) {
        this.period = options.period;
    }
}

export class PredicateUpdatePeerHistoryTTL {
    _ = 'updatePeerHistoryTTL' as const
    peer: Peer
    ttl_period?: number
    constructor(options: {
        peer: Peer
        ttl_period?: number
    }) {
        this.peer = options.peer;
        this.ttl_period = options.ttl_period;
    }
}

export class PredicateUpdateChatParticipant {
    _ = 'updateChatParticipant' as const
    chat_id: string
    date: number
    actor_id: string
    user_id: string
    prev_participant?: ChatParticipant
    new_participant?: ChatParticipant
    invite?: ExportedChatInvite
    qts: number
    constructor(options: {
        chat_id: string
        date: number
        actor_id: string
        user_id: string
        prev_participant?: ChatParticipant
        new_participant?: ChatParticipant
        invite?: ExportedChatInvite
        qts: number
    }) {
        this.chat_id = options.chat_id;
        this.date = options.date;
        this.actor_id = options.actor_id;
        this.user_id = options.user_id;
        this.prev_participant = options.prev_participant;
        this.new_participant = options.new_participant;
        this.invite = options.invite;
        this.qts = options.qts;
    }
}

export class PredicateUpdateChannelParticipant {
    _ = 'updateChannelParticipant' as const
    channel_id: string
    date: number
    actor_id: string
    user_id: string
    prev_participant?: ChannelParticipant
    new_participant?: ChannelParticipant
    invite?: ExportedChatInvite
    qts: number
    constructor(options: {
        channel_id: string
        date: number
        actor_id: string
        user_id: string
        prev_participant?: ChannelParticipant
        new_participant?: ChannelParticipant
        invite?: ExportedChatInvite
        qts: number
    }) {
        this.channel_id = options.channel_id;
        this.date = options.date;
        this.actor_id = options.actor_id;
        this.user_id = options.user_id;
        this.prev_participant = options.prev_participant;
        this.new_participant = options.new_participant;
        this.invite = options.invite;
        this.qts = options.qts;
    }
}

export class PredicateUpdateBotStopped {
    _ = 'updateBotStopped' as const
    user_id: string
    date: number
    stopped: boolean
    qts: number
    constructor(options: {
        user_id: string
        date: number
        stopped: boolean
        qts: number
    }) {
        this.user_id = options.user_id;
        this.date = options.date;
        this.stopped = options.stopped;
        this.qts = options.qts;
    }
}

export class PredicateChatInviteImporter {
    _ = 'chatInviteImporter' as const
    requested?: true
    user_id: string
    date: number
    about?: string
    approved_by?: string
    constructor(options: {
        requested?: true
        user_id: string
        date: number
        about?: string
        approved_by?: string
    }) {
        this.requested = options.requested;
        this.user_id = options.user_id;
        this.date = options.date;
        this.about = options.about;
        this.approved_by = options.approved_by;
    }
}

export class PredicateMessagesExportedChatInvites {
    _ = 'messages.exportedChatInvites' as const
    count: number
    invites: ExportedChatInvite[]
    users: User[]
    constructor(options: {
        count: number
        invites: ExportedChatInvite[]
        users: User[]
    }) {
        this.count = options.count;
        this.invites = options.invites;
        this.users = options.users;
    }
}

export class PredicateMessagesExportedChatInvite {
    _ = 'messages.exportedChatInvite' as const
    invite: ExportedChatInvite
    users: User[]
    constructor(options: {
        invite: ExportedChatInvite
        users: User[]
    }) {
        this.invite = options.invite;
        this.users = options.users;
    }
}

export class PredicateMessagesExportedChatInviteReplaced {
    _ = 'messages.exportedChatInviteReplaced' as const
    invite: ExportedChatInvite
    new_invite: ExportedChatInvite
    users: User[]
    constructor(options: {
        invite: ExportedChatInvite
        new_invite: ExportedChatInvite
        users: User[]
    }) {
        this.invite = options.invite;
        this.new_invite = options.new_invite;
        this.users = options.users;
    }
}

export class PredicateMessagesChatInviteImporters {
    _ = 'messages.chatInviteImporters' as const
    count: number
    importers: ChatInviteImporter[]
    users: User[]
    constructor(options: {
        count: number
        importers: ChatInviteImporter[]
        users: User[]
    }) {
        this.count = options.count;
        this.importers = options.importers;
        this.users = options.users;
    }
}

export class PredicateChatAdminWithInvites {
    _ = 'chatAdminWithInvites' as const
    admin_id: string
    invites_count: number
    revoked_invites_count: number
    constructor(options: {
        admin_id: string
        invites_count: number
        revoked_invites_count: number
    }) {
        this.admin_id = options.admin_id;
        this.invites_count = options.invites_count;
        this.revoked_invites_count = options.revoked_invites_count;
    }
}

export class PredicateMessagesChatAdminsWithInvites {
    _ = 'messages.chatAdminsWithInvites' as const
    admins: ChatAdminWithInvites[]
    users: User[]
    constructor(options: {
        admins: ChatAdminWithInvites[]
        users: User[]
    }) {
        this.admins = options.admins;
        this.users = options.users;
    }
}

export class PredicateChannelAdminLogEventActionParticipantJoinByInvite {
    _ = 'channelAdminLogEventActionParticipantJoinByInvite' as const
    invite: ExportedChatInvite
    constructor(options: {
        invite: ExportedChatInvite
    }) {
        this.invite = options.invite;
    }
}

export class PredicateChannelAdminLogEventActionExportedInviteDelete {
    _ = 'channelAdminLogEventActionExportedInviteDelete' as const
    invite: ExportedChatInvite
    constructor(options: {
        invite: ExportedChatInvite
    }) {
        this.invite = options.invite;
    }
}

export class PredicateChannelAdminLogEventActionExportedInviteRevoke {
    _ = 'channelAdminLogEventActionExportedInviteRevoke' as const
    invite: ExportedChatInvite
    constructor(options: {
        invite: ExportedChatInvite
    }) {
        this.invite = options.invite;
    }
}

export class PredicateChannelAdminLogEventActionExportedInviteEdit {
    _ = 'channelAdminLogEventActionExportedInviteEdit' as const
    prev_invite: ExportedChatInvite
    new_invite: ExportedChatInvite
    constructor(options: {
        prev_invite: ExportedChatInvite
        new_invite: ExportedChatInvite
    }) {
        this.prev_invite = options.prev_invite;
        this.new_invite = options.new_invite;
    }
}

export class PredicateChannelAdminLogEventActionParticipantVolume {
    _ = 'channelAdminLogEventActionParticipantVolume' as const
    participant: GroupCallParticipant
    constructor(options: {
        participant: GroupCallParticipant
    }) {
        this.participant = options.participant;
    }
}

export class PredicateChannelAdminLogEventActionChangeHistoryTTL {
    _ = 'channelAdminLogEventActionChangeHistoryTTL' as const
    prev_value: number
    new_value: number
    constructor(options: {
        prev_value: number
        new_value: number
    }) {
        this.prev_value = options.prev_value;
        this.new_value = options.new_value;
    }
}

export class PredicateMessagesCheckedHistoryImportPeer {
    _ = 'messages.checkedHistoryImportPeer' as const
    confirm_text: string
    constructor(options: {
        confirm_text: string
    }) {
        this.confirm_text = options.confirm_text;
    }
}

export class PredicateInputGroupCallStream {
    _ = 'inputGroupCallStream' as const
    call: InputGroupCall
    time_ms: string
    scale: number
    video_channel?: number
    video_quality?: number
    constructor(options: {
        call: InputGroupCall
        time_ms: string
        scale: number
        video_channel?: number
        video_quality?: number
    }) {
        this.call = options.call;
        this.time_ms = options.time_ms;
        this.scale = options.scale;
        this.video_channel = options.video_channel;
        this.video_quality = options.video_quality;
    }
}

export class PredicatePhoneJoinAsPeers {
    _ = 'phone.joinAsPeers' as const
    peers: Peer[]
    chats: Chat[]
    users: User[]
    constructor(options: {
        peers: Peer[]
        chats: Chat[]
        users: User[]
    }) {
        this.peers = options.peers;
        this.chats = options.chats;
        this.users = options.users;
    }
}

export class PredicatePhoneExportedGroupCallInvite {
    _ = 'phone.exportedGroupCallInvite' as const
    link: string
    constructor(options: {
        link: string
    }) {
        this.link = options.link;
    }
}

export class PredicateInputBotInlineMessageMediaInvoice {
    _ = 'inputBotInlineMessageMediaInvoice' as const
    title: string
    description: string
    photo?: InputWebDocument
    invoice: Invoice
    payload: Uint8Array
    provider: string
    provider_data: DataJSON
    reply_markup?: ReplyMarkup
    constructor(options: {
        title: string
        description: string
        photo?: InputWebDocument
        invoice: Invoice
        payload: Uint8Array
        provider: string
        provider_data: DataJSON
        reply_markup?: ReplyMarkup
    }) {
        this.title = options.title;
        this.description = options.description;
        this.photo = options.photo;
        this.invoice = options.invoice;
        this.payload = options.payload;
        this.provider = options.provider;
        this.provider_data = options.provider_data;
        this.reply_markup = options.reply_markup;
    }
}

export class PredicateBotInlineMessageMediaInvoice {
    _ = 'botInlineMessageMediaInvoice' as const
    shipping_address_requested?: true
    test?: true
    title: string
    description: string
    photo?: WebDocument
    currency: string
    total_amount: string
    reply_markup?: ReplyMarkup
    constructor(options: {
        shipping_address_requested?: true
        test?: true
        title: string
        description: string
        photo?: WebDocument
        currency: string
        total_amount: string
        reply_markup?: ReplyMarkup
    }) {
        this.shipping_address_requested = options.shipping_address_requested;
        this.test = options.test;
        this.title = options.title;
        this.description = options.description;
        this.photo = options.photo;
        this.currency = options.currency;
        this.total_amount = options.total_amount;
        this.reply_markup = options.reply_markup;
    }
}

export class PredicateMessageActionGroupCallScheduled {
    _ = 'messageActionGroupCallScheduled' as const
    call: InputGroupCall
    schedule_date: number
    constructor(options: {
        call: InputGroupCall
        schedule_date: number
    }) {
        this.call = options.call;
        this.schedule_date = options.schedule_date;
    }
}

export class PredicateGroupCallParticipantVideoSourceGroup {
    _ = 'groupCallParticipantVideoSourceGroup' as const
    semantics: string
    sources: number[]
    constructor(options: {
        semantics: string
        sources: number[]
    }) {
        this.semantics = options.semantics;
        this.sources = options.sources;
    }
}

export class PredicateGroupCallParticipantVideo {
    _ = 'groupCallParticipantVideo' as const
    paused?: true
    endpoint: string
    source_groups: GroupCallParticipantVideoSourceGroup[]
    audio_source?: number
    constructor(options: {
        paused?: true
        endpoint: string
        source_groups: GroupCallParticipantVideoSourceGroup[]
        audio_source?: number
    }) {
        this.paused = options.paused;
        this.endpoint = options.endpoint;
        this.source_groups = options.source_groups;
        this.audio_source = options.audio_source;
    }
}

export class PredicateUpdateGroupCallConnection {
    _ = 'updateGroupCallConnection' as const
    presentation?: true
    params: DataJSON
    constructor(options: {
        presentation?: true
        params: DataJSON
    }) {
        this.presentation = options.presentation;
        this.params = options.params;
    }
}

export class PredicateStickersSuggestedShortName {
    _ = 'stickers.suggestedShortName' as const
    short_name: string
    constructor(options: {
        short_name: string
    }) {
        this.short_name = options.short_name;
    }
}

export class PredicateBotCommandScopeDefault {
    _ = 'botCommandScopeDefault' as const
}

export class PredicateBotCommandScopeUsers {
    _ = 'botCommandScopeUsers' as const
}

export class PredicateBotCommandScopeChats {
    _ = 'botCommandScopeChats' as const
}

export class PredicateBotCommandScopeChatAdmins {
    _ = 'botCommandScopeChatAdmins' as const
}

export class PredicateBotCommandScopePeer {
    _ = 'botCommandScopePeer' as const
    peer: InputPeer
    constructor(options: {
        peer: InputPeer
    }) {
        this.peer = options.peer;
    }
}

export class PredicateBotCommandScopePeerAdmins {
    _ = 'botCommandScopePeerAdmins' as const
    peer: InputPeer
    constructor(options: {
        peer: InputPeer
    }) {
        this.peer = options.peer;
    }
}

export class PredicateBotCommandScopePeerUser {
    _ = 'botCommandScopePeerUser' as const
    peer: InputPeer
    user_id: InputUser
    constructor(options: {
        peer: InputPeer
        user_id: InputUser
    }) {
        this.peer = options.peer;
        this.user_id = options.user_id;
    }
}

export class PredicateAccountResetPasswordFailedWait {
    _ = 'account.resetPasswordFailedWait' as const
    retry_date: number
    constructor(options: {
        retry_date: number
    }) {
        this.retry_date = options.retry_date;
    }
}

export class PredicateAccountResetPasswordRequestedWait {
    _ = 'account.resetPasswordRequestedWait' as const
    until_date: number
    constructor(options: {
        until_date: number
    }) {
        this.until_date = options.until_date;
    }
}

export class PredicateAccountResetPasswordOk {
    _ = 'account.resetPasswordOk' as const
}

export class PredicateUpdateBotCommands {
    _ = 'updateBotCommands' as const
    peer: Peer
    bot_id: string
    commands: BotCommand[]
    constructor(options: {
        peer: Peer
        bot_id: string
        commands: BotCommand[]
    }) {
        this.peer = options.peer;
        this.bot_id = options.bot_id;
        this.commands = options.commands;
    }
}

export class PredicateMessageActionSetChatTheme {
    _ = 'messageActionSetChatTheme' as const
    emoticon: string
    constructor(options: {
        emoticon: string
    }) {
        this.emoticon = options.emoticon;
    }
}

export class PredicateSendMessageChooseStickerAction {
    _ = 'sendMessageChooseStickerAction' as const
}

export class PredicateSponsoredMessage {
    _ = 'sponsoredMessage' as const
    recommended?: true
    random_id: Uint8Array
    from_id?: Peer
    chat_invite?: ChatInvite
    chat_invite_hash?: string
    channel_post?: number
    start_param?: string
    message: string
    entities?: MessageEntity[]
    constructor(options: {
        recommended?: true
        random_id: Uint8Array
        from_id?: Peer
        chat_invite?: ChatInvite
        chat_invite_hash?: string
        channel_post?: number
        start_param?: string
        message: string
        entities?: MessageEntity[]
    }) {
        this.recommended = options.recommended;
        this.random_id = options.random_id;
        this.from_id = options.from_id;
        this.chat_invite = options.chat_invite;
        this.chat_invite_hash = options.chat_invite_hash;
        this.channel_post = options.channel_post;
        this.start_param = options.start_param;
        this.message = options.message;
        this.entities = options.entities;
    }
}

export class PredicateMessagesSponsoredMessages {
    _ = 'messages.sponsoredMessages' as const
    messages: SponsoredMessage[]
    chats: Chat[]
    users: User[]
    constructor(options: {
        messages: SponsoredMessage[]
        chats: Chat[]
        users: User[]
    }) {
        this.messages = options.messages;
        this.chats = options.chats;
        this.users = options.users;
    }
}

export class PredicateInputStickerSetAnimatedEmojiAnimations {
    _ = 'inputStickerSetAnimatedEmojiAnimations' as const
}

export class PredicateSendMessageEmojiInteraction {
    _ = 'sendMessageEmojiInteraction' as const
    emoticon: string
    msg_id: number
    interaction: DataJSON
    constructor(options: {
        emoticon: string
        msg_id: number
        interaction: DataJSON
    }) {
        this.emoticon = options.emoticon;
        this.msg_id = options.msg_id;
        this.interaction = options.interaction;
    }
}

export class PredicateSendMessageEmojiInteractionSeen {
    _ = 'sendMessageEmojiInteractionSeen' as const
    emoticon: string
    constructor(options: {
        emoticon: string
    }) {
        this.emoticon = options.emoticon;
    }
}

export class PredicateInputBotInlineMessageID64 {
    _ = 'inputBotInlineMessageID64' as const
    dc_id: number
    owner_id: string
    id: number
    access_hash: string
    constructor(options: {
        dc_id: number
        owner_id: string
        id: number
        access_hash: string
    }) {
        this.dc_id = options.dc_id;
        this.owner_id = options.owner_id;
        this.id = options.id;
        this.access_hash = options.access_hash;
    }
}

export class PredicateSearchResultsCalendarPeriod {
    _ = 'searchResultsCalendarPeriod' as const
    date: number
    min_msg_id: number
    max_msg_id: number
    count: number
    constructor(options: {
        date: number
        min_msg_id: number
        max_msg_id: number
        count: number
    }) {
        this.date = options.date;
        this.min_msg_id = options.min_msg_id;
        this.max_msg_id = options.max_msg_id;
        this.count = options.count;
    }
}

export class PredicateMessagesSearchResultsCalendar {
    _ = 'messages.searchResultsCalendar' as const
    inexact?: true
    count: number
    min_date: number
    min_msg_id: number
    offset_id_offset?: number
    periods: SearchResultsCalendarPeriod[]
    messages: Message[]
    chats: Chat[]
    users: User[]
    constructor(options: {
        inexact?: true
        count: number
        min_date: number
        min_msg_id: number
        offset_id_offset?: number
        periods: SearchResultsCalendarPeriod[]
        messages: Message[]
        chats: Chat[]
        users: User[]
    }) {
        this.inexact = options.inexact;
        this.count = options.count;
        this.min_date = options.min_date;
        this.min_msg_id = options.min_msg_id;
        this.offset_id_offset = options.offset_id_offset;
        this.periods = options.periods;
        this.messages = options.messages;
        this.chats = options.chats;
        this.users = options.users;
    }
}

export class PredicateSearchResultPosition {
    _ = 'searchResultPosition' as const
    msg_id: number
    date: number
    offset: number
    constructor(options: {
        msg_id: number
        date: number
        offset: number
    }) {
        this.msg_id = options.msg_id;
        this.date = options.date;
        this.offset = options.offset;
    }
}

export class PredicateMessagesSearchResultsPositions {
    _ = 'messages.searchResultsPositions' as const
    count: number
    positions: SearchResultsPosition[]
    constructor(options: {
        count: number
        positions: SearchResultsPosition[]
    }) {
        this.count = options.count;
        this.positions = options.positions;
    }
}

export class PredicateMessageActionChatJoinedByRequest {
    _ = 'messageActionChatJoinedByRequest' as const
}

export class PredicateUpdatePendingJoinRequests {
    _ = 'updatePendingJoinRequests' as const
    peer: Peer
    requests_pending: number
    recent_requesters: string[]
    constructor(options: {
        peer: Peer
        requests_pending: number
        recent_requesters: string[]
    }) {
        this.peer = options.peer;
        this.requests_pending = options.requests_pending;
        this.recent_requesters = options.recent_requesters;
    }
}

export class PredicateUpdateBotChatInviteRequester {
    _ = 'updateBotChatInviteRequester' as const
    peer: Peer
    date: number
    user_id: string
    about: string
    invite: ExportedChatInvite
    qts: number
    constructor(options: {
        peer: Peer
        date: number
        user_id: string
        about: string
        invite: ExportedChatInvite
        qts: number
    }) {
        this.peer = options.peer;
        this.date = options.date;
        this.user_id = options.user_id;
        this.about = options.about;
        this.invite = options.invite;
        this.qts = options.qts;
    }
}

export class PredicateChannelAdminLogEventActionParticipantJoinByRequest {
    _ = 'channelAdminLogEventActionParticipantJoinByRequest' as const
    invite: ExportedChatInvite
    approved_by: string
    constructor(options: {
        invite: ExportedChatInvite
        approved_by: string
    }) {
        this.invite = options.invite;
        this.approved_by = options.approved_by;
    }
}

export class PredicateInputKeyboardButtonUserProfile {
    _ = 'inputKeyboardButtonUserProfile' as const
    text: string
    user_id: InputUser
    constructor(options: {
        text: string
        user_id: InputUser
    }) {
        this.text = options.text;
        this.user_id = options.user_id;
    }
}

export class PredicateKeyboardButtonUserProfile {
    _ = 'keyboardButtonUserProfile' as const
    text: string
    user_id: string
    constructor(options: {
        text: string
        user_id: string
    }) {
        this.text = options.text;
        this.user_id = options.user_id;
    }
}

export class PredicateChannelsSendAsPeers {
    _ = 'channels.sendAsPeers' as const
    peers: Peer[]
    chats: Chat[]
    users: User[]
    constructor(options: {
        peers: Peer[]
        chats: Chat[]
        users: User[]
    }) {
        this.peers = options.peers;
        this.chats = options.chats;
        this.users = options.users;
    }
}

export class PredicateChannelAdminLogEventActionToggleNoForwards {
    _ = 'channelAdminLogEventActionToggleNoForwards' as const
    new_value: boolean
    constructor(options: {
        new_value: boolean
    }) {
        this.new_value = options.new_value;
    }
}

export class PredicateMessagesStickerSetNotModified {
    _ = 'messages.stickerSetNotModified' as const
}

export class PredicateUsersUserFull {
    _ = 'users.userFull' as const
    full_user: UserFull
    chats: Chat[]
    users: User[]
    constructor(options: {
        full_user: UserFull
        chats: Chat[]
        users: User[]
    }) {
        this.full_user = options.full_user;
        this.chats = options.chats;
        this.users = options.users;
    }
}

export class PredicateMessagesPeerSettings {
    _ = 'messages.peerSettings' as const
    settings: PeerSettings
    chats: Chat[]
    users: User[]
    constructor(options: {
        settings: PeerSettings
        chats: Chat[]
        users: User[]
    }) {
        this.settings = options.settings;
        this.chats = options.chats;
        this.users = options.users;
    }
}

export class PredicateChannelAdminLogEventActionSendMessage {
    _ = 'channelAdminLogEventActionSendMessage' as const
    message: Message
    constructor(options: {
        message: Message
    }) {
        this.message = options.message;
    }
}

export class PredicateAuthCodeTypeMissedCall {
    _ = 'auth.codeTypeMissedCall' as const
}

export class PredicateAuthSentCodeTypeMissedCall {
    _ = 'auth.sentCodeTypeMissedCall' as const
    prefix: string
    length: number
    constructor(options: {
        prefix: string
        length: number
    }) {
        this.prefix = options.prefix;
        this.length = options.length;
    }
}

export class PredicateAuthLoggedOut {
    _ = 'auth.loggedOut' as const
    future_auth_token?: Uint8Array
    constructor(options: {
        future_auth_token?: Uint8Array
    } = {}) {
        this.future_auth_token = options.future_auth_token;
    }
}

export class PredicateUpdateMessageReactions {
    _ = 'updateMessageReactions' as const
    peer: Peer
    msg_id: number
    reactions: MessageReactions
    constructor(options: {
        peer: Peer
        msg_id: number
        reactions: MessageReactions
    }) {
        this.peer = options.peer;
        this.msg_id = options.msg_id;
        this.reactions = options.reactions;
    }
}

export class PredicateReactionCount {
    _ = 'reactionCount' as const
    chosen?: true
    reaction: string
    count: number
    constructor(options: {
        chosen?: true
        reaction: string
        count: number
    }) {
        this.chosen = options.chosen;
        this.reaction = options.reaction;
        this.count = options.count;
    }
}

export class PredicateMessageReactions {
    _ = 'messageReactions' as const
    min?: true
    can_see_list?: true
    results: ReactionCount[]
    recent_reactions?: MessagePeerReaction[]
    constructor(options: {
        min?: true
        can_see_list?: true
        results: ReactionCount[]
        recent_reactions?: MessagePeerReaction[]
    }) {
        this.min = options.min;
        this.can_see_list = options.can_see_list;
        this.results = options.results;
        this.recent_reactions = options.recent_reactions;
    }
}

export class PredicateMessagesMessageReactionsList {
    _ = 'messages.messageReactionsList' as const
    count: number
    reactions: MessagePeerReaction[]
    chats: Chat[]
    users: User[]
    next_offset?: string
    constructor(options: {
        count: number
        reactions: MessagePeerReaction[]
        chats: Chat[]
        users: User[]
        next_offset?: string
    }) {
        this.count = options.count;
        this.reactions = options.reactions;
        this.chats = options.chats;
        this.users = options.users;
        this.next_offset = options.next_offset;
    }
}

export class PredicateAvailableReaction {
    _ = 'availableReaction' as const
    inactive?: true
    reaction: string
    title: string
    static_icon: Document
    appear_animation: Document
    select_animation: Document
    activate_animation: Document
    effect_animation: Document
    around_animation?: Document
    center_icon?: Document
    constructor(options: {
        inactive?: true
        reaction: string
        title: string
        static_icon: Document
        appear_animation: Document
        select_animation: Document
        activate_animation: Document
        effect_animation: Document
        around_animation?: Document
        center_icon?: Document
    }) {
        this.inactive = options.inactive;
        this.reaction = options.reaction;
        this.title = options.title;
        this.static_icon = options.static_icon;
        this.appear_animation = options.appear_animation;
        this.select_animation = options.select_animation;
        this.activate_animation = options.activate_animation;
        this.effect_animation = options.effect_animation;
        this.around_animation = options.around_animation;
        this.center_icon = options.center_icon;
    }
}

export class PredicateMessagesAvailableReactionsNotModified {
    _ = 'messages.availableReactionsNotModified' as const
}

export class PredicateMessagesAvailableReactions {
    _ = 'messages.availableReactions' as const
    hash: number
    reactions: AvailableReaction[]
    constructor(options: {
        hash: number
        reactions: AvailableReaction[]
    }) {
        this.hash = options.hash;
        this.reactions = options.reactions;
    }
}

export class PredicateMessageEntitySpoiler {
    _ = 'messageEntitySpoiler' as const
    offset: number
    length: number
    constructor(options: {
        offset: number
        length: number
    }) {
        this.offset = options.offset;
        this.length = options.length;
    }
}

export class PredicateChannelAdminLogEventActionChangeAvailableReactions {
    _ = 'channelAdminLogEventActionChangeAvailableReactions' as const
    prev_value: string[]
    new_value: string[]
    constructor(options: {
        prev_value: string[]
        new_value: string[]
    }) {
        this.prev_value = options.prev_value;
        this.new_value = options.new_value;
    }
}

export class PredicateMessagesTranslateNoResult {
    _ = 'messages.translateNoResult' as const
}

export class PredicateMessagesTranslateResultText {
    _ = 'messages.translateResultText' as const
    text: string
    constructor(options: {
        text: string
    }) {
        this.text = options.text;
    }
}

export class PredicateMessagePeerReaction {
    _ = 'messagePeerReaction' as const
    big?: true
    unread?: true
    peer_id: Peer
    reaction: string
    constructor(options: {
        big?: true
        unread?: true
        peer_id: Peer
        reaction: string
    }) {
        this.big = options.big;
        this.unread = options.unread;
        this.peer_id = options.peer_id;
        this.reaction = options.reaction;
    }
}

export class PredicateGroupCallStreamChannel {
    _ = 'groupCallStreamChannel' as const
    channel: number
    scale: number
    last_timestamp_ms: string
    constructor(options: {
        channel: number
        scale: number
        last_timestamp_ms: string
    }) {
        this.channel = options.channel;
        this.scale = options.scale;
        this.last_timestamp_ms = options.last_timestamp_ms;
    }
}

export class PredicatePhoneGroupCallStreamChannels {
    _ = 'phone.groupCallStreamChannels' as const
    channels: GroupCallStreamChannel[]
    constructor(options: {
        channels: GroupCallStreamChannel[]
    }) {
        this.channels = options.channels;
    }
}

export class PredicateInputReportReasonIllegalDrugs {
    _ = 'inputReportReasonIllegalDrugs' as const
}

export class PredicateInputReportReasonPersonalDetails {
    _ = 'inputReportReasonPersonalDetails' as const
}

export class PredicatePhoneGroupCallStreamRtmpUrl {
    _ = 'phone.groupCallStreamRtmpUrl' as const
    url: string
    key: string
    constructor(options: {
        url: string
        key: string
    }) {
        this.url = options.url;
        this.key = options.key;
    }
}

export interface Error {
    error: PredicateError
}

export interface InputPeer {
    inputPeerEmpty?: PredicateInputPeerEmpty
    inputPeerSelf?: PredicateInputPeerSelf
    inputPeerChat?: PredicateInputPeerChat
    inputPeerUser?: PredicateInputPeerUser
    inputPeerChannel?: PredicateInputPeerChannel
    inputPeerUserFromMessage?: PredicateInputPeerUserFromMessage
    inputPeerChannelFromMessage?: PredicateInputPeerChannelFromMessage
}

export interface InputUser {
    inputUserEmpty?: PredicateInputUserEmpty
    inputUserSelf?: PredicateInputUserSelf
    inputUser?: PredicateInputUser
    inputUserFromMessage?: PredicateInputUserFromMessage
}

export interface InputContact {
    inputPhoneContact: PredicateInputPhoneContact
}

export interface InputFile {
    inputFile?: PredicateInputFile
    inputFileBig?: PredicateInputFileBig
}

export interface InputMedia {
    inputMediaEmpty?: PredicateInputMediaEmpty
    inputMediaUploadedPhoto?: PredicateInputMediaUploadedPhoto
    inputMediaPhoto?: PredicateInputMediaPhoto
    inputMediaGeoPoint?: PredicateInputMediaGeoPoint
    inputMediaContact?: PredicateInputMediaContact
    inputMediaUploadedDocument?: PredicateInputMediaUploadedDocument
    inputMediaDocument?: PredicateInputMediaDocument
    inputMediaVenue?: PredicateInputMediaVenue
    inputMediaPhotoExternal?: PredicateInputMediaPhotoExternal
    inputMediaDocumentExternal?: PredicateInputMediaDocumentExternal
    inputMediaGame?: PredicateInputMediaGame
    inputMediaInvoice?: PredicateInputMediaInvoice
    inputMediaGeoLive?: PredicateInputMediaGeoLive
    inputMediaPoll?: PredicateInputMediaPoll
    inputMediaDice?: PredicateInputMediaDice
}

export interface InputChatPhoto {
    inputChatPhotoEmpty?: PredicateInputChatPhotoEmpty
    inputChatUploadedPhoto?: PredicateInputChatUploadedPhoto
    inputChatPhoto?: PredicateInputChatPhoto
}

export interface InputGeoPoint {
    inputGeoPointEmpty?: PredicateInputGeoPointEmpty
    inputGeoPoint?: PredicateInputGeoPoint
}

export interface InputPhoto {
    inputPhotoEmpty?: PredicateInputPhotoEmpty
    inputPhoto?: PredicateInputPhoto
}

export interface InputFileLocation {
    inputFileLocation?: PredicateInputFileLocation
    inputEncryptedFileLocation?: PredicateInputEncryptedFileLocation
    inputDocumentFileLocation?: PredicateInputDocumentFileLocation
    inputSecureFileLocation?: PredicateInputSecureFileLocation
    inputTakeoutFileLocation?: PredicateInputTakeoutFileLocation
    inputPhotoFileLocation?: PredicateInputPhotoFileLocation
    inputPhotoLegacyFileLocation?: PredicateInputPhotoLegacyFileLocation
    inputPeerPhotoFileLocation?: PredicateInputPeerPhotoFileLocation
    inputStickerSetThumb?: PredicateInputStickerSetThumb
    inputGroupCallStream?: PredicateInputGroupCallStream
}

export interface Peer {
    peerUser?: PredicatePeerUser
    peerChat?: PredicatePeerChat
    peerChannel?: PredicatePeerChannel
}

export interface StorageFileType {
    storageFileUnknown?: PredicateStorageFileUnknown
    storageFilePartial?: PredicateStorageFilePartial
    storageFileJpeg?: PredicateStorageFileJpeg
    storageFileGif?: PredicateStorageFileGif
    storageFilePng?: PredicateStorageFilePng
    storageFilePdf?: PredicateStorageFilePdf
    storageFileMp3?: PredicateStorageFileMp3
    storageFileMov?: PredicateStorageFileMov
    storageFileMp4?: PredicateStorageFileMp4
    storageFileWebp?: PredicateStorageFileWebp
}

export interface User {
    userEmpty?: PredicateUserEmpty
    user?: PredicateUser
}

export interface UserProfilePhoto {
    userProfilePhotoEmpty?: PredicateUserProfilePhotoEmpty
    userProfilePhoto?: PredicateUserProfilePhoto
}

export interface UserStatus {
    userStatusEmpty?: PredicateUserStatusEmpty
    userStatusOnline?: PredicateUserStatusOnline
    userStatusOffline?: PredicateUserStatusOffline
    userStatusRecently?: PredicateUserStatusRecently
    userStatusLastWeek?: PredicateUserStatusLastWeek
    userStatusLastMonth?: PredicateUserStatusLastMonth
}

export interface Chat {
    chatEmpty?: PredicateChatEmpty
    chat?: PredicateChat
    chatForbidden?: PredicateChatForbidden
    channel?: PredicateChannel
    channelForbidden?: PredicateChannelForbidden
}

export interface ChatFull {
    chatFull?: PredicateChatFull
    channelFull?: PredicateChannelFull
}

export interface ChatParticipant {
    chatParticipant?: PredicateChatParticipant
    chatParticipantCreator?: PredicateChatParticipantCreator
    chatParticipantAdmin?: PredicateChatParticipantAdmin
}

export interface ChatParticipants {
    chatParticipantsForbidden?: PredicateChatParticipantsForbidden
    chatParticipants?: PredicateChatParticipants
}

export interface ChatPhoto {
    chatPhotoEmpty?: PredicateChatPhotoEmpty
    chatPhoto?: PredicateChatPhoto
}

export interface Message {
    messageEmpty?: PredicateMessageEmpty
    message?: PredicateMessage
    messageService?: PredicateMessageService
}

export interface MessageMedia {
    messageMediaEmpty?: PredicateMessageMediaEmpty
    messageMediaPhoto?: PredicateMessageMediaPhoto
    messageMediaGeo?: PredicateMessageMediaGeo
    messageMediaContact?: PredicateMessageMediaContact
    messageMediaUnsupported?: PredicateMessageMediaUnsupported
    messageMediaDocument?: PredicateMessageMediaDocument
    messageMediaWebPage?: PredicateMessageMediaWebPage
    messageMediaVenue?: PredicateMessageMediaVenue
    messageMediaGame?: PredicateMessageMediaGame
    messageMediaInvoice?: PredicateMessageMediaInvoice
    messageMediaGeoLive?: PredicateMessageMediaGeoLive
    messageMediaPoll?: PredicateMessageMediaPoll
    messageMediaDice?: PredicateMessageMediaDice
}

export interface MessageAction {
    messageActionEmpty?: PredicateMessageActionEmpty
    messageActionChatCreate?: PredicateMessageActionChatCreate
    messageActionChatEditTitle?: PredicateMessageActionChatEditTitle
    messageActionChatEditPhoto?: PredicateMessageActionChatEditPhoto
    messageActionChatDeletePhoto?: PredicateMessageActionChatDeletePhoto
    messageActionChatAddUser?: PredicateMessageActionChatAddUser
    messageActionChatDeleteUser?: PredicateMessageActionChatDeleteUser
    messageActionChatJoinedByLink?: PredicateMessageActionChatJoinedByLink
    messageActionChannelCreate?: PredicateMessageActionChannelCreate
    messageActionChatMigrateTo?: PredicateMessageActionChatMigrateTo
    messageActionChannelMigrateFrom?: PredicateMessageActionChannelMigrateFrom
    messageActionPinMessage?: PredicateMessageActionPinMessage
    messageActionHistoryClear?: PredicateMessageActionHistoryClear
    messageActionGameScore?: PredicateMessageActionGameScore
    messageActionPaymentSentMe?: PredicateMessageActionPaymentSentMe
    messageActionPaymentSent?: PredicateMessageActionPaymentSent
    messageActionPhoneCall?: PredicateMessageActionPhoneCall
    messageActionScreenshotTaken?: PredicateMessageActionScreenshotTaken
    messageActionCustomAction?: PredicateMessageActionCustomAction
    messageActionBotAllowed?: PredicateMessageActionBotAllowed
    messageActionSecureValuesSentMe?: PredicateMessageActionSecureValuesSentMe
    messageActionSecureValuesSent?: PredicateMessageActionSecureValuesSent
    messageActionContactSignUp?: PredicateMessageActionContactSignUp
    messageActionGeoProximityReached?: PredicateMessageActionGeoProximityReached
    messageActionGroupCall?: PredicateMessageActionGroupCall
    messageActionInviteToGroupCall?: PredicateMessageActionInviteToGroupCall
    messageActionSetMessagesTTL?: PredicateMessageActionSetMessagesTTL
    messageActionGroupCallScheduled?: PredicateMessageActionGroupCallScheduled
    messageActionSetChatTheme?: PredicateMessageActionSetChatTheme
    messageActionChatJoinedByRequest?: PredicateMessageActionChatJoinedByRequest
}

export interface Dialog {
    dialog?: PredicateDialog
    dialogFolder?: PredicateDialogFolder
}

export interface Photo {
    photoEmpty?: PredicatePhotoEmpty
    photo?: PredicatePhoto
}

export interface PhotoSize {
    photoSizeEmpty?: PredicatePhotoSizeEmpty
    photoSize?: PredicatePhotoSize
    photoCachedSize?: PredicatePhotoCachedSize
    photoStrippedSize?: PredicatePhotoStrippedSize
    photoSizeProgressive?: PredicatePhotoSizeProgressive
    photoPathSize?: PredicatePhotoPathSize
}

export interface GeoPoint {
    geoPointEmpty?: PredicateGeoPointEmpty
    geoPoint?: PredicateGeoPoint
}

export interface AuthSentCode {
    authSentCode: PredicateAuthSentCode
}

export interface AuthAuthorization {
    authAuthorization?: PredicateAuthAuthorization
    authAuthorizationSignUpRequired?: PredicateAuthAuthorizationSignUpRequired
}

export interface AuthExportedAuthorization {
    authExportedAuthorization: PredicateAuthExportedAuthorization
}

export interface InputNotifyPeer {
    inputNotifyPeer?: PredicateInputNotifyPeer
    inputNotifyUsers?: PredicateInputNotifyUsers
    inputNotifyChats?: PredicateInputNotifyChats
    inputNotifyBroadcasts?: PredicateInputNotifyBroadcasts
}

export interface InputPeerNotifySettings {
    inputPeerNotifySettings: PredicateInputPeerNotifySettings
}

export interface PeerNotifySettings {
    peerNotifySettings: PredicatePeerNotifySettings
}

export interface PeerSettings {
    peerSettings: PredicatePeerSettings
}

export interface WallPaper {
    wallPaper?: PredicateWallPaper
    wallPaperNoFile?: PredicateWallPaperNoFile
}

export interface ReportReason {
    inputReportReasonSpam?: PredicateInputReportReasonSpam
    inputReportReasonViolence?: PredicateInputReportReasonViolence
    inputReportReasonPornography?: PredicateInputReportReasonPornography
    inputReportReasonChildAbuse?: PredicateInputReportReasonChildAbuse
    inputReportReasonOther?: PredicateInputReportReasonOther
    inputReportReasonCopyright?: PredicateInputReportReasonCopyright
    inputReportReasonGeoIrrelevant?: PredicateInputReportReasonGeoIrrelevant
    inputReportReasonFake?: PredicateInputReportReasonFake
    inputReportReasonIllegalDrugs?: PredicateInputReportReasonIllegalDrugs
    inputReportReasonPersonalDetails?: PredicateInputReportReasonPersonalDetails
}

export interface UserFull {
    userFull: PredicateUserFull
}

export interface Contact {
    contact: PredicateContact
}

export interface ImportedContact {
    importedContact: PredicateImportedContact
}

export interface ContactStatus {
    contactStatus: PredicateContactStatus
}

export interface ContactsContacts {
    contactsContactsNotModified?: PredicateContactsContactsNotModified
    contactsContacts?: PredicateContactsContacts
}

export interface ContactsImportedContacts {
    contactsImportedContacts: PredicateContactsImportedContacts
}

export interface ContactsBlocked {
    contactsBlocked?: PredicateContactsBlocked
    contactsBlockedSlice?: PredicateContactsBlockedSlice
}

export interface MessagesDialogs {
    messagesDialogs?: PredicateMessagesDialogs
    messagesDialogsSlice?: PredicateMessagesDialogsSlice
    messagesDialogsNotModified?: PredicateMessagesDialogsNotModified
}

export interface MessagesMessages {
    messagesMessages?: PredicateMessagesMessages
    messagesMessagesSlice?: PredicateMessagesMessagesSlice
    messagesChannelMessages?: PredicateMessagesChannelMessages
    messagesMessagesNotModified?: PredicateMessagesMessagesNotModified
}

export interface MessagesChats {
    messagesChats?: PredicateMessagesChats
    messagesChatsSlice?: PredicateMessagesChatsSlice
}

export interface MessagesChatFull {
    messagesChatFull: PredicateMessagesChatFull
}

export interface MessagesAffectedHistory {
    messagesAffectedHistory: PredicateMessagesAffectedHistory
}

export interface MessagesFilter {
    inputMessagesFilterEmpty?: PredicateInputMessagesFilterEmpty
    inputMessagesFilterPhotos?: PredicateInputMessagesFilterPhotos
    inputMessagesFilterVideo?: PredicateInputMessagesFilterVideo
    inputMessagesFilterPhotoVideo?: PredicateInputMessagesFilterPhotoVideo
    inputMessagesFilterDocument?: PredicateInputMessagesFilterDocument
    inputMessagesFilterUrl?: PredicateInputMessagesFilterUrl
    inputMessagesFilterGif?: PredicateInputMessagesFilterGif
    inputMessagesFilterVoice?: PredicateInputMessagesFilterVoice
    inputMessagesFilterMusic?: PredicateInputMessagesFilterMusic
    inputMessagesFilterChatPhotos?: PredicateInputMessagesFilterChatPhotos
    inputMessagesFilterPhoneCalls?: PredicateInputMessagesFilterPhoneCalls
    inputMessagesFilterRoundVoice?: PredicateInputMessagesFilterRoundVoice
    inputMessagesFilterRoundVideo?: PredicateInputMessagesFilterRoundVideo
    inputMessagesFilterMyMentions?: PredicateInputMessagesFilterMyMentions
    inputMessagesFilterGeo?: PredicateInputMessagesFilterGeo
    inputMessagesFilterContacts?: PredicateInputMessagesFilterContacts
    inputMessagesFilterPinned?: PredicateInputMessagesFilterPinned
}

export interface Update {
    updateNewMessage?: PredicateUpdateNewMessage
    updateMessageID?: PredicateUpdateMessageID
    updateDeleteMessages?: PredicateUpdateDeleteMessages
    updateUserTyping?: PredicateUpdateUserTyping
    updateChatUserTyping?: PredicateUpdateChatUserTyping
    updateChatParticipants?: PredicateUpdateChatParticipants
    updateUserStatus?: PredicateUpdateUserStatus
    updateUserName?: PredicateUpdateUserName
    updateUserPhoto?: PredicateUpdateUserPhoto
    updateNewEncryptedMessage?: PredicateUpdateNewEncryptedMessage
    updateEncryptedChatTyping?: PredicateUpdateEncryptedChatTyping
    updateEncryption?: PredicateUpdateEncryption
    updateEncryptedMessagesRead?: PredicateUpdateEncryptedMessagesRead
    updateChatParticipantAdd?: PredicateUpdateChatParticipantAdd
    updateChatParticipantDelete?: PredicateUpdateChatParticipantDelete
    updateDcOptions?: PredicateUpdateDcOptions
    updateNotifySettings?: PredicateUpdateNotifySettings
    updateServiceNotification?: PredicateUpdateServiceNotification
    updatePrivacy?: PredicateUpdatePrivacy
    updateUserPhone?: PredicateUpdateUserPhone
    updateReadHistoryInbox?: PredicateUpdateReadHistoryInbox
    updateReadHistoryOutbox?: PredicateUpdateReadHistoryOutbox
    updateWebPage?: PredicateUpdateWebPage
    updateReadMessagesContents?: PredicateUpdateReadMessagesContents
    updateChannelTooLong?: PredicateUpdateChannelTooLong
    updateChannel?: PredicateUpdateChannel
    updateNewChannelMessage?: PredicateUpdateNewChannelMessage
    updateReadChannelInbox?: PredicateUpdateReadChannelInbox
    updateDeleteChannelMessages?: PredicateUpdateDeleteChannelMessages
    updateChannelMessageViews?: PredicateUpdateChannelMessageViews
    updateChatParticipantAdmin?: PredicateUpdateChatParticipantAdmin
    updateNewStickerSet?: PredicateUpdateNewStickerSet
    updateStickerSetsOrder?: PredicateUpdateStickerSetsOrder
    updateStickerSets?: PredicateUpdateStickerSets
    updateSavedGifs?: PredicateUpdateSavedGifs
    updateBotInlineQuery?: PredicateUpdateBotInlineQuery
    updateBotInlineSend?: PredicateUpdateBotInlineSend
    updateEditChannelMessage?: PredicateUpdateEditChannelMessage
    updateBotCallbackQuery?: PredicateUpdateBotCallbackQuery
    updateEditMessage?: PredicateUpdateEditMessage
    updateInlineBotCallbackQuery?: PredicateUpdateInlineBotCallbackQuery
    updateReadChannelOutbox?: PredicateUpdateReadChannelOutbox
    updateDraftMessage?: PredicateUpdateDraftMessage
    updateReadFeaturedStickers?: PredicateUpdateReadFeaturedStickers
    updateRecentStickers?: PredicateUpdateRecentStickers
    updateConfig?: PredicateUpdateConfig
    updatePtsChanged?: PredicateUpdatePtsChanged
    updateChannelWebPage?: PredicateUpdateChannelWebPage
    updateDialogPinned?: PredicateUpdateDialogPinned
    updatePinnedDialogs?: PredicateUpdatePinnedDialogs
    updateBotWebhookJSON?: PredicateUpdateBotWebhookJSON
    updateBotWebhookJSONQuery?: PredicateUpdateBotWebhookJSONQuery
    updateBotShippingQuery?: PredicateUpdateBotShippingQuery
    updateBotPrecheckoutQuery?: PredicateUpdateBotPrecheckoutQuery
    updatePhoneCall?: PredicateUpdatePhoneCall
    updateLangPackTooLong?: PredicateUpdateLangPackTooLong
    updateLangPack?: PredicateUpdateLangPack
    updateFavedStickers?: PredicateUpdateFavedStickers
    updateChannelReadMessagesContents?: PredicateUpdateChannelReadMessagesContents
    updateContactsReset?: PredicateUpdateContactsReset
    updateChannelAvailableMessages?: PredicateUpdateChannelAvailableMessages
    updateDialogUnreadMark?: PredicateUpdateDialogUnreadMark
    updateMessagePoll?: PredicateUpdateMessagePoll
    updateChatDefaultBannedRights?: PredicateUpdateChatDefaultBannedRights
    updateFolderPeers?: PredicateUpdateFolderPeers
    updatePeerSettings?: PredicateUpdatePeerSettings
    updatePeerLocated?: PredicateUpdatePeerLocated
    updateNewScheduledMessage?: PredicateUpdateNewScheduledMessage
    updateDeleteScheduledMessages?: PredicateUpdateDeleteScheduledMessages
    updateTheme?: PredicateUpdateTheme
    updateGeoLiveViewed?: PredicateUpdateGeoLiveViewed
    updateLoginToken?: PredicateUpdateLoginToken
    updateMessagePollVote?: PredicateUpdateMessagePollVote
    updateDialogFilter?: PredicateUpdateDialogFilter
    updateDialogFilterOrder?: PredicateUpdateDialogFilterOrder
    updateDialogFilters?: PredicateUpdateDialogFilters
    updatePhoneCallSignalingData?: PredicateUpdatePhoneCallSignalingData
    updateChannelMessageForwards?: PredicateUpdateChannelMessageForwards
    updateReadChannelDiscussionInbox?: PredicateUpdateReadChannelDiscussionInbox
    updateReadChannelDiscussionOutbox?: PredicateUpdateReadChannelDiscussionOutbox
    updatePeerBlocked?: PredicateUpdatePeerBlocked
    updateChannelUserTyping?: PredicateUpdateChannelUserTyping
    updatePinnedMessages?: PredicateUpdatePinnedMessages
    updatePinnedChannelMessages?: PredicateUpdatePinnedChannelMessages
    updateChat?: PredicateUpdateChat
    updateGroupCallParticipants?: PredicateUpdateGroupCallParticipants
    updateGroupCall?: PredicateUpdateGroupCall
    updatePeerHistoryTTL?: PredicateUpdatePeerHistoryTTL
    updateChatParticipant?: PredicateUpdateChatParticipant
    updateChannelParticipant?: PredicateUpdateChannelParticipant
    updateBotStopped?: PredicateUpdateBotStopped
    updateGroupCallConnection?: PredicateUpdateGroupCallConnection
    updateBotCommands?: PredicateUpdateBotCommands
    updatePendingJoinRequests?: PredicateUpdatePendingJoinRequests
    updateBotChatInviteRequester?: PredicateUpdateBotChatInviteRequester
    updateMessageReactions?: PredicateUpdateMessageReactions
}

export interface UpdatesState {
    updatesState: PredicateUpdatesState
}

export interface UpdatesDifference {
    updatesDifferenceEmpty?: PredicateUpdatesDifferenceEmpty
    updatesDifference?: PredicateUpdatesDifference
    updatesDifferenceSlice?: PredicateUpdatesDifferenceSlice
    updatesDifferenceTooLong?: PredicateUpdatesDifferenceTooLong
}

export interface Updates {
    updatesTooLong?: PredicateUpdatesTooLong
    updateShortMessage?: PredicateUpdateShortMessage
    updateShortChatMessage?: PredicateUpdateShortChatMessage
    updateShort?: PredicateUpdateShort
    updatesCombined?: PredicateUpdatesCombined
    updates?: PredicateUpdates
    updateShortSentMessage?: PredicateUpdateShortSentMessage
}

export interface PhotosPhotos {
    photosPhotos?: PredicatePhotosPhotos
    photosPhotosSlice?: PredicatePhotosPhotosSlice
}

export interface PhotosPhoto {
    photosPhoto: PredicatePhotosPhoto
}

export interface UploadFile {
    uploadFile?: PredicateUploadFile
    uploadFileCdnRedirect?: PredicateUploadFileCdnRedirect
}

export interface DcOption {
    dcOption: PredicateDcOption
}

export interface Config {
    config: PredicateConfig
}

export interface NearestDc {
    nearestDc: PredicateNearestDc
}

export interface HelpAppUpdate {
    helpAppUpdate?: PredicateHelpAppUpdate
    helpNoAppUpdate?: PredicateHelpNoAppUpdate
}

export interface HelpInviteText {
    helpInviteText: PredicateHelpInviteText
}

export interface EncryptedChat {
    encryptedChatEmpty?: PredicateEncryptedChatEmpty
    encryptedChatWaiting?: PredicateEncryptedChatWaiting
    encryptedChatRequested?: PredicateEncryptedChatRequested
    encryptedChat?: PredicateEncryptedChat
    encryptedChatDiscarded?: PredicateEncryptedChatDiscarded
}

export interface InputEncryptedChat {
    inputEncryptedChat: PredicateInputEncryptedChat
}

export interface EncryptedFile {
    encryptedFileEmpty?: PredicateEncryptedFileEmpty
    encryptedFile?: PredicateEncryptedFile
}

export interface InputEncryptedFile {
    inputEncryptedFileEmpty?: PredicateInputEncryptedFileEmpty
    inputEncryptedFileUploaded?: PredicateInputEncryptedFileUploaded
    inputEncryptedFile?: PredicateInputEncryptedFile
    inputEncryptedFileBigUploaded?: PredicateInputEncryptedFileBigUploaded
}

export interface EncryptedMessage {
    encryptedMessage?: PredicateEncryptedMessage
    encryptedMessageService?: PredicateEncryptedMessageService
}

export interface MessagesDhConfig {
    messagesDhConfigNotModified?: PredicateMessagesDhConfigNotModified
    messagesDhConfig?: PredicateMessagesDhConfig
}

export interface MessagesSentEncryptedMessage {
    messagesSentEncryptedMessage?: PredicateMessagesSentEncryptedMessage
    messagesSentEncryptedFile?: PredicateMessagesSentEncryptedFile
}

export interface InputDocument {
    inputDocumentEmpty?: PredicateInputDocumentEmpty
    inputDocument?: PredicateInputDocument
}

export interface Document {
    documentEmpty?: PredicateDocumentEmpty
    document?: PredicateDocument
}

export interface HelpSupport {
    helpSupport: PredicateHelpSupport
}

export interface NotifyPeer {
    notifyPeer?: PredicateNotifyPeer
    notifyUsers?: PredicateNotifyUsers
    notifyChats?: PredicateNotifyChats
    notifyBroadcasts?: PredicateNotifyBroadcasts
}

export interface SendMessageAction {
    sendMessageTypingAction?: PredicateSendMessageTypingAction
    sendMessageCancelAction?: PredicateSendMessageCancelAction
    sendMessageRecordVideoAction?: PredicateSendMessageRecordVideoAction
    sendMessageUploadVideoAction?: PredicateSendMessageUploadVideoAction
    sendMessageRecordAudioAction?: PredicateSendMessageRecordAudioAction
    sendMessageUploadAudioAction?: PredicateSendMessageUploadAudioAction
    sendMessageUploadPhotoAction?: PredicateSendMessageUploadPhotoAction
    sendMessageUploadDocumentAction?: PredicateSendMessageUploadDocumentAction
    sendMessageGeoLocationAction?: PredicateSendMessageGeoLocationAction
    sendMessageChooseContactAction?: PredicateSendMessageChooseContactAction
    sendMessageGamePlayAction?: PredicateSendMessageGamePlayAction
    sendMessageRecordRoundAction?: PredicateSendMessageRecordRoundAction
    sendMessageUploadRoundAction?: PredicateSendMessageUploadRoundAction
    speakingInGroupCallAction?: PredicateSpeakingInGroupCallAction
    sendMessageHistoryImportAction?: PredicateSendMessageHistoryImportAction
    sendMessageChooseStickerAction?: PredicateSendMessageChooseStickerAction
    sendMessageEmojiInteraction?: PredicateSendMessageEmojiInteraction
    sendMessageEmojiInteractionSeen?: PredicateSendMessageEmojiInteractionSeen
}

export interface ContactsFound {
    contactsFound: PredicateContactsFound
}

export interface InputPrivacyKey {
    inputPrivacyKeyStatusTimestamp?: PredicateInputPrivacyKeyStatusTimestamp
    inputPrivacyKeyChatInvite?: PredicateInputPrivacyKeyChatInvite
    inputPrivacyKeyPhoneCall?: PredicateInputPrivacyKeyPhoneCall
    inputPrivacyKeyPhoneP2P?: PredicateInputPrivacyKeyPhoneP2P
    inputPrivacyKeyForwards?: PredicateInputPrivacyKeyForwards
    inputPrivacyKeyProfilePhoto?: PredicateInputPrivacyKeyProfilePhoto
    inputPrivacyKeyPhoneNumber?: PredicateInputPrivacyKeyPhoneNumber
    inputPrivacyKeyAddedByPhone?: PredicateInputPrivacyKeyAddedByPhone
}

export interface PrivacyKey {
    privacyKeyStatusTimestamp?: PredicatePrivacyKeyStatusTimestamp
    privacyKeyChatInvite?: PredicatePrivacyKeyChatInvite
    privacyKeyPhoneCall?: PredicatePrivacyKeyPhoneCall
    privacyKeyPhoneP2P?: PredicatePrivacyKeyPhoneP2P
    privacyKeyForwards?: PredicatePrivacyKeyForwards
    privacyKeyProfilePhoto?: PredicatePrivacyKeyProfilePhoto
    privacyKeyPhoneNumber?: PredicatePrivacyKeyPhoneNumber
    privacyKeyAddedByPhone?: PredicatePrivacyKeyAddedByPhone
}

export interface InputPrivacyRule {
    inputPrivacyValueAllowContacts?: PredicateInputPrivacyValueAllowContacts
    inputPrivacyValueAllowAll?: PredicateInputPrivacyValueAllowAll
    inputPrivacyValueAllowUsers?: PredicateInputPrivacyValueAllowUsers
    inputPrivacyValueDisallowContacts?: PredicateInputPrivacyValueDisallowContacts
    inputPrivacyValueDisallowAll?: PredicateInputPrivacyValueDisallowAll
    inputPrivacyValueDisallowUsers?: PredicateInputPrivacyValueDisallowUsers
    inputPrivacyValueAllowChatParticipants?: PredicateInputPrivacyValueAllowChatParticipants
    inputPrivacyValueDisallowChatParticipants?: PredicateInputPrivacyValueDisallowChatParticipants
}

export interface PrivacyRule {
    privacyValueAllowContacts?: PredicatePrivacyValueAllowContacts
    privacyValueAllowAll?: PredicatePrivacyValueAllowAll
    privacyValueAllowUsers?: PredicatePrivacyValueAllowUsers
    privacyValueDisallowContacts?: PredicatePrivacyValueDisallowContacts
    privacyValueDisallowAll?: PredicatePrivacyValueDisallowAll
    privacyValueDisallowUsers?: PredicatePrivacyValueDisallowUsers
    privacyValueAllowChatParticipants?: PredicatePrivacyValueAllowChatParticipants
    privacyValueDisallowChatParticipants?: PredicatePrivacyValueDisallowChatParticipants
}

export interface AccountPrivacyRules {
    accountPrivacyRules: PredicateAccountPrivacyRules
}

export interface AccountDaysTTL {
    accountDaysTTL: PredicateAccountDaysTTL
}

export interface DocumentAttribute {
    documentAttributeImageSize?: PredicateDocumentAttributeImageSize
    documentAttributeAnimated?: PredicateDocumentAttributeAnimated
    documentAttributeSticker?: PredicateDocumentAttributeSticker
    documentAttributeVideo?: PredicateDocumentAttributeVideo
    documentAttributeAudio?: PredicateDocumentAttributeAudio
    documentAttributeFilename?: PredicateDocumentAttributeFilename
    documentAttributeHasStickers?: PredicateDocumentAttributeHasStickers
}

export interface MessagesStickers {
    messagesStickersNotModified?: PredicateMessagesStickersNotModified
    messagesStickers?: PredicateMessagesStickers
}

export interface StickerPack {
    stickerPack: PredicateStickerPack
}

export interface MessagesAllStickers {
    messagesAllStickersNotModified?: PredicateMessagesAllStickersNotModified
    messagesAllStickers?: PredicateMessagesAllStickers
}

export interface MessagesAffectedMessages {
    messagesAffectedMessages: PredicateMessagesAffectedMessages
}

export interface WebPage {
    webPageEmpty?: PredicateWebPageEmpty
    webPagePending?: PredicateWebPagePending
    webPage?: PredicateWebPage
    webPageNotModified?: PredicateWebPageNotModified
}

export interface Authorization {
    authorization: PredicateAuthorization
}

export interface AccountAuthorizations {
    accountAuthorizations: PredicateAccountAuthorizations
}

export interface AccountPassword {
    accountPassword: PredicateAccountPassword
}

export interface AccountPasswordSettings {
    accountPasswordSettings: PredicateAccountPasswordSettings
}

export interface AccountPasswordInputSettings {
    accountPasswordInputSettings: PredicateAccountPasswordInputSettings
}

export interface AuthPasswordRecovery {
    authPasswordRecovery: PredicateAuthPasswordRecovery
}

export interface ReceivedNotifyMessage {
    receivedNotifyMessage: PredicateReceivedNotifyMessage
}

export interface ExportedChatInvite {
    chatInviteExported: PredicateChatInviteExported
}

export interface ChatInvite {
    chatInviteAlready?: PredicateChatInviteAlready
    chatInvite?: PredicateChatInvite
    chatInvitePeek?: PredicateChatInvitePeek
}

export interface InputStickerSet {
    inputStickerSetEmpty?: PredicateInputStickerSetEmpty
    inputStickerSetID?: PredicateInputStickerSetID
    inputStickerSetShortName?: PredicateInputStickerSetShortName
    inputStickerSetAnimatedEmoji?: PredicateInputStickerSetAnimatedEmoji
    inputStickerSetDice?: PredicateInputStickerSetDice
    inputStickerSetAnimatedEmojiAnimations?: PredicateInputStickerSetAnimatedEmojiAnimations
}

export interface StickerSet {
    stickerSet: PredicateStickerSet
}

export interface MessagesStickerSet {
    messagesStickerSet?: PredicateMessagesStickerSet
    messagesStickerSetNotModified?: PredicateMessagesStickerSetNotModified
}

export interface BotCommand {
    botCommand: PredicateBotCommand
}

export interface BotInfo {
    botInfo: PredicateBotInfo
}

export interface KeyboardButton {
    keyboardButton?: PredicateKeyboardButton
    keyboardButtonUrl?: PredicateKeyboardButtonUrl
    keyboardButtonCallback?: PredicateKeyboardButtonCallback
    keyboardButtonRequestPhone?: PredicateKeyboardButtonRequestPhone
    keyboardButtonRequestGeoLocation?: PredicateKeyboardButtonRequestGeoLocation
    keyboardButtonSwitchInline?: PredicateKeyboardButtonSwitchInline
    keyboardButtonGame?: PredicateKeyboardButtonGame
    keyboardButtonBuy?: PredicateKeyboardButtonBuy
    keyboardButtonUrlAuth?: PredicateKeyboardButtonUrlAuth
    inputKeyboardButtonUrlAuth?: PredicateInputKeyboardButtonUrlAuth
    keyboardButtonRequestPoll?: PredicateKeyboardButtonRequestPoll
    inputKeyboardButtonUserProfile?: PredicateInputKeyboardButtonUserProfile
    keyboardButtonUserProfile?: PredicateKeyboardButtonUserProfile
}

export interface KeyboardButtonRow {
    keyboardButtonRow: PredicateKeyboardButtonRow
}

export interface ReplyMarkup {
    replyKeyboardHide?: PredicateReplyKeyboardHide
    replyKeyboardForceReply?: PredicateReplyKeyboardForceReply
    replyKeyboardMarkup?: PredicateReplyKeyboardMarkup
    replyInlineMarkup?: PredicateReplyInlineMarkup
}

export interface MessageEntity {
    messageEntityUnknown?: PredicateMessageEntityUnknown
    messageEntityMention?: PredicateMessageEntityMention
    messageEntityHashtag?: PredicateMessageEntityHashtag
    messageEntityBotCommand?: PredicateMessageEntityBotCommand
    messageEntityUrl?: PredicateMessageEntityUrl
    messageEntityEmail?: PredicateMessageEntityEmail
    messageEntityBold?: PredicateMessageEntityBold
    messageEntityItalic?: PredicateMessageEntityItalic
    messageEntityCode?: PredicateMessageEntityCode
    messageEntityPre?: PredicateMessageEntityPre
    messageEntityTextUrl?: PredicateMessageEntityTextUrl
    messageEntityMentionName?: PredicateMessageEntityMentionName
    inputMessageEntityMentionName?: PredicateInputMessageEntityMentionName
    messageEntityPhone?: PredicateMessageEntityPhone
    messageEntityCashtag?: PredicateMessageEntityCashtag
    messageEntityUnderline?: PredicateMessageEntityUnderline
    messageEntityStrike?: PredicateMessageEntityStrike
    messageEntityBlockquote?: PredicateMessageEntityBlockquote
    messageEntityBankCard?: PredicateMessageEntityBankCard
    messageEntitySpoiler?: PredicateMessageEntitySpoiler
}

export interface InputChannel {
    inputChannelEmpty?: PredicateInputChannelEmpty
    inputChannel?: PredicateInputChannel
    inputChannelFromMessage?: PredicateInputChannelFromMessage
}

export interface ContactsResolvedPeer {
    contactsResolvedPeer: PredicateContactsResolvedPeer
}

export interface MessageRange {
    messageRange: PredicateMessageRange
}

export interface UpdatesChannelDifference {
    updatesChannelDifferenceEmpty?: PredicateUpdatesChannelDifferenceEmpty
    updatesChannelDifferenceTooLong?: PredicateUpdatesChannelDifferenceTooLong
    updatesChannelDifference?: PredicateUpdatesChannelDifference
}

export interface ChannelMessagesFilter {
    channelMessagesFilterEmpty?: PredicateChannelMessagesFilterEmpty
    channelMessagesFilter?: PredicateChannelMessagesFilter
}

export interface ChannelParticipant {
    channelParticipant?: PredicateChannelParticipant
    channelParticipantSelf?: PredicateChannelParticipantSelf
    channelParticipantCreator?: PredicateChannelParticipantCreator
    channelParticipantAdmin?: PredicateChannelParticipantAdmin
    channelParticipantBanned?: PredicateChannelParticipantBanned
    channelParticipantLeft?: PredicateChannelParticipantLeft
}

export interface ChannelParticipantsFilter {
    channelParticipantsRecent?: PredicateChannelParticipantsRecent
    channelParticipantsAdmins?: PredicateChannelParticipantsAdmins
    channelParticipantsKicked?: PredicateChannelParticipantsKicked
    channelParticipantsBots?: PredicateChannelParticipantsBots
    channelParticipantsBanned?: PredicateChannelParticipantsBanned
    channelParticipantsSearch?: PredicateChannelParticipantsSearch
    channelParticipantsContacts?: PredicateChannelParticipantsContacts
    channelParticipantsMentions?: PredicateChannelParticipantsMentions
}

export interface ChannelsChannelParticipants {
    channelsChannelParticipants?: PredicateChannelsChannelParticipants
    channelsChannelParticipantsNotModified?: PredicateChannelsChannelParticipantsNotModified
}

export interface ChannelsChannelParticipant {
    channelsChannelParticipant: PredicateChannelsChannelParticipant
}

export interface HelpTermsOfService {
    helpTermsOfService: PredicateHelpTermsOfService
}

export interface MessagesSavedGifs {
    messagesSavedGifsNotModified?: PredicateMessagesSavedGifsNotModified
    messagesSavedGifs?: PredicateMessagesSavedGifs
}

export interface InputBotInlineMessage {
    inputBotInlineMessageMediaAuto?: PredicateInputBotInlineMessageMediaAuto
    inputBotInlineMessageText?: PredicateInputBotInlineMessageText
    inputBotInlineMessageMediaGeo?: PredicateInputBotInlineMessageMediaGeo
    inputBotInlineMessageMediaVenue?: PredicateInputBotInlineMessageMediaVenue
    inputBotInlineMessageMediaContact?: PredicateInputBotInlineMessageMediaContact
    inputBotInlineMessageGame?: PredicateInputBotInlineMessageGame
    inputBotInlineMessageMediaInvoice?: PredicateInputBotInlineMessageMediaInvoice
}

export interface InputBotInlineResult {
    inputBotInlineResult?: PredicateInputBotInlineResult
    inputBotInlineResultPhoto?: PredicateInputBotInlineResultPhoto
    inputBotInlineResultDocument?: PredicateInputBotInlineResultDocument
    inputBotInlineResultGame?: PredicateInputBotInlineResultGame
}

export interface BotInlineMessage {
    botInlineMessageMediaAuto?: PredicateBotInlineMessageMediaAuto
    botInlineMessageText?: PredicateBotInlineMessageText
    botInlineMessageMediaGeo?: PredicateBotInlineMessageMediaGeo
    botInlineMessageMediaVenue?: PredicateBotInlineMessageMediaVenue
    botInlineMessageMediaContact?: PredicateBotInlineMessageMediaContact
    botInlineMessageMediaInvoice?: PredicateBotInlineMessageMediaInvoice
}

export interface BotInlineResult {
    botInlineResult?: PredicateBotInlineResult
    botInlineMediaResult?: PredicateBotInlineMediaResult
}

export interface MessagesBotResults {
    messagesBotResults: PredicateMessagesBotResults
}

export interface ExportedMessageLink {
    exportedMessageLink: PredicateExportedMessageLink
}

export interface MessageFwdHeader {
    messageFwdHeader: PredicateMessageFwdHeader
}

export interface AuthCodeType {
    authCodeTypeSms?: PredicateAuthCodeTypeSms
    authCodeTypeCall?: PredicateAuthCodeTypeCall
    authCodeTypeFlashCall?: PredicateAuthCodeTypeFlashCall
    authCodeTypeMissedCall?: PredicateAuthCodeTypeMissedCall
}

export interface AuthSentCodeType {
    authSentCodeTypeApp?: PredicateAuthSentCodeTypeApp
    authSentCodeTypeSms?: PredicateAuthSentCodeTypeSms
    authSentCodeTypeCall?: PredicateAuthSentCodeTypeCall
    authSentCodeTypeFlashCall?: PredicateAuthSentCodeTypeFlashCall
    authSentCodeTypeMissedCall?: PredicateAuthSentCodeTypeMissedCall
}

export interface MessagesBotCallbackAnswer {
    messagesBotCallbackAnswer: PredicateMessagesBotCallbackAnswer
}

export interface MessagesMessageEditData {
    messagesMessageEditData: PredicateMessagesMessageEditData
}

export interface InputBotInlineMessageID {
    inputBotInlineMessageID?: PredicateInputBotInlineMessageID
    inputBotInlineMessageID64?: PredicateInputBotInlineMessageID64
}

export interface InlineBotSwitchPM {
    inlineBotSwitchPM: PredicateInlineBotSwitchPM
}

export interface MessagesPeerDialogs {
    messagesPeerDialogs: PredicateMessagesPeerDialogs
}

export interface TopPeer {
    topPeer: PredicateTopPeer
}

export interface TopPeerCategory {
    topPeerCategoryBotsPM?: PredicateTopPeerCategoryBotsPM
    topPeerCategoryBotsInline?: PredicateTopPeerCategoryBotsInline
    topPeerCategoryCorrespondents?: PredicateTopPeerCategoryCorrespondents
    topPeerCategoryGroups?: PredicateTopPeerCategoryGroups
    topPeerCategoryChannels?: PredicateTopPeerCategoryChannels
    topPeerCategoryPhoneCalls?: PredicateTopPeerCategoryPhoneCalls
    topPeerCategoryForwardUsers?: PredicateTopPeerCategoryForwardUsers
    topPeerCategoryForwardChats?: PredicateTopPeerCategoryForwardChats
}

export interface TopPeerCategoryPeers {
    topPeerCategoryPeers: PredicateTopPeerCategoryPeers
}

export interface ContactsTopPeers {
    contactsTopPeersNotModified?: PredicateContactsTopPeersNotModified
    contactsTopPeers?: PredicateContactsTopPeers
    contactsTopPeersDisabled?: PredicateContactsTopPeersDisabled
}

export interface DraftMessage {
    draftMessageEmpty?: PredicateDraftMessageEmpty
    draftMessage?: PredicateDraftMessage
}

export interface MessagesFeaturedStickers {
    messagesFeaturedStickersNotModified?: PredicateMessagesFeaturedStickersNotModified
    messagesFeaturedStickers?: PredicateMessagesFeaturedStickers
}

export interface MessagesRecentStickers {
    messagesRecentStickersNotModified?: PredicateMessagesRecentStickersNotModified
    messagesRecentStickers?: PredicateMessagesRecentStickers
}

export interface MessagesArchivedStickers {
    messagesArchivedStickers: PredicateMessagesArchivedStickers
}

export interface MessagesStickerSetInstallResult {
    messagesStickerSetInstallResultSuccess?: PredicateMessagesStickerSetInstallResultSuccess
    messagesStickerSetInstallResultArchive?: PredicateMessagesStickerSetInstallResultArchive
}

export interface StickerSetCovered {
    stickerSetCovered?: PredicateStickerSetCovered
    stickerSetMultiCovered?: PredicateStickerSetMultiCovered
}

export interface MaskCoords {
    maskCoords: PredicateMaskCoords
}

export interface InputStickeredMedia {
    inputStickeredMediaPhoto?: PredicateInputStickeredMediaPhoto
    inputStickeredMediaDocument?: PredicateInputStickeredMediaDocument
}

export interface Game {
    game: PredicateGame
}

export interface InputGame {
    inputGameID?: PredicateInputGameID
    inputGameShortName?: PredicateInputGameShortName
}

export interface HighScore {
    highScore: PredicateHighScore
}

export interface MessagesHighScores {
    messagesHighScores: PredicateMessagesHighScores
}

export interface RichText {
    textEmpty?: PredicateTextEmpty
    textPlain?: PredicateTextPlain
    textBold?: PredicateTextBold
    textItalic?: PredicateTextItalic
    textUnderline?: PredicateTextUnderline
    textStrike?: PredicateTextStrike
    textFixed?: PredicateTextFixed
    textUrl?: PredicateTextUrl
    textEmail?: PredicateTextEmail
    textConcat?: PredicateTextConcat
    textSubscript?: PredicateTextSubscript
    textSuperscript?: PredicateTextSuperscript
    textMarked?: PredicateTextMarked
    textPhone?: PredicateTextPhone
    textImage?: PredicateTextImage
    textAnchor?: PredicateTextAnchor
}

export interface PageBlock {
    pageBlockUnsupported?: PredicatePageBlockUnsupported
    pageBlockTitle?: PredicatePageBlockTitle
    pageBlockSubtitle?: PredicatePageBlockSubtitle
    pageBlockAuthorDate?: PredicatePageBlockAuthorDate
    pageBlockHeader?: PredicatePageBlockHeader
    pageBlockSubheader?: PredicatePageBlockSubheader
    pageBlockParagraph?: PredicatePageBlockParagraph
    pageBlockPreformatted?: PredicatePageBlockPreformatted
    pageBlockFooter?: PredicatePageBlockFooter
    pageBlockDivider?: PredicatePageBlockDivider
    pageBlockAnchor?: PredicatePageBlockAnchor
    pageBlockList?: PredicatePageBlockList
    pageBlockBlockquote?: PredicatePageBlockBlockquote
    pageBlockPullquote?: PredicatePageBlockPullquote
    pageBlockPhoto?: PredicatePageBlockPhoto
    pageBlockVideo?: PredicatePageBlockVideo
    pageBlockCover?: PredicatePageBlockCover
    pageBlockEmbed?: PredicatePageBlockEmbed
    pageBlockEmbedPost?: PredicatePageBlockEmbedPost
    pageBlockCollage?: PredicatePageBlockCollage
    pageBlockSlideshow?: PredicatePageBlockSlideshow
    pageBlockChannel?: PredicatePageBlockChannel
    pageBlockAudio?: PredicatePageBlockAudio
    pageBlockKicker?: PredicatePageBlockKicker
    pageBlockTable?: PredicatePageBlockTable
    pageBlockOrderedList?: PredicatePageBlockOrderedList
    pageBlockDetails?: PredicatePageBlockDetails
    pageBlockRelatedArticles?: PredicatePageBlockRelatedArticles
    pageBlockMap?: PredicatePageBlockMap
}

export interface PhoneCallDiscardReason {
    phoneCallDiscardReasonMissed?: PredicatePhoneCallDiscardReasonMissed
    phoneCallDiscardReasonDisconnect?: PredicatePhoneCallDiscardReasonDisconnect
    phoneCallDiscardReasonHangup?: PredicatePhoneCallDiscardReasonHangup
    phoneCallDiscardReasonBusy?: PredicatePhoneCallDiscardReasonBusy
}

export interface DataJSON {
    dataJSON: PredicateDataJSON
}

export interface LabeledPrice {
    labeledPrice: PredicateLabeledPrice
}

export interface Invoice {
    invoice: PredicateInvoice
}

export interface PaymentCharge {
    paymentCharge: PredicatePaymentCharge
}

export interface PostAddress {
    postAddress: PredicatePostAddress
}

export interface PaymentRequestedInfo {
    paymentRequestedInfo: PredicatePaymentRequestedInfo
}

export interface PaymentSavedCredentials {
    paymentSavedCredentialsCard: PredicatePaymentSavedCredentialsCard
}

export interface WebDocument {
    webDocument?: PredicateWebDocument
    webDocumentNoProxy?: PredicateWebDocumentNoProxy
}

export interface InputWebDocument {
    inputWebDocument: PredicateInputWebDocument
}

export interface InputWebFileLocation {
    inputWebFileLocation?: PredicateInputWebFileLocation
    inputWebFileGeoPointLocation?: PredicateInputWebFileGeoPointLocation
}

export interface UploadWebFile {
    uploadWebFile: PredicateUploadWebFile
}

export interface PaymentsPaymentForm {
    paymentsPaymentForm: PredicatePaymentsPaymentForm
}

export interface PaymentsValidatedRequestedInfo {
    paymentsValidatedRequestedInfo: PredicatePaymentsValidatedRequestedInfo
}

export interface PaymentsPaymentResult {
    paymentsPaymentResult?: PredicatePaymentsPaymentResult
    paymentsPaymentVerificationNeeded?: PredicatePaymentsPaymentVerificationNeeded
}

export interface PaymentsPaymentReceipt {
    paymentsPaymentReceipt: PredicatePaymentsPaymentReceipt
}

export interface PaymentsSavedInfo {
    paymentsSavedInfo: PredicatePaymentsSavedInfo
}

export interface InputPaymentCredentials {
    inputPaymentCredentialsSaved?: PredicateInputPaymentCredentialsSaved
    inputPaymentCredentials?: PredicateInputPaymentCredentials
    inputPaymentCredentialsApplePay?: PredicateInputPaymentCredentialsApplePay
    inputPaymentCredentialsGooglePay?: PredicateInputPaymentCredentialsGooglePay
}

export interface AccountTmpPassword {
    accountTmpPassword: PredicateAccountTmpPassword
}

export interface ShippingOption {
    shippingOption: PredicateShippingOption
}

export interface InputStickerSetItem {
    inputStickerSetItem: PredicateInputStickerSetItem
}

export interface InputPhoneCall {
    inputPhoneCall: PredicateInputPhoneCall
}

export interface PhoneCall {
    phoneCallEmpty?: PredicatePhoneCallEmpty
    phoneCallWaiting?: PredicatePhoneCallWaiting
    phoneCallRequested?: PredicatePhoneCallRequested
    phoneCallAccepted?: PredicatePhoneCallAccepted
    phoneCall?: PredicatePhoneCall
    phoneCallDiscarded?: PredicatePhoneCallDiscarded
}

export interface PhoneConnection {
    phoneConnection?: PredicatePhoneConnection
    phoneConnectionWebrtc?: PredicatePhoneConnectionWebrtc
}

export interface PhoneCallProtocol {
    phoneCallProtocol: PredicatePhoneCallProtocol
}

export interface PhonePhoneCall {
    phonePhoneCall: PredicatePhonePhoneCall
}

export interface UploadCdnFile {
    uploadCdnFileReuploadNeeded?: PredicateUploadCdnFileReuploadNeeded
    uploadCdnFile?: PredicateUploadCdnFile
}

export interface CdnPublicKey {
    cdnPublicKey: PredicateCdnPublicKey
}

export interface CdnConfig {
    cdnConfig: PredicateCdnConfig
}

export interface LangPackString {
    langPackString?: PredicateLangPackString
    langPackStringPluralized?: PredicateLangPackStringPluralized
    langPackStringDeleted?: PredicateLangPackStringDeleted
}

export interface LangPackDifference {
    langPackDifference: PredicateLangPackDifference
}

export interface LangPackLanguage {
    langPackLanguage: PredicateLangPackLanguage
}

export interface ChannelAdminLogEventAction {
    channelAdminLogEventActionChangeTitle?: PredicateChannelAdminLogEventActionChangeTitle
    channelAdminLogEventActionChangeAbout?: PredicateChannelAdminLogEventActionChangeAbout
    channelAdminLogEventActionChangeUsername?: PredicateChannelAdminLogEventActionChangeUsername
    channelAdminLogEventActionChangePhoto?: PredicateChannelAdminLogEventActionChangePhoto
    channelAdminLogEventActionToggleInvites?: PredicateChannelAdminLogEventActionToggleInvites
    channelAdminLogEventActionToggleSignatures?: PredicateChannelAdminLogEventActionToggleSignatures
    channelAdminLogEventActionUpdatePinned?: PredicateChannelAdminLogEventActionUpdatePinned
    channelAdminLogEventActionEditMessage?: PredicateChannelAdminLogEventActionEditMessage
    channelAdminLogEventActionDeleteMessage?: PredicateChannelAdminLogEventActionDeleteMessage
    channelAdminLogEventActionParticipantJoin?: PredicateChannelAdminLogEventActionParticipantJoin
    channelAdminLogEventActionParticipantLeave?: PredicateChannelAdminLogEventActionParticipantLeave
    channelAdminLogEventActionParticipantInvite?: PredicateChannelAdminLogEventActionParticipantInvite
    channelAdminLogEventActionParticipantToggleBan?: PredicateChannelAdminLogEventActionParticipantToggleBan
    channelAdminLogEventActionParticipantToggleAdmin?: PredicateChannelAdminLogEventActionParticipantToggleAdmin
    channelAdminLogEventActionChangeStickerSet?: PredicateChannelAdminLogEventActionChangeStickerSet
    channelAdminLogEventActionTogglePreHistoryHidden?: PredicateChannelAdminLogEventActionTogglePreHistoryHidden
    channelAdminLogEventActionDefaultBannedRights?: PredicateChannelAdminLogEventActionDefaultBannedRights
    channelAdminLogEventActionStopPoll?: PredicateChannelAdminLogEventActionStopPoll
    channelAdminLogEventActionChangeLinkedChat?: PredicateChannelAdminLogEventActionChangeLinkedChat
    channelAdminLogEventActionChangeLocation?: PredicateChannelAdminLogEventActionChangeLocation
    channelAdminLogEventActionToggleSlowMode?: PredicateChannelAdminLogEventActionToggleSlowMode
    channelAdminLogEventActionStartGroupCall?: PredicateChannelAdminLogEventActionStartGroupCall
    channelAdminLogEventActionDiscardGroupCall?: PredicateChannelAdminLogEventActionDiscardGroupCall
    channelAdminLogEventActionParticipantMute?: PredicateChannelAdminLogEventActionParticipantMute
    channelAdminLogEventActionParticipantUnmute?: PredicateChannelAdminLogEventActionParticipantUnmute
    channelAdminLogEventActionToggleGroupCallSetting?: PredicateChannelAdminLogEventActionToggleGroupCallSetting
    channelAdminLogEventActionParticipantJoinByInvite?: PredicateChannelAdminLogEventActionParticipantJoinByInvite
    channelAdminLogEventActionExportedInviteDelete?: PredicateChannelAdminLogEventActionExportedInviteDelete
    channelAdminLogEventActionExportedInviteRevoke?: PredicateChannelAdminLogEventActionExportedInviteRevoke
    channelAdminLogEventActionExportedInviteEdit?: PredicateChannelAdminLogEventActionExportedInviteEdit
    channelAdminLogEventActionParticipantVolume?: PredicateChannelAdminLogEventActionParticipantVolume
    channelAdminLogEventActionChangeHistoryTTL?: PredicateChannelAdminLogEventActionChangeHistoryTTL
    channelAdminLogEventActionParticipantJoinByRequest?: PredicateChannelAdminLogEventActionParticipantJoinByRequest
    channelAdminLogEventActionToggleNoForwards?: PredicateChannelAdminLogEventActionToggleNoForwards
    channelAdminLogEventActionSendMessage?: PredicateChannelAdminLogEventActionSendMessage
    channelAdminLogEventActionChangeAvailableReactions?: PredicateChannelAdminLogEventActionChangeAvailableReactions
}

export interface ChannelAdminLogEvent {
    channelAdminLogEvent: PredicateChannelAdminLogEvent
}

export interface ChannelsAdminLogResults {
    channelsAdminLogResults: PredicateChannelsAdminLogResults
}

export interface ChannelAdminLogEventsFilter {
    channelAdminLogEventsFilter: PredicateChannelAdminLogEventsFilter
}

export interface PopularContact {
    popularContact: PredicatePopularContact
}

export interface MessagesFavedStickers {
    messagesFavedStickersNotModified?: PredicateMessagesFavedStickersNotModified
    messagesFavedStickers?: PredicateMessagesFavedStickers
}

export interface RecentMeUrl {
    recentMeUrlUnknown?: PredicateRecentMeUrlUnknown
    recentMeUrlUser?: PredicateRecentMeUrlUser
    recentMeUrlChat?: PredicateRecentMeUrlChat
    recentMeUrlChatInvite?: PredicateRecentMeUrlChatInvite
    recentMeUrlStickerSet?: PredicateRecentMeUrlStickerSet
}

export interface HelpRecentMeUrls {
    helpRecentMeUrls: PredicateHelpRecentMeUrls
}

export interface InputSingleMedia {
    inputSingleMedia: PredicateInputSingleMedia
}

export interface WebAuthorization {
    webAuthorization: PredicateWebAuthorization
}

export interface AccountWebAuthorizations {
    accountWebAuthorizations: PredicateAccountWebAuthorizations
}

export interface InputMessage {
    inputMessageID?: PredicateInputMessageID
    inputMessageReplyTo?: PredicateInputMessageReplyTo
    inputMessagePinned?: PredicateInputMessagePinned
    inputMessageCallbackQuery?: PredicateInputMessageCallbackQuery
}

export interface InputDialogPeer {
    inputDialogPeer?: PredicateInputDialogPeer
    inputDialogPeerFolder?: PredicateInputDialogPeerFolder
}

export interface DialogPeer {
    dialogPeer?: PredicateDialogPeer
    dialogPeerFolder?: PredicateDialogPeerFolder
}

export interface MessagesFoundStickerSets {
    messagesFoundStickerSetsNotModified?: PredicateMessagesFoundStickerSetsNotModified
    messagesFoundStickerSets?: PredicateMessagesFoundStickerSets
}

export interface FileHash {
    fileHash: PredicateFileHash
}

export interface InputClientProxy {
    inputClientProxy: PredicateInputClientProxy
}

export interface HelpTermsOfServiceUpdate {
    helpTermsOfServiceUpdateEmpty?: PredicateHelpTermsOfServiceUpdateEmpty
    helpTermsOfServiceUpdate?: PredicateHelpTermsOfServiceUpdate
}

export interface InputSecureFile {
    inputSecureFileUploaded?: PredicateInputSecureFileUploaded
    inputSecureFile?: PredicateInputSecureFile
}

export interface SecureFile {
    secureFileEmpty?: PredicateSecureFileEmpty
    secureFile?: PredicateSecureFile
}

export interface SecureData {
    secureData: PredicateSecureData
}

export interface SecurePlainData {
    securePlainPhone?: PredicateSecurePlainPhone
    securePlainEmail?: PredicateSecurePlainEmail
}

export interface SecureValueType {
    secureValueTypePersonalDetails?: PredicateSecureValueTypePersonalDetails
    secureValueTypePassport?: PredicateSecureValueTypePassport
    secureValueTypeDriverLicense?: PredicateSecureValueTypeDriverLicense
    secureValueTypeIdentityCard?: PredicateSecureValueTypeIdentityCard
    secureValueTypeInternalPassport?: PredicateSecureValueTypeInternalPassport
    secureValueTypeAddress?: PredicateSecureValueTypeAddress
    secureValueTypeUtilityBill?: PredicateSecureValueTypeUtilityBill
    secureValueTypeBankStatement?: PredicateSecureValueTypeBankStatement
    secureValueTypeRentalAgreement?: PredicateSecureValueTypeRentalAgreement
    secureValueTypePassportRegistration?: PredicateSecureValueTypePassportRegistration
    secureValueTypeTemporaryRegistration?: PredicateSecureValueTypeTemporaryRegistration
    secureValueTypePhone?: PredicateSecureValueTypePhone
    secureValueTypeEmail?: PredicateSecureValueTypeEmail
}

export interface SecureValue {
    secureValue: PredicateSecureValue
}

export interface InputSecureValue {
    inputSecureValue: PredicateInputSecureValue
}

export interface SecureValueHash {
    secureValueHash: PredicateSecureValueHash
}

export interface SecureValueError {
    secureValueErrorData?: PredicateSecureValueErrorData
    secureValueErrorFrontSide?: PredicateSecureValueErrorFrontSide
    secureValueErrorReverseSide?: PredicateSecureValueErrorReverseSide
    secureValueErrorSelfie?: PredicateSecureValueErrorSelfie
    secureValueErrorFile?: PredicateSecureValueErrorFile
    secureValueErrorFiles?: PredicateSecureValueErrorFiles
    secureValueError?: PredicateSecureValueError
    secureValueErrorTranslationFile?: PredicateSecureValueErrorTranslationFile
    secureValueErrorTranslationFiles?: PredicateSecureValueErrorTranslationFiles
}

export interface SecureCredentialsEncrypted {
    secureCredentialsEncrypted: PredicateSecureCredentialsEncrypted
}

export interface AccountAuthorizationForm {
    accountAuthorizationForm: PredicateAccountAuthorizationForm
}

export interface AccountSentEmailCode {
    accountSentEmailCode: PredicateAccountSentEmailCode
}

export interface HelpDeepLinkInfo {
    helpDeepLinkInfoEmpty?: PredicateHelpDeepLinkInfoEmpty
    helpDeepLinkInfo?: PredicateHelpDeepLinkInfo
}

export interface SavedContact {
    savedPhoneContact: PredicateSavedPhoneContact
}

export interface AccountTakeout {
    accountTakeout: PredicateAccountTakeout
}

export interface PasswordKdfAlgo {
    passwordKdfAlgoUnknown?: PredicatePasswordKdfAlgoUnknown
    passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow?: PredicatePasswordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow
}

export interface SecurePasswordKdfAlgo {
    securePasswordKdfAlgoUnknown?: PredicateSecurePasswordKdfAlgoUnknown
    securePasswordKdfAlgoPBKDF2HMACSHA512iter100000?: PredicateSecurePasswordKdfAlgoPBKDF2HMACSHA512iter100000
    securePasswordKdfAlgoSHA512?: PredicateSecurePasswordKdfAlgoSHA512
}

export interface SecureSecretSettings {
    secureSecretSettings: PredicateSecureSecretSettings
}

export interface InputCheckPasswordSRP {
    inputCheckPasswordEmpty?: PredicateInputCheckPasswordEmpty
    inputCheckPasswordSRP?: PredicateInputCheckPasswordSRP
}

export interface SecureRequiredType {
    secureRequiredType?: PredicateSecureRequiredType
    secureRequiredTypeOneOf?: PredicateSecureRequiredTypeOneOf
}

export interface HelpPassportConfig {
    helpPassportConfigNotModified?: PredicateHelpPassportConfigNotModified
    helpPassportConfig?: PredicateHelpPassportConfig
}

export interface InputAppEvent {
    inputAppEvent: PredicateInputAppEvent
}

export interface JSONObjectValue {
    jsonObjectValue: PredicateJsonObjectValue
}

export interface JSONValue {
    jsonNull?: PredicateJsonNull
    jsonBool?: PredicateJsonBool
    jsonNumber?: PredicateJsonNumber
    jsonString?: PredicateJsonString
    jsonArray?: PredicateJsonArray
    jsonObject?: PredicateJsonObject
}

export interface PageTableCell {
    pageTableCell: PredicatePageTableCell
}

export interface PageTableRow {
    pageTableRow: PredicatePageTableRow
}

export interface PageCaption {
    pageCaption: PredicatePageCaption
}

export interface PageListItem {
    pageListItemText?: PredicatePageListItemText
    pageListItemBlocks?: PredicatePageListItemBlocks
}

export interface PageListOrderedItem {
    pageListOrderedItemText?: PredicatePageListOrderedItemText
    pageListOrderedItemBlocks?: PredicatePageListOrderedItemBlocks
}

export interface PageRelatedArticle {
    pageRelatedArticle: PredicatePageRelatedArticle
}

export interface Page {
    page: PredicatePage
}

export interface HelpSupportName {
    helpSupportName: PredicateHelpSupportName
}

export interface HelpUserInfo {
    helpUserInfoEmpty?: PredicateHelpUserInfoEmpty
    helpUserInfo?: PredicateHelpUserInfo
}

export interface PollAnswer {
    pollAnswer: PredicatePollAnswer
}

export interface Poll {
    poll: PredicatePoll
}

export interface PollAnswerVoters {
    pollAnswerVoters: PredicatePollAnswerVoters
}

export interface PollResults {
    pollResults: PredicatePollResults
}

export interface ChatOnlines {
    chatOnlines: PredicateChatOnlines
}

export interface StatsURL {
    statsURL: PredicateStatsURL
}

export interface ChatAdminRights {
    chatAdminRights: PredicateChatAdminRights
}

export interface ChatBannedRights {
    chatBannedRights: PredicateChatBannedRights
}

export interface InputWallPaper {
    inputWallPaper?: PredicateInputWallPaper
    inputWallPaperSlug?: PredicateInputWallPaperSlug
    inputWallPaperNoFile?: PredicateInputWallPaperNoFile
}

export interface AccountWallPapers {
    accountWallPapersNotModified?: PredicateAccountWallPapersNotModified
    accountWallPapers?: PredicateAccountWallPapers
}

export interface CodeSettings {
    codeSettings: PredicateCodeSettings
}

export interface WallPaperSettings {
    wallPaperSettings: PredicateWallPaperSettings
}

export interface AutoDownloadSettings {
    autoDownloadSettings: PredicateAutoDownloadSettings
}

export interface AccountAutoDownloadSettings {
    accountAutoDownloadSettings: PredicateAccountAutoDownloadSettings
}

export interface EmojiKeyword {
    emojiKeyword?: PredicateEmojiKeyword
    emojiKeywordDeleted?: PredicateEmojiKeywordDeleted
}

export interface EmojiKeywordsDifference {
    emojiKeywordsDifference: PredicateEmojiKeywordsDifference
}

export interface EmojiURL {
    emojiURL: PredicateEmojiURL
}

export interface EmojiLanguage {
    emojiLanguage: PredicateEmojiLanguage
}

export interface Folder {
    folder: PredicateFolder
}

export interface InputFolderPeer {
    inputFolderPeer: PredicateInputFolderPeer
}

export interface FolderPeer {
    folderPeer: PredicateFolderPeer
}

export interface MessagesSearchCounter {
    messagesSearchCounter: PredicateMessagesSearchCounter
}

export interface UrlAuthResult {
    urlAuthResultRequest?: PredicateUrlAuthResultRequest
    urlAuthResultAccepted?: PredicateUrlAuthResultAccepted
    urlAuthResultDefault?: PredicateUrlAuthResultDefault
}

export interface ChannelLocation {
    channelLocationEmpty?: PredicateChannelLocationEmpty
    channelLocation?: PredicateChannelLocation
}

export interface PeerLocated {
    peerLocated?: PredicatePeerLocated
    peerSelfLocated?: PredicatePeerSelfLocated
}

export interface RestrictionReason {
    restrictionReason: PredicateRestrictionReason
}

export interface InputTheme {
    inputTheme?: PredicateInputTheme
    inputThemeSlug?: PredicateInputThemeSlug
}

export interface Theme {
    theme: PredicateTheme
}

export interface AccountThemes {
    accountThemesNotModified?: PredicateAccountThemesNotModified
    accountThemes?: PredicateAccountThemes
}

export interface AuthLoginToken {
    authLoginToken?: PredicateAuthLoginToken
    authLoginTokenMigrateTo?: PredicateAuthLoginTokenMigrateTo
    authLoginTokenSuccess?: PredicateAuthLoginTokenSuccess
}

export interface AccountContentSettings {
    accountContentSettings: PredicateAccountContentSettings
}

export interface MessagesInactiveChats {
    messagesInactiveChats: PredicateMessagesInactiveChats
}

export interface BaseTheme {
    baseThemeClassic?: PredicateBaseThemeClassic
    baseThemeDay?: PredicateBaseThemeDay
    baseThemeNight?: PredicateBaseThemeNight
    baseThemeTinted?: PredicateBaseThemeTinted
    baseThemeArctic?: PredicateBaseThemeArctic
}

export interface InputThemeSettings {
    inputThemeSettings: PredicateInputThemeSettings
}

export interface ThemeSettings {
    themeSettings: PredicateThemeSettings
}

export interface WebPageAttribute {
    webPageAttributeTheme: PredicateWebPageAttributeTheme
}

export interface MessageUserVote {
    messageUserVote?: PredicateMessageUserVote
    messageUserVoteInputOption?: PredicateMessageUserVoteInputOption
    messageUserVoteMultiple?: PredicateMessageUserVoteMultiple
}

export interface MessagesVotesList {
    messagesVotesList: PredicateMessagesVotesList
}

export interface BankCardOpenUrl {
    bankCardOpenUrl: PredicateBankCardOpenUrl
}

export interface PaymentsBankCardData {
    paymentsBankCardData: PredicatePaymentsBankCardData
}

export interface DialogFilter {
    dialogFilter: PredicateDialogFilter
}

export interface DialogFilterSuggested {
    dialogFilterSuggested: PredicateDialogFilterSuggested
}

export interface StatsDateRangeDays {
    statsDateRangeDays: PredicateStatsDateRangeDays
}

export interface StatsAbsValueAndPrev {
    statsAbsValueAndPrev: PredicateStatsAbsValueAndPrev
}

export interface StatsPercentValue {
    statsPercentValue: PredicateStatsPercentValue
}

export interface StatsGraph {
    statsGraphAsync?: PredicateStatsGraphAsync
    statsGraphError?: PredicateStatsGraphError
    statsGraph?: PredicateStatsGraph
}

export interface MessageInteractionCounters {
    messageInteractionCounters: PredicateMessageInteractionCounters
}

export interface StatsBroadcastStats {
    statsBroadcastStats: PredicateStatsBroadcastStats
}

export interface HelpPromoData {
    helpPromoDataEmpty?: PredicateHelpPromoDataEmpty
    helpPromoData?: PredicateHelpPromoData
}

export interface VideoSize {
    videoSize: PredicateVideoSize
}

export interface StatsGroupTopPoster {
    statsGroupTopPoster: PredicateStatsGroupTopPoster
}

export interface StatsGroupTopAdmin {
    statsGroupTopAdmin: PredicateStatsGroupTopAdmin
}

export interface StatsGroupTopInviter {
    statsGroupTopInviter: PredicateStatsGroupTopInviter
}

export interface StatsMegagroupStats {
    statsMegagroupStats: PredicateStatsMegagroupStats
}

export interface GlobalPrivacySettings {
    globalPrivacySettings: PredicateGlobalPrivacySettings
}

export interface HelpCountryCode {
    helpCountryCode: PredicateHelpCountryCode
}

export interface HelpCountry {
    helpCountry: PredicateHelpCountry
}

export interface HelpCountriesList {
    helpCountriesListNotModified?: PredicateHelpCountriesListNotModified
    helpCountriesList?: PredicateHelpCountriesList
}

export interface MessageViews {
    messageViews: PredicateMessageViews
}

export interface MessagesMessageViews {
    messagesMessageViews: PredicateMessagesMessageViews
}

export interface MessagesDiscussionMessage {
    messagesDiscussionMessage: PredicateMessagesDiscussionMessage
}

export interface MessageReplyHeader {
    messageReplyHeader: PredicateMessageReplyHeader
}

export interface MessageReplies {
    messageReplies: PredicateMessageReplies
}

export interface PeerBlocked {
    peerBlocked: PredicatePeerBlocked
}

export interface StatsMessageStats {
    statsMessageStats: PredicateStatsMessageStats
}

export interface GroupCall {
    groupCallDiscarded?: PredicateGroupCallDiscarded
    groupCall?: PredicateGroupCall
}

export interface InputGroupCall {
    inputGroupCall: PredicateInputGroupCall
}

export interface GroupCallParticipant {
    groupCallParticipant: PredicateGroupCallParticipant
}

export interface PhoneGroupCall {
    phoneGroupCall: PredicatePhoneGroupCall
}

export interface PhoneGroupParticipants {
    phoneGroupParticipants: PredicatePhoneGroupParticipants
}

export interface InlineQueryPeerType {
    inlineQueryPeerTypeSameBotPM?: PredicateInlineQueryPeerTypeSameBotPM
    inlineQueryPeerTypePM?: PredicateInlineQueryPeerTypePM
    inlineQueryPeerTypeChat?: PredicateInlineQueryPeerTypeChat
    inlineQueryPeerTypeMegagroup?: PredicateInlineQueryPeerTypeMegagroup
    inlineQueryPeerTypeBroadcast?: PredicateInlineQueryPeerTypeBroadcast
}

export interface MessagesHistoryImport {
    messagesHistoryImport: PredicateMessagesHistoryImport
}

export interface MessagesHistoryImportParsed {
    messagesHistoryImportParsed: PredicateMessagesHistoryImportParsed
}

export interface MessagesAffectedFoundMessages {
    messagesAffectedFoundMessages: PredicateMessagesAffectedFoundMessages
}

export interface ChatInviteImporter {
    chatInviteImporter: PredicateChatInviteImporter
}

export interface MessagesExportedChatInvites {
    messagesExportedChatInvites: PredicateMessagesExportedChatInvites
}

export interface MessagesExportedChatInvite {
    messagesExportedChatInvite?: PredicateMessagesExportedChatInvite
    messagesExportedChatInviteReplaced?: PredicateMessagesExportedChatInviteReplaced
}

export interface MessagesChatInviteImporters {
    messagesChatInviteImporters: PredicateMessagesChatInviteImporters
}

export interface ChatAdminWithInvites {
    chatAdminWithInvites: PredicateChatAdminWithInvites
}

export interface MessagesChatAdminsWithInvites {
    messagesChatAdminsWithInvites: PredicateMessagesChatAdminsWithInvites
}

export interface MessagesCheckedHistoryImportPeer {
    messagesCheckedHistoryImportPeer: PredicateMessagesCheckedHistoryImportPeer
}

export interface PhoneJoinAsPeers {
    phoneJoinAsPeers: PredicatePhoneJoinAsPeers
}

export interface PhoneExportedGroupCallInvite {
    phoneExportedGroupCallInvite: PredicatePhoneExportedGroupCallInvite
}

export interface GroupCallParticipantVideoSourceGroup {
    groupCallParticipantVideoSourceGroup: PredicateGroupCallParticipantVideoSourceGroup
}

export interface GroupCallParticipantVideo {
    groupCallParticipantVideo: PredicateGroupCallParticipantVideo
}

export interface StickersSuggestedShortName {
    stickersSuggestedShortName: PredicateStickersSuggestedShortName
}

export interface BotCommandScope {
    botCommandScopeDefault?: PredicateBotCommandScopeDefault
    botCommandScopeUsers?: PredicateBotCommandScopeUsers
    botCommandScopeChats?: PredicateBotCommandScopeChats
    botCommandScopeChatAdmins?: PredicateBotCommandScopeChatAdmins
    botCommandScopePeer?: PredicateBotCommandScopePeer
    botCommandScopePeerAdmins?: PredicateBotCommandScopePeerAdmins
    botCommandScopePeerUser?: PredicateBotCommandScopePeerUser
}

export interface AccountResetPasswordResult {
    accountResetPasswordFailedWait?: PredicateAccountResetPasswordFailedWait
    accountResetPasswordRequestedWait?: PredicateAccountResetPasswordRequestedWait
    accountResetPasswordOk?: PredicateAccountResetPasswordOk
}

export interface SponsoredMessage {
    sponsoredMessage: PredicateSponsoredMessage
}

export interface MessagesSponsoredMessages {
    messagesSponsoredMessages: PredicateMessagesSponsoredMessages
}

export interface SearchResultsCalendarPeriod {
    searchResultsCalendarPeriod: PredicateSearchResultsCalendarPeriod
}

export interface MessagesSearchResultsCalendar {
    messagesSearchResultsCalendar: PredicateMessagesSearchResultsCalendar
}

export interface SearchResultsPosition {
    searchResultPosition: PredicateSearchResultPosition
}

export interface MessagesSearchResultsPositions {
    messagesSearchResultsPositions: PredicateMessagesSearchResultsPositions
}

export interface ChannelsSendAsPeers {
    channelsSendAsPeers: PredicateChannelsSendAsPeers
}

export interface UsersUserFull {
    usersUserFull: PredicateUsersUserFull
}

export interface MessagesPeerSettings {
    messagesPeerSettings: PredicateMessagesPeerSettings
}

export interface AuthLoggedOut {
    authLoggedOut: PredicateAuthLoggedOut
}

export interface ReactionCount {
    reactionCount: PredicateReactionCount
}

export interface MessageReactions {
    messageReactions: PredicateMessageReactions
}

export interface MessagesMessageReactionsList {
    messagesMessageReactionsList: PredicateMessagesMessageReactionsList
}

export interface AvailableReaction {
    availableReaction: PredicateAvailableReaction
}

export interface MessagesAvailableReactions {
    messagesAvailableReactionsNotModified?: PredicateMessagesAvailableReactionsNotModified
    messagesAvailableReactions?: PredicateMessagesAvailableReactions
}

export interface MessagesTranslatedText {
    messagesTranslateNoResult?: PredicateMessagesTranslateNoResult
    messagesTranslateResultText?: PredicateMessagesTranslateResultText
}

export interface MessagePeerReaction {
    messagePeerReaction: PredicateMessagePeerReaction
}

export interface GroupCallStreamChannel {
    groupCallStreamChannel: PredicateGroupCallStreamChannel
}

export interface PhoneGroupCallStreamChannels {
    phoneGroupCallStreamChannels: PredicatePhoneGroupCallStreamChannels
}

export interface PhoneGroupCallStreamRtmpUrl {
    phoneGroupCallStreamRtmpUrl: PredicatePhoneGroupCallStreamRtmpUrl
}

export interface TgUserApiRequestResponseSuccess<Data = any> {
    success: true
    data: Data
    error: undefined
}

export interface TgUserApiRequestResponseError {
    success: false
    data: undefined
    error: any
}

export type TgUserApiRequestResponse<Data = any> = TgUserApiRequestResponseSuccess<Data> | TgUserApiRequestResponseError;

export interface TgUserApiRequest {
    (method: string, params: any, ...args: any[]): Promise<any>
}

export interface TgUserApiDependencies {
    request: TgUserApiRequest
}

export const tgUserApiRequest = (dependencies: TgUserApiDependencies) => async <Data = any>(method: string, params: any, ...args: any[]): Promise<TgUserApiRequestResponse<Data>> => dependencies.request(method, params, ...args)
    .then((data: any) => ({
        success: true,
        data,
        error: undefined,
    }))
    .catch((e) => {
        e.message = `tgUserApiRequest: ${e.message} ${JSON.stringify(params)}`;

        return {
            success: false,
            data: undefined,
            error: e,
        };
    });

export const invokeAfterMsg = (dependencies: TgUserApiDependencies) => async (params: {
    msg_id?: string
    query?: any
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<any>('invokeAfterMsg', params, ...args);

export const invokeAfterMsgs = (dependencies: TgUserApiDependencies) => async (params: {
    msg_ids?: string[]
    query?: any
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<any>('invokeAfterMsgs', params, ...args);

export const authSendCode = (dependencies: TgUserApiDependencies) => async (params: {
    phone_number?: string
    api_id?: number
    api_hash?: string
    settings?: CodeSettings
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AuthSentCode>('auth.sendCode', params, ...args);

export const authSignUp = (dependencies: TgUserApiDependencies) => async (params: {
    phone_number?: string
    phone_code_hash?: string
    first_name?: string
    last_name?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AuthAuthorization>('auth.signUp', params, ...args);

export const authSignIn = (dependencies: TgUserApiDependencies) => async (params: {
    phone_number?: string
    phone_code_hash?: string
    phone_code?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AuthAuthorization>('auth.signIn', params, ...args);

export const authLogOut = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AuthLoggedOut>('auth.logOut', params, ...args);

export const authResetAuthorizations = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('auth.resetAuthorizations', params, ...args);

export const authExportAuthorization = (dependencies: TgUserApiDependencies) => async (params: {
    dc_id?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AuthExportedAuthorization>('auth.exportAuthorization', params, ...args);

export const authImportAuthorization = (dependencies: TgUserApiDependencies) => async (params: {
    id?: string
    bytes?: Uint8Array
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AuthAuthorization>('auth.importAuthorization', params, ...args);

export const authBindTempAuthKey = (dependencies: TgUserApiDependencies) => async (params: {
    perm_auth_key_id?: string
    nonce?: string
    expires_at?: number
    encrypted_message?: Uint8Array
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('auth.bindTempAuthKey', params, ...args);

export const accountRegisterDevice = (dependencies: TgUserApiDependencies) => async (params: {
    no_muted?: true
    token_type?: number
    token?: string
    app_sandbox?: boolean
    secret?: Uint8Array
    other_uids?: string[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.registerDevice', params, ...args);

export const accountUnregisterDevice = (dependencies: TgUserApiDependencies) => async (params: {
    token_type?: number
    token?: string
    other_uids?: string[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.unregisterDevice', params, ...args);

export const accountUpdateNotifySettings = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputNotifyPeer
    settings?: InputPeerNotifySettings
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.updateNotifySettings', params, ...args);

export const accountGetNotifySettings = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputNotifyPeer
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<PeerNotifySettings>('account.getNotifySettings', params, ...args);

export const accountResetNotifySettings = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.resetNotifySettings', params, ...args);

export const accountUpdateProfile = (dependencies: TgUserApiDependencies) => async (params: {
    first_name?: string
    last_name?: string
    about?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<User>('account.updateProfile', params, ...args);

export const accountUpdateStatus = (dependencies: TgUserApiDependencies) => async (params: {
    offline?: boolean
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.updateStatus', params, ...args);

export const accountGetWallPapers = (dependencies: TgUserApiDependencies) => async (params: {
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AccountWallPapers>('account.getWallPapers', params, ...args);

export const accountReportPeer = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    reason?: ReportReason
    message?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.reportPeer', params, ...args);

export const usersGetUsers = (dependencies: TgUserApiDependencies) => async (params: {
    id?: InputUser[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<User[]>('users.getUsers', params, ...args);

export const usersGetFullUser = (dependencies: TgUserApiDependencies) => async (params: {
    id?: InputUser
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<UsersUserFull>('users.getFullUser', params, ...args);

export const contactsGetContactIDs = (dependencies: TgUserApiDependencies) => async (params: {
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<number[]>('contacts.getContactIDs', params, ...args);

export const contactsGetStatuses = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<ContactStatus[]>('contacts.getStatuses', params, ...args);

export const contactsGetContacts = (dependencies: TgUserApiDependencies) => async (params: {
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<ContactsContacts>('contacts.getContacts', params, ...args);

export const contactsImportContacts = (dependencies: TgUserApiDependencies) => async (params: {
    contacts?: InputContact[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<ContactsImportedContacts>('contacts.importContacts', params, ...args);

export const contactsDeleteContacts = (dependencies: TgUserApiDependencies) => async (params: {
    id?: InputUser[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('contacts.deleteContacts', params, ...args);

export const contactsDeleteByPhones = (dependencies: TgUserApiDependencies) => async (params: {
    phones?: string[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('contacts.deleteByPhones', params, ...args);

export const contactsBlock = (dependencies: TgUserApiDependencies) => async (params: {
    id?: InputPeer
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('contacts.block', params, ...args);

export const contactsUnblock = (dependencies: TgUserApiDependencies) => async (params: {
    id?: InputPeer
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('contacts.unblock', params, ...args);

export const contactsGetBlocked = (dependencies: TgUserApiDependencies) => async (params: {
    offset?: number
    limit?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<ContactsBlocked>('contacts.getBlocked', params, ...args);

export const messagesGetMessages = (dependencies: TgUserApiDependencies) => async (params: {
    id?: InputMessage[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesMessages>('messages.getMessages', params, ...args);

export const messagesGetDialogs = (dependencies: TgUserApiDependencies) => async (params: {
    exclude_pinned?: true
    folder_id?: number
    offset_date?: number
    offset_id?: number
    offset_peer?: InputPeer
    limit?: number
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesDialogs>('messages.getDialogs', params, ...args);

export const messagesGetHistory = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    offset_id?: number
    offset_date?: number
    add_offset?: number
    limit?: number
    max_id?: number
    min_id?: number
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesMessages>('messages.getHistory', params, ...args);

export const messagesSearch = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    q?: string
    from_id?: InputPeer
    top_msg_id?: number
    filter?: MessagesFilter
    min_date?: number
    max_date?: number
    offset_id?: number
    add_offset?: number
    limit?: number
    max_id?: number
    min_id?: number
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesMessages>('messages.search', params, ...args);

export const messagesReadHistory = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    max_id?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesAffectedMessages>('messages.readHistory', params, ...args);

export const messagesDeleteHistory = (dependencies: TgUserApiDependencies) => async (params: {
    just_clear?: true
    revoke?: true
    peer?: InputPeer
    max_id?: number
    min_date?: number
    max_date?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesAffectedHistory>('messages.deleteHistory', params, ...args);

export const messagesDeleteMessages = (dependencies: TgUserApiDependencies) => async (params: {
    revoke?: true
    id?: number[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesAffectedMessages>('messages.deleteMessages', params, ...args);

export const messagesReceivedMessages = (dependencies: TgUserApiDependencies) => async (params: {
    max_id?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<ReceivedNotifyMessage[]>('messages.receivedMessages', params, ...args);

export const messagesSetTyping = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    top_msg_id?: number
    action?: SendMessageAction
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.setTyping', params, ...args);

export const messagesSendMessage = (dependencies: TgUserApiDependencies) => async (params: {
    no_webpage?: true
    silent?: true
    background?: true
    clear_draft?: true
    noforwards?: true
    peer?: InputPeer
    reply_to_msg_id?: number
    message?: string
    random_id?: string
    reply_markup?: ReplyMarkup
    entities?: MessageEntity[]
    schedule_date?: number
    send_as?: InputPeer
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.sendMessage', params, ...args);

export const messagesSendMedia = (dependencies: TgUserApiDependencies) => async (params: {
    silent?: true
    background?: true
    clear_draft?: true
    noforwards?: true
    peer?: InputPeer
    reply_to_msg_id?: number
    media?: InputMedia
    message?: string
    random_id?: string
    reply_markup?: ReplyMarkup
    entities?: MessageEntity[]
    schedule_date?: number
    send_as?: InputPeer
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.sendMedia', params, ...args);

export const messagesForwardMessages = (dependencies: TgUserApiDependencies) => async (params: {
    silent?: true
    background?: true
    with_my_score?: true
    drop_author?: true
    drop_media_captions?: true
    noforwards?: true
    from_peer?: InputPeer
    id?: number[]
    random_id?: string[]
    to_peer?: InputPeer
    schedule_date?: number
    send_as?: InputPeer
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.forwardMessages', params, ...args);

export const messagesReportSpam = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.reportSpam', params, ...args);

export const messagesGetPeerSettings = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesPeerSettings>('messages.getPeerSettings', params, ...args);

export const messagesReport = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    id?: number[]
    reason?: ReportReason
    message?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.report', params, ...args);

export const messagesGetChats = (dependencies: TgUserApiDependencies) => async (params: {
    id?: string[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesChats>('messages.getChats', params, ...args);

export const messagesGetFullChat = (dependencies: TgUserApiDependencies) => async (params: {
    chat_id?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesChatFull>('messages.getFullChat', params, ...args);

export const messagesEditChatTitle = (dependencies: TgUserApiDependencies) => async (params: {
    chat_id?: string
    title?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.editChatTitle', params, ...args);

export const messagesEditChatPhoto = (dependencies: TgUserApiDependencies) => async (params: {
    chat_id?: string
    photo?: InputChatPhoto
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.editChatPhoto', params, ...args);

export const messagesAddChatUser = (dependencies: TgUserApiDependencies) => async (params: {
    chat_id?: string
    user_id?: InputUser
    fwd_limit?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.addChatUser', params, ...args);

export const messagesDeleteChatUser = (dependencies: TgUserApiDependencies) => async (params: {
    revoke_history?: true
    chat_id?: string
    user_id?: InputUser
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.deleteChatUser', params, ...args);

export const messagesCreateChat = (dependencies: TgUserApiDependencies) => async (params: {
    users?: InputUser[]
    title?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.createChat', params, ...args);

export const updatesGetState = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<UpdatesState>('updates.getState', params, ...args);

export const updatesGetDifference = (dependencies: TgUserApiDependencies) => async (params: {
    pts?: number
    pts_total_limit?: number
    date?: number
    qts?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<UpdatesDifference>('updates.getDifference', params, ...args);

export const photosUpdateProfilePhoto = (dependencies: TgUserApiDependencies) => async (params: {
    id?: InputPhoto
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<PhotosPhoto>('photos.updateProfilePhoto', params, ...args);

export const photosUploadProfilePhoto = (dependencies: TgUserApiDependencies) => async (params: {
    file?: InputFile
    video?: InputFile
    video_start_ts?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<PhotosPhoto>('photos.uploadProfilePhoto', params, ...args);

export const photosDeletePhotos = (dependencies: TgUserApiDependencies) => async (params: {
    id?: InputPhoto[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<string[]>('photos.deletePhotos', params, ...args);

export const uploadSaveFilePart = (dependencies: TgUserApiDependencies) => async (params: {
    file_id?: string
    file_part?: number
    bytes?: Uint8Array
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('upload.saveFilePart', params, ...args);

export const uploadGetFile = (dependencies: TgUserApiDependencies) => async (params: {
    precise?: true
    cdn_supported?: true
    location?: InputFileLocation
    offset?: number
    limit?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<UploadFile>('upload.getFile', params, ...args);

export const helpGetConfig = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Config>('help.getConfig', params, ...args);

export const helpGetNearestDc = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<NearestDc>('help.getNearestDc', params, ...args);

export const helpGetAppUpdate = (dependencies: TgUserApiDependencies) => async (params: {
    source?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<HelpAppUpdate>('help.getAppUpdate', params, ...args);

export const helpGetInviteText = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<HelpInviteText>('help.getInviteText', params, ...args);

export const photosGetUserPhotos = (dependencies: TgUserApiDependencies) => async (params: {
    user_id?: InputUser
    offset?: number
    max_id?: string
    limit?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<PhotosPhotos>('photos.getUserPhotos', params, ...args);

export const messagesGetDhConfig = (dependencies: TgUserApiDependencies) => async (params: {
    version?: number
    random_length?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesDhConfig>('messages.getDhConfig', params, ...args);

export const messagesRequestEncryption = (dependencies: TgUserApiDependencies) => async (params: {
    user_id?: InputUser
    random_id?: number
    g_a?: Uint8Array
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<EncryptedChat>('messages.requestEncryption', params, ...args);

export const messagesAcceptEncryption = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputEncryptedChat
    g_b?: Uint8Array
    key_fingerprint?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<EncryptedChat>('messages.acceptEncryption', params, ...args);

export const messagesDiscardEncryption = (dependencies: TgUserApiDependencies) => async (params: {
    delete_history?: true
    chat_id?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.discardEncryption', params, ...args);

export const messagesSetEncryptedTyping = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputEncryptedChat
    typing?: boolean
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.setEncryptedTyping', params, ...args);

export const messagesReadEncryptedHistory = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputEncryptedChat
    max_date?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.readEncryptedHistory', params, ...args);

export const messagesSendEncrypted = (dependencies: TgUserApiDependencies) => async (params: {
    silent?: true
    peer?: InputEncryptedChat
    random_id?: string
    data?: Uint8Array
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesSentEncryptedMessage>('messages.sendEncrypted', params, ...args);

export const messagesSendEncryptedFile = (dependencies: TgUserApiDependencies) => async (params: {
    silent?: true
    peer?: InputEncryptedChat
    random_id?: string
    data?: Uint8Array
    file?: InputEncryptedFile
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesSentEncryptedMessage>('messages.sendEncryptedFile', params, ...args);

export const messagesSendEncryptedService = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputEncryptedChat
    random_id?: string
    data?: Uint8Array
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesSentEncryptedMessage>('messages.sendEncryptedService', params, ...args);

export const messagesReceivedQueue = (dependencies: TgUserApiDependencies) => async (params: {
    max_qts?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<string[]>('messages.receivedQueue', params, ...args);

export const messagesReportEncryptedSpam = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputEncryptedChat
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.reportEncryptedSpam', params, ...args);

export const uploadSaveBigFilePart = (dependencies: TgUserApiDependencies) => async (params: {
    file_id?: string
    file_part?: number
    file_total_parts?: number
    bytes?: Uint8Array
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('upload.saveBigFilePart', params, ...args);

export const initConnection = (dependencies: TgUserApiDependencies) => async (params: {
    api_id?: number
    device_model?: string
    system_version?: string
    app_version?: string
    system_lang_code?: string
    lang_pack?: string
    lang_code?: string
    proxy?: InputClientProxy
    params?: JSONValue
    query?: any
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<any>('initConnection', params, ...args);

export const helpGetSupport = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<HelpSupport>('help.getSupport', params, ...args);

export const messagesReadMessageContents = (dependencies: TgUserApiDependencies) => async (params: {
    id?: number[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesAffectedMessages>('messages.readMessageContents', params, ...args);

export const accountCheckUsername = (dependencies: TgUserApiDependencies) => async (params: {
    username?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.checkUsername', params, ...args);

export const accountUpdateUsername = (dependencies: TgUserApiDependencies) => async (params: {
    username?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<User>('account.updateUsername', params, ...args);

export const contactsSearch = (dependencies: TgUserApiDependencies) => async (params: {
    q?: string
    limit?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<ContactsFound>('contacts.search', params, ...args);

export const accountGetPrivacy = (dependencies: TgUserApiDependencies) => async (params: {
    key?: InputPrivacyKey
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AccountPrivacyRules>('account.getPrivacy', params, ...args);

export const accountSetPrivacy = (dependencies: TgUserApiDependencies) => async (params: {
    key?: InputPrivacyKey
    rules?: InputPrivacyRule[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AccountPrivacyRules>('account.setPrivacy', params, ...args);

export const accountDeleteAccount = (dependencies: TgUserApiDependencies) => async (params: {
    reason?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.deleteAccount', params, ...args);

export const accountGetAccountTTL = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AccountDaysTTL>('account.getAccountTTL', params, ...args);

export const accountSetAccountTTL = (dependencies: TgUserApiDependencies) => async (params: {
    ttl?: AccountDaysTTL
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.setAccountTTL', params, ...args);

export const invokeWithLayer = (dependencies: TgUserApiDependencies) => async (params: {
    layer?: number
    query?: any
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<any>('invokeWithLayer', params, ...args);

export const contactsResolveUsername = (dependencies: TgUserApiDependencies) => async (params: {
    username?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<ContactsResolvedPeer>('contacts.resolveUsername', params, ...args);

export const accountSendChangePhoneCode = (dependencies: TgUserApiDependencies) => async (params: {
    phone_number?: string
    settings?: CodeSettings
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AuthSentCode>('account.sendChangePhoneCode', params, ...args);

export const accountChangePhone = (dependencies: TgUserApiDependencies) => async (params: {
    phone_number?: string
    phone_code_hash?: string
    phone_code?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<User>('account.changePhone', params, ...args);

export const messagesGetStickers = (dependencies: TgUserApiDependencies) => async (params: {
    emoticon?: string
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesStickers>('messages.getStickers', params, ...args);

export const messagesGetAllStickers = (dependencies: TgUserApiDependencies) => async (params: {
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesAllStickers>('messages.getAllStickers', params, ...args);

export const accountUpdateDeviceLocked = (dependencies: TgUserApiDependencies) => async (params: {
    period?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.updateDeviceLocked', params, ...args);

export const authImportBotAuthorization = (dependencies: TgUserApiDependencies) => async (params: {
    flags?: number
    api_id?: number
    api_hash?: string
    bot_auth_token?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AuthAuthorization>('auth.importBotAuthorization', params, ...args);

export const messagesGetWebPagePreview = (dependencies: TgUserApiDependencies) => async (params: {
    message?: string
    entities?: MessageEntity[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessageMedia>('messages.getWebPagePreview', params, ...args);

export const accountGetAuthorizations = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AccountAuthorizations>('account.getAuthorizations', params, ...args);

export const accountResetAuthorization = (dependencies: TgUserApiDependencies) => async (params: {
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.resetAuthorization', params, ...args);

export const accountGetPassword = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AccountPassword>('account.getPassword', params, ...args);

export const accountGetPasswordSettings = (dependencies: TgUserApiDependencies) => async (params: {
    password?: InputCheckPasswordSRP
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AccountPasswordSettings>('account.getPasswordSettings', params, ...args);

export const accountUpdatePasswordSettings = (dependencies: TgUserApiDependencies) => async (params: {
    password?: InputCheckPasswordSRP
    new_settings?: AccountPasswordInputSettings
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.updatePasswordSettings', params, ...args);

export const authCheckPassword = (dependencies: TgUserApiDependencies) => async (params: {
    password?: InputCheckPasswordSRP
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AuthAuthorization>('auth.checkPassword', params, ...args);

export const authRequestPasswordRecovery = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AuthPasswordRecovery>('auth.requestPasswordRecovery', params, ...args);

export const authRecoverPassword = (dependencies: TgUserApiDependencies) => async (params: {
    code?: string
    new_settings?: AccountPasswordInputSettings
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AuthAuthorization>('auth.recoverPassword', params, ...args);

export const invokeWithoutUpdates = (dependencies: TgUserApiDependencies) => async (params: {
    query?: any
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<any>('invokeWithoutUpdates', params, ...args);

export const messagesExportChatInvite = (dependencies: TgUserApiDependencies) => async (params: {
    legacy_revoke_permanent?: true
    request_needed?: true
    peer?: InputPeer
    expire_date?: number
    usage_limit?: number
    title?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<ExportedChatInvite>('messages.exportChatInvite', params, ...args);

export const messagesCheckChatInvite = (dependencies: TgUserApiDependencies) => async (params: {
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<ChatInvite>('messages.checkChatInvite', params, ...args);

export const messagesImportChatInvite = (dependencies: TgUserApiDependencies) => async (params: {
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.importChatInvite', params, ...args);

export const messagesGetStickerSet = (dependencies: TgUserApiDependencies) => async (params: {
    stickerset?: InputStickerSet
    hash?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesStickerSet>('messages.getStickerSet', params, ...args);

export const messagesInstallStickerSet = (dependencies: TgUserApiDependencies) => async (params: {
    stickerset?: InputStickerSet
    archived?: boolean
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesStickerSetInstallResult>('messages.installStickerSet', params, ...args);

export const messagesUninstallStickerSet = (dependencies: TgUserApiDependencies) => async (params: {
    stickerset?: InputStickerSet
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.uninstallStickerSet', params, ...args);

export const messagesStartBot = (dependencies: TgUserApiDependencies) => async (params: {
    bot?: InputUser
    peer?: InputPeer
    random_id?: string
    start_param?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.startBot', params, ...args);

export const helpGetAppChangelog = (dependencies: TgUserApiDependencies) => async (params: {
    prev_app_version?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('help.getAppChangelog', params, ...args);

export const messagesGetMessagesViews = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    id?: number[]
    increment?: boolean
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesMessageViews>('messages.getMessagesViews', params, ...args);

export const channelsReadHistory = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    max_id?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('channels.readHistory', params, ...args);

export const channelsDeleteMessages = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    id?: number[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesAffectedMessages>('channels.deleteMessages', params, ...args);

export const channelsReportSpam = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    participant?: InputPeer
    id?: number[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('channels.reportSpam', params, ...args);

export const channelsGetMessages = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    id?: InputMessage[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesMessages>('channels.getMessages', params, ...args);

export const channelsGetParticipants = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    filter?: ChannelParticipantsFilter
    offset?: number
    limit?: number
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<ChannelsChannelParticipants>('channels.getParticipants', params, ...args);

export const channelsGetParticipant = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    participant?: InputPeer
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<ChannelsChannelParticipant>('channels.getParticipant', params, ...args);

export const channelsGetChannels = (dependencies: TgUserApiDependencies) => async (params: {
    id?: InputChannel[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesChats>('channels.getChannels', params, ...args);

export const channelsGetFullChannel = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesChatFull>('channels.getFullChannel', params, ...args);

export const channelsCreateChannel = (dependencies: TgUserApiDependencies) => async (params: {
    broadcast?: true
    megagroup?: true
    for_import?: true
    title?: string
    about?: string
    geo_point?: InputGeoPoint
    address?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('channels.createChannel', params, ...args);

export const channelsEditAdmin = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    user_id?: InputUser
    admin_rights?: ChatAdminRights
    rank?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('channels.editAdmin', params, ...args);

export const channelsEditTitle = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    title?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('channels.editTitle', params, ...args);

export const channelsEditPhoto = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    photo?: InputChatPhoto
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('channels.editPhoto', params, ...args);

export const channelsCheckUsername = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    username?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('channels.checkUsername', params, ...args);

export const channelsUpdateUsername = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    username?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('channels.updateUsername', params, ...args);

export const channelsJoinChannel = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('channels.joinChannel', params, ...args);

export const channelsLeaveChannel = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('channels.leaveChannel', params, ...args);

export const channelsInviteToChannel = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    users?: InputUser[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('channels.inviteToChannel', params, ...args);

export const channelsDeleteChannel = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('channels.deleteChannel', params, ...args);

export const updatesGetChannelDifference = (dependencies: TgUserApiDependencies) => async (params: {
    force?: true
    channel?: InputChannel
    filter?: ChannelMessagesFilter
    pts?: number
    limit?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<UpdatesChannelDifference>('updates.getChannelDifference', params, ...args);

export const messagesEditChatAdmin = (dependencies: TgUserApiDependencies) => async (params: {
    chat_id?: string
    user_id?: InputUser
    is_admin?: boolean
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.editChatAdmin', params, ...args);

export const messagesMigrateChat = (dependencies: TgUserApiDependencies) => async (params: {
    chat_id?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.migrateChat', params, ...args);

export const messagesSearchGlobal = (dependencies: TgUserApiDependencies) => async (params: {
    folder_id?: number
    q?: string
    filter?: MessagesFilter
    min_date?: number
    max_date?: number
    offset_rate?: number
    offset_peer?: InputPeer
    offset_id?: number
    limit?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesMessages>('messages.searchGlobal', params, ...args);

export const messagesReorderStickerSets = (dependencies: TgUserApiDependencies) => async (params: {
    masks?: true
    emojis?: true
    order?: string[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.reorderStickerSets', params, ...args);

export const messagesGetDocumentByHash = (dependencies: TgUserApiDependencies) => async (params: {
    sha256?: Uint8Array
    size?: number
    mime_type?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Document>('messages.getDocumentByHash', params, ...args);

export const messagesGetSavedGifs = (dependencies: TgUserApiDependencies) => async (params: {
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesSavedGifs>('messages.getSavedGifs', params, ...args);

export const messagesSaveGif = (dependencies: TgUserApiDependencies) => async (params: {
    id?: InputDocument
    unsave?: boolean
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.saveGif', params, ...args);

export const messagesGetInlineBotResults = (dependencies: TgUserApiDependencies) => async (params: {
    bot?: InputUser
    peer?: InputPeer
    geo_point?: InputGeoPoint
    query?: string
    offset?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesBotResults>('messages.getInlineBotResults', params, ...args);

export const messagesSetInlineBotResults = (dependencies: TgUserApiDependencies) => async (params: {
    gallery?: true
    private?: true
    query_id?: string
    results?: InputBotInlineResult[]
    cache_time?: number
    next_offset?: string
    switch_pm?: InlineBotSwitchPM
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.setInlineBotResults', params, ...args);

export const messagesSendInlineBotResult = (dependencies: TgUserApiDependencies) => async (params: {
    silent?: true
    background?: true
    clear_draft?: true
    hide_via?: true
    peer?: InputPeer
    reply_to_msg_id?: number
    random_id?: string
    query_id?: string
    id?: string
    schedule_date?: number
    send_as?: InputPeer
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.sendInlineBotResult', params, ...args);

export const channelsExportMessageLink = (dependencies: TgUserApiDependencies) => async (params: {
    grouped?: true
    thread?: true
    channel?: InputChannel
    id?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<ExportedMessageLink>('channels.exportMessageLink', params, ...args);

export const channelsToggleSignatures = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    enabled?: boolean
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('channels.toggleSignatures', params, ...args);

export const authResendCode = (dependencies: TgUserApiDependencies) => async (params: {
    phone_number?: string
    phone_code_hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AuthSentCode>('auth.resendCode', params, ...args);

export const authCancelCode = (dependencies: TgUserApiDependencies) => async (params: {
    phone_number?: string
    phone_code_hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('auth.cancelCode', params, ...args);

export const messagesGetMessageEditData = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    id?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesMessageEditData>('messages.getMessageEditData', params, ...args);

export const messagesEditMessage = (dependencies: TgUserApiDependencies) => async (params: {
    no_webpage?: true
    peer?: InputPeer
    id?: number
    message?: string
    media?: InputMedia
    reply_markup?: ReplyMarkup
    entities?: MessageEntity[]
    schedule_date?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.editMessage', params, ...args);

export const messagesEditInlineBotMessage = (dependencies: TgUserApiDependencies) => async (params: {
    no_webpage?: true
    id?: InputBotInlineMessageID
    message?: string
    media?: InputMedia
    reply_markup?: ReplyMarkup
    entities?: MessageEntity[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.editInlineBotMessage', params, ...args);

export const messagesGetBotCallbackAnswer = (dependencies: TgUserApiDependencies) => async (params: {
    game?: true
    peer?: InputPeer
    msg_id?: number
    data?: Uint8Array
    password?: InputCheckPasswordSRP
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesBotCallbackAnswer>('messages.getBotCallbackAnswer', params, ...args);

export const messagesSetBotCallbackAnswer = (dependencies: TgUserApiDependencies) => async (params: {
    alert?: true
    query_id?: string
    message?: string
    url?: string
    cache_time?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.setBotCallbackAnswer', params, ...args);

export const contactsGetTopPeers = (dependencies: TgUserApiDependencies) => async (params: {
    correspondents?: true
    bots_pm?: true
    bots_inline?: true
    phone_calls?: true
    forward_users?: true
    forward_chats?: true
    groups?: true
    channels?: true
    offset?: number
    limit?: number
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<ContactsTopPeers>('contacts.getTopPeers', params, ...args);

export const contactsResetTopPeerRating = (dependencies: TgUserApiDependencies) => async (params: {
    category?: TopPeerCategory
    peer?: InputPeer
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('contacts.resetTopPeerRating', params, ...args);

export const messagesGetPeerDialogs = (dependencies: TgUserApiDependencies) => async (params: {
    peers?: InputDialogPeer[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesPeerDialogs>('messages.getPeerDialogs', params, ...args);

export const messagesSaveDraft = (dependencies: TgUserApiDependencies) => async (params: {
    no_webpage?: true
    reply_to_msg_id?: number
    peer?: InputPeer
    message?: string
    entities?: MessageEntity[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.saveDraft', params, ...args);

export const messagesGetAllDrafts = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.getAllDrafts', params, ...args);

export const messagesGetFeaturedStickers = (dependencies: TgUserApiDependencies) => async (params: {
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesFeaturedStickers>('messages.getFeaturedStickers', params, ...args);

export const messagesReadFeaturedStickers = (dependencies: TgUserApiDependencies) => async (params: {
    id?: string[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.readFeaturedStickers', params, ...args);

export const messagesGetRecentStickers = (dependencies: TgUserApiDependencies) => async (params: {
    attached?: true
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesRecentStickers>('messages.getRecentStickers', params, ...args);

export const messagesSaveRecentSticker = (dependencies: TgUserApiDependencies) => async (params: {
    attached?: true
    id?: InputDocument
    unsave?: boolean
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.saveRecentSticker', params, ...args);

export const messagesClearRecentStickers = (dependencies: TgUserApiDependencies) => async (params: {
    attached?: true
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.clearRecentStickers', params, ...args);

export const messagesGetArchivedStickers = (dependencies: TgUserApiDependencies) => async (params: {
    masks?: true
    emojis?: true
    offset_id?: string
    limit?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesArchivedStickers>('messages.getArchivedStickers', params, ...args);

export const accountSendConfirmPhoneCode = (dependencies: TgUserApiDependencies) => async (params: {
    hash?: string
    settings?: CodeSettings
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AuthSentCode>('account.sendConfirmPhoneCode', params, ...args);

export const accountConfirmPhone = (dependencies: TgUserApiDependencies) => async (params: {
    phone_code_hash?: string
    phone_code?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.confirmPhone', params, ...args);

export const channelsGetAdminedPublicChannels = (dependencies: TgUserApiDependencies) => async (params: {
    by_location?: true
    check_limit?: true
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesChats>('channels.getAdminedPublicChannels', params, ...args);

export const messagesGetMaskStickers = (dependencies: TgUserApiDependencies) => async (params: {
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesAllStickers>('messages.getMaskStickers', params, ...args);

export const messagesGetAttachedStickers = (dependencies: TgUserApiDependencies) => async (params: {
    media?: InputStickeredMedia
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<StickerSetCovered[]>('messages.getAttachedStickers', params, ...args);

export const authDropTempAuthKeys = (dependencies: TgUserApiDependencies) => async (params: {
    except_auth_keys?: string[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('auth.dropTempAuthKeys', params, ...args);

export const messagesSetGameScore = (dependencies: TgUserApiDependencies) => async (params: {
    edit_message?: true
    force?: true
    peer?: InputPeer
    id?: number
    user_id?: InputUser
    score?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.setGameScore', params, ...args);

export const messagesSetInlineGameScore = (dependencies: TgUserApiDependencies) => async (params: {
    edit_message?: true
    force?: true
    id?: InputBotInlineMessageID
    user_id?: InputUser
    score?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.setInlineGameScore', params, ...args);

export const messagesGetGameHighScores = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    id?: number
    user_id?: InputUser
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesHighScores>('messages.getGameHighScores', params, ...args);

export const messagesGetInlineGameHighScores = (dependencies: TgUserApiDependencies) => async (params: {
    id?: InputBotInlineMessageID
    user_id?: InputUser
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesHighScores>('messages.getInlineGameHighScores', params, ...args);

export const messagesGetCommonChats = (dependencies: TgUserApiDependencies) => async (params: {
    user_id?: InputUser
    max_id?: string
    limit?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesChats>('messages.getCommonChats', params, ...args);

export const messagesGetAllChats = (dependencies: TgUserApiDependencies) => async (params: {
    except_ids?: string[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesChats>('messages.getAllChats', params, ...args);

export const helpSetBotUpdatesStatus = (dependencies: TgUserApiDependencies) => async (params: {
    pending_updates_count?: number
    message?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('help.setBotUpdatesStatus', params, ...args);

export const messagesGetWebPage = (dependencies: TgUserApiDependencies) => async (params: {
    url?: string
    hash?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<WebPage>('messages.getWebPage', params, ...args);

export const messagesToggleDialogPin = (dependencies: TgUserApiDependencies) => async (params: {
    pinned?: true
    peer?: InputDialogPeer
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.toggleDialogPin', params, ...args);

export const messagesReorderPinnedDialogs = (dependencies: TgUserApiDependencies) => async (params: {
    force?: true
    folder_id?: number
    order?: InputDialogPeer[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.reorderPinnedDialogs', params, ...args);

export const messagesGetPinnedDialogs = (dependencies: TgUserApiDependencies) => async (params: {
    folder_id?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesPeerDialogs>('messages.getPinnedDialogs', params, ...args);

export const botsSendCustomRequest = (dependencies: TgUserApiDependencies) => async (params: {
    custom_method?: string
    params?: DataJSON
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<DataJSON>('bots.sendCustomRequest', params, ...args);

export const botsAnswerWebhookJSONQuery = (dependencies: TgUserApiDependencies) => async (params: {
    query_id?: string
    data?: DataJSON
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('bots.answerWebhookJSONQuery', params, ...args);

export const uploadGetWebFile = (dependencies: TgUserApiDependencies) => async (params: {
    location?: InputWebFileLocation
    offset?: number
    limit?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<UploadWebFile>('upload.getWebFile', params, ...args);

export const paymentsGetPaymentForm = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    msg_id?: number
    theme_params?: DataJSON
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<PaymentsPaymentForm>('payments.getPaymentForm', params, ...args);

export const paymentsGetPaymentReceipt = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    msg_id?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<PaymentsPaymentReceipt>('payments.getPaymentReceipt', params, ...args);

export const paymentsValidateRequestedInfo = (dependencies: TgUserApiDependencies) => async (params: {
    save?: true
    peer?: InputPeer
    msg_id?: number
    info?: PaymentRequestedInfo
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<PaymentsValidatedRequestedInfo>('payments.validateRequestedInfo', params, ...args);

export const paymentsSendPaymentForm = (dependencies: TgUserApiDependencies) => async (params: {
    form_id?: string
    peer?: InputPeer
    msg_id?: number
    requested_info_id?: string
    shipping_option_id?: string
    credentials?: InputPaymentCredentials
    tip_amount?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<PaymentsPaymentResult>('payments.sendPaymentForm', params, ...args);

export const accountGetTmpPassword = (dependencies: TgUserApiDependencies) => async (params: {
    password?: InputCheckPasswordSRP
    period?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AccountTmpPassword>('account.getTmpPassword', params, ...args);

export const paymentsGetSavedInfo = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<PaymentsSavedInfo>('payments.getSavedInfo', params, ...args);

export const paymentsClearSavedInfo = (dependencies: TgUserApiDependencies) => async (params: {
    credentials?: true
    info?: true
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('payments.clearSavedInfo', params, ...args);

export const messagesSetBotShippingResults = (dependencies: TgUserApiDependencies) => async (params: {
    query_id?: string
    error?: string
    shipping_options?: ShippingOption[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.setBotShippingResults', params, ...args);

export const messagesSetBotPrecheckoutResults = (dependencies: TgUserApiDependencies) => async (params: {
    success?: true
    query_id?: string
    error?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.setBotPrecheckoutResults', params, ...args);

export const stickersCreateStickerSet = (dependencies: TgUserApiDependencies) => async (params: {
    masks?: true
    animated?: true
    videos?: true
    user_id?: InputUser
    title?: string
    short_name?: string
    thumb?: InputDocument
    stickers?: InputStickerSetItem[]
    software?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesStickerSet>('stickers.createStickerSet', params, ...args);

export const stickersRemoveStickerFromSet = (dependencies: TgUserApiDependencies) => async (params: {
    sticker?: InputDocument
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesStickerSet>('stickers.removeStickerFromSet', params, ...args);

export const stickersChangeStickerPosition = (dependencies: TgUserApiDependencies) => async (params: {
    sticker?: InputDocument
    position?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesStickerSet>('stickers.changeStickerPosition', params, ...args);

export const stickersAddStickerToSet = (dependencies: TgUserApiDependencies) => async (params: {
    stickerset?: InputStickerSet
    sticker?: InputStickerSetItem
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesStickerSet>('stickers.addStickerToSet', params, ...args);

export const messagesUploadMedia = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    media?: InputMedia
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessageMedia>('messages.uploadMedia', params, ...args);

export const phoneGetCallConfig = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<DataJSON>('phone.getCallConfig', params, ...args);

export const phoneRequestCall = (dependencies: TgUserApiDependencies) => async (params: {
    video?: true
    user_id?: InputUser
    random_id?: number
    g_a_hash?: Uint8Array
    protocol?: PhoneCallProtocol
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<PhonePhoneCall>('phone.requestCall', params, ...args);

export const phoneAcceptCall = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPhoneCall
    g_b?: Uint8Array
    protocol?: PhoneCallProtocol
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<PhonePhoneCall>('phone.acceptCall', params, ...args);

export const phoneConfirmCall = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPhoneCall
    g_a?: Uint8Array
    key_fingerprint?: string
    protocol?: PhoneCallProtocol
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<PhonePhoneCall>('phone.confirmCall', params, ...args);

export const phoneReceivedCall = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPhoneCall
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('phone.receivedCall', params, ...args);

export const phoneDiscardCall = (dependencies: TgUserApiDependencies) => async (params: {
    video?: true
    peer?: InputPhoneCall
    duration?: number
    reason?: PhoneCallDiscardReason
    connection_id?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('phone.discardCall', params, ...args);

export const phoneSetCallRating = (dependencies: TgUserApiDependencies) => async (params: {
    user_initiative?: true
    peer?: InputPhoneCall
    rating?: number
    comment?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('phone.setCallRating', params, ...args);

export const phoneSaveCallDebug = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPhoneCall
    debug?: DataJSON
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('phone.saveCallDebug', params, ...args);

export const uploadGetCdnFile = (dependencies: TgUserApiDependencies) => async (params: {
    file_token?: Uint8Array
    offset?: number
    limit?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<UploadCdnFile>('upload.getCdnFile', params, ...args);

export const uploadReuploadCdnFile = (dependencies: TgUserApiDependencies) => async (params: {
    file_token?: Uint8Array
    request_token?: Uint8Array
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<FileHash[]>('upload.reuploadCdnFile', params, ...args);

export const helpGetCdnConfig = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<CdnConfig>('help.getCdnConfig', params, ...args);

export const langpackGetLangPack = (dependencies: TgUserApiDependencies) => async (params: {
    lang_pack?: string
    lang_code?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<LangPackDifference>('langpack.getLangPack', params, ...args);

export const langpackGetStrings = (dependencies: TgUserApiDependencies) => async (params: {
    lang_pack?: string
    lang_code?: string
    keys?: string[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<LangPackString[]>('langpack.getStrings', params, ...args);

export const langpackGetDifference = (dependencies: TgUserApiDependencies) => async (params: {
    lang_pack?: string
    lang_code?: string
    from_version?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<LangPackDifference>('langpack.getDifference', params, ...args);

export const langpackGetLanguages = (dependencies: TgUserApiDependencies) => async (params: {
    lang_pack?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<LangPackLanguage[]>('langpack.getLanguages', params, ...args);

export const channelsEditBanned = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    participant?: InputPeer
    banned_rights?: ChatBannedRights
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('channels.editBanned', params, ...args);

export const channelsGetAdminLog = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    q?: string
    events_filter?: ChannelAdminLogEventsFilter
    admins?: InputUser[]
    max_id?: string
    min_id?: string
    limit?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<ChannelsAdminLogResults>('channels.getAdminLog', params, ...args);

export const uploadGetCdnFileHashes = (dependencies: TgUserApiDependencies) => async (params: {
    file_token?: Uint8Array
    offset?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<FileHash[]>('upload.getCdnFileHashes', params, ...args);

export const messagesSendScreenshotNotification = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    reply_to_msg_id?: number
    random_id?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.sendScreenshotNotification', params, ...args);

export const channelsSetStickers = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    stickerset?: InputStickerSet
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('channels.setStickers', params, ...args);

export const messagesGetFavedStickers = (dependencies: TgUserApiDependencies) => async (params: {
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesFavedStickers>('messages.getFavedStickers', params, ...args);

export const messagesFaveSticker = (dependencies: TgUserApiDependencies) => async (params: {
    id?: InputDocument
    unfave?: boolean
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.faveSticker', params, ...args);

export const channelsReadMessageContents = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    id?: number[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('channels.readMessageContents', params, ...args);

export const contactsResetSaved = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('contacts.resetSaved', params, ...args);

export const messagesGetUnreadMentions = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    offset_id?: number
    add_offset?: number
    limit?: number
    max_id?: number
    min_id?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesMessages>('messages.getUnreadMentions', params, ...args);

export const channelsDeleteHistory = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    max_id?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('channels.deleteHistory', params, ...args);

export const helpGetRecentMeUrls = (dependencies: TgUserApiDependencies) => async (params: {
    referer?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<HelpRecentMeUrls>('help.getRecentMeUrls', params, ...args);

export const channelsTogglePreHistoryHidden = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    enabled?: boolean
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('channels.togglePreHistoryHidden', params, ...args);

export const messagesReadMentions = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesAffectedHistory>('messages.readMentions', params, ...args);

export const messagesGetRecentLocations = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    limit?: number
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesMessages>('messages.getRecentLocations', params, ...args);

export const messagesSendMultiMedia = (dependencies: TgUserApiDependencies) => async (params: {
    silent?: true
    background?: true
    clear_draft?: true
    noforwards?: true
    peer?: InputPeer
    reply_to_msg_id?: number
    multi_media?: InputSingleMedia[]
    schedule_date?: number
    send_as?: InputPeer
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.sendMultiMedia', params, ...args);

export const messagesUploadEncryptedFile = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputEncryptedChat
    file?: InputEncryptedFile
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<EncryptedFile>('messages.uploadEncryptedFile', params, ...args);

export const accountGetWebAuthorizations = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AccountWebAuthorizations>('account.getWebAuthorizations', params, ...args);

export const accountResetWebAuthorization = (dependencies: TgUserApiDependencies) => async (params: {
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.resetWebAuthorization', params, ...args);

export const accountResetWebAuthorizations = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.resetWebAuthorizations', params, ...args);

export const messagesSearchStickerSets = (dependencies: TgUserApiDependencies) => async (params: {
    exclude_featured?: true
    q?: string
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesFoundStickerSets>('messages.searchStickerSets', params, ...args);

export const uploadGetFileHashes = (dependencies: TgUserApiDependencies) => async (params: {
    location?: InputFileLocation
    offset?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<FileHash[]>('upload.getFileHashes', params, ...args);

export const helpGetTermsOfServiceUpdate = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<HelpTermsOfServiceUpdate>('help.getTermsOfServiceUpdate', params, ...args);

export const helpAcceptTermsOfService = (dependencies: TgUserApiDependencies) => async (params: {
    id?: DataJSON
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('help.acceptTermsOfService', params, ...args);

export const accountGetAllSecureValues = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<SecureValue[]>('account.getAllSecureValues', params, ...args);

export const accountGetSecureValue = (dependencies: TgUserApiDependencies) => async (params: {
    types?: SecureValueType[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<SecureValue[]>('account.getSecureValue', params, ...args);

export const accountSaveSecureValue = (dependencies: TgUserApiDependencies) => async (params: {
    value?: InputSecureValue
    secure_secret_id?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<SecureValue>('account.saveSecureValue', params, ...args);

export const accountDeleteSecureValue = (dependencies: TgUserApiDependencies) => async (params: {
    types?: SecureValueType[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.deleteSecureValue', params, ...args);

export const usersSetSecureValueErrors = (dependencies: TgUserApiDependencies) => async (params: {
    id?: InputUser
    errors?: SecureValueError[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('users.setSecureValueErrors', params, ...args);

export const accountGetAuthorizationForm = (dependencies: TgUserApiDependencies) => async (params: {
    bot_id?: string
    scope?: string
    public_key?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AccountAuthorizationForm>('account.getAuthorizationForm', params, ...args);

export const accountAcceptAuthorization = (dependencies: TgUserApiDependencies) => async (params: {
    bot_id?: string
    scope?: string
    public_key?: string
    value_hashes?: SecureValueHash[]
    credentials?: SecureCredentialsEncrypted
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.acceptAuthorization', params, ...args);

export const accountSendVerifyPhoneCode = (dependencies: TgUserApiDependencies) => async (params: {
    phone_number?: string
    settings?: CodeSettings
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AuthSentCode>('account.sendVerifyPhoneCode', params, ...args);

export const accountVerifyPhone = (dependencies: TgUserApiDependencies) => async (params: {
    phone_number?: string
    phone_code_hash?: string
    phone_code?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.verifyPhone', params, ...args);

export const accountSendVerifyEmailCode = (dependencies: TgUserApiDependencies) => async (params: {
    email?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AccountSentEmailCode>('account.sendVerifyEmailCode', params, ...args);

export const accountVerifyEmail = (dependencies: TgUserApiDependencies) => async (params: {
    email?: string
    code?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.verifyEmail', params, ...args);

export const helpGetDeepLinkInfo = (dependencies: TgUserApiDependencies) => async (params: {
    path?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<HelpDeepLinkInfo>('help.getDeepLinkInfo', params, ...args);

export const contactsGetSaved = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<SavedContact[]>('contacts.getSaved', params, ...args);

export const channelsGetLeftChannels = (dependencies: TgUserApiDependencies) => async (params: {
    offset?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesChats>('channels.getLeftChannels', params, ...args);

export const accountInitTakeoutSession = (dependencies: TgUserApiDependencies) => async (params: {
    contacts?: true
    message_users?: true
    message_chats?: true
    message_megagroups?: true
    message_channels?: true
    files?: true
    file_max_size?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AccountTakeout>('account.initTakeoutSession', params, ...args);

export const accountFinishTakeoutSession = (dependencies: TgUserApiDependencies) => async (params: {
    success?: true
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.finishTakeoutSession', params, ...args);

export const messagesGetSplitRanges = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessageRange[]>('messages.getSplitRanges', params, ...args);

export const invokeWithMessagesRange = (dependencies: TgUserApiDependencies) => async (params: {
    range?: MessageRange
    query?: any
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<any>('invokeWithMessagesRange', params, ...args);

export const invokeWithTakeout = (dependencies: TgUserApiDependencies) => async (params: {
    takeout_id?: string
    query?: any
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<any>('invokeWithTakeout', params, ...args);

export const messagesMarkDialogUnread = (dependencies: TgUserApiDependencies) => async (params: {
    unread?: true
    peer?: InputDialogPeer
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.markDialogUnread', params, ...args);

export const messagesGetDialogUnreadMarks = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<DialogPeer[]>('messages.getDialogUnreadMarks', params, ...args);

export const contactsToggleTopPeers = (dependencies: TgUserApiDependencies) => async (params: {
    enabled?: boolean
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('contacts.toggleTopPeers', params, ...args);

export const messagesClearAllDrafts = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.clearAllDrafts', params, ...args);

export const helpGetAppConfig = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<JSONValue>('help.getAppConfig', params, ...args);

export const helpSaveAppLog = (dependencies: TgUserApiDependencies) => async (params: {
    events?: InputAppEvent[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('help.saveAppLog', params, ...args);

export const helpGetPassportConfig = (dependencies: TgUserApiDependencies) => async (params: {
    hash?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<HelpPassportConfig>('help.getPassportConfig', params, ...args);

export const langpackGetLanguage = (dependencies: TgUserApiDependencies) => async (params: {
    lang_pack?: string
    lang_code?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<LangPackLanguage>('langpack.getLanguage', params, ...args);

export const messagesUpdatePinnedMessage = (dependencies: TgUserApiDependencies) => async (params: {
    silent?: true
    unpin?: true
    pm_oneside?: true
    peer?: InputPeer
    id?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.updatePinnedMessage', params, ...args);

export const accountConfirmPasswordEmail = (dependencies: TgUserApiDependencies) => async (params: {
    code?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.confirmPasswordEmail', params, ...args);

export const accountResendPasswordEmail = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.resendPasswordEmail', params, ...args);

export const accountCancelPasswordEmail = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.cancelPasswordEmail', params, ...args);

export const helpGetSupportName = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<HelpSupportName>('help.getSupportName', params, ...args);

export const helpGetUserInfo = (dependencies: TgUserApiDependencies) => async (params: {
    user_id?: InputUser
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<HelpUserInfo>('help.getUserInfo', params, ...args);

export const helpEditUserInfo = (dependencies: TgUserApiDependencies) => async (params: {
    user_id?: InputUser
    message?: string
    entities?: MessageEntity[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<HelpUserInfo>('help.editUserInfo', params, ...args);

export const accountGetContactSignUpNotification = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.getContactSignUpNotification', params, ...args);

export const accountSetContactSignUpNotification = (dependencies: TgUserApiDependencies) => async (params: {
    silent?: boolean
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.setContactSignUpNotification', params, ...args);

export const accountGetNotifyExceptions = (dependencies: TgUserApiDependencies) => async (params: {
    compare_sound?: true
    peer?: InputNotifyPeer
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('account.getNotifyExceptions', params, ...args);

export const messagesSendVote = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    msg_id?: number
    options?: Uint8Array[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.sendVote', params, ...args);

export const messagesGetPollResults = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    msg_id?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.getPollResults', params, ...args);

export const messagesGetOnlines = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<ChatOnlines>('messages.getOnlines', params, ...args);

export const messagesEditChatAbout = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    about?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.editChatAbout', params, ...args);

export const messagesEditChatDefaultBannedRights = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    banned_rights?: ChatBannedRights
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.editChatDefaultBannedRights', params, ...args);

export const accountGetWallPaper = (dependencies: TgUserApiDependencies) => async (params: {
    wallpaper?: InputWallPaper
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<WallPaper>('account.getWallPaper', params, ...args);

export const accountUploadWallPaper = (dependencies: TgUserApiDependencies) => async (params: {
    file?: InputFile
    mime_type?: string
    settings?: WallPaperSettings
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<WallPaper>('account.uploadWallPaper', params, ...args);

export const accountSaveWallPaper = (dependencies: TgUserApiDependencies) => async (params: {
    wallpaper?: InputWallPaper
    unsave?: boolean
    settings?: WallPaperSettings
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.saveWallPaper', params, ...args);

export const accountInstallWallPaper = (dependencies: TgUserApiDependencies) => async (params: {
    wallpaper?: InputWallPaper
    settings?: WallPaperSettings
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.installWallPaper', params, ...args);

export const accountResetWallPapers = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.resetWallPapers', params, ...args);

export const accountGetAutoDownloadSettings = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AccountAutoDownloadSettings>('account.getAutoDownloadSettings', params, ...args);

export const accountSaveAutoDownloadSettings = (dependencies: TgUserApiDependencies) => async (params: {
    low?: true
    high?: true
    settings?: AutoDownloadSettings
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.saveAutoDownloadSettings', params, ...args);

export const messagesGetEmojiKeywords = (dependencies: TgUserApiDependencies) => async (params: {
    lang_code?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<EmojiKeywordsDifference>('messages.getEmojiKeywords', params, ...args);

export const messagesGetEmojiKeywordsDifference = (dependencies: TgUserApiDependencies) => async (params: {
    lang_code?: string
    from_version?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<EmojiKeywordsDifference>('messages.getEmojiKeywordsDifference', params, ...args);

export const messagesGetEmojiKeywordsLanguages = (dependencies: TgUserApiDependencies) => async (params: {
    lang_codes?: string[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<EmojiLanguage[]>('messages.getEmojiKeywordsLanguages', params, ...args);

export const messagesGetEmojiURL = (dependencies: TgUserApiDependencies) => async (params: {
    lang_code?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<EmojiURL>('messages.getEmojiURL', params, ...args);

export const foldersEditPeerFolders = (dependencies: TgUserApiDependencies) => async (params: {
    folder_peers?: InputFolderPeer[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('folders.editPeerFolders', params, ...args);

export const foldersDeleteFolder = (dependencies: TgUserApiDependencies) => async (params: {
    folder_id?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('folders.deleteFolder', params, ...args);

export const messagesGetSearchCounters = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    filters?: MessagesFilter[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesSearchCounter[]>('messages.getSearchCounters', params, ...args);

export const channelsGetGroupsForDiscussion = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesChats>('channels.getGroupsForDiscussion', params, ...args);

export const channelsSetDiscussionGroup = (dependencies: TgUserApiDependencies) => async (params: {
    broadcast?: InputChannel
    group?: InputChannel
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('channels.setDiscussionGroup', params, ...args);

export const messagesRequestUrlAuth = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    msg_id?: number
    button_id?: number
    url?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<UrlAuthResult>('messages.requestUrlAuth', params, ...args);

export const messagesAcceptUrlAuth = (dependencies: TgUserApiDependencies) => async (params: {
    write_allowed?: true
    peer?: InputPeer
    msg_id?: number
    button_id?: number
    url?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<UrlAuthResult>('messages.acceptUrlAuth', params, ...args);

export const messagesHidePeerSettingsBar = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.hidePeerSettingsBar', params, ...args);

export const contactsAddContact = (dependencies: TgUserApiDependencies) => async (params: {
    add_phone_privacy_exception?: true
    id?: InputUser
    first_name?: string
    last_name?: string
    phone?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('contacts.addContact', params, ...args);

export const contactsAcceptContact = (dependencies: TgUserApiDependencies) => async (params: {
    id?: InputUser
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('contacts.acceptContact', params, ...args);

export const channelsEditCreator = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    user_id?: InputUser
    password?: InputCheckPasswordSRP
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('channels.editCreator', params, ...args);

export const contactsGetLocated = (dependencies: TgUserApiDependencies) => async (params: {
    background?: true
    geo_point?: InputGeoPoint
    self_expires?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('contacts.getLocated', params, ...args);

export const channelsEditLocation = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    geo_point?: InputGeoPoint
    address?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('channels.editLocation', params, ...args);

export const channelsToggleSlowMode = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    seconds?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('channels.toggleSlowMode', params, ...args);

export const messagesGetScheduledHistory = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesMessages>('messages.getScheduledHistory', params, ...args);

export const messagesGetScheduledMessages = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    id?: number[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesMessages>('messages.getScheduledMessages', params, ...args);

export const messagesSendScheduledMessages = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    id?: number[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.sendScheduledMessages', params, ...args);

export const messagesDeleteScheduledMessages = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    id?: number[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.deleteScheduledMessages', params, ...args);

export const accountUploadTheme = (dependencies: TgUserApiDependencies) => async (params: {
    file?: InputFile
    thumb?: InputFile
    file_name?: string
    mime_type?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Document>('account.uploadTheme', params, ...args);

export const accountCreateTheme = (dependencies: TgUserApiDependencies) => async (params: {
    slug?: string
    title?: string
    document?: InputDocument
    settings?: InputThemeSettings[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Theme>('account.createTheme', params, ...args);

export const accountUpdateTheme = (dependencies: TgUserApiDependencies) => async (params: {
    format?: string
    theme?: InputTheme
    slug?: string
    title?: string
    document?: InputDocument
    settings?: InputThemeSettings[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Theme>('account.updateTheme', params, ...args);

export const accountSaveTheme = (dependencies: TgUserApiDependencies) => async (params: {
    theme?: InputTheme
    unsave?: boolean
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.saveTheme', params, ...args);

export const accountInstallTheme = (dependencies: TgUserApiDependencies) => async (params: {
    dark?: true
    theme?: InputTheme
    format?: string
    base_theme?: BaseTheme
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.installTheme', params, ...args);

export const accountGetTheme = (dependencies: TgUserApiDependencies) => async (params: {
    format?: string
    theme?: InputTheme
    document_id?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Theme>('account.getTheme', params, ...args);

export const accountGetThemes = (dependencies: TgUserApiDependencies) => async (params: {
    format?: string
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AccountThemes>('account.getThemes', params, ...args);

export const authExportLoginToken = (dependencies: TgUserApiDependencies) => async (params: {
    api_id?: number
    api_hash?: string
    except_ids?: string[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AuthLoginToken>('auth.exportLoginToken', params, ...args);

export const authImportLoginToken = (dependencies: TgUserApiDependencies) => async (params: {
    token?: Uint8Array
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AuthLoginToken>('auth.importLoginToken', params, ...args);

export const authAcceptLoginToken = (dependencies: TgUserApiDependencies) => async (params: {
    token?: Uint8Array
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Authorization>('auth.acceptLoginToken', params, ...args);

export const accountSetContentSettings = (dependencies: TgUserApiDependencies) => async (params: {
    sensitive_enabled?: true
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.setContentSettings', params, ...args);

export const accountGetContentSettings = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AccountContentSettings>('account.getContentSettings', params, ...args);

export const channelsGetInactiveChannels = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesInactiveChats>('channels.getInactiveChannels', params, ...args);

export const accountGetMultiWallPapers = (dependencies: TgUserApiDependencies) => async (params: {
    wallpapers?: InputWallPaper[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<WallPaper[]>('account.getMultiWallPapers', params, ...args);

export const messagesGetPollVotes = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    id?: number
    option?: Uint8Array
    offset?: string
    limit?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesVotesList>('messages.getPollVotes', params, ...args);

export const messagesToggleStickerSets = (dependencies: TgUserApiDependencies) => async (params: {
    uninstall?: true
    archive?: true
    unarchive?: true
    stickersets?: InputStickerSet[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.toggleStickerSets', params, ...args);

export const paymentsGetBankCardData = (dependencies: TgUserApiDependencies) => async (params: {
    number?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<PaymentsBankCardData>('payments.getBankCardData', params, ...args);

export const messagesGetDialogFilters = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<DialogFilter[]>('messages.getDialogFilters', params, ...args);

export const messagesGetSuggestedDialogFilters = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<DialogFilterSuggested[]>('messages.getSuggestedDialogFilters', params, ...args);

export const messagesUpdateDialogFilter = (dependencies: TgUserApiDependencies) => async (params: {
    id?: number
    filter?: DialogFilter
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.updateDialogFilter', params, ...args);

export const messagesUpdateDialogFiltersOrder = (dependencies: TgUserApiDependencies) => async (params: {
    order?: number[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.updateDialogFiltersOrder', params, ...args);

export const statsGetBroadcastStats = (dependencies: TgUserApiDependencies) => async (params: {
    dark?: true
    channel?: InputChannel
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<StatsBroadcastStats>('stats.getBroadcastStats', params, ...args);

export const statsLoadAsyncGraph = (dependencies: TgUserApiDependencies) => async (params: {
    token?: string
    x?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<StatsGraph>('stats.loadAsyncGraph', params, ...args);

export const stickersSetStickerSetThumb = (dependencies: TgUserApiDependencies) => async (params: {
    stickerset?: InputStickerSet
    thumb?: InputDocument
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesStickerSet>('stickers.setStickerSetThumb', params, ...args);

export const botsSetBotCommands = (dependencies: TgUserApiDependencies) => async (params: {
    scope?: BotCommandScope
    lang_code?: string
    commands?: BotCommand[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('bots.setBotCommands', params, ...args);

export const messagesGetOldFeaturedStickers = (dependencies: TgUserApiDependencies) => async (params: {
    offset?: number
    limit?: number
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesFeaturedStickers>('messages.getOldFeaturedStickers', params, ...args);

export const helpGetPromoData = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<HelpPromoData>('help.getPromoData', params, ...args);

export const helpHidePromoData = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('help.hidePromoData', params, ...args);

export const phoneSendSignalingData = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPhoneCall
    data?: Uint8Array
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('phone.sendSignalingData', params, ...args);

export const statsGetMegagroupStats = (dependencies: TgUserApiDependencies) => async (params: {
    dark?: true
    channel?: InputChannel
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<StatsMegagroupStats>('stats.getMegagroupStats', params, ...args);

export const accountGetGlobalPrivacySettings = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<GlobalPrivacySettings>('account.getGlobalPrivacySettings', params, ...args);

export const accountSetGlobalPrivacySettings = (dependencies: TgUserApiDependencies) => async (params: {
    settings?: GlobalPrivacySettings
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<GlobalPrivacySettings>('account.setGlobalPrivacySettings', params, ...args);

export const helpDismissSuggestion = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    suggestion?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('help.dismissSuggestion', params, ...args);

export const helpGetCountriesList = (dependencies: TgUserApiDependencies) => async (params: {
    lang_code?: string
    hash?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<HelpCountriesList>('help.getCountriesList', params, ...args);

export const messagesGetReplies = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    msg_id?: number
    offset_id?: number
    offset_date?: number
    add_offset?: number
    limit?: number
    max_id?: number
    min_id?: number
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesMessages>('messages.getReplies', params, ...args);

export const messagesGetDiscussionMessage = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    msg_id?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesDiscussionMessage>('messages.getDiscussionMessage', params, ...args);

export const messagesReadDiscussion = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    msg_id?: number
    read_max_id?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.readDiscussion', params, ...args);

export const contactsBlockFromReplies = (dependencies: TgUserApiDependencies) => async (params: {
    delete_message?: true
    delete_history?: true
    report_spam?: true
    msg_id?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('contacts.blockFromReplies', params, ...args);

export const statsGetMessagePublicForwards = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    msg_id?: number
    offset_rate?: number
    offset_peer?: InputPeer
    offset_id?: number
    limit?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesMessages>('stats.getMessagePublicForwards', params, ...args);

export const statsGetMessageStats = (dependencies: TgUserApiDependencies) => async (params: {
    dark?: true
    channel?: InputChannel
    msg_id?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<StatsMessageStats>('stats.getMessageStats', params, ...args);

export const messagesUnpinAllMessages = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesAffectedHistory>('messages.unpinAllMessages', params, ...args);

export const phoneCreateGroupCall = (dependencies: TgUserApiDependencies) => async (params: {
    rtmp_stream?: true
    peer?: InputPeer
    random_id?: number
    title?: string
    schedule_date?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('phone.createGroupCall', params, ...args);

export const phoneJoinGroupCall = (dependencies: TgUserApiDependencies) => async (params: {
    muted?: true
    video_stopped?: true
    call?: InputGroupCall
    join_as?: InputPeer
    invite_hash?: string
    params?: DataJSON
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('phone.joinGroupCall', params, ...args);

export const phoneLeaveGroupCall = (dependencies: TgUserApiDependencies) => async (params: {
    call?: InputGroupCall
    source?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('phone.leaveGroupCall', params, ...args);

export const phoneInviteToGroupCall = (dependencies: TgUserApiDependencies) => async (params: {
    call?: InputGroupCall
    users?: InputUser[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('phone.inviteToGroupCall', params, ...args);

export const phoneDiscardGroupCall = (dependencies: TgUserApiDependencies) => async (params: {
    call?: InputGroupCall
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('phone.discardGroupCall', params, ...args);

export const phoneToggleGroupCallSettings = (dependencies: TgUserApiDependencies) => async (params: {
    reset_invite_hash?: true
    call?: InputGroupCall
    join_muted?: boolean
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('phone.toggleGroupCallSettings', params, ...args);

export const phoneGetGroupCall = (dependencies: TgUserApiDependencies) => async (params: {
    call?: InputGroupCall
    limit?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<PhoneGroupCall>('phone.getGroupCall', params, ...args);

export const phoneGetGroupParticipants = (dependencies: TgUserApiDependencies) => async (params: {
    call?: InputGroupCall
    ids?: InputPeer[]
    sources?: number[]
    offset?: string
    limit?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<PhoneGroupParticipants>('phone.getGroupParticipants', params, ...args);

export const phoneCheckGroupCall = (dependencies: TgUserApiDependencies) => async (params: {
    call?: InputGroupCall
    sources?: number[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<number[]>('phone.checkGroupCall', params, ...args);

export const messagesDeleteChat = (dependencies: TgUserApiDependencies) => async (params: {
    chat_id?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.deleteChat', params, ...args);

export const messagesDeletePhoneCallHistory = (dependencies: TgUserApiDependencies) => async (params: {
    revoke?: true
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesAffectedFoundMessages>('messages.deletePhoneCallHistory', params, ...args);

export const messagesCheckHistoryImport = (dependencies: TgUserApiDependencies) => async (params: {
    import_head?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesHistoryImportParsed>('messages.checkHistoryImport', params, ...args);

export const messagesInitHistoryImport = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    file?: InputFile
    media_count?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesHistoryImport>('messages.initHistoryImport', params, ...args);

export const messagesUploadImportedMedia = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    import_id?: string
    file_name?: string
    media?: InputMedia
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessageMedia>('messages.uploadImportedMedia', params, ...args);

export const messagesStartHistoryImport = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    import_id?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.startHistoryImport', params, ...args);

export const messagesGetExportedChatInvites = (dependencies: TgUserApiDependencies) => async (params: {
    revoked?: true
    peer?: InputPeer
    admin_id?: InputUser
    offset_date?: number
    offset_link?: string
    limit?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesExportedChatInvites>('messages.getExportedChatInvites', params, ...args);

export const messagesGetExportedChatInvite = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    link?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesExportedChatInvite>('messages.getExportedChatInvite', params, ...args);

export const messagesEditExportedChatInvite = (dependencies: TgUserApiDependencies) => async (params: {
    revoked?: true
    peer?: InputPeer
    link?: string
    expire_date?: number
    usage_limit?: number
    request_needed?: boolean
    title?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesExportedChatInvite>('messages.editExportedChatInvite', params, ...args);

export const messagesDeleteRevokedExportedChatInvites = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    admin_id?: InputUser
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.deleteRevokedExportedChatInvites', params, ...args);

export const messagesDeleteExportedChatInvite = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    link?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.deleteExportedChatInvite', params, ...args);

export const messagesGetAdminsWithInvites = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesChatAdminsWithInvites>('messages.getAdminsWithInvites', params, ...args);

export const messagesGetChatInviteImporters = (dependencies: TgUserApiDependencies) => async (params: {
    requested?: true
    peer?: InputPeer
    link?: string
    q?: string
    offset_date?: number
    offset_user?: InputUser
    limit?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesChatInviteImporters>('messages.getChatInviteImporters', params, ...args);

export const messagesSetHistoryTTL = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    period?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.setHistoryTTL', params, ...args);

export const accountReportProfilePhoto = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    photo_id?: InputPhoto
    reason?: ReportReason
    message?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.reportProfilePhoto', params, ...args);

export const channelsConvertToGigagroup = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('channels.convertToGigagroup', params, ...args);

export const messagesCheckHistoryImportPeer = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesCheckedHistoryImportPeer>('messages.checkHistoryImportPeer', params, ...args);

export const phoneToggleGroupCallRecord = (dependencies: TgUserApiDependencies) => async (params: {
    start?: true
    video?: true
    call?: InputGroupCall
    title?: string
    video_portrait?: boolean
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('phone.toggleGroupCallRecord', params, ...args);

export const phoneEditGroupCallParticipant = (dependencies: TgUserApiDependencies) => async (params: {
    call?: InputGroupCall
    participant?: InputPeer
    muted?: boolean
    volume?: number
    raise_hand?: boolean
    video_stopped?: boolean
    video_paused?: boolean
    presentation_paused?: boolean
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('phone.editGroupCallParticipant', params, ...args);

export const phoneEditGroupCallTitle = (dependencies: TgUserApiDependencies) => async (params: {
    call?: InputGroupCall
    title?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('phone.editGroupCallTitle', params, ...args);

export const phoneGetGroupCallJoinAs = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<PhoneJoinAsPeers>('phone.getGroupCallJoinAs', params, ...args);

export const phoneExportGroupCallInvite = (dependencies: TgUserApiDependencies) => async (params: {
    can_self_unmute?: true
    call?: InputGroupCall
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<PhoneExportedGroupCallInvite>('phone.exportGroupCallInvite', params, ...args);

export const phoneToggleGroupCallStartSubscription = (dependencies: TgUserApiDependencies) => async (params: {
    call?: InputGroupCall
    subscribed?: boolean
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('phone.toggleGroupCallStartSubscription', params, ...args);

export const phoneStartScheduledGroupCall = (dependencies: TgUserApiDependencies) => async (params: {
    call?: InputGroupCall
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('phone.startScheduledGroupCall', params, ...args);

export const phoneSaveDefaultGroupCallJoinAs = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    join_as?: InputPeer
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('phone.saveDefaultGroupCallJoinAs', params, ...args);

export const phoneJoinGroupCallPresentation = (dependencies: TgUserApiDependencies) => async (params: {
    call?: InputGroupCall
    params?: DataJSON
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('phone.joinGroupCallPresentation', params, ...args);

export const phoneLeaveGroupCallPresentation = (dependencies: TgUserApiDependencies) => async (params: {
    call?: InputGroupCall
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('phone.leaveGroupCallPresentation', params, ...args);

export const stickersCheckShortName = (dependencies: TgUserApiDependencies) => async (params: {
    short_name?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('stickers.checkShortName', params, ...args);

export const stickersSuggestShortName = (dependencies: TgUserApiDependencies) => async (params: {
    title?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<StickersSuggestedShortName>('stickers.suggestShortName', params, ...args);

export const botsResetBotCommands = (dependencies: TgUserApiDependencies) => async (params: {
    scope?: BotCommandScope
    lang_code?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('bots.resetBotCommands', params, ...args);

export const botsGetBotCommands = (dependencies: TgUserApiDependencies) => async (params: {
    scope?: BotCommandScope
    lang_code?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<BotCommand[]>('bots.getBotCommands', params, ...args);

export const accountResetPassword = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AccountResetPasswordResult>('account.resetPassword', params, ...args);

export const accountDeclinePasswordReset = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.declinePasswordReset', params, ...args);

export const authCheckRecoveryPassword = (dependencies: TgUserApiDependencies) => async (params: {
    code?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('auth.checkRecoveryPassword', params, ...args);

export const accountGetChatThemes = (dependencies: TgUserApiDependencies) => async (params: {
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AccountThemes>('account.getChatThemes', params, ...args);

export const messagesSetChatTheme = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    emoticon?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.setChatTheme', params, ...args);

export const channelsViewSponsoredMessage = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    random_id?: Uint8Array
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('channels.viewSponsoredMessage', params, ...args);

export const channelsGetSponsoredMessages = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesSponsoredMessages>('channels.getSponsoredMessages', params, ...args);

export const messagesGetMessageReadParticipants = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    msg_id?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<string[]>('messages.getMessageReadParticipants', params, ...args);

export const messagesGetSearchResultsCalendar = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    filter?: MessagesFilter
    offset_id?: number
    offset_date?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesSearchResultsCalendar>('messages.getSearchResultsCalendar', params, ...args);

export const messagesGetSearchResultsPositions = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    filter?: MessagesFilter
    offset_id?: number
    limit?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesSearchResultsPositions>('messages.getSearchResultsPositions', params, ...args);

export const messagesHideChatJoinRequest = (dependencies: TgUserApiDependencies) => async (params: {
    approved?: true
    peer?: InputPeer
    user_id?: InputUser
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.hideChatJoinRequest', params, ...args);

export const messagesHideAllChatJoinRequests = (dependencies: TgUserApiDependencies) => async (params: {
    approved?: true
    peer?: InputPeer
    link?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.hideAllChatJoinRequests', params, ...args);

export const messagesToggleNoForwards = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    enabled?: boolean
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.toggleNoForwards', params, ...args);

export const messagesSaveDefaultSendAs = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    send_as?: InputPeer
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.saveDefaultSendAs', params, ...args);

export const channelsGetSendAs = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<ChannelsSendAsPeers>('channels.getSendAs', params, ...args);

export const accountSetAuthorizationTTL = (dependencies: TgUserApiDependencies) => async (params: {
    authorization_ttl_days?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.setAuthorizationTTL', params, ...args);

export const accountChangeAuthorizationSettings = (dependencies: TgUserApiDependencies) => async (params: {
    hash?: string
    encrypted_requests_disabled?: boolean
    call_requests_disabled?: boolean
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.changeAuthorizationSettings', params, ...args);

export const channelsDeleteParticipantHistory = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    participant?: InputPeer
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesAffectedHistory>('channels.deleteParticipantHistory', params, ...args);

export const messagesSendReaction = (dependencies: TgUserApiDependencies) => async (params: {
    big?: true
    peer?: InputPeer
    msg_id?: number
    reaction?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.sendReaction', params, ...args);

export const messagesGetMessagesReactions = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    id?: number[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.getMessagesReactions', params, ...args);

export const messagesGetMessageReactionsList = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    id?: number
    reaction?: string
    offset?: string
    limit?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesMessageReactionsList>('messages.getMessageReactionsList', params, ...args);

export const messagesSetChatAvailableReactions = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    available_reactions?: string[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.setChatAvailableReactions', params, ...args);

export const messagesGetAvailableReactions = (dependencies: TgUserApiDependencies) => async (params: {
    hash?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesAvailableReactions>('messages.getAvailableReactions', params, ...args);

export const messagesSetDefaultReaction = (dependencies: TgUserApiDependencies) => async (params: {
    reaction?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.setDefaultReaction', params, ...args);

export const messagesTranslateText = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    msg_id?: number
    text?: string
    from_lang?: string
    to_lang?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesTranslatedText>('messages.translateText', params, ...args);

export const messagesGetUnreadReactions = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    offset_id?: number
    add_offset?: number
    limit?: number
    max_id?: number
    min_id?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesMessages>('messages.getUnreadReactions', params, ...args);

export const messagesReadReactions = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesAffectedHistory>('messages.readReactions', params, ...args);

export const contactsResolvePhone = (dependencies: TgUserApiDependencies) => async (params: {
    phone?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<ContactsResolvedPeer>('contacts.resolvePhone', params, ...args);

export const phoneGetGroupCallStreamChannels = (dependencies: TgUserApiDependencies) => async (params: {
    call?: InputGroupCall
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<PhoneGroupCallStreamChannels>('phone.getGroupCallStreamChannels', params, ...args);

export const phoneGetGroupCallStreamRtmpUrl = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    revoke?: boolean
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<PhoneGroupCallStreamRtmpUrl>('phone.getGroupCallStreamRtmpUrl', params, ...args);

export const messagesSearchSentMedia = (dependencies: TgUserApiDependencies) => async (params: {
    q?: string
    filter?: MessagesFilter
    limit?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesMessages>('messages.searchSentMedia', params, ...args);

export const makeTgUserApiMethods = (dependencies: TgUserApiDependencies) => ({
    invokeAfterMsg: invokeAfterMsg(dependencies),
    invokeAfterMsgs: invokeAfterMsgs(dependencies),
    authSendCode: authSendCode(dependencies),
    authSignUp: authSignUp(dependencies),
    authSignIn: authSignIn(dependencies),
    authLogOut: authLogOut(dependencies),
    authResetAuthorizations: authResetAuthorizations(dependencies),
    authExportAuthorization: authExportAuthorization(dependencies),
    authImportAuthorization: authImportAuthorization(dependencies),
    authBindTempAuthKey: authBindTempAuthKey(dependencies),
    accountRegisterDevice: accountRegisterDevice(dependencies),
    accountUnregisterDevice: accountUnregisterDevice(dependencies),
    accountUpdateNotifySettings: accountUpdateNotifySettings(dependencies),
    accountGetNotifySettings: accountGetNotifySettings(dependencies),
    accountResetNotifySettings: accountResetNotifySettings(dependencies),
    accountUpdateProfile: accountUpdateProfile(dependencies),
    accountUpdateStatus: accountUpdateStatus(dependencies),
    accountGetWallPapers: accountGetWallPapers(dependencies),
    accountReportPeer: accountReportPeer(dependencies),
    usersGetUsers: usersGetUsers(dependencies),
    usersGetFullUser: usersGetFullUser(dependencies),
    contactsGetContactIDs: contactsGetContactIDs(dependencies),
    contactsGetStatuses: contactsGetStatuses(dependencies),
    contactsGetContacts: contactsGetContacts(dependencies),
    contactsImportContacts: contactsImportContacts(dependencies),
    contactsDeleteContacts: contactsDeleteContacts(dependencies),
    contactsDeleteByPhones: contactsDeleteByPhones(dependencies),
    contactsBlock: contactsBlock(dependencies),
    contactsUnblock: contactsUnblock(dependencies),
    contactsGetBlocked: contactsGetBlocked(dependencies),
    messagesGetMessages: messagesGetMessages(dependencies),
    messagesGetDialogs: messagesGetDialogs(dependencies),
    messagesGetHistory: messagesGetHistory(dependencies),
    messagesSearch: messagesSearch(dependencies),
    messagesReadHistory: messagesReadHistory(dependencies),
    messagesDeleteHistory: messagesDeleteHistory(dependencies),
    messagesDeleteMessages: messagesDeleteMessages(dependencies),
    messagesReceivedMessages: messagesReceivedMessages(dependencies),
    messagesSetTyping: messagesSetTyping(dependencies),
    messagesSendMessage: messagesSendMessage(dependencies),
    messagesSendMedia: messagesSendMedia(dependencies),
    messagesForwardMessages: messagesForwardMessages(dependencies),
    messagesReportSpam: messagesReportSpam(dependencies),
    messagesGetPeerSettings: messagesGetPeerSettings(dependencies),
    messagesReport: messagesReport(dependencies),
    messagesGetChats: messagesGetChats(dependencies),
    messagesGetFullChat: messagesGetFullChat(dependencies),
    messagesEditChatTitle: messagesEditChatTitle(dependencies),
    messagesEditChatPhoto: messagesEditChatPhoto(dependencies),
    messagesAddChatUser: messagesAddChatUser(dependencies),
    messagesDeleteChatUser: messagesDeleteChatUser(dependencies),
    messagesCreateChat: messagesCreateChat(dependencies),
    updatesGetState: updatesGetState(dependencies),
    updatesGetDifference: updatesGetDifference(dependencies),
    photosUpdateProfilePhoto: photosUpdateProfilePhoto(dependencies),
    photosUploadProfilePhoto: photosUploadProfilePhoto(dependencies),
    photosDeletePhotos: photosDeletePhotos(dependencies),
    uploadSaveFilePart: uploadSaveFilePart(dependencies),
    uploadGetFile: uploadGetFile(dependencies),
    helpGetConfig: helpGetConfig(dependencies),
    helpGetNearestDc: helpGetNearestDc(dependencies),
    helpGetAppUpdate: helpGetAppUpdate(dependencies),
    helpGetInviteText: helpGetInviteText(dependencies),
    photosGetUserPhotos: photosGetUserPhotos(dependencies),
    messagesGetDhConfig: messagesGetDhConfig(dependencies),
    messagesRequestEncryption: messagesRequestEncryption(dependencies),
    messagesAcceptEncryption: messagesAcceptEncryption(dependencies),
    messagesDiscardEncryption: messagesDiscardEncryption(dependencies),
    messagesSetEncryptedTyping: messagesSetEncryptedTyping(dependencies),
    messagesReadEncryptedHistory: messagesReadEncryptedHistory(dependencies),
    messagesSendEncrypted: messagesSendEncrypted(dependencies),
    messagesSendEncryptedFile: messagesSendEncryptedFile(dependencies),
    messagesSendEncryptedService: messagesSendEncryptedService(dependencies),
    messagesReceivedQueue: messagesReceivedQueue(dependencies),
    messagesReportEncryptedSpam: messagesReportEncryptedSpam(dependencies),
    uploadSaveBigFilePart: uploadSaveBigFilePart(dependencies),
    initConnection: initConnection(dependencies),
    helpGetSupport: helpGetSupport(dependencies),
    messagesReadMessageContents: messagesReadMessageContents(dependencies),
    accountCheckUsername: accountCheckUsername(dependencies),
    accountUpdateUsername: accountUpdateUsername(dependencies),
    contactsSearch: contactsSearch(dependencies),
    accountGetPrivacy: accountGetPrivacy(dependencies),
    accountSetPrivacy: accountSetPrivacy(dependencies),
    accountDeleteAccount: accountDeleteAccount(dependencies),
    accountGetAccountTTL: accountGetAccountTTL(dependencies),
    accountSetAccountTTL: accountSetAccountTTL(dependencies),
    invokeWithLayer: invokeWithLayer(dependencies),
    contactsResolveUsername: contactsResolveUsername(dependencies),
    accountSendChangePhoneCode: accountSendChangePhoneCode(dependencies),
    accountChangePhone: accountChangePhone(dependencies),
    messagesGetStickers: messagesGetStickers(dependencies),
    messagesGetAllStickers: messagesGetAllStickers(dependencies),
    accountUpdateDeviceLocked: accountUpdateDeviceLocked(dependencies),
    authImportBotAuthorization: authImportBotAuthorization(dependencies),
    messagesGetWebPagePreview: messagesGetWebPagePreview(dependencies),
    accountGetAuthorizations: accountGetAuthorizations(dependencies),
    accountResetAuthorization: accountResetAuthorization(dependencies),
    accountGetPassword: accountGetPassword(dependencies),
    accountGetPasswordSettings: accountGetPasswordSettings(dependencies),
    accountUpdatePasswordSettings: accountUpdatePasswordSettings(dependencies),
    authCheckPassword: authCheckPassword(dependencies),
    authRequestPasswordRecovery: authRequestPasswordRecovery(dependencies),
    authRecoverPassword: authRecoverPassword(dependencies),
    invokeWithoutUpdates: invokeWithoutUpdates(dependencies),
    messagesExportChatInvite: messagesExportChatInvite(dependencies),
    messagesCheckChatInvite: messagesCheckChatInvite(dependencies),
    messagesImportChatInvite: messagesImportChatInvite(dependencies),
    messagesGetStickerSet: messagesGetStickerSet(dependencies),
    messagesInstallStickerSet: messagesInstallStickerSet(dependencies),
    messagesUninstallStickerSet: messagesUninstallStickerSet(dependencies),
    messagesStartBot: messagesStartBot(dependencies),
    helpGetAppChangelog: helpGetAppChangelog(dependencies),
    messagesGetMessagesViews: messagesGetMessagesViews(dependencies),
    channelsReadHistory: channelsReadHistory(dependencies),
    channelsDeleteMessages: channelsDeleteMessages(dependencies),
    channelsReportSpam: channelsReportSpam(dependencies),
    channelsGetMessages: channelsGetMessages(dependencies),
    channelsGetParticipants: channelsGetParticipants(dependencies),
    channelsGetParticipant: channelsGetParticipant(dependencies),
    channelsGetChannels: channelsGetChannels(dependencies),
    channelsGetFullChannel: channelsGetFullChannel(dependencies),
    channelsCreateChannel: channelsCreateChannel(dependencies),
    channelsEditAdmin: channelsEditAdmin(dependencies),
    channelsEditTitle: channelsEditTitle(dependencies),
    channelsEditPhoto: channelsEditPhoto(dependencies),
    channelsCheckUsername: channelsCheckUsername(dependencies),
    channelsUpdateUsername: channelsUpdateUsername(dependencies),
    channelsJoinChannel: channelsJoinChannel(dependencies),
    channelsLeaveChannel: channelsLeaveChannel(dependencies),
    channelsInviteToChannel: channelsInviteToChannel(dependencies),
    channelsDeleteChannel: channelsDeleteChannel(dependencies),
    updatesGetChannelDifference: updatesGetChannelDifference(dependencies),
    messagesEditChatAdmin: messagesEditChatAdmin(dependencies),
    messagesMigrateChat: messagesMigrateChat(dependencies),
    messagesSearchGlobal: messagesSearchGlobal(dependencies),
    messagesReorderStickerSets: messagesReorderStickerSets(dependencies),
    messagesGetDocumentByHash: messagesGetDocumentByHash(dependencies),
    messagesGetSavedGifs: messagesGetSavedGifs(dependencies),
    messagesSaveGif: messagesSaveGif(dependencies),
    messagesGetInlineBotResults: messagesGetInlineBotResults(dependencies),
    messagesSetInlineBotResults: messagesSetInlineBotResults(dependencies),
    messagesSendInlineBotResult: messagesSendInlineBotResult(dependencies),
    channelsExportMessageLink: channelsExportMessageLink(dependencies),
    channelsToggleSignatures: channelsToggleSignatures(dependencies),
    authResendCode: authResendCode(dependencies),
    authCancelCode: authCancelCode(dependencies),
    messagesGetMessageEditData: messagesGetMessageEditData(dependencies),
    messagesEditMessage: messagesEditMessage(dependencies),
    messagesEditInlineBotMessage: messagesEditInlineBotMessage(dependencies),
    messagesGetBotCallbackAnswer: messagesGetBotCallbackAnswer(dependencies),
    messagesSetBotCallbackAnswer: messagesSetBotCallbackAnswer(dependencies),
    contactsGetTopPeers: contactsGetTopPeers(dependencies),
    contactsResetTopPeerRating: contactsResetTopPeerRating(dependencies),
    messagesGetPeerDialogs: messagesGetPeerDialogs(dependencies),
    messagesSaveDraft: messagesSaveDraft(dependencies),
    messagesGetAllDrafts: messagesGetAllDrafts(dependencies),
    messagesGetFeaturedStickers: messagesGetFeaturedStickers(dependencies),
    messagesReadFeaturedStickers: messagesReadFeaturedStickers(dependencies),
    messagesGetRecentStickers: messagesGetRecentStickers(dependencies),
    messagesSaveRecentSticker: messagesSaveRecentSticker(dependencies),
    messagesClearRecentStickers: messagesClearRecentStickers(dependencies),
    messagesGetArchivedStickers: messagesGetArchivedStickers(dependencies),
    accountSendConfirmPhoneCode: accountSendConfirmPhoneCode(dependencies),
    accountConfirmPhone: accountConfirmPhone(dependencies),
    channelsGetAdminedPublicChannels: channelsGetAdminedPublicChannels(dependencies),
    messagesGetMaskStickers: messagesGetMaskStickers(dependencies),
    messagesGetAttachedStickers: messagesGetAttachedStickers(dependencies),
    authDropTempAuthKeys: authDropTempAuthKeys(dependencies),
    messagesSetGameScore: messagesSetGameScore(dependencies),
    messagesSetInlineGameScore: messagesSetInlineGameScore(dependencies),
    messagesGetGameHighScores: messagesGetGameHighScores(dependencies),
    messagesGetInlineGameHighScores: messagesGetInlineGameHighScores(dependencies),
    messagesGetCommonChats: messagesGetCommonChats(dependencies),
    messagesGetAllChats: messagesGetAllChats(dependencies),
    helpSetBotUpdatesStatus: helpSetBotUpdatesStatus(dependencies),
    messagesGetWebPage: messagesGetWebPage(dependencies),
    messagesToggleDialogPin: messagesToggleDialogPin(dependencies),
    messagesReorderPinnedDialogs: messagesReorderPinnedDialogs(dependencies),
    messagesGetPinnedDialogs: messagesGetPinnedDialogs(dependencies),
    botsSendCustomRequest: botsSendCustomRequest(dependencies),
    botsAnswerWebhookJSONQuery: botsAnswerWebhookJSONQuery(dependencies),
    uploadGetWebFile: uploadGetWebFile(dependencies),
    paymentsGetPaymentForm: paymentsGetPaymentForm(dependencies),
    paymentsGetPaymentReceipt: paymentsGetPaymentReceipt(dependencies),
    paymentsValidateRequestedInfo: paymentsValidateRequestedInfo(dependencies),
    paymentsSendPaymentForm: paymentsSendPaymentForm(dependencies),
    accountGetTmpPassword: accountGetTmpPassword(dependencies),
    paymentsGetSavedInfo: paymentsGetSavedInfo(dependencies),
    paymentsClearSavedInfo: paymentsClearSavedInfo(dependencies),
    messagesSetBotShippingResults: messagesSetBotShippingResults(dependencies),
    messagesSetBotPrecheckoutResults: messagesSetBotPrecheckoutResults(dependencies),
    stickersCreateStickerSet: stickersCreateStickerSet(dependencies),
    stickersRemoveStickerFromSet: stickersRemoveStickerFromSet(dependencies),
    stickersChangeStickerPosition: stickersChangeStickerPosition(dependencies),
    stickersAddStickerToSet: stickersAddStickerToSet(dependencies),
    messagesUploadMedia: messagesUploadMedia(dependencies),
    phoneGetCallConfig: phoneGetCallConfig(dependencies),
    phoneRequestCall: phoneRequestCall(dependencies),
    phoneAcceptCall: phoneAcceptCall(dependencies),
    phoneConfirmCall: phoneConfirmCall(dependencies),
    phoneReceivedCall: phoneReceivedCall(dependencies),
    phoneDiscardCall: phoneDiscardCall(dependencies),
    phoneSetCallRating: phoneSetCallRating(dependencies),
    phoneSaveCallDebug: phoneSaveCallDebug(dependencies),
    uploadGetCdnFile: uploadGetCdnFile(dependencies),
    uploadReuploadCdnFile: uploadReuploadCdnFile(dependencies),
    helpGetCdnConfig: helpGetCdnConfig(dependencies),
    langpackGetLangPack: langpackGetLangPack(dependencies),
    langpackGetStrings: langpackGetStrings(dependencies),
    langpackGetDifference: langpackGetDifference(dependencies),
    langpackGetLanguages: langpackGetLanguages(dependencies),
    channelsEditBanned: channelsEditBanned(dependencies),
    channelsGetAdminLog: channelsGetAdminLog(dependencies),
    uploadGetCdnFileHashes: uploadGetCdnFileHashes(dependencies),
    messagesSendScreenshotNotification: messagesSendScreenshotNotification(dependencies),
    channelsSetStickers: channelsSetStickers(dependencies),
    messagesGetFavedStickers: messagesGetFavedStickers(dependencies),
    messagesFaveSticker: messagesFaveSticker(dependencies),
    channelsReadMessageContents: channelsReadMessageContents(dependencies),
    contactsResetSaved: contactsResetSaved(dependencies),
    messagesGetUnreadMentions: messagesGetUnreadMentions(dependencies),
    channelsDeleteHistory: channelsDeleteHistory(dependencies),
    helpGetRecentMeUrls: helpGetRecentMeUrls(dependencies),
    channelsTogglePreHistoryHidden: channelsTogglePreHistoryHidden(dependencies),
    messagesReadMentions: messagesReadMentions(dependencies),
    messagesGetRecentLocations: messagesGetRecentLocations(dependencies),
    messagesSendMultiMedia: messagesSendMultiMedia(dependencies),
    messagesUploadEncryptedFile: messagesUploadEncryptedFile(dependencies),
    accountGetWebAuthorizations: accountGetWebAuthorizations(dependencies),
    accountResetWebAuthorization: accountResetWebAuthorization(dependencies),
    accountResetWebAuthorizations: accountResetWebAuthorizations(dependencies),
    messagesSearchStickerSets: messagesSearchStickerSets(dependencies),
    uploadGetFileHashes: uploadGetFileHashes(dependencies),
    helpGetTermsOfServiceUpdate: helpGetTermsOfServiceUpdate(dependencies),
    helpAcceptTermsOfService: helpAcceptTermsOfService(dependencies),
    accountGetAllSecureValues: accountGetAllSecureValues(dependencies),
    accountGetSecureValue: accountGetSecureValue(dependencies),
    accountSaveSecureValue: accountSaveSecureValue(dependencies),
    accountDeleteSecureValue: accountDeleteSecureValue(dependencies),
    usersSetSecureValueErrors: usersSetSecureValueErrors(dependencies),
    accountGetAuthorizationForm: accountGetAuthorizationForm(dependencies),
    accountAcceptAuthorization: accountAcceptAuthorization(dependencies),
    accountSendVerifyPhoneCode: accountSendVerifyPhoneCode(dependencies),
    accountVerifyPhone: accountVerifyPhone(dependencies),
    accountSendVerifyEmailCode: accountSendVerifyEmailCode(dependencies),
    accountVerifyEmail: accountVerifyEmail(dependencies),
    helpGetDeepLinkInfo: helpGetDeepLinkInfo(dependencies),
    contactsGetSaved: contactsGetSaved(dependencies),
    channelsGetLeftChannels: channelsGetLeftChannels(dependencies),
    accountInitTakeoutSession: accountInitTakeoutSession(dependencies),
    accountFinishTakeoutSession: accountFinishTakeoutSession(dependencies),
    messagesGetSplitRanges: messagesGetSplitRanges(dependencies),
    invokeWithMessagesRange: invokeWithMessagesRange(dependencies),
    invokeWithTakeout: invokeWithTakeout(dependencies),
    messagesMarkDialogUnread: messagesMarkDialogUnread(dependencies),
    messagesGetDialogUnreadMarks: messagesGetDialogUnreadMarks(dependencies),
    contactsToggleTopPeers: contactsToggleTopPeers(dependencies),
    messagesClearAllDrafts: messagesClearAllDrafts(dependencies),
    helpGetAppConfig: helpGetAppConfig(dependencies),
    helpSaveAppLog: helpSaveAppLog(dependencies),
    helpGetPassportConfig: helpGetPassportConfig(dependencies),
    langpackGetLanguage: langpackGetLanguage(dependencies),
    messagesUpdatePinnedMessage: messagesUpdatePinnedMessage(dependencies),
    accountConfirmPasswordEmail: accountConfirmPasswordEmail(dependencies),
    accountResendPasswordEmail: accountResendPasswordEmail(dependencies),
    accountCancelPasswordEmail: accountCancelPasswordEmail(dependencies),
    helpGetSupportName: helpGetSupportName(dependencies),
    helpGetUserInfo: helpGetUserInfo(dependencies),
    helpEditUserInfo: helpEditUserInfo(dependencies),
    accountGetContactSignUpNotification: accountGetContactSignUpNotification(dependencies),
    accountSetContactSignUpNotification: accountSetContactSignUpNotification(dependencies),
    accountGetNotifyExceptions: accountGetNotifyExceptions(dependencies),
    messagesSendVote: messagesSendVote(dependencies),
    messagesGetPollResults: messagesGetPollResults(dependencies),
    messagesGetOnlines: messagesGetOnlines(dependencies),
    messagesEditChatAbout: messagesEditChatAbout(dependencies),
    messagesEditChatDefaultBannedRights: messagesEditChatDefaultBannedRights(dependencies),
    accountGetWallPaper: accountGetWallPaper(dependencies),
    accountUploadWallPaper: accountUploadWallPaper(dependencies),
    accountSaveWallPaper: accountSaveWallPaper(dependencies),
    accountInstallWallPaper: accountInstallWallPaper(dependencies),
    accountResetWallPapers: accountResetWallPapers(dependencies),
    accountGetAutoDownloadSettings: accountGetAutoDownloadSettings(dependencies),
    accountSaveAutoDownloadSettings: accountSaveAutoDownloadSettings(dependencies),
    messagesGetEmojiKeywords: messagesGetEmojiKeywords(dependencies),
    messagesGetEmojiKeywordsDifference: messagesGetEmojiKeywordsDifference(dependencies),
    messagesGetEmojiKeywordsLanguages: messagesGetEmojiKeywordsLanguages(dependencies),
    messagesGetEmojiURL: messagesGetEmojiURL(dependencies),
    foldersEditPeerFolders: foldersEditPeerFolders(dependencies),
    foldersDeleteFolder: foldersDeleteFolder(dependencies),
    messagesGetSearchCounters: messagesGetSearchCounters(dependencies),
    channelsGetGroupsForDiscussion: channelsGetGroupsForDiscussion(dependencies),
    channelsSetDiscussionGroup: channelsSetDiscussionGroup(dependencies),
    messagesRequestUrlAuth: messagesRequestUrlAuth(dependencies),
    messagesAcceptUrlAuth: messagesAcceptUrlAuth(dependencies),
    messagesHidePeerSettingsBar: messagesHidePeerSettingsBar(dependencies),
    contactsAddContact: contactsAddContact(dependencies),
    contactsAcceptContact: contactsAcceptContact(dependencies),
    channelsEditCreator: channelsEditCreator(dependencies),
    contactsGetLocated: contactsGetLocated(dependencies),
    channelsEditLocation: channelsEditLocation(dependencies),
    channelsToggleSlowMode: channelsToggleSlowMode(dependencies),
    messagesGetScheduledHistory: messagesGetScheduledHistory(dependencies),
    messagesGetScheduledMessages: messagesGetScheduledMessages(dependencies),
    messagesSendScheduledMessages: messagesSendScheduledMessages(dependencies),
    messagesDeleteScheduledMessages: messagesDeleteScheduledMessages(dependencies),
    accountUploadTheme: accountUploadTheme(dependencies),
    accountCreateTheme: accountCreateTheme(dependencies),
    accountUpdateTheme: accountUpdateTheme(dependencies),
    accountSaveTheme: accountSaveTheme(dependencies),
    accountInstallTheme: accountInstallTheme(dependencies),
    accountGetTheme: accountGetTheme(dependencies),
    accountGetThemes: accountGetThemes(dependencies),
    authExportLoginToken: authExportLoginToken(dependencies),
    authImportLoginToken: authImportLoginToken(dependencies),
    authAcceptLoginToken: authAcceptLoginToken(dependencies),
    accountSetContentSettings: accountSetContentSettings(dependencies),
    accountGetContentSettings: accountGetContentSettings(dependencies),
    channelsGetInactiveChannels: channelsGetInactiveChannels(dependencies),
    accountGetMultiWallPapers: accountGetMultiWallPapers(dependencies),
    messagesGetPollVotes: messagesGetPollVotes(dependencies),
    messagesToggleStickerSets: messagesToggleStickerSets(dependencies),
    paymentsGetBankCardData: paymentsGetBankCardData(dependencies),
    messagesGetDialogFilters: messagesGetDialogFilters(dependencies),
    messagesGetSuggestedDialogFilters: messagesGetSuggestedDialogFilters(dependencies),
    messagesUpdateDialogFilter: messagesUpdateDialogFilter(dependencies),
    messagesUpdateDialogFiltersOrder: messagesUpdateDialogFiltersOrder(dependencies),
    statsGetBroadcastStats: statsGetBroadcastStats(dependencies),
    statsLoadAsyncGraph: statsLoadAsyncGraph(dependencies),
    stickersSetStickerSetThumb: stickersSetStickerSetThumb(dependencies),
    botsSetBotCommands: botsSetBotCommands(dependencies),
    messagesGetOldFeaturedStickers: messagesGetOldFeaturedStickers(dependencies),
    helpGetPromoData: helpGetPromoData(dependencies),
    helpHidePromoData: helpHidePromoData(dependencies),
    phoneSendSignalingData: phoneSendSignalingData(dependencies),
    statsGetMegagroupStats: statsGetMegagroupStats(dependencies),
    accountGetGlobalPrivacySettings: accountGetGlobalPrivacySettings(dependencies),
    accountSetGlobalPrivacySettings: accountSetGlobalPrivacySettings(dependencies),
    helpDismissSuggestion: helpDismissSuggestion(dependencies),
    helpGetCountriesList: helpGetCountriesList(dependencies),
    messagesGetReplies: messagesGetReplies(dependencies),
    messagesGetDiscussionMessage: messagesGetDiscussionMessage(dependencies),
    messagesReadDiscussion: messagesReadDiscussion(dependencies),
    contactsBlockFromReplies: contactsBlockFromReplies(dependencies),
    statsGetMessagePublicForwards: statsGetMessagePublicForwards(dependencies),
    statsGetMessageStats: statsGetMessageStats(dependencies),
    messagesUnpinAllMessages: messagesUnpinAllMessages(dependencies),
    phoneCreateGroupCall: phoneCreateGroupCall(dependencies),
    phoneJoinGroupCall: phoneJoinGroupCall(dependencies),
    phoneLeaveGroupCall: phoneLeaveGroupCall(dependencies),
    phoneInviteToGroupCall: phoneInviteToGroupCall(dependencies),
    phoneDiscardGroupCall: phoneDiscardGroupCall(dependencies),
    phoneToggleGroupCallSettings: phoneToggleGroupCallSettings(dependencies),
    phoneGetGroupCall: phoneGetGroupCall(dependencies),
    phoneGetGroupParticipants: phoneGetGroupParticipants(dependencies),
    phoneCheckGroupCall: phoneCheckGroupCall(dependencies),
    messagesDeleteChat: messagesDeleteChat(dependencies),
    messagesDeletePhoneCallHistory: messagesDeletePhoneCallHistory(dependencies),
    messagesCheckHistoryImport: messagesCheckHistoryImport(dependencies),
    messagesInitHistoryImport: messagesInitHistoryImport(dependencies),
    messagesUploadImportedMedia: messagesUploadImportedMedia(dependencies),
    messagesStartHistoryImport: messagesStartHistoryImport(dependencies),
    messagesGetExportedChatInvites: messagesGetExportedChatInvites(dependencies),
    messagesGetExportedChatInvite: messagesGetExportedChatInvite(dependencies),
    messagesEditExportedChatInvite: messagesEditExportedChatInvite(dependencies),
    messagesDeleteRevokedExportedChatInvites: messagesDeleteRevokedExportedChatInvites(dependencies),
    messagesDeleteExportedChatInvite: messagesDeleteExportedChatInvite(dependencies),
    messagesGetAdminsWithInvites: messagesGetAdminsWithInvites(dependencies),
    messagesGetChatInviteImporters: messagesGetChatInviteImporters(dependencies),
    messagesSetHistoryTTL: messagesSetHistoryTTL(dependencies),
    accountReportProfilePhoto: accountReportProfilePhoto(dependencies),
    channelsConvertToGigagroup: channelsConvertToGigagroup(dependencies),
    messagesCheckHistoryImportPeer: messagesCheckHistoryImportPeer(dependencies),
    phoneToggleGroupCallRecord: phoneToggleGroupCallRecord(dependencies),
    phoneEditGroupCallParticipant: phoneEditGroupCallParticipant(dependencies),
    phoneEditGroupCallTitle: phoneEditGroupCallTitle(dependencies),
    phoneGetGroupCallJoinAs: phoneGetGroupCallJoinAs(dependencies),
    phoneExportGroupCallInvite: phoneExportGroupCallInvite(dependencies),
    phoneToggleGroupCallStartSubscription: phoneToggleGroupCallStartSubscription(dependencies),
    phoneStartScheduledGroupCall: phoneStartScheduledGroupCall(dependencies),
    phoneSaveDefaultGroupCallJoinAs: phoneSaveDefaultGroupCallJoinAs(dependencies),
    phoneJoinGroupCallPresentation: phoneJoinGroupCallPresentation(dependencies),
    phoneLeaveGroupCallPresentation: phoneLeaveGroupCallPresentation(dependencies),
    stickersCheckShortName: stickersCheckShortName(dependencies),
    stickersSuggestShortName: stickersSuggestShortName(dependencies),
    botsResetBotCommands: botsResetBotCommands(dependencies),
    botsGetBotCommands: botsGetBotCommands(dependencies),
    accountResetPassword: accountResetPassword(dependencies),
    accountDeclinePasswordReset: accountDeclinePasswordReset(dependencies),
    authCheckRecoveryPassword: authCheckRecoveryPassword(dependencies),
    accountGetChatThemes: accountGetChatThemes(dependencies),
    messagesSetChatTheme: messagesSetChatTheme(dependencies),
    channelsViewSponsoredMessage: channelsViewSponsoredMessage(dependencies),
    channelsGetSponsoredMessages: channelsGetSponsoredMessages(dependencies),
    messagesGetMessageReadParticipants: messagesGetMessageReadParticipants(dependencies),
    messagesGetSearchResultsCalendar: messagesGetSearchResultsCalendar(dependencies),
    messagesGetSearchResultsPositions: messagesGetSearchResultsPositions(dependencies),
    messagesHideChatJoinRequest: messagesHideChatJoinRequest(dependencies),
    messagesHideAllChatJoinRequests: messagesHideAllChatJoinRequests(dependencies),
    messagesToggleNoForwards: messagesToggleNoForwards(dependencies),
    messagesSaveDefaultSendAs: messagesSaveDefaultSendAs(dependencies),
    channelsGetSendAs: channelsGetSendAs(dependencies),
    accountSetAuthorizationTTL: accountSetAuthorizationTTL(dependencies),
    accountChangeAuthorizationSettings: accountChangeAuthorizationSettings(dependencies),
    channelsDeleteParticipantHistory: channelsDeleteParticipantHistory(dependencies),
    messagesSendReaction: messagesSendReaction(dependencies),
    messagesGetMessagesReactions: messagesGetMessagesReactions(dependencies),
    messagesGetMessageReactionsList: messagesGetMessageReactionsList(dependencies),
    messagesSetChatAvailableReactions: messagesSetChatAvailableReactions(dependencies),
    messagesGetAvailableReactions: messagesGetAvailableReactions(dependencies),
    messagesSetDefaultReaction: messagesSetDefaultReaction(dependencies),
    messagesTranslateText: messagesTranslateText(dependencies),
    messagesGetUnreadReactions: messagesGetUnreadReactions(dependencies),
    messagesReadReactions: messagesReadReactions(dependencies),
    contactsResolvePhone: contactsResolvePhone(dependencies),
    phoneGetGroupCallStreamChannels: phoneGetGroupCallStreamChannels(dependencies),
    phoneGetGroupCallStreamRtmpUrl: phoneGetGroupCallStreamRtmpUrl(dependencies),
    messagesSearchSentMedia: messagesSearchSentMedia(dependencies),
});
