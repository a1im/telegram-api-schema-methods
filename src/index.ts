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
    spoiler?: true
    file: InputFile
    stickers?: InputDocument[]
    ttl_seconds?: number
    constructor(options: {
        spoiler?: true
        file: InputFile
        stickers?: InputDocument[]
        ttl_seconds?: number
    }) {
        this.spoiler = options.spoiler;
        this.file = options.file;
        this.stickers = options.stickers;
        this.ttl_seconds = options.ttl_seconds;
    }
}

export class PredicateInputMediaPhoto {
    _ = 'inputMediaPhoto' as const
    spoiler?: true
    id: InputPhoto
    ttl_seconds?: number
    constructor(options: {
        spoiler?: true
        id: InputPhoto
        ttl_seconds?: number
    }) {
        this.spoiler = options.spoiler;
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
    video_emoji_markup?: VideoSize
    constructor(options: {
        file?: InputFile
        video?: InputFile
        video_start_ts?: number
        video_emoji_markup?: VideoSize
    } = {}) {
        this.file = options.file;
        this.video = options.video;
        this.video_start_ts = options.video_start_ts;
        this.video_emoji_markup = options.video_emoji_markup;
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
    personal?: true
    photo_id: string
    stripped_thumb?: Uint8Array
    dc_id: number
    constructor(options: {
        has_video?: true
        personal?: true
        photo_id: string
        stripped_thumb?: Uint8Array
        dc_id: number
    }) {
        this.has_video = options.has_video;
        this.personal = options.personal;
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
    translations_disabled?: true
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
    available_reactions?: ChatReactions
    constructor(options: {
        can_set_username?: true
        has_scheduled?: true
        translations_disabled?: true
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
        available_reactions?: ChatReactions
    }) {
        this.can_set_username = options.can_set_username;
        this.has_scheduled = options.has_scheduled;
        this.translations_disabled = options.translations_disabled;
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
    invert_media?: true
    id: number
    from_id?: Peer
    peer_id: Peer
    saved_peer_id?: Peer
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
        invert_media?: true
        id: number
        from_id?: Peer
        peer_id: Peer
        saved_peer_id?: Peer
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
        this.invert_media = options.invert_media;
        this.id = options.id;
        this.from_id = options.from_id;
        this.peer_id = options.peer_id;
        this.saved_peer_id = options.saved_peer_id;
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
    spoiler?: true
    photo?: Photo
    ttl_seconds?: number
    constructor(options: {
        spoiler?: true
        photo?: Photo
        ttl_seconds?: number
    } = {}) {
        this.spoiler = options.spoiler;
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
    view_forum_as_messages?: true
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
    ttl_period?: number
    constructor(options: {
        pinned?: true
        unread_mark?: true
        view_forum_as_messages?: true
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
        ttl_period?: number
    }) {
        this.pinned = options.pinned;
        this.unread_mark = options.unread_mark;
        this.view_forum_as_messages = options.view_forum_as_messages;
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
        this.ttl_period = options.ttl_period;
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
    future_auth_token?: Uint8Array
    user: User
    constructor(options: {
        setup_password_required?: true
        otherwise_relogin_days?: number
        tmp_sessions?: number
        future_auth_token?: Uint8Array
        user: User
    }) {
        this.setup_password_required = options.setup_password_required;
        this.otherwise_relogin_days = options.otherwise_relogin_days;
        this.tmp_sessions = options.tmp_sessions;
        this.future_auth_token = options.future_auth_token;
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
    sound?: NotificationSound
    stories_muted?: boolean
    stories_hide_sender?: boolean
    stories_sound?: NotificationSound
    constructor(options: {
        show_previews?: boolean
        silent?: boolean
        mute_until?: number
        sound?: NotificationSound
        stories_muted?: boolean
        stories_hide_sender?: boolean
        stories_sound?: NotificationSound
    } = {}) {
        this.show_previews = options.show_previews;
        this.silent = options.silent;
        this.mute_until = options.mute_until;
        this.sound = options.sound;
        this.stories_muted = options.stories_muted;
        this.stories_hide_sender = options.stories_hide_sender;
        this.stories_sound = options.stories_sound;
    }
}

export class PredicatePeerNotifySettings {
    _ = 'peerNotifySettings' as const
    show_previews?: boolean
    silent?: boolean
    mute_until?: number
    ios_sound?: NotificationSound
    android_sound?: NotificationSound
    other_sound?: NotificationSound
    stories_muted?: boolean
    stories_hide_sender?: boolean
    stories_ios_sound?: NotificationSound
    stories_android_sound?: NotificationSound
    stories_other_sound?: NotificationSound
    constructor(options: {
        show_previews?: boolean
        silent?: boolean
        mute_until?: number
        ios_sound?: NotificationSound
        android_sound?: NotificationSound
        other_sound?: NotificationSound
        stories_muted?: boolean
        stories_hide_sender?: boolean
        stories_ios_sound?: NotificationSound
        stories_android_sound?: NotificationSound
        stories_other_sound?: NotificationSound
    } = {}) {
        this.show_previews = options.show_previews;
        this.silent = options.silent;
        this.mute_until = options.mute_until;
        this.ios_sound = options.ios_sound;
        this.android_sound = options.android_sound;
        this.other_sound = options.other_sound;
        this.stories_muted = options.stories_muted;
        this.stories_hide_sender = options.stories_hide_sender;
        this.stories_ios_sound = options.stories_ios_sound;
        this.stories_android_sound = options.stories_android_sound;
        this.stories_other_sound = options.stories_other_sound;
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
    voice_messages_forbidden?: true
    translations_disabled?: true
    stories_pinned_available?: true
    blocked_my_stories_from?: true
    wallpaper_overridden?: true
    id: string
    about?: string
    settings: PeerSettings
    personal_photo?: Photo
    profile_photo?: Photo
    fallback_photo?: Photo
    notify_settings: PeerNotifySettings
    bot_info?: BotInfo
    pinned_msg_id?: number
    common_chats_count: number
    folder_id?: number
    ttl_period?: number
    theme_emoticon?: string
    private_forward_name?: string
    bot_group_admin_rights?: ChatAdminRights
    bot_broadcast_admin_rights?: ChatAdminRights
    premium_gifts?: PremiumGiftOption[]
    wallpaper?: WallPaper
    stories?: PeerStories
    constructor(options: {
        blocked?: true
        phone_calls_available?: true
        phone_calls_private?: true
        can_pin_message?: true
        has_scheduled?: true
        video_calls_available?: true
        voice_messages_forbidden?: true
        translations_disabled?: true
        stories_pinned_available?: true
        blocked_my_stories_from?: true
        wallpaper_overridden?: true
        id: string
        about?: string
        settings: PeerSettings
        personal_photo?: Photo
        profile_photo?: Photo
        fallback_photo?: Photo
        notify_settings: PeerNotifySettings
        bot_info?: BotInfo
        pinned_msg_id?: number
        common_chats_count: number
        folder_id?: number
        ttl_period?: number
        theme_emoticon?: string
        private_forward_name?: string
        bot_group_admin_rights?: ChatAdminRights
        bot_broadcast_admin_rights?: ChatAdminRights
        premium_gifts?: PremiumGiftOption[]
        wallpaper?: WallPaper
        stories?: PeerStories
    }) {
        this.blocked = options.blocked;
        this.phone_calls_available = options.phone_calls_available;
        this.phone_calls_private = options.phone_calls_private;
        this.can_pin_message = options.can_pin_message;
        this.has_scheduled = options.has_scheduled;
        this.video_calls_available = options.video_calls_available;
        this.voice_messages_forbidden = options.voice_messages_forbidden;
        this.translations_disabled = options.translations_disabled;
        this.stories_pinned_available = options.stories_pinned_available;
        this.blocked_my_stories_from = options.blocked_my_stories_from;
        this.wallpaper_overridden = options.wallpaper_overridden;
        this.id = options.id;
        this.about = options.about;
        this.settings = options.settings;
        this.personal_photo = options.personal_photo;
        this.profile_photo = options.profile_photo;
        this.fallback_photo = options.fallback_photo;
        this.notify_settings = options.notify_settings;
        this.bot_info = options.bot_info;
        this.pinned_msg_id = options.pinned_msg_id;
        this.common_chats_count = options.common_chats_count;
        this.folder_id = options.folder_id;
        this.ttl_period = options.ttl_period;
        this.theme_emoticon = options.theme_emoticon;
        this.private_forward_name = options.private_forward_name;
        this.bot_group_admin_rights = options.bot_group_admin_rights;
        this.bot_broadcast_admin_rights = options.bot_broadcast_admin_rights;
        this.premium_gifts = options.premium_gifts;
        this.wallpaper = options.wallpaper;
        this.stories = options.stories;
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
    usernames: Username[]
    constructor(options: {
        user_id: string
        first_name: string
        last_name: string
        usernames: Username[]
    }) {
        this.user_id = options.user_id;
        this.first_name = options.first_name;
        this.last_name = options.last_name;
        this.usernames = options.usernames;
    }
}

export class PredicateUpdateNewAuthorization {
    _ = 'updateNewAuthorization' as const
    unconfirmed?: true
    hash: string
    date?: number
    device?: string
    location?: string
    constructor(options: {
        unconfirmed?: true
        hash: string
        date?: number
        device?: string
        location?: string
    }) {
        this.unconfirmed = options.unconfirmed;
        this.hash = options.hash;
        this.date = options.date;
        this.device = options.device;
        this.location = options.location;
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
    default_p2p_contacts?: true
    preload_featured_stickers?: true
    revoke_pm_inbox?: true
    blocked_mode?: true
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
    edit_time_limit: number
    revoke_time_limit: number
    revoke_pm_time_limit: number
    rating_e_decay: number
    stickers_recent_limit: number
    channels_read_media_period: number
    tmp_sessions?: number
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
    reactions_default?: Reaction
    autologin_token?: string
    constructor(options: {
        default_p2p_contacts?: true
        preload_featured_stickers?: true
        revoke_pm_inbox?: true
        blocked_mode?: true
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
        edit_time_limit: number
        revoke_time_limit: number
        revoke_pm_time_limit: number
        rating_e_decay: number
        stickers_recent_limit: number
        channels_read_media_period: number
        tmp_sessions?: number
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
        reactions_default?: Reaction
        autologin_token?: string
    }) {
        this.default_p2p_contacts = options.default_p2p_contacts;
        this.preload_featured_stickers = options.preload_featured_stickers;
        this.revoke_pm_inbox = options.revoke_pm_inbox;
        this.blocked_mode = options.blocked_mode;
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
        this.edit_time_limit = options.edit_time_limit;
        this.revoke_time_limit = options.revoke_time_limit;
        this.revoke_pm_time_limit = options.revoke_pm_time_limit;
        this.rating_e_decay = options.rating_e_decay;
        this.stickers_recent_limit = options.stickers_recent_limit;
        this.channels_read_media_period = options.channels_read_media_period;
        this.tmp_sessions = options.tmp_sessions;
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
        this.reactions_default = options.reactions_default;
        this.autologin_token = options.autologin_token;
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
    size: string
    dc_id: number
    key_fingerprint: number
    constructor(options: {
        id: string
        access_hash: string
        size: string
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
    spoiler?: true
    file: InputFile
    thumb?: InputFile
    mime_type: string
    attributes: DocumentAttribute[]
    stickers?: InputDocument[]
    ttl_seconds?: number
    constructor(options: {
        nosound_video?: true
        force_file?: true
        spoiler?: true
        file: InputFile
        thumb?: InputFile
        mime_type: string
        attributes: DocumentAttribute[]
        stickers?: InputDocument[]
        ttl_seconds?: number
    }) {
        this.nosound_video = options.nosound_video;
        this.force_file = options.force_file;
        this.spoiler = options.spoiler;
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
    spoiler?: true
    id: InputDocument
    ttl_seconds?: number
    query?: string
    constructor(options: {
        spoiler?: true
        id: InputDocument
        ttl_seconds?: number
        query?: string
    }) {
        this.spoiler = options.spoiler;
        this.id = options.id;
        this.ttl_seconds = options.ttl_seconds;
        this.query = options.query;
    }
}

export class PredicateMessageMediaDocument {
    _ = 'messageMediaDocument' as const
    nopremium?: true
    spoiler?: true
    video?: true
    round?: true
    voice?: true
    document?: Document
    alt_document?: Document
    ttl_seconds?: number
    constructor(options: {
        nopremium?: true
        spoiler?: true
        video?: true
        round?: true
        voice?: true
        document?: Document
        alt_document?: Document
        ttl_seconds?: number
    } = {}) {
        this.nopremium = options.nopremium;
        this.spoiler = options.spoiler;
        this.video = options.video;
        this.round = options.round;
        this.voice = options.voice;
        this.document = options.document;
        this.alt_document = options.alt_document;
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
    size: string
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
        size: string
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
    invert_media?: true
    inbox_date?: number
    type: string
    message: string
    media: MessageMedia
    entities: MessageEntity[]
    constructor(options: {
        popup?: true
        invert_media?: true
        inbox_date?: number
        type: string
        message: string
        media: MessageMedia
        entities: MessageEntity[]
    }) {
        this.popup = options.popup;
        this.invert_media = options.invert_media;
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
    nosound?: true
    duration: number
    w: number
    h: number
    preload_prefix_size?: number
    constructor(options: {
        round_message?: true
        supports_streaming?: true
        nosound?: true
        duration: number
        w: number
        h: number
        preload_prefix_size?: number
    }) {
        this.round_message = options.round_message;
        this.supports_streaming = options.supports_streaming;
        this.nosound = options.nosound;
        this.duration = options.duration;
        this.w = options.w;
        this.h = options.h;
        this.preload_prefix_size = options.preload_prefix_size;
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
    url?: string
    constructor(options: {
        id: string
        url?: string
    }) {
        this.id = options.id;
        this.url = options.url;
    }
}

export class PredicateWebPagePending {
    _ = 'webPagePending' as const
    id: string
    url?: string
    date: number
    constructor(options: {
        id: string
        url?: string
        date: number
    }) {
        this.id = options.id;
        this.url = options.url;
        this.date = options.date;
    }
}

export class PredicateWebPage {
    _ = 'webPage' as const
    has_large_media?: true
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
        has_large_media?: true
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
        this.has_large_media = options.has_large_media;
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
    force_large_media?: true
    force_small_media?: true
    manual?: true
    safe?: true
    webpage: WebPage
    constructor(options: {
        force_large_media?: true
        force_small_media?: true
        manual?: true
        safe?: true
        webpage: WebPage
    }) {
        this.force_large_media = options.force_large_media;
        this.force_small_media = options.force_small_media;
        this.manual = options.manual;
        this.safe = options.safe;
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
    unconfirmed?: true
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
        unconfirmed?: true
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
        this.unconfirmed = options.unconfirmed;
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
    login_email_pattern?: string
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
        login_email_pattern?: string
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
        this.login_email_pattern = options.login_email_pattern;
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
    verified?: true
    scam?: true
    fake?: true
    title: string
    about?: string
    photo: Photo
    participants_count: number
    participants?: User[]
    color: number
    constructor(options: {
        channel?: true
        broadcast?: true
        public?: true
        megagroup?: true
        request_needed?: true
        verified?: true
        scam?: true
        fake?: true
        title: string
        about?: string
        photo: Photo
        participants_count: number
        participants?: User[]
        color: number
    }) {
        this.channel = options.channel;
        this.broadcast = options.broadcast;
        this.public = options.public;
        this.megagroup = options.megagroup;
        this.request_needed = options.request_needed;
        this.verified = options.verified;
        this.scam = options.scam;
        this.fake = options.fake;
        this.title = options.title;
        this.about = options.about;
        this.photo = options.photo;
        this.participants_count = options.participants_count;
        this.participants = options.participants;
        this.color = options.color;
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
    date?: number
    constructor(options: {
        messages: number[]
        pts: number
        pts_count: number
        date?: number
    }) {
        this.messages = options.messages;
        this.pts = options.pts;
        this.pts_count = options.pts_count;
        this.date = options.date;
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
    text_color?: true
    channel_emoji_status?: true
    installed_date?: number
    id: string
    access_hash: string
    title: string
    short_name: string
    thumbs?: PhotoSize[]
    thumb_dc_id?: number
    thumb_version?: number
    thumb_document_id?: string
    count: number
    hash: number
    constructor(options: {
        archived?: true
        official?: true
        masks?: true
        animated?: true
        videos?: true
        emojis?: true
        text_color?: true
        channel_emoji_status?: true
        installed_date?: number
        id: string
        access_hash: string
        title: string
        short_name: string
        thumbs?: PhotoSize[]
        thumb_dc_id?: number
        thumb_version?: number
        thumb_document_id?: string
        count: number
        hash: number
    }) {
        this.archived = options.archived;
        this.official = options.official;
        this.masks = options.masks;
        this.animated = options.animated;
        this.videos = options.videos;
        this.emojis = options.emojis;
        this.text_color = options.text_color;
        this.channel_emoji_status = options.channel_emoji_status;
        this.installed_date = options.installed_date;
        this.id = options.id;
        this.access_hash = options.access_hash;
        this.title = options.title;
        this.short_name = options.short_name;
        this.thumbs = options.thumbs;
        this.thumb_dc_id = options.thumb_dc_id;
        this.thumb_version = options.thumb_version;
        this.thumb_document_id = options.thumb_document_id;
        this.count = options.count;
        this.hash = options.hash;
    }
}

export class PredicateMessagesStickerSet {
    _ = 'messages.stickerSet' as const
    set: StickerSet
    packs: StickerPack[]
    keywords: StickerKeyword[]
    documents: Document[]
    constructor(options: {
        set: StickerSet
        packs: StickerPack[]
        keywords: StickerKeyword[]
        documents: Document[]
    }) {
        this.set = options.set;
        this.packs = options.packs;
        this.keywords = options.keywords;
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
    bot_attach_menu?: true
    premium?: true
    attach_menu_enabled?: true
    bot_can_edit?: true
    close_friend?: true
    stories_hidden?: true
    stories_unavailable?: true
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
    emoji_status?: EmojiStatus
    usernames?: Username[]
    stories_max_id?: number
    color?: PeerColor
    profile_color?: PeerColor
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
        bot_attach_menu?: true
        premium?: true
        attach_menu_enabled?: true
        bot_can_edit?: true
        close_friend?: true
        stories_hidden?: true
        stories_unavailable?: true
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
        emoji_status?: EmojiStatus
        usernames?: Username[]
        stories_max_id?: number
        color?: PeerColor
        profile_color?: PeerColor
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
        this.bot_attach_menu = options.bot_attach_menu;
        this.premium = options.premium;
        this.attach_menu_enabled = options.attach_menu_enabled;
        this.bot_can_edit = options.bot_can_edit;
        this.close_friend = options.close_friend;
        this.stories_hidden = options.stories_hidden;
        this.stories_unavailable = options.stories_unavailable;
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
        this.emoji_status = options.emoji_status;
        this.usernames = options.usernames;
        this.stories_max_id = options.stories_max_id;
        this.color = options.color;
        this.profile_color = options.profile_color;
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
    user_id?: string
    description?: string
    description_photo?: Photo
    description_document?: Document
    commands?: BotCommand[]
    menu_button?: BotMenuButton
    constructor(options: {
        user_id?: string
        description?: string
        description_photo?: Photo
        description_document?: Document
        commands?: BotCommand[]
        menu_button?: BotMenuButton
    } = {}) {
        this.user_id = options.user_id;
        this.description = options.description;
        this.description_photo = options.description_photo;
        this.description_document = options.description_document;
        this.commands = options.commands;
        this.menu_button = options.menu_button;
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
    persistent?: true
    rows: KeyboardButtonRow[]
    placeholder?: string
    constructor(options: {
        resize?: true
        single_use?: true
        selective?: true
        persistent?: true
        rows: KeyboardButtonRow[]
        placeholder?: string
    }) {
        this.resize = options.resize;
        this.single_use = options.single_use;
        this.selective = options.selective;
        this.persistent = options.persistent;
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
    forum?: true
    stories_hidden?: true
    stories_hidden_min?: true
    stories_unavailable?: true
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
    usernames?: Username[]
    stories_max_id?: number
    color?: PeerColor
    profile_color?: PeerColor
    emoji_status?: EmojiStatus
    level?: number
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
        forum?: true
        stories_hidden?: true
        stories_hidden_min?: true
        stories_unavailable?: true
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
        usernames?: Username[]
        stories_max_id?: number
        color?: PeerColor
        profile_color?: PeerColor
        emoji_status?: EmojiStatus
        level?: number
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
        this.forum = options.forum;
        this.stories_hidden = options.stories_hidden;
        this.stories_hidden_min = options.stories_hidden_min;
        this.stories_unavailable = options.stories_unavailable;
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
        this.usernames = options.usernames;
        this.stories_max_id = options.stories_max_id;
        this.color = options.color;
        this.profile_color = options.profile_color;
        this.emoji_status = options.emoji_status;
        this.level = options.level;
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
    can_delete_channel?: true
    antispam?: true
    participants_hidden?: true
    translations_disabled?: true
    stories_pinned_available?: true
    view_forum_as_messages?: true
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
    available_reactions?: ChatReactions
    stories?: PeerStories
    wallpaper?: WallPaper
    constructor(options: {
        can_view_participants?: true
        can_set_username?: true
        can_set_stickers?: true
        hidden_prehistory?: true
        can_set_location?: true
        has_scheduled?: true
        can_view_stats?: true
        blocked?: true
        can_delete_channel?: true
        antispam?: true
        participants_hidden?: true
        translations_disabled?: true
        stories_pinned_available?: true
        view_forum_as_messages?: true
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
        available_reactions?: ChatReactions
        stories?: PeerStories
        wallpaper?: WallPaper
    }) {
        this.can_view_participants = options.can_view_participants;
        this.can_set_username = options.can_set_username;
        this.can_set_stickers = options.can_set_stickers;
        this.hidden_prehistory = options.hidden_prehistory;
        this.can_set_location = options.can_set_location;
        this.has_scheduled = options.has_scheduled;
        this.can_view_stats = options.can_view_stats;
        this.blocked = options.blocked;
        this.can_delete_channel = options.can_delete_channel;
        this.antispam = options.antispam;
        this.participants_hidden = options.participants_hidden;
        this.translations_disabled = options.translations_disabled;
        this.stories_pinned_available = options.stories_pinned_available;
        this.view_forum_as_messages = options.view_forum_as_messages;
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
        this.stories = options.stories;
        this.wallpaper = options.wallpaper;
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
    topics: ForumTopic[]
    chats: Chat[]
    users: User[]
    constructor(options: {
        inexact?: true
        pts: number
        count: number
        offset_id_offset?: number
        messages: Message[]
        topics: ForumTopic[]
        chats: Chat[]
        users: User[]
    }) {
        this.inexact = options.inexact;
        this.pts = options.pts;
        this.count = options.count;
        this.offset_id_offset = options.offset_id_offset;
        this.messages = options.messages;
        this.topics = options.topics;
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
    masks?: true
    emojis?: true
    constructor(options: {
        masks?: true
        emojis?: true
    } = {}) {
        this.masks = options.masks;
        this.emojis = options.emojis;
    }
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
    invert_media?: true
    message: string
    entities?: MessageEntity[]
    reply_markup?: ReplyMarkup
    constructor(options: {
        invert_media?: true
        message: string
        entities?: MessageEntity[]
        reply_markup?: ReplyMarkup
    }) {
        this.invert_media = options.invert_media;
        this.message = options.message;
        this.entities = options.entities;
        this.reply_markup = options.reply_markup;
    }
}

export class PredicateInputBotInlineMessageText {
    _ = 'inputBotInlineMessageText' as const
    no_webpage?: true
    invert_media?: true
    message: string
    entities?: MessageEntity[]
    reply_markup?: ReplyMarkup
    constructor(options: {
        no_webpage?: true
        invert_media?: true
        message: string
        entities?: MessageEntity[]
        reply_markup?: ReplyMarkup
    }) {
        this.no_webpage = options.no_webpage;
        this.invert_media = options.invert_media;
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
    invert_media?: true
    message: string
    entities?: MessageEntity[]
    reply_markup?: ReplyMarkup
    constructor(options: {
        invert_media?: true
        message: string
        entities?: MessageEntity[]
        reply_markup?: ReplyMarkup
    }) {
        this.invert_media = options.invert_media;
        this.message = options.message;
        this.entities = options.entities;
        this.reply_markup = options.reply_markup;
    }
}

export class PredicateBotInlineMessageText {
    _ = 'botInlineMessageText' as const
    no_webpage?: true
    invert_media?: true
    message: string
    entities?: MessageEntity[]
    reply_markup?: ReplyMarkup
    constructor(options: {
        no_webpage?: true
        invert_media?: true
        message: string
        entities?: MessageEntity[]
        reply_markup?: ReplyMarkup
    }) {
        this.no_webpage = options.no_webpage;
        this.invert_media = options.invert_media;
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
    switch_webview?: InlineBotWebView
    results: BotInlineResult[]
    cache_time: number
    users: User[]
    constructor(options: {
        gallery?: true
        query_id: string
        next_offset?: string
        switch_pm?: InlineBotSwitchPM
        switch_webview?: InlineBotWebView
        results: BotInlineResult[]
        cache_time: number
        users: User[]
    }) {
        this.gallery = options.gallery;
        this.query_id = options.query_id;
        this.next_offset = options.next_offset;
        this.switch_pm = options.switch_pm;
        this.switch_webview = options.switch_webview;
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
    saved_out?: true
    from_id?: Peer
    from_name?: string
    date: number
    channel_post?: number
    post_author?: string
    saved_from_peer?: Peer
    saved_from_msg_id?: number
    saved_from_id?: Peer
    saved_from_name?: string
    saved_date?: number
    psa_type?: string
    constructor(options: {
        imported?: true
        saved_out?: true
        from_id?: Peer
        from_name?: string
        date: number
        channel_post?: number
        post_author?: string
        saved_from_peer?: Peer
        saved_from_msg_id?: number
        saved_from_id?: Peer
        saved_from_name?: string
        saved_date?: number
        psa_type?: string
    }) {
        this.imported = options.imported;
        this.saved_out = options.saved_out;
        this.from_id = options.from_id;
        this.from_name = options.from_name;
        this.date = options.date;
        this.channel_post = options.channel_post;
        this.post_author = options.post_author;
        this.saved_from_peer = options.saved_from_peer;
        this.saved_from_msg_id = options.saved_from_msg_id;
        this.saved_from_id = options.saved_from_id;
        this.saved_from_name = options.saved_from_name;
        this.saved_date = options.saved_date;
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
    peer_types?: InlineQueryPeerType[]
    constructor(options: {
        same_peer?: true
        text: string
        query: string
        peer_types?: InlineQueryPeerType[]
    }) {
        this.same_peer = options.same_peer;
        this.text = options.text;
        this.query = options.query;
        this.peer_types = options.peer_types;
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
    top_msg_id?: number
    draft: DraftMessage
    constructor(options: {
        peer: Peer
        top_msg_id?: number
        draft: DraftMessage
    }) {
        this.peer = options.peer;
        this.top_msg_id = options.top_msg_id;
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
    invert_media?: true
    reply_to?: InputReplyTo
    message: string
    entities?: MessageEntity[]
    media?: InputMedia
    date: number
    constructor(options: {
        no_webpage?: true
        invert_media?: true
        reply_to?: InputReplyTo
        message: string
        entities?: MessageEntity[]
        media?: InputMedia
        date: number
    }) {
        this.no_webpage = options.no_webpage;
        this.invert_media = options.invert_media;
        this.reply_to = options.reply_to;
        this.message = options.message;
        this.entities = options.entities;
        this.media = options.media;
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
    premium?: true
    hash: string
    count: number
    sets: StickerSetCovered[]
    unread: string[]
    constructor(options: {
        premium?: true
        hash: string
        count: number
        sets: StickerSetCovered[]
        unread: string[]
    }) {
        this.premium = options.premium;
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
    spoiler?: true
    url: string
    ttl_seconds?: number
    constructor(options: {
        spoiler?: true
        url: string
        ttl_seconds?: number
    }) {
        this.spoiler = options.spoiler;
        this.url = options.url;
        this.ttl_seconds = options.ttl_seconds;
    }
}

export class PredicateInputMediaDocumentExternal {
    _ = 'inputMediaDocumentExternal' as const
    spoiler?: true
    url: string
    ttl_seconds?: number
    constructor(options: {
        spoiler?: true
        url: string
        ttl_seconds?: number
    }) {
        this.spoiler = options.spoiler;
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
    recurring?: true
    currency: string
    prices: LabeledPrice[]
    max_tip_amount?: string
    suggested_tip_amounts?: string[]
    terms_url?: string
    constructor(options: {
        test?: true
        name_requested?: true
        phone_requested?: true
        email_requested?: true
        shipping_address_requested?: true
        flexible?: true
        phone_to_provider?: true
        email_to_provider?: true
        recurring?: true
        currency: string
        prices: LabeledPrice[]
        max_tip_amount?: string
        suggested_tip_amounts?: string[]
        terms_url?: string
    }) {
        this.test = options.test;
        this.name_requested = options.name_requested;
        this.phone_requested = options.phone_requested;
        this.email_requested = options.email_requested;
        this.shipping_address_requested = options.shipping_address_requested;
        this.flexible = options.flexible;
        this.phone_to_provider = options.phone_to_provider;
        this.email_to_provider = options.email_to_provider;
        this.recurring = options.recurring;
        this.currency = options.currency;
        this.prices = options.prices;
        this.max_tip_amount = options.max_tip_amount;
        this.suggested_tip_amounts = options.suggested_tip_amounts;
        this.terms_url = options.terms_url;
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
    extended_media?: InputMedia
    constructor(options: {
        title: string
        description: string
        photo?: InputWebDocument
        invoice: Invoice
        payload: Uint8Array
        provider: string
        provider_data: DataJSON
        start_param?: string
        extended_media?: InputMedia
    }) {
        this.title = options.title;
        this.description = options.description;
        this.photo = options.photo;
        this.invoice = options.invoice;
        this.payload = options.payload;
        this.provider = options.provider;
        this.provider_data = options.provider_data;
        this.start_param = options.start_param;
        this.extended_media = options.extended_media;
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
    recurring_init?: true
    recurring_used?: true
    currency: string
    total_amount: string
    payload: Uint8Array
    info?: PaymentRequestedInfo
    shipping_option_id?: string
    charge: PaymentCharge
    constructor(options: {
        recurring_init?: true
        recurring_used?: true
        currency: string
        total_amount: string
        payload: Uint8Array
        info?: PaymentRequestedInfo
        shipping_option_id?: string
        charge: PaymentCharge
    }) {
        this.recurring_init = options.recurring_init;
        this.recurring_used = options.recurring_used;
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
    extended_media?: MessageExtendedMedia
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
        extended_media?: MessageExtendedMedia
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
        this.extended_media = options.extended_media;
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
    recurring_init?: true
    recurring_used?: true
    currency: string
    total_amount: string
    invoice_slug?: string
    constructor(options: {
        recurring_init?: true
        recurring_used?: true
        currency: string
        total_amount: string
        invoice_slug?: string
    }) {
        this.recurring_init = options.recurring_init;
        this.recurring_used = options.recurring_used;
        this.currency = options.currency;
        this.total_amount = options.total_amount;
        this.invoice_slug = options.invoice_slug;
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
    title: string
    description: string
    photo?: WebDocument
    invoice: Invoice
    provider_id: string
    url: string
    native_provider?: string
    native_params?: DataJSON
    additional_methods?: PaymentFormMethod[]
    saved_info?: PaymentRequestedInfo
    saved_credentials?: PaymentSavedCredentials[]
    users: User[]
    constructor(options: {
        can_save_credentials?: true
        password_missing?: true
        form_id: string
        bot_id: string
        title: string
        description: string
        photo?: WebDocument
        invoice: Invoice
        provider_id: string
        url: string
        native_provider?: string
        native_params?: DataJSON
        additional_methods?: PaymentFormMethod[]
        saved_info?: PaymentRequestedInfo
        saved_credentials?: PaymentSavedCredentials[]
        users: User[]
    }) {
        this.can_save_credentials = options.can_save_credentials;
        this.password_missing = options.password_missing;
        this.form_id = options.form_id;
        this.bot_id = options.bot_id;
        this.title = options.title;
        this.description = options.description;
        this.photo = options.photo;
        this.invoice = options.invoice;
        this.provider_id = options.provider_id;
        this.url = options.url;
        this.native_provider = options.native_provider;
        this.native_params = options.native_params;
        this.additional_methods = options.additional_methods;
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
    keywords?: string
    constructor(options: {
        document: InputDocument
        emoji: string
        mask_coords?: MaskCoords
        keywords?: string
    }) {
        this.document = options.document;
        this.emoji = options.emoji;
        this.mask_coords = options.mask_coords;
        this.keywords = options.keywords;
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
    tcp?: true
    id: string
    ip: string
    ipv6: string
    port: number
    peer_tag: Uint8Array
    constructor(options: {
        tcp?: true
        id: string
        ip: string
        ipv6: string
        port: number
        peer_tag: Uint8Array
    }) {
        this.tcp = options.tcp;
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
    forums?: true
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
        forums?: true
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
        this.forums = options.forums;
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
    top_msg_id?: number
    messages: number[]
    constructor(options: {
        channel_id: string
        top_msg_id?: number
        messages: number[]
    }) {
        this.channel_id = options.channel_id;
        this.top_msg_id = options.top_msg_id;
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
    attach_menu?: true
    from_request?: true
    domain?: string
    app?: BotApp
    constructor(options: {
        attach_menu?: true
        from_request?: true
        domain?: string
        app?: BotApp
    } = {}) {
        this.attach_menu = options.attach_menu;
        this.from_request = options.from_request;
        this.domain = options.domain;
        this.app = options.app;
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
    offset: string
    limit: number
    hash: Uint8Array
    constructor(options: {
        offset: string
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
    size: string
    dc_id: number
    date: number
    file_hash: Uint8Array
    secret: Uint8Array
    constructor(options: {
        id: string
        access_hash: string
        size: string
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
    recent_voters?: Peer[]
    solution?: string
    solution_entities?: MessageEntity[]
    constructor(options: {
        min?: true
        results?: PollAnswerVoters[]
        total_voters?: number
        recent_voters?: Peer[]
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
    manage_topics?: true
    post_stories?: true
    edit_stories?: true
    delete_stories?: true
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
        manage_topics?: true
        post_stories?: true
        edit_stories?: true
        delete_stories?: true
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
        this.manage_topics = options.manage_topics;
        this.post_stories = options.post_stories;
        this.edit_stories = options.edit_stories;
        this.delete_stories = options.delete_stories;
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
    manage_topics?: true
    send_photos?: true
    send_videos?: true
    send_roundvideos?: true
    send_audios?: true
    send_voices?: true
    send_docs?: true
    send_plain?: true
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
        manage_topics?: true
        send_photos?: true
        send_videos?: true
        send_roundvideos?: true
        send_audios?: true
        send_voices?: true
        send_docs?: true
        send_plain?: true
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
        this.manage_topics = options.manage_topics;
        this.send_photos = options.send_photos;
        this.send_videos = options.send_videos;
        this.send_roundvideos = options.send_roundvideos;
        this.send_audios = options.send_audios;
        this.send_voices = options.send_voices;
        this.send_docs = options.send_docs;
        this.send_plain = options.send_plain;
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
    allow_firebase?: true
    logout_tokens?: Uint8Array[]
    token?: string
    app_sandbox?: boolean
    constructor(options: {
        allow_flashcall?: true
        current_number?: true
        allow_app_hash?: true
        allow_missed_call?: true
        allow_firebase?: true
        logout_tokens?: Uint8Array[]
        token?: string
        app_sandbox?: boolean
    } = {}) {
        this.allow_flashcall = options.allow_flashcall;
        this.current_number = options.current_number;
        this.allow_app_hash = options.allow_app_hash;
        this.allow_missed_call = options.allow_missed_call;
        this.allow_firebase = options.allow_firebase;
        this.logout_tokens = options.logout_tokens;
        this.token = options.token;
        this.app_sandbox = options.app_sandbox;
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
    emoticon?: string
    constructor(options: {
        blur?: true
        motion?: true
        background_color?: number
        second_background_color?: number
        third_background_color?: number
        fourth_background_color?: number
        intensity?: number
        rotation?: number
        emoticon?: string
    } = {}) {
        this.blur = options.blur;
        this.motion = options.motion;
        this.background_color = options.background_color;
        this.second_background_color = options.second_background_color;
        this.third_background_color = options.third_background_color;
        this.fourth_background_color = options.fourth_background_color;
        this.intensity = options.intensity;
        this.rotation = options.rotation;
        this.emoticon = options.emoticon;
    }
}

export class PredicateAutoDownloadSettings {
    _ = 'autoDownloadSettings' as const
    disabled?: true
    video_preload_large?: true
    audio_preload_next?: true
    phonecalls_less_data?: true
    stories_preload?: true
    photo_size_max: number
    video_size_max: string
    file_size_max: string
    video_upload_maxbitrate: number
    small_queue_active_operations_max: number
    large_queue_active_operations_max: number
    constructor(options: {
        disabled?: true
        video_preload_large?: true
        audio_preload_next?: true
        phonecalls_less_data?: true
        stories_preload?: true
        photo_size_max: number
        video_size_max: string
        file_size_max: string
        video_upload_maxbitrate: number
        small_queue_active_operations_max: number
        large_queue_active_operations_max: number
    }) {
        this.disabled = options.disabled;
        this.video_preload_large = options.video_preload_large;
        this.audio_preload_next = options.audio_preload_next;
        this.phonecalls_less_data = options.phonecalls_less_data;
        this.stories_preload = options.stories_preload;
        this.photo_size_max = options.photo_size_max;
        this.video_size_max = options.video_size_max;
        this.file_size_max = options.file_size_max;
        this.video_upload_maxbitrate = options.video_upload_maxbitrate;
        this.small_queue_active_operations_max = options.small_queue_active_operations_max;
        this.large_queue_active_operations_max = options.large_queue_active_operations_max;
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
    peer: Peer
    options: Uint8Array[]
    qts: number
    constructor(options: {
        poll_id: string
        peer: Peer
        options: Uint8Array[]
        qts: number
    }) {
        this.poll_id = options.poll_id;
        this.peer = options.peer;
        this.options = options.options;
        this.qts = options.qts;
    }
}

export class PredicateMessagesVotesList {
    _ = 'messages.votesList' as const
    count: number
    votes: MessagePeerVote[]
    chats: Chat[]
    users: User[]
    next_offset?: string
    constructor(options: {
        count: number
        votes: MessagePeerVote[]
        chats: Chat[]
        users: User[]
        next_offset?: string
    }) {
        this.count = options.count;
        this.votes = options.votes;
        this.chats = options.chats;
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

export class PredicateStatsBroadcastStats {
    _ = 'stats.broadcastStats' as const
    period: StatsDateRangeDays
    followers: StatsAbsValueAndPrev
    views_per_post: StatsAbsValueAndPrev
    shares_per_post: StatsAbsValueAndPrev
    reactions_per_post: StatsAbsValueAndPrev
    views_per_story: StatsAbsValueAndPrev
    shares_per_story: StatsAbsValueAndPrev
    reactions_per_story: StatsAbsValueAndPrev
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
    reactions_by_emotion_graph: StatsGraph
    story_interactions_graph: StatsGraph
    story_reactions_by_emotion_graph: StatsGraph
    recent_posts_interactions: PostInteractionCounters[]
    constructor(options: {
        period: StatsDateRangeDays
        followers: StatsAbsValueAndPrev
        views_per_post: StatsAbsValueAndPrev
        shares_per_post: StatsAbsValueAndPrev
        reactions_per_post: StatsAbsValueAndPrev
        views_per_story: StatsAbsValueAndPrev
        shares_per_story: StatsAbsValueAndPrev
        reactions_per_story: StatsAbsValueAndPrev
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
        reactions_by_emotion_graph: StatsGraph
        story_interactions_graph: StatsGraph
        story_reactions_by_emotion_graph: StatsGraph
        recent_posts_interactions: PostInteractionCounters[]
    }) {
        this.period = options.period;
        this.followers = options.followers;
        this.views_per_post = options.views_per_post;
        this.shares_per_post = options.shares_per_post;
        this.reactions_per_post = options.reactions_per_post;
        this.views_per_story = options.views_per_story;
        this.shares_per_story = options.shares_per_story;
        this.reactions_per_story = options.reactions_per_story;
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
        this.reactions_by_emotion_graph = options.reactions_by_emotion_graph;
        this.story_interactions_graph = options.story_interactions_graph;
        this.story_reactions_by_emotion_graph = options.story_reactions_by_emotion_graph;
        this.recent_posts_interactions = options.recent_posts_interactions;
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
    archive_and_mute_new_noncontact_peers?: true
    keep_archived_unmuted?: true
    keep_archived_folders?: true
    constructor(options: {
        archive_and_mute_new_noncontact_peers?: true
        keep_archived_unmuted?: true
        keep_archived_folders?: true
    } = {}) {
        this.archive_and_mute_new_noncontact_peers = options.archive_and_mute_new_noncontact_peers;
        this.keep_archived_unmuted = options.keep_archived_unmuted;
        this.keep_archived_folders = options.keep_archived_folders;
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
    forum_topic?: true
    quote?: true
    reply_to_msg_id?: number
    reply_to_peer_id?: Peer
    reply_from?: MessageFwdHeader
    reply_media?: MessageMedia
    reply_to_top_id?: number
    quote_text?: string
    quote_entities?: MessageEntity[]
    quote_offset?: number
    constructor(options: {
        reply_to_scheduled?: true
        forum_topic?: true
        quote?: true
        reply_to_msg_id?: number
        reply_to_peer_id?: Peer
        reply_from?: MessageFwdHeader
        reply_media?: MessageMedia
        reply_to_top_id?: number
        quote_text?: string
        quote_entities?: MessageEntity[]
        quote_offset?: number
    } = {}) {
        this.reply_to_scheduled = options.reply_to_scheduled;
        this.forum_topic = options.forum_topic;
        this.quote = options.quote;
        this.reply_to_msg_id = options.reply_to_msg_id;
        this.reply_to_peer_id = options.reply_to_peer_id;
        this.reply_from = options.reply_from;
        this.reply_media = options.reply_media;
        this.reply_to_top_id = options.reply_to_top_id;
        this.quote_text = options.quote_text;
        this.quote_entities = options.quote_entities;
        this.quote_offset = options.quote_offset;
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
    blocked?: true
    blocked_my_stories_from?: true
    peer_id: Peer
    constructor(options: {
        blocked?: true
        blocked_my_stories_from?: true
        peer_id: Peer
    }) {
        this.blocked = options.blocked;
        this.blocked_my_stories_from = options.blocked_my_stories_from;
        this.peer_id = options.peer_id;
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
    reactions_by_emotion_graph: StatsGraph
    constructor(options: {
        views_graph: StatsGraph
        reactions_by_emotion_graph: StatsGraph
    }) {
        this.views_graph = options.views_graph;
        this.reactions_by_emotion_graph = options.reactions_by_emotion_graph;
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
    auto_setting_from?: string
    constructor(options: {
        period: number
        auto_setting_from?: string
    }) {
        this.period = options.period;
        this.auto_setting_from = options.auto_setting_from;
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
    via_chatlist?: true
    channel_id: string
    date: number
    actor_id: string
    user_id: string
    prev_participant?: ChannelParticipant
    new_participant?: ChannelParticipant
    invite?: ExportedChatInvite
    qts: number
    constructor(options: {
        via_chatlist?: true
        channel_id: string
        date: number
        actor_id: string
        user_id: string
        prev_participant?: ChannelParticipant
        new_participant?: ChannelParticipant
        invite?: ExportedChatInvite
        qts: number
    }) {
        this.via_chatlist = options.via_chatlist;
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
    via_chatlist?: true
    user_id: string
    date: number
    about?: string
    approved_by?: string
    constructor(options: {
        requested?: true
        via_chatlist?: true
        user_id: string
        date: number
        about?: string
        approved_by?: string
    }) {
        this.requested = options.requested;
        this.via_chatlist = options.via_chatlist;
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
    via_chatlist?: true
    invite: ExportedChatInvite
    constructor(options: {
        via_chatlist?: true
        invite: ExportedChatInvite
    }) {
        this.via_chatlist = options.via_chatlist;
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
    show_peer_photo?: true
    random_id: Uint8Array
    from_id?: Peer
    chat_invite?: ChatInvite
    chat_invite_hash?: string
    channel_post?: number
    start_param?: string
    webpage?: SponsoredWebPage
    app?: BotApp
    message: string
    entities?: MessageEntity[]
    button_text?: string
    sponsor_info?: string
    additional_info?: string
    constructor(options: {
        recommended?: true
        show_peer_photo?: true
        random_id: Uint8Array
        from_id?: Peer
        chat_invite?: ChatInvite
        chat_invite_hash?: string
        channel_post?: number
        start_param?: string
        webpage?: SponsoredWebPage
        app?: BotApp
        message: string
        entities?: MessageEntity[]
        button_text?: string
        sponsor_info?: string
        additional_info?: string
    }) {
        this.recommended = options.recommended;
        this.show_peer_photo = options.show_peer_photo;
        this.random_id = options.random_id;
        this.from_id = options.from_id;
        this.chat_invite = options.chat_invite;
        this.chat_invite_hash = options.chat_invite_hash;
        this.channel_post = options.channel_post;
        this.start_param = options.start_param;
        this.webpage = options.webpage;
        this.app = options.app;
        this.message = options.message;
        this.entities = options.entities;
        this.button_text = options.button_text;
        this.sponsor_info = options.sponsor_info;
        this.additional_info = options.additional_info;
    }
}

export class PredicateMessagesSponsoredMessages {
    _ = 'messages.sponsoredMessages' as const
    posts_between?: number
    messages: SponsoredMessage[]
    chats: Chat[]
    users: User[]
    constructor(options: {
        posts_between?: number
        messages: SponsoredMessage[]
        chats: Chat[]
        users: User[]
    }) {
        this.posts_between = options.posts_between;
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
    peers: SendAsPeer[]
    chats: Chat[]
    users: User[]
    constructor(options: {
        peers: SendAsPeer[]
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
    top_msg_id?: number
    reactions: MessageReactions
    constructor(options: {
        peer: Peer
        msg_id: number
        top_msg_id?: number
        reactions: MessageReactions
    }) {
        this.peer = options.peer;
        this.msg_id = options.msg_id;
        this.top_msg_id = options.top_msg_id;
        this.reactions = options.reactions;
    }
}

export class PredicateReactionCount {
    _ = 'reactionCount' as const
    chosen_order?: number
    reaction: Reaction
    count: number
    constructor(options: {
        chosen_order?: number
        reaction: Reaction
        count: number
    }) {
        this.chosen_order = options.chosen_order;
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
    premium?: true
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
        premium?: true
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
        this.premium = options.premium;
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
    prev_value: ChatReactions
    new_value: ChatReactions
    constructor(options: {
        prev_value: ChatReactions
        new_value: ChatReactions
    }) {
        this.prev_value = options.prev_value;
        this.new_value = options.new_value;
    }
}

export class PredicateMessagePeerReaction {
    _ = 'messagePeerReaction' as const
    big?: true
    unread?: true
    my?: true
    peer_id: Peer
    date: number
    reaction: Reaction
    constructor(options: {
        big?: true
        unread?: true
        my?: true
        peer_id: Peer
        date: number
        reaction: Reaction
    }) {
        this.big = options.big;
        this.unread = options.unread;
        this.my = options.my;
        this.peer_id = options.peer_id;
        this.date = options.date;
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

export class PredicateAttachMenuBotIconColor {
    _ = 'attachMenuBotIconColor' as const
    name: string
    color: number
    constructor(options: {
        name: string
        color: number
    }) {
        this.name = options.name;
        this.color = options.color;
    }
}

export class PredicateAttachMenuBotIcon {
    _ = 'attachMenuBotIcon' as const
    name: string
    icon: Document
    colors?: AttachMenuBotIconColor[]
    constructor(options: {
        name: string
        icon: Document
        colors?: AttachMenuBotIconColor[]
    }) {
        this.name = options.name;
        this.icon = options.icon;
        this.colors = options.colors;
    }
}

export class PredicateAttachMenuBot {
    _ = 'attachMenuBot' as const
    inactive?: true
    has_settings?: true
    request_write_access?: true
    show_in_attach_menu?: true
    show_in_side_menu?: true
    side_menu_disclaimer_needed?: true
    bot_id: string
    short_name: string
    peer_types?: AttachMenuPeerType[]
    icons: AttachMenuBotIcon[]
    constructor(options: {
        inactive?: true
        has_settings?: true
        request_write_access?: true
        show_in_attach_menu?: true
        show_in_side_menu?: true
        side_menu_disclaimer_needed?: true
        bot_id: string
        short_name: string
        peer_types?: AttachMenuPeerType[]
        icons: AttachMenuBotIcon[]
    }) {
        this.inactive = options.inactive;
        this.has_settings = options.has_settings;
        this.request_write_access = options.request_write_access;
        this.show_in_attach_menu = options.show_in_attach_menu;
        this.show_in_side_menu = options.show_in_side_menu;
        this.side_menu_disclaimer_needed = options.side_menu_disclaimer_needed;
        this.bot_id = options.bot_id;
        this.short_name = options.short_name;
        this.peer_types = options.peer_types;
        this.icons = options.icons;
    }
}

export class PredicateAttachMenuBotsNotModified {
    _ = 'attachMenuBotsNotModified' as const
}

export class PredicateAttachMenuBots {
    _ = 'attachMenuBots' as const
    hash: string
    bots: AttachMenuBot[]
    users: User[]
    constructor(options: {
        hash: string
        bots: AttachMenuBot[]
        users: User[]
    }) {
        this.hash = options.hash;
        this.bots = options.bots;
        this.users = options.users;
    }
}

export class PredicateAttachMenuBotsBot {
    _ = 'attachMenuBotsBot' as const
    bot: AttachMenuBot
    users: User[]
    constructor(options: {
        bot: AttachMenuBot
        users: User[]
    }) {
        this.bot = options.bot;
        this.users = options.users;
    }
}

export class PredicateUpdateAttachMenuBots {
    _ = 'updateAttachMenuBots' as const
}

export class PredicateWebViewResultUrl {
    _ = 'webViewResultUrl' as const
    query_id: string
    url: string
    constructor(options: {
        query_id: string
        url: string
    }) {
        this.query_id = options.query_id;
        this.url = options.url;
    }
}

export class PredicateSimpleWebViewResultUrl {
    _ = 'simpleWebViewResultUrl' as const
    url: string
    constructor(options: {
        url: string
    }) {
        this.url = options.url;
    }
}

export class PredicateWebViewMessageSent {
    _ = 'webViewMessageSent' as const
    msg_id?: InputBotInlineMessageID
    constructor(options: {
        msg_id?: InputBotInlineMessageID
    } = {}) {
        this.msg_id = options.msg_id;
    }
}

export class PredicateUpdateWebViewResultSent {
    _ = 'updateWebViewResultSent' as const
    query_id: string
    constructor(options: {
        query_id: string
    }) {
        this.query_id = options.query_id;
    }
}

export class PredicateKeyboardButtonWebView {
    _ = 'keyboardButtonWebView' as const
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

export class PredicateKeyboardButtonSimpleWebView {
    _ = 'keyboardButtonSimpleWebView' as const
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

export class PredicateMessageActionWebViewDataSentMe {
    _ = 'messageActionWebViewDataSentMe' as const
    text: string
    data: string
    constructor(options: {
        text: string
        data: string
    }) {
        this.text = options.text;
        this.data = options.data;
    }
}

export class PredicateMessageActionWebViewDataSent {
    _ = 'messageActionWebViewDataSent' as const
    text: string
    constructor(options: {
        text: string
    }) {
        this.text = options.text;
    }
}

export class PredicateUpdateBotMenuButton {
    _ = 'updateBotMenuButton' as const
    bot_id: string
    button: BotMenuButton
    constructor(options: {
        bot_id: string
        button: BotMenuButton
    }) {
        this.bot_id = options.bot_id;
        this.button = options.button;
    }
}

export class PredicateBotMenuButtonDefault {
    _ = 'botMenuButtonDefault' as const
}

export class PredicateBotMenuButtonCommands {
    _ = 'botMenuButtonCommands' as const
}

export class PredicateBotMenuButton {
    _ = 'botMenuButton' as const
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

export class PredicateAccountSavedRingtonesNotModified {
    _ = 'account.savedRingtonesNotModified' as const
}

export class PredicateAccountSavedRingtones {
    _ = 'account.savedRingtones' as const
    hash: string
    ringtones: Document[]
    constructor(options: {
        hash: string
        ringtones: Document[]
    }) {
        this.hash = options.hash;
        this.ringtones = options.ringtones;
    }
}

export class PredicateUpdateSavedRingtones {
    _ = 'updateSavedRingtones' as const
}

export class PredicateNotificationSoundDefault {
    _ = 'notificationSoundDefault' as const
}

export class PredicateNotificationSoundNone {
    _ = 'notificationSoundNone' as const
}

export class PredicateNotificationSoundLocal {
    _ = 'notificationSoundLocal' as const
    title: string
    data: string
    constructor(options: {
        title: string
        data: string
    }) {
        this.title = options.title;
        this.data = options.data;
    }
}

export class PredicateNotificationSoundRingtone {
    _ = 'notificationSoundRingtone' as const
    id: string
    constructor(options: {
        id: string
    }) {
        this.id = options.id;
    }
}

export class PredicateAccountSavedRingtone {
    _ = 'account.savedRingtone' as const
}

export class PredicateAccountSavedRingtoneConverted {
    _ = 'account.savedRingtoneConverted' as const
    document: Document
    constructor(options: {
        document: Document
    }) {
        this.document = options.document;
    }
}

export class PredicateAttachMenuPeerTypeSameBotPM {
    _ = 'attachMenuPeerTypeSameBotPM' as const
}

export class PredicateAttachMenuPeerTypeBotPM {
    _ = 'attachMenuPeerTypeBotPM' as const
}

export class PredicateAttachMenuPeerTypePM {
    _ = 'attachMenuPeerTypePM' as const
}

export class PredicateAttachMenuPeerTypeChat {
    _ = 'attachMenuPeerTypeChat' as const
}

export class PredicateAttachMenuPeerTypeBroadcast {
    _ = 'attachMenuPeerTypeBroadcast' as const
}

export class PredicateChatInvitePublicJoinRequests {
    _ = 'chatInvitePublicJoinRequests' as const
}

export class PredicateInputInvoiceMessage {
    _ = 'inputInvoiceMessage' as const
    peer: InputPeer
    msg_id: number
    constructor(options: {
        peer: InputPeer
        msg_id: number
    }) {
        this.peer = options.peer;
        this.msg_id = options.msg_id;
    }
}

export class PredicateInputInvoiceSlug {
    _ = 'inputInvoiceSlug' as const
    slug: string
    constructor(options: {
        slug: string
    }) {
        this.slug = options.slug;
    }
}

export class PredicatePaymentsExportedInvoice {
    _ = 'payments.exportedInvoice' as const
    url: string
    constructor(options: {
        url: string
    }) {
        this.url = options.url;
    }
}

export class PredicateUpdateTranscribedAudio {
    _ = 'updateTranscribedAudio' as const
    pending?: true
    peer: Peer
    msg_id: number
    transcription_id: string
    text: string
    constructor(options: {
        pending?: true
        peer: Peer
        msg_id: number
        transcription_id: string
        text: string
    }) {
        this.pending = options.pending;
        this.peer = options.peer;
        this.msg_id = options.msg_id;
        this.transcription_id = options.transcription_id;
        this.text = options.text;
    }
}

export class PredicateMessagesTranscribedAudio {
    _ = 'messages.transcribedAudio' as const
    pending?: true
    transcription_id: string
    text: string
    trial_remains_num?: number
    trial_remains_until_date?: number
    constructor(options: {
        pending?: true
        transcription_id: string
        text: string
        trial_remains_num?: number
        trial_remains_until_date?: number
    }) {
        this.pending = options.pending;
        this.transcription_id = options.transcription_id;
        this.text = options.text;
        this.trial_remains_num = options.trial_remains_num;
        this.trial_remains_until_date = options.trial_remains_until_date;
    }
}

export class PredicateDialogFilterDefault {
    _ = 'dialogFilterDefault' as const
}

export class PredicateHelpPremiumPromo {
    _ = 'help.premiumPromo' as const
    status_text: string
    status_entities: MessageEntity[]
    video_sections: string[]
    videos: Document[]
    period_options: PremiumSubscriptionOption[]
    users: User[]
    constructor(options: {
        status_text: string
        status_entities: MessageEntity[]
        video_sections: string[]
        videos: Document[]
        period_options: PremiumSubscriptionOption[]
        users: User[]
    }) {
        this.status_text = options.status_text;
        this.status_entities = options.status_entities;
        this.video_sections = options.video_sections;
        this.videos = options.videos;
        this.period_options = options.period_options;
        this.users = options.users;
    }
}

export class PredicateMessageEntityCustomEmoji {
    _ = 'messageEntityCustomEmoji' as const
    offset: number
    length: number
    document_id: string
    constructor(options: {
        offset: number
        length: number
        document_id: string
    }) {
        this.offset = options.offset;
        this.length = options.length;
        this.document_id = options.document_id;
    }
}

export class PredicateDocumentAttributeCustomEmoji {
    _ = 'documentAttributeCustomEmoji' as const
    free?: true
    text_color?: true
    alt: string
    stickerset: InputStickerSet
    constructor(options: {
        free?: true
        text_color?: true
        alt: string
        stickerset: InputStickerSet
    }) {
        this.free = options.free;
        this.text_color = options.text_color;
        this.alt = options.alt;
        this.stickerset = options.stickerset;
    }
}

export class PredicateStickerSetFullCovered {
    _ = 'stickerSetFullCovered' as const
    set: StickerSet
    packs: StickerPack[]
    keywords: StickerKeyword[]
    documents: Document[]
    constructor(options: {
        set: StickerSet
        packs: StickerPack[]
        keywords: StickerKeyword[]
        documents: Document[]
    }) {
        this.set = options.set;
        this.packs = options.packs;
        this.keywords = options.keywords;
        this.documents = options.documents;
    }
}

export class PredicateInputStorePaymentPremiumSubscription {
    _ = 'inputStorePaymentPremiumSubscription' as const
    restore?: true
    upgrade?: true
    constructor(options: {
        restore?: true
        upgrade?: true
    } = {}) {
        this.restore = options.restore;
        this.upgrade = options.upgrade;
    }
}

export class PredicateInputStorePaymentGiftPremium {
    _ = 'inputStorePaymentGiftPremium' as const
    user_id: InputUser
    currency: string
    amount: string
    constructor(options: {
        user_id: InputUser
        currency: string
        amount: string
    }) {
        this.user_id = options.user_id;
        this.currency = options.currency;
        this.amount = options.amount;
    }
}

export class PredicateMessageActionGiftPremium {
    _ = 'messageActionGiftPremium' as const
    currency: string
    amount: string
    months: number
    crypto_currency?: string
    crypto_amount?: string
    constructor(options: {
        currency: string
        amount: string
        months: number
        crypto_currency?: string
        crypto_amount?: string
    }) {
        this.currency = options.currency;
        this.amount = options.amount;
        this.months = options.months;
        this.crypto_currency = options.crypto_currency;
        this.crypto_amount = options.crypto_amount;
    }
}

export class PredicatePremiumGiftOption {
    _ = 'premiumGiftOption' as const
    months: number
    currency: string
    amount: string
    bot_url: string
    store_product?: string
    constructor(options: {
        months: number
        currency: string
        amount: string
        bot_url: string
        store_product?: string
    }) {
        this.months = options.months;
        this.currency = options.currency;
        this.amount = options.amount;
        this.bot_url = options.bot_url;
        this.store_product = options.store_product;
    }
}

export class PredicateInputStickerSetPremiumGifts {
    _ = 'inputStickerSetPremiumGifts' as const
}

export class PredicateUpdateReadFeaturedEmojiStickers {
    _ = 'updateReadFeaturedEmojiStickers' as const
}

export class PredicateInputPrivacyKeyVoiceMessages {
    _ = 'inputPrivacyKeyVoiceMessages' as const
}

export class PredicatePrivacyKeyVoiceMessages {
    _ = 'privacyKeyVoiceMessages' as const
}

export class PredicatePaymentFormMethod {
    _ = 'paymentFormMethod' as const
    url: string
    title: string
    constructor(options: {
        url: string
        title: string
    }) {
        this.url = options.url;
        this.title = options.title;
    }
}

export class PredicateInputWebFileAudioAlbumThumbLocation {
    _ = 'inputWebFileAudioAlbumThumbLocation' as const
    small?: true
    document?: InputDocument
    title?: string
    performer?: string
    constructor(options: {
        small?: true
        document?: InputDocument
        title?: string
        performer?: string
    } = {}) {
        this.small = options.small;
        this.document = options.document;
        this.title = options.title;
        this.performer = options.performer;
    }
}

export class PredicateEmojiStatusEmpty {
    _ = 'emojiStatusEmpty' as const
}

export class PredicateEmojiStatus {
    _ = 'emojiStatus' as const
    document_id: string
    constructor(options: {
        document_id: string
    }) {
        this.document_id = options.document_id;
    }
}

export class PredicateEmojiStatusUntil {
    _ = 'emojiStatusUntil' as const
    document_id: string
    until: number
    constructor(options: {
        document_id: string
        until: number
    }) {
        this.document_id = options.document_id;
        this.until = options.until;
    }
}

export class PredicateUpdateUserEmojiStatus {
    _ = 'updateUserEmojiStatus' as const
    user_id: string
    emoji_status: EmojiStatus
    constructor(options: {
        user_id: string
        emoji_status: EmojiStatus
    }) {
        this.user_id = options.user_id;
        this.emoji_status = options.emoji_status;
    }
}

export class PredicateUpdateRecentEmojiStatuses {
    _ = 'updateRecentEmojiStatuses' as const
}

export class PredicateAccountEmojiStatusesNotModified {
    _ = 'account.emojiStatusesNotModified' as const
}

export class PredicateAccountEmojiStatuses {
    _ = 'account.emojiStatuses' as const
    hash: string
    statuses: EmojiStatus[]
    constructor(options: {
        hash: string
        statuses: EmojiStatus[]
    }) {
        this.hash = options.hash;
        this.statuses = options.statuses;
    }
}

export class PredicateReactionEmpty {
    _ = 'reactionEmpty' as const
}

export class PredicateReactionEmoji {
    _ = 'reactionEmoji' as const
    emoticon: string
    constructor(options: {
        emoticon: string
    }) {
        this.emoticon = options.emoticon;
    }
}

export class PredicateReactionCustomEmoji {
    _ = 'reactionCustomEmoji' as const
    document_id: string
    constructor(options: {
        document_id: string
    }) {
        this.document_id = options.document_id;
    }
}

export class PredicateChatReactionsNone {
    _ = 'chatReactionsNone' as const
}

export class PredicateChatReactionsAll {
    _ = 'chatReactionsAll' as const
    allow_custom?: true
    constructor(options: {
        allow_custom?: true
    } = {}) {
        this.allow_custom = options.allow_custom;
    }
}

export class PredicateChatReactionsSome {
    _ = 'chatReactionsSome' as const
    reactions: Reaction[]
    constructor(options: {
        reactions: Reaction[]
    }) {
        this.reactions = options.reactions;
    }
}

export class PredicateMessagesReactionsNotModified {
    _ = 'messages.reactionsNotModified' as const
}

export class PredicateMessagesReactions {
    _ = 'messages.reactions' as const
    hash: string
    reactions: Reaction[]
    constructor(options: {
        hash: string
        reactions: Reaction[]
    }) {
        this.hash = options.hash;
        this.reactions = options.reactions;
    }
}

export class PredicateUpdateRecentReactions {
    _ = 'updateRecentReactions' as const
}

export class PredicateUpdateMoveStickerSetToTop {
    _ = 'updateMoveStickerSetToTop' as const
    masks?: true
    emojis?: true
    stickerset: string
    constructor(options: {
        masks?: true
        emojis?: true
        stickerset: string
    }) {
        this.masks = options.masks;
        this.emojis = options.emojis;
        this.stickerset = options.stickerset;
    }
}

export class PredicateAuthSentCodeTypeEmailCode {
    _ = 'auth.sentCodeTypeEmailCode' as const
    apple_signin_allowed?: true
    google_signin_allowed?: true
    email_pattern: string
    length: number
    reset_available_period?: number
    reset_pending_date?: number
    constructor(options: {
        apple_signin_allowed?: true
        google_signin_allowed?: true
        email_pattern: string
        length: number
        reset_available_period?: number
        reset_pending_date?: number
    }) {
        this.apple_signin_allowed = options.apple_signin_allowed;
        this.google_signin_allowed = options.google_signin_allowed;
        this.email_pattern = options.email_pattern;
        this.length = options.length;
        this.reset_available_period = options.reset_available_period;
        this.reset_pending_date = options.reset_pending_date;
    }
}

export class PredicateAuthSentCodeTypeSetUpEmailRequired {
    _ = 'auth.sentCodeTypeSetUpEmailRequired' as const
    apple_signin_allowed?: true
    google_signin_allowed?: true
    constructor(options: {
        apple_signin_allowed?: true
        google_signin_allowed?: true
    } = {}) {
        this.apple_signin_allowed = options.apple_signin_allowed;
        this.google_signin_allowed = options.google_signin_allowed;
    }
}

export class PredicateEmailVerifyPurposeLoginSetup {
    _ = 'emailVerifyPurposeLoginSetup' as const
    phone_number: string
    phone_code_hash: string
    constructor(options: {
        phone_number: string
        phone_code_hash: string
    }) {
        this.phone_number = options.phone_number;
        this.phone_code_hash = options.phone_code_hash;
    }
}

export class PredicateEmailVerifyPurposeLoginChange {
    _ = 'emailVerifyPurposeLoginChange' as const
}

export class PredicateEmailVerifyPurposePassport {
    _ = 'emailVerifyPurposePassport' as const
}

export class PredicateEmailVerificationCode {
    _ = 'emailVerificationCode' as const
    code: string
    constructor(options: {
        code: string
    }) {
        this.code = options.code;
    }
}

export class PredicateEmailVerificationGoogle {
    _ = 'emailVerificationGoogle' as const
    token: string
    constructor(options: {
        token: string
    }) {
        this.token = options.token;
    }
}

export class PredicateEmailVerificationApple {
    _ = 'emailVerificationApple' as const
    token: string
    constructor(options: {
        token: string
    }) {
        this.token = options.token;
    }
}

export class PredicateAccountEmailVerified {
    _ = 'account.emailVerified' as const
    email: string
    constructor(options: {
        email: string
    }) {
        this.email = options.email;
    }
}

export class PredicateAccountEmailVerifiedLogin {
    _ = 'account.emailVerifiedLogin' as const
    email: string
    sent_code: AuthSentCode
    constructor(options: {
        email: string
        sent_code: AuthSentCode
    }) {
        this.email = options.email;
        this.sent_code = options.sent_code;
    }
}

export class PredicatePremiumSubscriptionOption {
    _ = 'premiumSubscriptionOption' as const
    current?: true
    can_purchase_upgrade?: true
    transaction?: string
    months: number
    currency: string
    amount: string
    bot_url: string
    store_product?: string
    constructor(options: {
        current?: true
        can_purchase_upgrade?: true
        transaction?: string
        months: number
        currency: string
        amount: string
        bot_url: string
        store_product?: string
    }) {
        this.current = options.current;
        this.can_purchase_upgrade = options.can_purchase_upgrade;
        this.transaction = options.transaction;
        this.months = options.months;
        this.currency = options.currency;
        this.amount = options.amount;
        this.bot_url = options.bot_url;
        this.store_product = options.store_product;
    }
}

export class PredicateInputStickerSetEmojiGenericAnimations {
    _ = 'inputStickerSetEmojiGenericAnimations' as const
}

export class PredicateInputStickerSetEmojiDefaultStatuses {
    _ = 'inputStickerSetEmojiDefaultStatuses' as const
}

export class PredicateSendAsPeer {
    _ = 'sendAsPeer' as const
    premium_required?: true
    peer: Peer
    constructor(options: {
        premium_required?: true
        peer: Peer
    }) {
        this.premium_required = options.premium_required;
        this.peer = options.peer;
    }
}

export class PredicateMessageExtendedMediaPreview {
    _ = 'messageExtendedMediaPreview' as const
    w?: number
    h?: number
    thumb?: PhotoSize
    video_duration?: number
    constructor(options: {
        w?: number
        h?: number
        thumb?: PhotoSize
        video_duration?: number
    } = {}) {
        this.w = options.w;
        this.h = options.h;
        this.thumb = options.thumb;
        this.video_duration = options.video_duration;
    }
}

export class PredicateMessageExtendedMedia {
    _ = 'messageExtendedMedia' as const
    media: MessageMedia
    constructor(options: {
        media: MessageMedia
    }) {
        this.media = options.media;
    }
}

export class PredicateUpdateMessageExtendedMedia {
    _ = 'updateMessageExtendedMedia' as const
    peer: Peer
    msg_id: number
    extended_media: MessageExtendedMedia
    constructor(options: {
        peer: Peer
        msg_id: number
        extended_media: MessageExtendedMedia
    }) {
        this.peer = options.peer;
        this.msg_id = options.msg_id;
        this.extended_media = options.extended_media;
    }
}

export class PredicateStickerKeyword {
    _ = 'stickerKeyword' as const
    document_id: string
    keyword: string[]
    constructor(options: {
        document_id: string
        keyword: string[]
    }) {
        this.document_id = options.document_id;
        this.keyword = options.keyword;
    }
}

export class PredicateUsername {
    _ = 'username' as const
    editable?: true
    active?: true
    username: string
    constructor(options: {
        editable?: true
        active?: true
        username: string
    }) {
        this.editable = options.editable;
        this.active = options.active;
        this.username = options.username;
    }
}

export class PredicateChannelAdminLogEventActionChangeUsernames {
    _ = 'channelAdminLogEventActionChangeUsernames' as const
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

export class PredicateChannelAdminLogEventActionToggleForum {
    _ = 'channelAdminLogEventActionToggleForum' as const
    new_value: boolean
    constructor(options: {
        new_value: boolean
    }) {
        this.new_value = options.new_value;
    }
}

export class PredicateChannelAdminLogEventActionCreateTopic {
    _ = 'channelAdminLogEventActionCreateTopic' as const
    topic: ForumTopic
    constructor(options: {
        topic: ForumTopic
    }) {
        this.topic = options.topic;
    }
}

export class PredicateChannelAdminLogEventActionEditTopic {
    _ = 'channelAdminLogEventActionEditTopic' as const
    prev_topic: ForumTopic
    new_topic: ForumTopic
    constructor(options: {
        prev_topic: ForumTopic
        new_topic: ForumTopic
    }) {
        this.prev_topic = options.prev_topic;
        this.new_topic = options.new_topic;
    }
}

export class PredicateChannelAdminLogEventActionDeleteTopic {
    _ = 'channelAdminLogEventActionDeleteTopic' as const
    topic: ForumTopic
    constructor(options: {
        topic: ForumTopic
    }) {
        this.topic = options.topic;
    }
}

export class PredicateChannelAdminLogEventActionPinTopic {
    _ = 'channelAdminLogEventActionPinTopic' as const
    prev_topic?: ForumTopic
    new_topic?: ForumTopic
    constructor(options: {
        prev_topic?: ForumTopic
        new_topic?: ForumTopic
    } = {}) {
        this.prev_topic = options.prev_topic;
        this.new_topic = options.new_topic;
    }
}

export class PredicateForumTopicDeleted {
    _ = 'forumTopicDeleted' as const
    id: number
    constructor(options: {
        id: number
    }) {
        this.id = options.id;
    }
}

export class PredicateForumTopic {
    _ = 'forumTopic' as const
    my?: true
    closed?: true
    pinned?: true
    short?: true
    hidden?: true
    id: number
    date: number
    title: string
    icon_color: number
    icon_emoji_id?: string
    top_message: number
    read_inbox_max_id: number
    read_outbox_max_id: number
    unread_count: number
    unread_mentions_count: number
    unread_reactions_count: number
    from_id: Peer
    notify_settings: PeerNotifySettings
    draft?: DraftMessage
    constructor(options: {
        my?: true
        closed?: true
        pinned?: true
        short?: true
        hidden?: true
        id: number
        date: number
        title: string
        icon_color: number
        icon_emoji_id?: string
        top_message: number
        read_inbox_max_id: number
        read_outbox_max_id: number
        unread_count: number
        unread_mentions_count: number
        unread_reactions_count: number
        from_id: Peer
        notify_settings: PeerNotifySettings
        draft?: DraftMessage
    }) {
        this.my = options.my;
        this.closed = options.closed;
        this.pinned = options.pinned;
        this.short = options.short;
        this.hidden = options.hidden;
        this.id = options.id;
        this.date = options.date;
        this.title = options.title;
        this.icon_color = options.icon_color;
        this.icon_emoji_id = options.icon_emoji_id;
        this.top_message = options.top_message;
        this.read_inbox_max_id = options.read_inbox_max_id;
        this.read_outbox_max_id = options.read_outbox_max_id;
        this.unread_count = options.unread_count;
        this.unread_mentions_count = options.unread_mentions_count;
        this.unread_reactions_count = options.unread_reactions_count;
        this.from_id = options.from_id;
        this.notify_settings = options.notify_settings;
        this.draft = options.draft;
    }
}

export class PredicateMessagesForumTopics {
    _ = 'messages.forumTopics' as const
    order_by_create_date?: true
    count: number
    topics: ForumTopic[]
    messages: Message[]
    chats: Chat[]
    users: User[]
    pts: number
    constructor(options: {
        order_by_create_date?: true
        count: number
        topics: ForumTopic[]
        messages: Message[]
        chats: Chat[]
        users: User[]
        pts: number
    }) {
        this.order_by_create_date = options.order_by_create_date;
        this.count = options.count;
        this.topics = options.topics;
        this.messages = options.messages;
        this.chats = options.chats;
        this.users = options.users;
        this.pts = options.pts;
    }
}

export class PredicateMessageActionTopicCreate {
    _ = 'messageActionTopicCreate' as const
    title: string
    icon_color: number
    icon_emoji_id?: string
    constructor(options: {
        title: string
        icon_color: number
        icon_emoji_id?: string
    }) {
        this.title = options.title;
        this.icon_color = options.icon_color;
        this.icon_emoji_id = options.icon_emoji_id;
    }
}

export class PredicateMessageActionTopicEdit {
    _ = 'messageActionTopicEdit' as const
    title?: string
    icon_emoji_id?: string
    closed?: boolean
    hidden?: boolean
    constructor(options: {
        title?: string
        icon_emoji_id?: string
        closed?: boolean
        hidden?: boolean
    } = {}) {
        this.title = options.title;
        this.icon_emoji_id = options.icon_emoji_id;
        this.closed = options.closed;
        this.hidden = options.hidden;
    }
}

export class PredicateUpdateChannelPinnedTopic {
    _ = 'updateChannelPinnedTopic' as const
    pinned?: true
    channel_id: string
    topic_id: number
    constructor(options: {
        pinned?: true
        channel_id: string
        topic_id: number
    }) {
        this.pinned = options.pinned;
        this.channel_id = options.channel_id;
        this.topic_id = options.topic_id;
    }
}

export class PredicateInputNotifyForumTopic {
    _ = 'inputNotifyForumTopic' as const
    peer: InputPeer
    top_msg_id: number
    constructor(options: {
        peer: InputPeer
        top_msg_id: number
    }) {
        this.peer = options.peer;
        this.top_msg_id = options.top_msg_id;
    }
}

export class PredicateNotifyForumTopic {
    _ = 'notifyForumTopic' as const
    peer: Peer
    top_msg_id: number
    constructor(options: {
        peer: Peer
        top_msg_id: number
    }) {
        this.peer = options.peer;
        this.top_msg_id = options.top_msg_id;
    }
}

export class PredicateInputStickerSetEmojiDefaultTopicIcons {
    _ = 'inputStickerSetEmojiDefaultTopicIcons' as const
}

export class PredicateMessagesSponsoredMessagesEmpty {
    _ = 'messages.sponsoredMessagesEmpty' as const
}

export class PredicateUpdateChannelPinnedTopics {
    _ = 'updateChannelPinnedTopics' as const
    channel_id: string
    order?: number[]
    constructor(options: {
        channel_id: string
        order?: number[]
    }) {
        this.channel_id = options.channel_id;
        this.order = options.order;
    }
}

export class PredicateDefaultHistoryTTL {
    _ = 'defaultHistoryTTL' as const
    period: number
    constructor(options: {
        period: number
    }) {
        this.period = options.period;
    }
}

export class PredicateAuthCodeTypeFragmentSms {
    _ = 'auth.codeTypeFragmentSms' as const
}

export class PredicateAuthSentCodeTypeFragmentSms {
    _ = 'auth.sentCodeTypeFragmentSms' as const
    url: string
    length: number
    constructor(options: {
        url: string
        length: number
    }) {
        this.url = options.url;
        this.length = options.length;
    }
}

export class PredicateExportedContactToken {
    _ = 'exportedContactToken' as const
    url: string
    expires: number
    constructor(options: {
        url: string
        expires: number
    }) {
        this.url = options.url;
        this.expires = options.expires;
    }
}

export class PredicateChannelAdminLogEventActionToggleAntiSpam {
    _ = 'channelAdminLogEventActionToggleAntiSpam' as const
    new_value: boolean
    constructor(options: {
        new_value: boolean
    }) {
        this.new_value = options.new_value;
    }
}

export class PredicateMessageActionSuggestProfilePhoto {
    _ = 'messageActionSuggestProfilePhoto' as const
    photo: Photo
    constructor(options: {
        photo: Photo
    }) {
        this.photo = options.photo;
    }
}

export class PredicateStickerSetNoCovered {
    _ = 'stickerSetNoCovered' as const
    set: StickerSet
    constructor(options: {
        set: StickerSet
    }) {
        this.set = options.set;
    }
}

export class PredicateUpdateUser {
    _ = 'updateUser' as const
    user_id: string
    constructor(options: {
        user_id: string
    }) {
        this.user_id = options.user_id;
    }
}

export class PredicateAuthSentCodeSuccess {
    _ = 'auth.sentCodeSuccess' as const
    authorization: AuthAuthorization
    constructor(options: {
        authorization: AuthAuthorization
    }) {
        this.authorization = options.authorization;
    }
}

export class PredicateMessageActionRequestedPeer {
    _ = 'messageActionRequestedPeer' as const
    button_id: number
    peers: Peer[]
    constructor(options: {
        button_id: number
        peers: Peer[]
    }) {
        this.button_id = options.button_id;
        this.peers = options.peers;
    }
}

export class PredicateRequestPeerTypeUser {
    _ = 'requestPeerTypeUser' as const
    bot?: boolean
    premium?: boolean
    constructor(options: {
        bot?: boolean
        premium?: boolean
    } = {}) {
        this.bot = options.bot;
        this.premium = options.premium;
    }
}

export class PredicateRequestPeerTypeChat {
    _ = 'requestPeerTypeChat' as const
    creator?: true
    bot_participant?: true
    has_username?: boolean
    forum?: boolean
    user_admin_rights?: ChatAdminRights
    bot_admin_rights?: ChatAdminRights
    constructor(options: {
        creator?: true
        bot_participant?: true
        has_username?: boolean
        forum?: boolean
        user_admin_rights?: ChatAdminRights
        bot_admin_rights?: ChatAdminRights
    } = {}) {
        this.creator = options.creator;
        this.bot_participant = options.bot_participant;
        this.has_username = options.has_username;
        this.forum = options.forum;
        this.user_admin_rights = options.user_admin_rights;
        this.bot_admin_rights = options.bot_admin_rights;
    }
}

export class PredicateRequestPeerTypeBroadcast {
    _ = 'requestPeerTypeBroadcast' as const
    creator?: true
    has_username?: boolean
    user_admin_rights?: ChatAdminRights
    bot_admin_rights?: ChatAdminRights
    constructor(options: {
        creator?: true
        has_username?: boolean
        user_admin_rights?: ChatAdminRights
        bot_admin_rights?: ChatAdminRights
    } = {}) {
        this.creator = options.creator;
        this.has_username = options.has_username;
        this.user_admin_rights = options.user_admin_rights;
        this.bot_admin_rights = options.bot_admin_rights;
    }
}

export class PredicateKeyboardButtonRequestPeer {
    _ = 'keyboardButtonRequestPeer' as const
    text: string
    button_id: number
    peer_type: RequestPeerType
    max_quantity: number
    constructor(options: {
        text: string
        button_id: number
        peer_type: RequestPeerType
        max_quantity: number
    }) {
        this.text = options.text;
        this.button_id = options.button_id;
        this.peer_type = options.peer_type;
        this.max_quantity = options.max_quantity;
    }
}

export class PredicateEmojiListNotModified {
    _ = 'emojiListNotModified' as const
}

export class PredicateEmojiList {
    _ = 'emojiList' as const
    hash: string
    document_id: string[]
    constructor(options: {
        hash: string
        document_id: string[]
    }) {
        this.hash = options.hash;
        this.document_id = options.document_id;
    }
}

export class PredicateAuthSentCodeTypeFirebaseSms {
    _ = 'auth.sentCodeTypeFirebaseSms' as const
    nonce?: Uint8Array
    receipt?: string
    push_timeout?: number
    length: number
    constructor(options: {
        nonce?: Uint8Array
        receipt?: string
        push_timeout?: number
        length: number
    }) {
        this.nonce = options.nonce;
        this.receipt = options.receipt;
        this.push_timeout = options.push_timeout;
        this.length = options.length;
    }
}

export class PredicateEmojiGroup {
    _ = 'emojiGroup' as const
    title: string
    icon_emoji_id: string
    emoticons: string[]
    constructor(options: {
        title: string
        icon_emoji_id: string
        emoticons: string[]
    }) {
        this.title = options.title;
        this.icon_emoji_id = options.icon_emoji_id;
        this.emoticons = options.emoticons;
    }
}

export class PredicateMessagesEmojiGroupsNotModified {
    _ = 'messages.emojiGroupsNotModified' as const
}

export class PredicateMessagesEmojiGroups {
    _ = 'messages.emojiGroups' as const
    hash: number
    groups: EmojiGroup[]
    constructor(options: {
        hash: number
        groups: EmojiGroup[]
    }) {
        this.hash = options.hash;
        this.groups = options.groups;
    }
}

export class PredicateVideoSizeEmojiMarkup {
    _ = 'videoSizeEmojiMarkup' as const
    emoji_id: string
    background_colors: number[]
    constructor(options: {
        emoji_id: string
        background_colors: number[]
    }) {
        this.emoji_id = options.emoji_id;
        this.background_colors = options.background_colors;
    }
}

export class PredicateVideoSizeStickerMarkup {
    _ = 'videoSizeStickerMarkup' as const
    stickerset: InputStickerSet
    sticker_id: string
    background_colors: number[]
    constructor(options: {
        stickerset: InputStickerSet
        sticker_id: string
        background_colors: number[]
    }) {
        this.stickerset = options.stickerset;
        this.sticker_id = options.sticker_id;
        this.background_colors = options.background_colors;
    }
}

export class PredicateTextWithEntities {
    _ = 'textWithEntities' as const
    text: string
    entities: MessageEntity[]
    constructor(options: {
        text: string
        entities: MessageEntity[]
    }) {
        this.text = options.text;
        this.entities = options.entities;
    }
}

export class PredicateMessagesTranslateResult {
    _ = 'messages.translateResult' as const
    result: TextWithEntities[]
    constructor(options: {
        result: TextWithEntities[]
    }) {
        this.result = options.result;
    }
}

export class PredicateAutoSaveSettings {
    _ = 'autoSaveSettings' as const
    photos?: true
    videos?: true
    video_max_size?: string
    constructor(options: {
        photos?: true
        videos?: true
        video_max_size?: string
    } = {}) {
        this.photos = options.photos;
        this.videos = options.videos;
        this.video_max_size = options.video_max_size;
    }
}

export class PredicateAutoSaveException {
    _ = 'autoSaveException' as const
    peer: Peer
    settings: AutoSaveSettings
    constructor(options: {
        peer: Peer
        settings: AutoSaveSettings
    }) {
        this.peer = options.peer;
        this.settings = options.settings;
    }
}

export class PredicateAccountAutoSaveSettings {
    _ = 'account.autoSaveSettings' as const
    users_settings: AutoSaveSettings
    chats_settings: AutoSaveSettings
    broadcasts_settings: AutoSaveSettings
    exceptions: AutoSaveException[]
    chats: Chat[]
    users: User[]
    constructor(options: {
        users_settings: AutoSaveSettings
        chats_settings: AutoSaveSettings
        broadcasts_settings: AutoSaveSettings
        exceptions: AutoSaveException[]
        chats: Chat[]
        users: User[]
    }) {
        this.users_settings = options.users_settings;
        this.chats_settings = options.chats_settings;
        this.broadcasts_settings = options.broadcasts_settings;
        this.exceptions = options.exceptions;
        this.chats = options.chats;
        this.users = options.users;
    }
}

export class PredicateUpdateAutoSaveSettings {
    _ = 'updateAutoSaveSettings' as const
}

export class PredicateHelpAppConfigNotModified {
    _ = 'help.appConfigNotModified' as const
}

export class PredicateHelpAppConfig {
    _ = 'help.appConfig' as const
    hash: number
    config: JSONValue
    constructor(options: {
        hash: number
        config: JSONValue
    }) {
        this.hash = options.hash;
        this.config = options.config;
    }
}

export class PredicateInputBotAppID {
    _ = 'inputBotAppID' as const
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

export class PredicateInputBotAppShortName {
    _ = 'inputBotAppShortName' as const
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

export class PredicateBotAppNotModified {
    _ = 'botAppNotModified' as const
}

export class PredicateBotApp {
    _ = 'botApp' as const
    id: string
    access_hash: string
    short_name: string
    title: string
    description: string
    photo: Photo
    document?: Document
    hash: string
    constructor(options: {
        id: string
        access_hash: string
        short_name: string
        title: string
        description: string
        photo: Photo
        document?: Document
        hash: string
    }) {
        this.id = options.id;
        this.access_hash = options.access_hash;
        this.short_name = options.short_name;
        this.title = options.title;
        this.description = options.description;
        this.photo = options.photo;
        this.document = options.document;
        this.hash = options.hash;
    }
}

export class PredicateMessagesBotApp {
    _ = 'messages.botApp' as const
    inactive?: true
    request_write_access?: true
    has_settings?: true
    app: BotApp
    constructor(options: {
        inactive?: true
        request_write_access?: true
        has_settings?: true
        app: BotApp
    }) {
        this.inactive = options.inactive;
        this.request_write_access = options.request_write_access;
        this.has_settings = options.has_settings;
        this.app = options.app;
    }
}

export class PredicateAppWebViewResultUrl {
    _ = 'appWebViewResultUrl' as const
    url: string
    constructor(options: {
        url: string
    }) {
        this.url = options.url;
    }
}

export class PredicateInlineBotWebView {
    _ = 'inlineBotWebView' as const
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

export class PredicateReadParticipantDate {
    _ = 'readParticipantDate' as const
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

export class PredicateUpdateGroupInvitePrivacyForbidden {
    _ = 'updateGroupInvitePrivacyForbidden' as const
    user_id: string
    constructor(options: {
        user_id: string
    }) {
        this.user_id = options.user_id;
    }
}

export class PredicateDialogFilterChatlist {
    _ = 'dialogFilterChatlist' as const
    has_my_invites?: true
    id: number
    title: string
    emoticon?: string
    pinned_peers: InputPeer[]
    include_peers: InputPeer[]
    constructor(options: {
        has_my_invites?: true
        id: number
        title: string
        emoticon?: string
        pinned_peers: InputPeer[]
        include_peers: InputPeer[]
    }) {
        this.has_my_invites = options.has_my_invites;
        this.id = options.id;
        this.title = options.title;
        this.emoticon = options.emoticon;
        this.pinned_peers = options.pinned_peers;
        this.include_peers = options.include_peers;
    }
}

export class PredicateInputChatlistDialogFilter {
    _ = 'inputChatlistDialogFilter' as const
    filter_id: number
    constructor(options: {
        filter_id: number
    }) {
        this.filter_id = options.filter_id;
    }
}

export class PredicateExportedChatlistInvite {
    _ = 'exportedChatlistInvite' as const
    title: string
    url: string
    peers: Peer[]
    constructor(options: {
        title: string
        url: string
        peers: Peer[]
    }) {
        this.title = options.title;
        this.url = options.url;
        this.peers = options.peers;
    }
}

export class PredicateChatlistsExportedChatlistInvite {
    _ = 'chatlists.exportedChatlistInvite' as const
    filter: DialogFilter
    invite: ExportedChatlistInvite
    constructor(options: {
        filter: DialogFilter
        invite: ExportedChatlistInvite
    }) {
        this.filter = options.filter;
        this.invite = options.invite;
    }
}

export class PredicateChatlistsExportedInvites {
    _ = 'chatlists.exportedInvites' as const
    invites: ExportedChatlistInvite[]
    chats: Chat[]
    users: User[]
    constructor(options: {
        invites: ExportedChatlistInvite[]
        chats: Chat[]
        users: User[]
    }) {
        this.invites = options.invites;
        this.chats = options.chats;
        this.users = options.users;
    }
}

export class PredicateChatlistsChatlistInviteAlready {
    _ = 'chatlists.chatlistInviteAlready' as const
    filter_id: number
    missing_peers: Peer[]
    already_peers: Peer[]
    chats: Chat[]
    users: User[]
    constructor(options: {
        filter_id: number
        missing_peers: Peer[]
        already_peers: Peer[]
        chats: Chat[]
        users: User[]
    }) {
        this.filter_id = options.filter_id;
        this.missing_peers = options.missing_peers;
        this.already_peers = options.already_peers;
        this.chats = options.chats;
        this.users = options.users;
    }
}

export class PredicateChatlistsChatlistInvite {
    _ = 'chatlists.chatlistInvite' as const
    title: string
    emoticon?: string
    peers: Peer[]
    chats: Chat[]
    users: User[]
    constructor(options: {
        title: string
        emoticon?: string
        peers: Peer[]
        chats: Chat[]
        users: User[]
    }) {
        this.title = options.title;
        this.emoticon = options.emoticon;
        this.peers = options.peers;
        this.chats = options.chats;
        this.users = options.users;
    }
}

export class PredicateChatlistsChatlistUpdates {
    _ = 'chatlists.chatlistUpdates' as const
    missing_peers: Peer[]
    chats: Chat[]
    users: User[]
    constructor(options: {
        missing_peers: Peer[]
        chats: Chat[]
        users: User[]
    }) {
        this.missing_peers = options.missing_peers;
        this.chats = options.chats;
        this.users = options.users;
    }
}

export class PredicateMessageActionSetChatWallPaper {
    _ = 'messageActionSetChatWallPaper' as const
    same?: true
    for_both?: true
    wallpaper: WallPaper
    constructor(options: {
        same?: true
        for_both?: true
        wallpaper: WallPaper
    }) {
        this.same = options.same;
        this.for_both = options.for_both;
        this.wallpaper = options.wallpaper;
    }
}

export class PredicateBotsBotInfo {
    _ = 'bots.botInfo' as const
    name: string
    about: string
    description: string
    constructor(options: {
        name: string
        about: string
        description: string
    }) {
        this.name = options.name;
        this.about = options.about;
        this.description = options.description;
    }
}

export class PredicateInlineQueryPeerTypeBotPM {
    _ = 'inlineQueryPeerTypeBotPM' as const
}

export class PredicateMessagePeerVote {
    _ = 'messagePeerVote' as const
    peer: Peer
    option: Uint8Array
    date: number
    constructor(options: {
        peer: Peer
        option: Uint8Array
        date: number
    }) {
        this.peer = options.peer;
        this.option = options.option;
        this.date = options.date;
    }
}

export class PredicateMessagePeerVoteInputOption {
    _ = 'messagePeerVoteInputOption' as const
    peer: Peer
    date: number
    constructor(options: {
        peer: Peer
        date: number
    }) {
        this.peer = options.peer;
        this.date = options.date;
    }
}

export class PredicateMessagePeerVoteMultiple {
    _ = 'messagePeerVoteMultiple' as const
    peer: Peer
    options: Uint8Array[]
    date: number
    constructor(options: {
        peer: Peer
        options: Uint8Array[]
        date: number
    }) {
        this.peer = options.peer;
        this.options = options.options;
        this.date = options.date;
    }
}

export class PredicateInputPrivacyKeyAbout {
    _ = 'inputPrivacyKeyAbout' as const
}

export class PredicatePrivacyKeyAbout {
    _ = 'privacyKeyAbout' as const
}

export class PredicateSponsoredWebPage {
    _ = 'sponsoredWebPage' as const
    url: string
    site_name: string
    photo?: Photo
    constructor(options: {
        url: string
        site_name: string
        photo?: Photo
    }) {
        this.url = options.url;
        this.site_name = options.site_name;
        this.photo = options.photo;
    }
}

export class PredicateStoryViews {
    _ = 'storyViews' as const
    has_viewers?: true
    views_count: number
    forwards_count?: number
    reactions?: ReactionCount[]
    reactions_count?: number
    recent_viewers?: string[]
    constructor(options: {
        has_viewers?: true
        views_count: number
        forwards_count?: number
        reactions?: ReactionCount[]
        reactions_count?: number
        recent_viewers?: string[]
    }) {
        this.has_viewers = options.has_viewers;
        this.views_count = options.views_count;
        this.forwards_count = options.forwards_count;
        this.reactions = options.reactions;
        this.reactions_count = options.reactions_count;
        this.recent_viewers = options.recent_viewers;
    }
}

export class PredicateStoryItemDeleted {
    _ = 'storyItemDeleted' as const
    id: number
    constructor(options: {
        id: number
    }) {
        this.id = options.id;
    }
}

export class PredicateStoryItemSkipped {
    _ = 'storyItemSkipped' as const
    close_friends?: true
    id: number
    date: number
    expire_date: number
    constructor(options: {
        close_friends?: true
        id: number
        date: number
        expire_date: number
    }) {
        this.close_friends = options.close_friends;
        this.id = options.id;
        this.date = options.date;
        this.expire_date = options.expire_date;
    }
}

export class PredicateStoryItem {
    _ = 'storyItem' as const
    pinned?: true
    public?: true
    close_friends?: true
    min?: true
    noforwards?: true
    edited?: true
    contacts?: true
    selected_contacts?: true
    out?: true
    id: number
    date: number
    fwd_from?: StoryFwdHeader
    expire_date: number
    caption?: string
    entities?: MessageEntity[]
    media: MessageMedia
    media_areas?: MediaArea[]
    privacy?: PrivacyRule[]
    views?: StoryViews
    sent_reaction?: Reaction
    constructor(options: {
        pinned?: true
        public?: true
        close_friends?: true
        min?: true
        noforwards?: true
        edited?: true
        contacts?: true
        selected_contacts?: true
        out?: true
        id: number
        date: number
        fwd_from?: StoryFwdHeader
        expire_date: number
        caption?: string
        entities?: MessageEntity[]
        media: MessageMedia
        media_areas?: MediaArea[]
        privacy?: PrivacyRule[]
        views?: StoryViews
        sent_reaction?: Reaction
    }) {
        this.pinned = options.pinned;
        this.public = options.public;
        this.close_friends = options.close_friends;
        this.min = options.min;
        this.noforwards = options.noforwards;
        this.edited = options.edited;
        this.contacts = options.contacts;
        this.selected_contacts = options.selected_contacts;
        this.out = options.out;
        this.id = options.id;
        this.date = options.date;
        this.fwd_from = options.fwd_from;
        this.expire_date = options.expire_date;
        this.caption = options.caption;
        this.entities = options.entities;
        this.media = options.media;
        this.media_areas = options.media_areas;
        this.privacy = options.privacy;
        this.views = options.views;
        this.sent_reaction = options.sent_reaction;
    }
}

export class PredicateUpdateStory {
    _ = 'updateStory' as const
    peer: Peer
    story: StoryItem
    constructor(options: {
        peer: Peer
        story: StoryItem
    }) {
        this.peer = options.peer;
        this.story = options.story;
    }
}

export class PredicateUpdateReadStories {
    _ = 'updateReadStories' as const
    peer: Peer
    max_id: number
    constructor(options: {
        peer: Peer
        max_id: number
    }) {
        this.peer = options.peer;
        this.max_id = options.max_id;
    }
}

export class PredicateStoriesAllStoriesNotModified {
    _ = 'stories.allStoriesNotModified' as const
    state: string
    stealth_mode: StoriesStealthMode
    constructor(options: {
        state: string
        stealth_mode: StoriesStealthMode
    }) {
        this.state = options.state;
        this.stealth_mode = options.stealth_mode;
    }
}

export class PredicateStoriesAllStories {
    _ = 'stories.allStories' as const
    has_more?: true
    count: number
    state: string
    peer_stories: PeerStories[]
    chats: Chat[]
    users: User[]
    stealth_mode: StoriesStealthMode
    constructor(options: {
        has_more?: true
        count: number
        state: string
        peer_stories: PeerStories[]
        chats: Chat[]
        users: User[]
        stealth_mode: StoriesStealthMode
    }) {
        this.has_more = options.has_more;
        this.count = options.count;
        this.state = options.state;
        this.peer_stories = options.peer_stories;
        this.chats = options.chats;
        this.users = options.users;
        this.stealth_mode = options.stealth_mode;
    }
}

export class PredicateStoriesStories {
    _ = 'stories.stories' as const
    count: number
    stories: StoryItem[]
    chats: Chat[]
    users: User[]
    constructor(options: {
        count: number
        stories: StoryItem[]
        chats: Chat[]
        users: User[]
    }) {
        this.count = options.count;
        this.stories = options.stories;
        this.chats = options.chats;
        this.users = options.users;
    }
}

export class PredicateInputPrivacyValueAllowCloseFriends {
    _ = 'inputPrivacyValueAllowCloseFriends' as const
}

export class PredicatePrivacyValueAllowCloseFriends {
    _ = 'privacyValueAllowCloseFriends' as const
}

export class PredicateStoryView {
    _ = 'storyView' as const
    blocked?: true
    blocked_my_stories_from?: true
    user_id: string
    date: number
    reaction?: Reaction
    constructor(options: {
        blocked?: true
        blocked_my_stories_from?: true
        user_id: string
        date: number
        reaction?: Reaction
    }) {
        this.blocked = options.blocked;
        this.blocked_my_stories_from = options.blocked_my_stories_from;
        this.user_id = options.user_id;
        this.date = options.date;
        this.reaction = options.reaction;
    }
}

export class PredicateStoriesStoryViewsList {
    _ = 'stories.storyViewsList' as const
    count: number
    views_count: number
    forwards_count: number
    reactions_count: number
    views: StoryView[]
    chats: Chat[]
    users: User[]
    next_offset?: string
    constructor(options: {
        count: number
        views_count: number
        forwards_count: number
        reactions_count: number
        views: StoryView[]
        chats: Chat[]
        users: User[]
        next_offset?: string
    }) {
        this.count = options.count;
        this.views_count = options.views_count;
        this.forwards_count = options.forwards_count;
        this.reactions_count = options.reactions_count;
        this.views = options.views;
        this.chats = options.chats;
        this.users = options.users;
        this.next_offset = options.next_offset;
    }
}

export class PredicateStoriesStoryViews {
    _ = 'stories.storyViews' as const
    views: StoryViews[]
    users: User[]
    constructor(options: {
        views: StoryViews[]
        users: User[]
    }) {
        this.views = options.views;
        this.users = options.users;
    }
}

export class PredicateInputReplyToMessage {
    _ = 'inputReplyToMessage' as const
    reply_to_msg_id: number
    top_msg_id?: number
    reply_to_peer_id?: InputPeer
    quote_text?: string
    quote_entities?: MessageEntity[]
    quote_offset?: number
    constructor(options: {
        reply_to_msg_id: number
        top_msg_id?: number
        reply_to_peer_id?: InputPeer
        quote_text?: string
        quote_entities?: MessageEntity[]
        quote_offset?: number
    }) {
        this.reply_to_msg_id = options.reply_to_msg_id;
        this.top_msg_id = options.top_msg_id;
        this.reply_to_peer_id = options.reply_to_peer_id;
        this.quote_text = options.quote_text;
        this.quote_entities = options.quote_entities;
        this.quote_offset = options.quote_offset;
    }
}

export class PredicateInputReplyToStory {
    _ = 'inputReplyToStory' as const
    user_id: InputUser
    story_id: number
    constructor(options: {
        user_id: InputUser
        story_id: number
    }) {
        this.user_id = options.user_id;
        this.story_id = options.story_id;
    }
}

export class PredicateMessageReplyStoryHeader {
    _ = 'messageReplyStoryHeader' as const
    user_id: string
    story_id: number
    constructor(options: {
        user_id: string
        story_id: number
    }) {
        this.user_id = options.user_id;
        this.story_id = options.story_id;
    }
}

export class PredicateUpdateStoryID {
    _ = 'updateStoryID' as const
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

export class PredicateExportedStoryLink {
    _ = 'exportedStoryLink' as const
    link: string
    constructor(options: {
        link: string
    }) {
        this.link = options.link;
    }
}

export class PredicateInputMediaStory {
    _ = 'inputMediaStory' as const
    peer: InputPeer
    id: number
    constructor(options: {
        peer: InputPeer
        id: number
    }) {
        this.peer = options.peer;
        this.id = options.id;
    }
}

export class PredicateMessageMediaStory {
    _ = 'messageMediaStory' as const
    via_mention?: true
    peer: Peer
    id: number
    story?: StoryItem
    constructor(options: {
        via_mention?: true
        peer: Peer
        id: number
        story?: StoryItem
    }) {
        this.via_mention = options.via_mention;
        this.peer = options.peer;
        this.id = options.id;
        this.story = options.story;
    }
}

export class PredicateWebPageAttributeStory {
    _ = 'webPageAttributeStory' as const
    peer: Peer
    id: number
    story?: StoryItem
    constructor(options: {
        peer: Peer
        id: number
        story?: StoryItem
    }) {
        this.peer = options.peer;
        this.id = options.id;
        this.story = options.story;
    }
}

export class PredicateStoriesStealthMode {
    _ = 'storiesStealthMode' as const
    active_until_date?: number
    cooldown_until_date?: number
    constructor(options: {
        active_until_date?: number
        cooldown_until_date?: number
    } = {}) {
        this.active_until_date = options.active_until_date;
        this.cooldown_until_date = options.cooldown_until_date;
    }
}

export class PredicateUpdateStoriesStealthMode {
    _ = 'updateStoriesStealthMode' as const
    stealth_mode: StoriesStealthMode
    constructor(options: {
        stealth_mode: StoriesStealthMode
    }) {
        this.stealth_mode = options.stealth_mode;
    }
}

export class PredicateMediaAreaCoordinates {
    _ = 'mediaAreaCoordinates' as const
    x: number
    y: number
    w: number
    h: number
    rotation: number
    constructor(options: {
        x: number
        y: number
        w: number
        h: number
        rotation: number
    }) {
        this.x = options.x;
        this.y = options.y;
        this.w = options.w;
        this.h = options.h;
        this.rotation = options.rotation;
    }
}

export class PredicateMediaAreaVenue {
    _ = 'mediaAreaVenue' as const
    coordinates: MediaAreaCoordinates
    geo: GeoPoint
    title: string
    address: string
    provider: string
    venue_id: string
    venue_type: string
    constructor(options: {
        coordinates: MediaAreaCoordinates
        geo: GeoPoint
        title: string
        address: string
        provider: string
        venue_id: string
        venue_type: string
    }) {
        this.coordinates = options.coordinates;
        this.geo = options.geo;
        this.title = options.title;
        this.address = options.address;
        this.provider = options.provider;
        this.venue_id = options.venue_id;
        this.venue_type = options.venue_type;
    }
}

export class PredicateInputMediaAreaVenue {
    _ = 'inputMediaAreaVenue' as const
    coordinates: MediaAreaCoordinates
    query_id: string
    result_id: string
    constructor(options: {
        coordinates: MediaAreaCoordinates
        query_id: string
        result_id: string
    }) {
        this.coordinates = options.coordinates;
        this.query_id = options.query_id;
        this.result_id = options.result_id;
    }
}

export class PredicateMediaAreaGeoPoint {
    _ = 'mediaAreaGeoPoint' as const
    coordinates: MediaAreaCoordinates
    geo: GeoPoint
    constructor(options: {
        coordinates: MediaAreaCoordinates
        geo: GeoPoint
    }) {
        this.coordinates = options.coordinates;
        this.geo = options.geo;
    }
}

export class PredicateUpdateSentStoryReaction {
    _ = 'updateSentStoryReaction' as const
    peer: Peer
    story_id: number
    reaction: Reaction
    constructor(options: {
        peer: Peer
        story_id: number
        reaction: Reaction
    }) {
        this.peer = options.peer;
        this.story_id = options.story_id;
        this.reaction = options.reaction;
    }
}

export class PredicateMediaAreaSuggestedReaction {
    _ = 'mediaAreaSuggestedReaction' as const
    dark?: true
    flipped?: true
    coordinates: MediaAreaCoordinates
    reaction: Reaction
    constructor(options: {
        dark?: true
        flipped?: true
        coordinates: MediaAreaCoordinates
        reaction: Reaction
    }) {
        this.dark = options.dark;
        this.flipped = options.flipped;
        this.coordinates = options.coordinates;
        this.reaction = options.reaction;
    }
}

export class PredicatePeerStories {
    _ = 'peerStories' as const
    peer: Peer
    max_read_id?: number
    stories: StoryItem[]
    constructor(options: {
        peer: Peer
        max_read_id?: number
        stories: StoryItem[]
    }) {
        this.peer = options.peer;
        this.max_read_id = options.max_read_id;
        this.stories = options.stories;
    }
}

export class PredicateStoriesPeerStories {
    _ = 'stories.peerStories' as const
    stories: PeerStories
    chats: Chat[]
    users: User[]
    constructor(options: {
        stories: PeerStories
        chats: Chat[]
        users: User[]
    }) {
        this.stories = options.stories;
        this.chats = options.chats;
        this.users = options.users;
    }
}

export class PredicateMessagesWebPage {
    _ = 'messages.webPage' as const
    webpage: WebPage
    chats: Chat[]
    users: User[]
    constructor(options: {
        webpage: WebPage
        chats: Chat[]
        users: User[]
    }) {
        this.webpage = options.webpage;
        this.chats = options.chats;
        this.users = options.users;
    }
}

export class PredicateInputStorePaymentPremiumGiftCode {
    _ = 'inputStorePaymentPremiumGiftCode' as const
    users: InputUser[]
    boost_peer?: InputPeer
    currency: string
    amount: string
    constructor(options: {
        users: InputUser[]
        boost_peer?: InputPeer
        currency: string
        amount: string
    }) {
        this.users = options.users;
        this.boost_peer = options.boost_peer;
        this.currency = options.currency;
        this.amount = options.amount;
    }
}

export class PredicateInputStorePaymentPremiumGiveaway {
    _ = 'inputStorePaymentPremiumGiveaway' as const
    only_new_subscribers?: true
    winners_are_visible?: true
    boost_peer: InputPeer
    additional_peers?: InputPeer[]
    countries_iso2?: string[]
    prize_description?: string
    random_id: string
    until_date: number
    currency: string
    amount: string
    constructor(options: {
        only_new_subscribers?: true
        winners_are_visible?: true
        boost_peer: InputPeer
        additional_peers?: InputPeer[]
        countries_iso2?: string[]
        prize_description?: string
        random_id: string
        until_date: number
        currency: string
        amount: string
    }) {
        this.only_new_subscribers = options.only_new_subscribers;
        this.winners_are_visible = options.winners_are_visible;
        this.boost_peer = options.boost_peer;
        this.additional_peers = options.additional_peers;
        this.countries_iso2 = options.countries_iso2;
        this.prize_description = options.prize_description;
        this.random_id = options.random_id;
        this.until_date = options.until_date;
        this.currency = options.currency;
        this.amount = options.amount;
    }
}

export class PredicateInputInvoicePremiumGiftCode {
    _ = 'inputInvoicePremiumGiftCode' as const
    purpose: InputStorePaymentPurpose
    option: PremiumGiftCodeOption
    constructor(options: {
        purpose: InputStorePaymentPurpose
        option: PremiumGiftCodeOption
    }) {
        this.purpose = options.purpose;
        this.option = options.option;
    }
}

export class PredicatePremiumGiftCodeOption {
    _ = 'premiumGiftCodeOption' as const
    users: number
    months: number
    store_product?: string
    store_quantity?: number
    currency: string
    amount: string
    constructor(options: {
        users: number
        months: number
        store_product?: string
        store_quantity?: number
        currency: string
        amount: string
    }) {
        this.users = options.users;
        this.months = options.months;
        this.store_product = options.store_product;
        this.store_quantity = options.store_quantity;
        this.currency = options.currency;
        this.amount = options.amount;
    }
}

export class PredicatePaymentsCheckedGiftCode {
    _ = 'payments.checkedGiftCode' as const
    via_giveaway?: true
    from_id?: Peer
    giveaway_msg_id?: number
    to_id?: string
    date: number
    months: number
    used_date?: number
    chats: Chat[]
    users: User[]
    constructor(options: {
        via_giveaway?: true
        from_id?: Peer
        giveaway_msg_id?: number
        to_id?: string
        date: number
        months: number
        used_date?: number
        chats: Chat[]
        users: User[]
    }) {
        this.via_giveaway = options.via_giveaway;
        this.from_id = options.from_id;
        this.giveaway_msg_id = options.giveaway_msg_id;
        this.to_id = options.to_id;
        this.date = options.date;
        this.months = options.months;
        this.used_date = options.used_date;
        this.chats = options.chats;
        this.users = options.users;
    }
}

export class PredicateMessageMediaGiveaway {
    _ = 'messageMediaGiveaway' as const
    only_new_subscribers?: true
    winners_are_visible?: true
    channels: string[]
    countries_iso2?: string[]
    prize_description?: string
    quantity: number
    months: number
    until_date: number
    constructor(options: {
        only_new_subscribers?: true
        winners_are_visible?: true
        channels: string[]
        countries_iso2?: string[]
        prize_description?: string
        quantity: number
        months: number
        until_date: number
    }) {
        this.only_new_subscribers = options.only_new_subscribers;
        this.winners_are_visible = options.winners_are_visible;
        this.channels = options.channels;
        this.countries_iso2 = options.countries_iso2;
        this.prize_description = options.prize_description;
        this.quantity = options.quantity;
        this.months = options.months;
        this.until_date = options.until_date;
    }
}

export class PredicateMessageActionGiftCode {
    _ = 'messageActionGiftCode' as const
    via_giveaway?: true
    unclaimed?: true
    boost_peer?: Peer
    months: number
    slug: string
    currency?: string
    amount?: string
    crypto_currency?: string
    crypto_amount?: string
    constructor(options: {
        via_giveaway?: true
        unclaimed?: true
        boost_peer?: Peer
        months: number
        slug: string
        currency?: string
        amount?: string
        crypto_currency?: string
        crypto_amount?: string
    }) {
        this.via_giveaway = options.via_giveaway;
        this.unclaimed = options.unclaimed;
        this.boost_peer = options.boost_peer;
        this.months = options.months;
        this.slug = options.slug;
        this.currency = options.currency;
        this.amount = options.amount;
        this.crypto_currency = options.crypto_currency;
        this.crypto_amount = options.crypto_amount;
    }
}

export class PredicateMessageActionGiveawayLaunch {
    _ = 'messageActionGiveawayLaunch' as const
}

export class PredicatePaymentsGiveawayInfo {
    _ = 'payments.giveawayInfo' as const
    participating?: true
    preparing_results?: true
    start_date: number
    joined_too_early_date?: number
    admin_disallowed_chat_id?: string
    disallowed_country?: string
    constructor(options: {
        participating?: true
        preparing_results?: true
        start_date: number
        joined_too_early_date?: number
        admin_disallowed_chat_id?: string
        disallowed_country?: string
    }) {
        this.participating = options.participating;
        this.preparing_results = options.preparing_results;
        this.start_date = options.start_date;
        this.joined_too_early_date = options.joined_too_early_date;
        this.admin_disallowed_chat_id = options.admin_disallowed_chat_id;
        this.disallowed_country = options.disallowed_country;
    }
}

export class PredicatePaymentsGiveawayInfoResults {
    _ = 'payments.giveawayInfoResults' as const
    winner?: true
    refunded?: true
    start_date: number
    gift_code_slug?: string
    finish_date: number
    winners_count: number
    activated_count: number
    constructor(options: {
        winner?: true
        refunded?: true
        start_date: number
        gift_code_slug?: string
        finish_date: number
        winners_count: number
        activated_count: number
    }) {
        this.winner = options.winner;
        this.refunded = options.refunded;
        this.start_date = options.start_date;
        this.gift_code_slug = options.gift_code_slug;
        this.finish_date = options.finish_date;
        this.winners_count = options.winners_count;
        this.activated_count = options.activated_count;
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

export class PredicatePrepaidGiveaway {
    _ = 'prepaidGiveaway' as const
    id: string
    months: number
    quantity: number
    date: number
    constructor(options: {
        id: string
        months: number
        quantity: number
        date: number
    }) {
        this.id = options.id;
        this.months = options.months;
        this.quantity = options.quantity;
        this.date = options.date;
    }
}

export class PredicateInputMediaWebPage {
    _ = 'inputMediaWebPage' as const
    force_large_media?: true
    force_small_media?: true
    optional?: true
    url: string
    constructor(options: {
        force_large_media?: true
        force_small_media?: true
        optional?: true
        url: string
    }) {
        this.force_large_media = options.force_large_media;
        this.force_small_media = options.force_small_media;
        this.optional = options.optional;
        this.url = options.url;
    }
}

export class PredicateInputBotInlineMessageMediaWebPage {
    _ = 'inputBotInlineMessageMediaWebPage' as const
    invert_media?: true
    force_large_media?: true
    force_small_media?: true
    optional?: true
    message: string
    entities?: MessageEntity[]
    url: string
    reply_markup?: ReplyMarkup
    constructor(options: {
        invert_media?: true
        force_large_media?: true
        force_small_media?: true
        optional?: true
        message: string
        entities?: MessageEntity[]
        url: string
        reply_markup?: ReplyMarkup
    }) {
        this.invert_media = options.invert_media;
        this.force_large_media = options.force_large_media;
        this.force_small_media = options.force_small_media;
        this.optional = options.optional;
        this.message = options.message;
        this.entities = options.entities;
        this.url = options.url;
        this.reply_markup = options.reply_markup;
    }
}

export class PredicateBotInlineMessageMediaWebPage {
    _ = 'botInlineMessageMediaWebPage' as const
    invert_media?: true
    force_large_media?: true
    force_small_media?: true
    manual?: true
    safe?: true
    message: string
    entities?: MessageEntity[]
    url: string
    reply_markup?: ReplyMarkup
    constructor(options: {
        invert_media?: true
        force_large_media?: true
        force_small_media?: true
        manual?: true
        safe?: true
        message: string
        entities?: MessageEntity[]
        url: string
        reply_markup?: ReplyMarkup
    }) {
        this.invert_media = options.invert_media;
        this.force_large_media = options.force_large_media;
        this.force_small_media = options.force_small_media;
        this.manual = options.manual;
        this.safe = options.safe;
        this.message = options.message;
        this.entities = options.entities;
        this.url = options.url;
        this.reply_markup = options.reply_markup;
    }
}

export class PredicateBoost {
    _ = 'boost' as const
    gift?: true
    giveaway?: true
    unclaimed?: true
    id: string
    user_id?: string
    giveaway_msg_id?: number
    date: number
    expires: number
    used_gift_slug?: string
    multiplier?: number
    constructor(options: {
        gift?: true
        giveaway?: true
        unclaimed?: true
        id: string
        user_id?: string
        giveaway_msg_id?: number
        date: number
        expires: number
        used_gift_slug?: string
        multiplier?: number
    }) {
        this.gift = options.gift;
        this.giveaway = options.giveaway;
        this.unclaimed = options.unclaimed;
        this.id = options.id;
        this.user_id = options.user_id;
        this.giveaway_msg_id = options.giveaway_msg_id;
        this.date = options.date;
        this.expires = options.expires;
        this.used_gift_slug = options.used_gift_slug;
        this.multiplier = options.multiplier;
    }
}

export class PredicatePremiumBoostsList {
    _ = 'premium.boostsList' as const
    count: number
    boosts: Boost[]
    next_offset?: string
    users: User[]
    constructor(options: {
        count: number
        boosts: Boost[]
        next_offset?: string
        users: User[]
    }) {
        this.count = options.count;
        this.boosts = options.boosts;
        this.next_offset = options.next_offset;
        this.users = options.users;
    }
}

export class PredicateMyBoost {
    _ = 'myBoost' as const
    slot: number
    peer?: Peer
    date: number
    expires: number
    cooldown_until_date?: number
    constructor(options: {
        slot: number
        peer?: Peer
        date: number
        expires: number
        cooldown_until_date?: number
    }) {
        this.slot = options.slot;
        this.peer = options.peer;
        this.date = options.date;
        this.expires = options.expires;
        this.cooldown_until_date = options.cooldown_until_date;
    }
}

export class PredicatePremiumMyBoosts {
    _ = 'premium.myBoosts' as const
    my_boosts: MyBoost[]
    chats: Chat[]
    users: User[]
    constructor(options: {
        my_boosts: MyBoost[]
        chats: Chat[]
        users: User[]
    }) {
        this.my_boosts = options.my_boosts;
        this.chats = options.chats;
        this.users = options.users;
    }
}

export class PredicatePremiumBoostsStatus {
    _ = 'premium.boostsStatus' as const
    my_boost?: true
    level: number
    current_level_boosts: number
    boosts: number
    gift_boosts?: number
    next_level_boosts?: number
    premium_audience?: StatsPercentValue
    boost_url: string
    prepaid_giveaways?: PrepaidGiveaway[]
    my_boost_slots?: number[]
    constructor(options: {
        my_boost?: true
        level: number
        current_level_boosts: number
        boosts: number
        gift_boosts?: number
        next_level_boosts?: number
        premium_audience?: StatsPercentValue
        boost_url: string
        prepaid_giveaways?: PrepaidGiveaway[]
        my_boost_slots?: number[]
    }) {
        this.my_boost = options.my_boost;
        this.level = options.level;
        this.current_level_boosts = options.current_level_boosts;
        this.boosts = options.boosts;
        this.gift_boosts = options.gift_boosts;
        this.next_level_boosts = options.next_level_boosts;
        this.premium_audience = options.premium_audience;
        this.boost_url = options.boost_url;
        this.prepaid_giveaways = options.prepaid_giveaways;
        this.my_boost_slots = options.my_boost_slots;
    }
}

export class PredicateUpdateBotChatBoost {
    _ = 'updateBotChatBoost' as const
    peer: Peer
    boost: Boost
    qts: number
    constructor(options: {
        peer: Peer
        boost: Boost
        qts: number
    }) {
        this.peer = options.peer;
        this.boost = options.boost;
        this.qts = options.qts;
    }
}

export class PredicateUpdateChannelViewForumAsMessages {
    _ = 'updateChannelViewForumAsMessages' as const
    channel_id: string
    enabled: boolean
    constructor(options: {
        channel_id: string
        enabled: boolean
    }) {
        this.channel_id = options.channel_id;
        this.enabled = options.enabled;
    }
}

export class PredicateMessageActionGiveawayResults {
    _ = 'messageActionGiveawayResults' as const
    winners_count: number
    unclaimed_count: number
    constructor(options: {
        winners_count: number
        unclaimed_count: number
    }) {
        this.winners_count = options.winners_count;
        this.unclaimed_count = options.unclaimed_count;
    }
}

export class PredicateUpdatePeerWallpaper {
    _ = 'updatePeerWallpaper' as const
    wallpaper_overridden?: true
    peer: Peer
    wallpaper?: WallPaper
    constructor(options: {
        wallpaper_overridden?: true
        peer: Peer
        wallpaper?: WallPaper
    }) {
        this.wallpaper_overridden = options.wallpaper_overridden;
        this.peer = options.peer;
        this.wallpaper = options.wallpaper;
    }
}

export class PredicateStoryFwdHeader {
    _ = 'storyFwdHeader' as const
    modified?: true
    from?: Peer
    from_name?: string
    story_id?: number
    constructor(options: {
        modified?: true
        from?: Peer
        from_name?: string
        story_id?: number
    } = {}) {
        this.modified = options.modified;
        this.from = options.from;
        this.from_name = options.from_name;
        this.story_id = options.story_id;
    }
}

export class PredicatePostInteractionCountersMessage {
    _ = 'postInteractionCountersMessage' as const
    msg_id: number
    views: number
    forwards: number
    reactions: number
    constructor(options: {
        msg_id: number
        views: number
        forwards: number
        reactions: number
    }) {
        this.msg_id = options.msg_id;
        this.views = options.views;
        this.forwards = options.forwards;
        this.reactions = options.reactions;
    }
}

export class PredicatePostInteractionCountersStory {
    _ = 'postInteractionCountersStory' as const
    story_id: number
    views: number
    forwards: number
    reactions: number
    constructor(options: {
        story_id: number
        views: number
        forwards: number
        reactions: number
    }) {
        this.story_id = options.story_id;
        this.views = options.views;
        this.forwards = options.forwards;
        this.reactions = options.reactions;
    }
}

export class PredicateStatsStoryStats {
    _ = 'stats.storyStats' as const
    views_graph: StatsGraph
    reactions_by_emotion_graph: StatsGraph
    constructor(options: {
        views_graph: StatsGraph
        reactions_by_emotion_graph: StatsGraph
    }) {
        this.views_graph = options.views_graph;
        this.reactions_by_emotion_graph = options.reactions_by_emotion_graph;
    }
}

export class PredicatePublicForwardMessage {
    _ = 'publicForwardMessage' as const
    message: Message
    constructor(options: {
        message: Message
    }) {
        this.message = options.message;
    }
}

export class PredicatePublicForwardStory {
    _ = 'publicForwardStory' as const
    peer: Peer
    story: StoryItem
    constructor(options: {
        peer: Peer
        story: StoryItem
    }) {
        this.peer = options.peer;
        this.story = options.story;
    }
}

export class PredicateStatsPublicForwards {
    _ = 'stats.publicForwards' as const
    count: number
    forwards: PublicForward[]
    next_offset?: string
    chats: Chat[]
    users: User[]
    constructor(options: {
        count: number
        forwards: PublicForward[]
        next_offset?: string
        chats: Chat[]
        users: User[]
    }) {
        this.count = options.count;
        this.forwards = options.forwards;
        this.next_offset = options.next_offset;
        this.chats = options.chats;
        this.users = options.users;
    }
}

export class PredicatePeerColor {
    _ = 'peerColor' as const
    color?: number
    background_emoji_id?: string
    constructor(options: {
        color?: number
        background_emoji_id?: string
    } = {}) {
        this.color = options.color;
        this.background_emoji_id = options.background_emoji_id;
    }
}

export class PredicateHelpPeerColorSet {
    _ = 'help.peerColorSet' as const
    colors: number[]
    constructor(options: {
        colors: number[]
    }) {
        this.colors = options.colors;
    }
}

export class PredicateHelpPeerColorProfileSet {
    _ = 'help.peerColorProfileSet' as const
    palette_colors: number[]
    bg_colors: number[]
    story_colors: number[]
    constructor(options: {
        palette_colors: number[]
        bg_colors: number[]
        story_colors: number[]
    }) {
        this.palette_colors = options.palette_colors;
        this.bg_colors = options.bg_colors;
        this.story_colors = options.story_colors;
    }
}

export class PredicateHelpPeerColorOption {
    _ = 'help.peerColorOption' as const
    hidden?: true
    color_id: number
    colors?: HelpPeerColorSet
    dark_colors?: HelpPeerColorSet
    channel_min_level?: number
    constructor(options: {
        hidden?: true
        color_id: number
        colors?: HelpPeerColorSet
        dark_colors?: HelpPeerColorSet
        channel_min_level?: number
    }) {
        this.hidden = options.hidden;
        this.color_id = options.color_id;
        this.colors = options.colors;
        this.dark_colors = options.dark_colors;
        this.channel_min_level = options.channel_min_level;
    }
}

export class PredicateHelpPeerColorsNotModified {
    _ = 'help.peerColorsNotModified' as const
}

export class PredicateHelpPeerColors {
    _ = 'help.peerColors' as const
    hash: number
    colors: HelpPeerColorOption[]
    constructor(options: {
        hash: number
        colors: HelpPeerColorOption[]
    }) {
        this.hash = options.hash;
        this.colors = options.colors;
    }
}

export class PredicateMessageMediaGiveawayResults {
    _ = 'messageMediaGiveawayResults' as const
    only_new_subscribers?: true
    refunded?: true
    channel_id: string
    additional_peers_count?: number
    launch_msg_id: number
    winners_count: number
    unclaimed_count: number
    winners: string[]
    months: number
    prize_description?: string
    until_date: number
    constructor(options: {
        only_new_subscribers?: true
        refunded?: true
        channel_id: string
        additional_peers_count?: number
        launch_msg_id: number
        winners_count: number
        unclaimed_count: number
        winners: string[]
        months: number
        prize_description?: string
        until_date: number
    }) {
        this.only_new_subscribers = options.only_new_subscribers;
        this.refunded = options.refunded;
        this.channel_id = options.channel_id;
        this.additional_peers_count = options.additional_peers_count;
        this.launch_msg_id = options.launch_msg_id;
        this.winners_count = options.winners_count;
        this.unclaimed_count = options.unclaimed_count;
        this.winners = options.winners;
        this.months = options.months;
        this.prize_description = options.prize_description;
        this.until_date = options.until_date;
    }
}

export class PredicateStoryReaction {
    _ = 'storyReaction' as const
    peer_id: Peer
    date: number
    reaction: Reaction
    constructor(options: {
        peer_id: Peer
        date: number
        reaction: Reaction
    }) {
        this.peer_id = options.peer_id;
        this.date = options.date;
        this.reaction = options.reaction;
    }
}

export class PredicateStoryReactionPublicForward {
    _ = 'storyReactionPublicForward' as const
    message: Message
    constructor(options: {
        message: Message
    }) {
        this.message = options.message;
    }
}

export class PredicateStoryReactionPublicRepost {
    _ = 'storyReactionPublicRepost' as const
    peer_id: Peer
    story: StoryItem
    constructor(options: {
        peer_id: Peer
        story: StoryItem
    }) {
        this.peer_id = options.peer_id;
        this.story = options.story;
    }
}

export class PredicateStoriesStoryReactionsList {
    _ = 'stories.storyReactionsList' as const
    count: number
    reactions: StoryReaction[]
    chats: Chat[]
    users: User[]
    next_offset?: string
    constructor(options: {
        count: number
        reactions: StoryReaction[]
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

export class PredicateStoryViewPublicForward {
    _ = 'storyViewPublicForward' as const
    blocked?: true
    blocked_my_stories_from?: true
    message: Message
    constructor(options: {
        blocked?: true
        blocked_my_stories_from?: true
        message: Message
    }) {
        this.blocked = options.blocked;
        this.blocked_my_stories_from = options.blocked_my_stories_from;
        this.message = options.message;
    }
}

export class PredicateStoryViewPublicRepost {
    _ = 'storyViewPublicRepost' as const
    blocked?: true
    blocked_my_stories_from?: true
    peer_id: Peer
    story: StoryItem
    constructor(options: {
        blocked?: true
        blocked_my_stories_from?: true
        peer_id: Peer
        story: StoryItem
    }) {
        this.blocked = options.blocked;
        this.blocked_my_stories_from = options.blocked_my_stories_from;
        this.peer_id = options.peer_id;
        this.story = options.story;
    }
}

export class PredicateChannelAdminLogEventActionChangePeerColor {
    _ = 'channelAdminLogEventActionChangePeerColor' as const
    prev_value: PeerColor
    new_value: PeerColor
    constructor(options: {
        prev_value: PeerColor
        new_value: PeerColor
    }) {
        this.prev_value = options.prev_value;
        this.new_value = options.new_value;
    }
}

export class PredicateChannelAdminLogEventActionChangeProfilePeerColor {
    _ = 'channelAdminLogEventActionChangeProfilePeerColor' as const
    prev_value: PeerColor
    new_value: PeerColor
    constructor(options: {
        prev_value: PeerColor
        new_value: PeerColor
    }) {
        this.prev_value = options.prev_value;
        this.new_value = options.new_value;
    }
}

export class PredicateChannelAdminLogEventActionChangeWallpaper {
    _ = 'channelAdminLogEventActionChangeWallpaper' as const
    prev_value: WallPaper
    new_value: WallPaper
    constructor(options: {
        prev_value: WallPaper
        new_value: WallPaper
    }) {
        this.prev_value = options.prev_value;
        this.new_value = options.new_value;
    }
}

export class PredicateChannelAdminLogEventActionChangeEmojiStatus {
    _ = 'channelAdminLogEventActionChangeEmojiStatus' as const
    prev_value: EmojiStatus
    new_value: EmojiStatus
    constructor(options: {
        prev_value: EmojiStatus
        new_value: EmojiStatus
    }) {
        this.prev_value = options.prev_value;
        this.new_value = options.new_value;
    }
}

export class PredicateInputStickerSetEmojiChannelDefaultStatuses {
    _ = 'inputStickerSetEmojiChannelDefaultStatuses' as const
}

export class PredicateMediaAreaChannelPost {
    _ = 'mediaAreaChannelPost' as const
    coordinates: MediaAreaCoordinates
    channel_id: string
    msg_id: number
    constructor(options: {
        coordinates: MediaAreaCoordinates
        channel_id: string
        msg_id: number
    }) {
        this.coordinates = options.coordinates;
        this.channel_id = options.channel_id;
        this.msg_id = options.msg_id;
    }
}

export class PredicateInputMediaAreaChannelPost {
    _ = 'inputMediaAreaChannelPost' as const
    coordinates: MediaAreaCoordinates
    channel: InputChannel
    msg_id: number
    constructor(options: {
        coordinates: MediaAreaCoordinates
        channel: InputChannel
        msg_id: number
    }) {
        this.coordinates = options.coordinates;
        this.channel = options.channel;
        this.msg_id = options.msg_id;
    }
}

export class PredicateUpdateBotMessageReaction {
    _ = 'updateBotMessageReaction' as const
    peer: Peer
    msg_id: number
    date: number
    actor: Peer
    old_reactions: Reaction[]
    new_reactions: Reaction[]
    qts: number
    constructor(options: {
        peer: Peer
        msg_id: number
        date: number
        actor: Peer
        old_reactions: Reaction[]
        new_reactions: Reaction[]
        qts: number
    }) {
        this.peer = options.peer;
        this.msg_id = options.msg_id;
        this.date = options.date;
        this.actor = options.actor;
        this.old_reactions = options.old_reactions;
        this.new_reactions = options.new_reactions;
        this.qts = options.qts;
    }
}

export class PredicateUpdateBotMessageReactions {
    _ = 'updateBotMessageReactions' as const
    peer: Peer
    msg_id: number
    date: number
    reactions: ReactionCount[]
    qts: number
    constructor(options: {
        peer: Peer
        msg_id: number
        date: number
        reactions: ReactionCount[]
        qts: number
    }) {
        this.peer = options.peer;
        this.msg_id = options.msg_id;
        this.date = options.date;
        this.reactions = options.reactions;
        this.qts = options.qts;
    }
}

export class PredicateSavedDialog {
    _ = 'savedDialog' as const
    pinned?: true
    peer: Peer
    top_message: number
    constructor(options: {
        pinned?: true
        peer: Peer
        top_message: number
    }) {
        this.pinned = options.pinned;
        this.peer = options.peer;
        this.top_message = options.top_message;
    }
}

export class PredicateUpdateSavedDialogPinned {
    _ = 'updateSavedDialogPinned' as const
    pinned?: true
    peer: DialogPeer
    constructor(options: {
        pinned?: true
        peer: DialogPeer
    }) {
        this.pinned = options.pinned;
        this.peer = options.peer;
    }
}

export class PredicateUpdatePinnedSavedDialogs {
    _ = 'updatePinnedSavedDialogs' as const
    order?: DialogPeer[]
    constructor(options: {
        order?: DialogPeer[]
    } = {}) {
        this.order = options.order;
    }
}

export class PredicateMessagesSavedDialogs {
    _ = 'messages.savedDialogs' as const
    dialogs: SavedDialog[]
    messages: Message[]
    chats: Chat[]
    users: User[]
    constructor(options: {
        dialogs: SavedDialog[]
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

export class PredicateMessagesSavedDialogsSlice {
    _ = 'messages.savedDialogsSlice' as const
    count: number
    dialogs: SavedDialog[]
    messages: Message[]
    chats: Chat[]
    users: User[]
    constructor(options: {
        count: number
        dialogs: SavedDialog[]
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

export class PredicateMessagesSavedDialogsNotModified {
    _ = 'messages.savedDialogsNotModified' as const
    count: number
    constructor(options: {
        count: number
    }) {
        this.count = options.count;
    }
}

export type Error = PredicateError;

export type InputPeer = PredicateInputPeerEmpty | PredicateInputPeerSelf | PredicateInputPeerChat | PredicateInputPeerUser | PredicateInputPeerChannel | PredicateInputPeerUserFromMessage | PredicateInputPeerChannelFromMessage;

export type InputUser = PredicateInputUserEmpty | PredicateInputUserSelf | PredicateInputUser | PredicateInputUserFromMessage;

export type InputContact = PredicateInputPhoneContact;

export type InputFile = PredicateInputFile | PredicateInputFileBig;

export type InputMedia = PredicateInputMediaEmpty | PredicateInputMediaUploadedPhoto | PredicateInputMediaPhoto | PredicateInputMediaGeoPoint | PredicateInputMediaContact | PredicateInputMediaUploadedDocument | PredicateInputMediaDocument | PredicateInputMediaVenue | PredicateInputMediaPhotoExternal | PredicateInputMediaDocumentExternal | PredicateInputMediaGame | PredicateInputMediaInvoice | PredicateInputMediaGeoLive | PredicateInputMediaPoll | PredicateInputMediaDice | PredicateInputMediaStory | PredicateInputMediaWebPage;

export type InputChatPhoto = PredicateInputChatPhotoEmpty | PredicateInputChatUploadedPhoto | PredicateInputChatPhoto;

export type InputGeoPoint = PredicateInputGeoPointEmpty | PredicateInputGeoPoint;

export type InputPhoto = PredicateInputPhotoEmpty | PredicateInputPhoto;

export type InputFileLocation = PredicateInputFileLocation | PredicateInputEncryptedFileLocation | PredicateInputDocumentFileLocation | PredicateInputSecureFileLocation | PredicateInputTakeoutFileLocation | PredicateInputPhotoFileLocation | PredicateInputPhotoLegacyFileLocation | PredicateInputPeerPhotoFileLocation | PredicateInputStickerSetThumb | PredicateInputGroupCallStream;

export type Peer = PredicatePeerUser | PredicatePeerChat | PredicatePeerChannel;

export type StorageFileType = PredicateStorageFileUnknown | PredicateStorageFilePartial | PredicateStorageFileJpeg | PredicateStorageFileGif | PredicateStorageFilePng | PredicateStorageFilePdf | PredicateStorageFileMp3 | PredicateStorageFileMov | PredicateStorageFileMp4 | PredicateStorageFileWebp;

export type User = PredicateUserEmpty | PredicateUser;

export type UserProfilePhoto = PredicateUserProfilePhotoEmpty | PredicateUserProfilePhoto;

export type UserStatus = PredicateUserStatusEmpty | PredicateUserStatusOnline | PredicateUserStatusOffline | PredicateUserStatusRecently | PredicateUserStatusLastWeek | PredicateUserStatusLastMonth;

export type Chat = PredicateChatEmpty | PredicateChat | PredicateChatForbidden | PredicateChannel | PredicateChannelForbidden;

export type ChatFull = PredicateChatFull | PredicateChannelFull;

export type ChatParticipant = PredicateChatParticipant | PredicateChatParticipantCreator | PredicateChatParticipantAdmin;

export type ChatParticipants = PredicateChatParticipantsForbidden | PredicateChatParticipants;

export type ChatPhoto = PredicateChatPhotoEmpty | PredicateChatPhoto;

export type Message = PredicateMessageEmpty | PredicateMessage | PredicateMessageService;

export type MessageMedia = PredicateMessageMediaEmpty | PredicateMessageMediaPhoto | PredicateMessageMediaGeo | PredicateMessageMediaContact | PredicateMessageMediaUnsupported | PredicateMessageMediaDocument | PredicateMessageMediaWebPage | PredicateMessageMediaVenue | PredicateMessageMediaGame | PredicateMessageMediaInvoice | PredicateMessageMediaGeoLive | PredicateMessageMediaPoll | PredicateMessageMediaDice | PredicateMessageMediaStory | PredicateMessageMediaGiveaway | PredicateMessageMediaGiveawayResults;

export type MessageAction = PredicateMessageActionEmpty | PredicateMessageActionChatCreate | PredicateMessageActionChatEditTitle | PredicateMessageActionChatEditPhoto | PredicateMessageActionChatDeletePhoto | PredicateMessageActionChatAddUser | PredicateMessageActionChatDeleteUser | PredicateMessageActionChatJoinedByLink | PredicateMessageActionChannelCreate | PredicateMessageActionChatMigrateTo | PredicateMessageActionChannelMigrateFrom | PredicateMessageActionPinMessage | PredicateMessageActionHistoryClear | PredicateMessageActionGameScore | PredicateMessageActionPaymentSentMe | PredicateMessageActionPaymentSent | PredicateMessageActionPhoneCall | PredicateMessageActionScreenshotTaken | PredicateMessageActionCustomAction | PredicateMessageActionBotAllowed | PredicateMessageActionSecureValuesSentMe | PredicateMessageActionSecureValuesSent | PredicateMessageActionContactSignUp | PredicateMessageActionGeoProximityReached | PredicateMessageActionGroupCall | PredicateMessageActionInviteToGroupCall | PredicateMessageActionSetMessagesTTL | PredicateMessageActionGroupCallScheduled | PredicateMessageActionSetChatTheme | PredicateMessageActionChatJoinedByRequest | PredicateMessageActionWebViewDataSentMe | PredicateMessageActionWebViewDataSent | PredicateMessageActionGiftPremium | PredicateMessageActionTopicCreate | PredicateMessageActionTopicEdit | PredicateMessageActionSuggestProfilePhoto | PredicateMessageActionRequestedPeer | PredicateMessageActionSetChatWallPaper | PredicateMessageActionGiftCode | PredicateMessageActionGiveawayLaunch | PredicateMessageActionGiveawayResults;

export type Dialog = PredicateDialog | PredicateDialogFolder;

export type Photo = PredicatePhotoEmpty | PredicatePhoto;

export type PhotoSize = PredicatePhotoSizeEmpty | PredicatePhotoSize | PredicatePhotoCachedSize | PredicatePhotoStrippedSize | PredicatePhotoSizeProgressive | PredicatePhotoPathSize;

export type GeoPoint = PredicateGeoPointEmpty | PredicateGeoPoint;

export type AuthSentCode = PredicateAuthSentCode | PredicateAuthSentCodeSuccess;

export type AuthAuthorization = PredicateAuthAuthorization | PredicateAuthAuthorizationSignUpRequired;

export type AuthExportedAuthorization = PredicateAuthExportedAuthorization;

export type InputNotifyPeer = PredicateInputNotifyPeer | PredicateInputNotifyUsers | PredicateInputNotifyChats | PredicateInputNotifyBroadcasts | PredicateInputNotifyForumTopic;

export type InputPeerNotifySettings = PredicateInputPeerNotifySettings;

export type PeerNotifySettings = PredicatePeerNotifySettings;

export type PeerSettings = PredicatePeerSettings;

export type WallPaper = PredicateWallPaper | PredicateWallPaperNoFile;

export type ReportReason = PredicateInputReportReasonSpam | PredicateInputReportReasonViolence | PredicateInputReportReasonPornography | PredicateInputReportReasonChildAbuse | PredicateInputReportReasonOther | PredicateInputReportReasonCopyright | PredicateInputReportReasonGeoIrrelevant | PredicateInputReportReasonFake | PredicateInputReportReasonIllegalDrugs | PredicateInputReportReasonPersonalDetails;

export type UserFull = PredicateUserFull;

export type Contact = PredicateContact;

export type ImportedContact = PredicateImportedContact;

export type ContactStatus = PredicateContactStatus;

export type ContactsContacts = PredicateContactsContactsNotModified | PredicateContactsContacts;

export type ContactsImportedContacts = PredicateContactsImportedContacts;

export type ContactsBlocked = PredicateContactsBlocked | PredicateContactsBlockedSlice;

export type MessagesDialogs = PredicateMessagesDialogs | PredicateMessagesDialogsSlice | PredicateMessagesDialogsNotModified;

export type MessagesMessages = PredicateMessagesMessages | PredicateMessagesMessagesSlice | PredicateMessagesChannelMessages | PredicateMessagesMessagesNotModified;

export type MessagesChats = PredicateMessagesChats | PredicateMessagesChatsSlice;

export type MessagesChatFull = PredicateMessagesChatFull;

export type MessagesAffectedHistory = PredicateMessagesAffectedHistory;

export type MessagesFilter = PredicateInputMessagesFilterEmpty | PredicateInputMessagesFilterPhotos | PredicateInputMessagesFilterVideo | PredicateInputMessagesFilterPhotoVideo | PredicateInputMessagesFilterDocument | PredicateInputMessagesFilterUrl | PredicateInputMessagesFilterGif | PredicateInputMessagesFilterVoice | PredicateInputMessagesFilterMusic | PredicateInputMessagesFilterChatPhotos | PredicateInputMessagesFilterPhoneCalls | PredicateInputMessagesFilterRoundVoice | PredicateInputMessagesFilterRoundVideo | PredicateInputMessagesFilterMyMentions | PredicateInputMessagesFilterGeo | PredicateInputMessagesFilterContacts | PredicateInputMessagesFilterPinned;

export type Update = PredicateUpdateNewMessage | PredicateUpdateMessageID | PredicateUpdateDeleteMessages | PredicateUpdateUserTyping | PredicateUpdateChatUserTyping | PredicateUpdateChatParticipants | PredicateUpdateUserStatus | PredicateUpdateUserName | PredicateUpdateNewAuthorization | PredicateUpdateNewEncryptedMessage | PredicateUpdateEncryptedChatTyping | PredicateUpdateEncryption | PredicateUpdateEncryptedMessagesRead | PredicateUpdateChatParticipantAdd | PredicateUpdateChatParticipantDelete | PredicateUpdateDcOptions | PredicateUpdateNotifySettings | PredicateUpdateServiceNotification | PredicateUpdatePrivacy | PredicateUpdateUserPhone | PredicateUpdateReadHistoryInbox | PredicateUpdateReadHistoryOutbox | PredicateUpdateWebPage | PredicateUpdateReadMessagesContents | PredicateUpdateChannelTooLong | PredicateUpdateChannel | PredicateUpdateNewChannelMessage | PredicateUpdateReadChannelInbox | PredicateUpdateDeleteChannelMessages | PredicateUpdateChannelMessageViews | PredicateUpdateChatParticipantAdmin | PredicateUpdateNewStickerSet | PredicateUpdateStickerSetsOrder | PredicateUpdateStickerSets | PredicateUpdateSavedGifs | PredicateUpdateBotInlineQuery | PredicateUpdateBotInlineSend | PredicateUpdateEditChannelMessage | PredicateUpdateBotCallbackQuery | PredicateUpdateEditMessage | PredicateUpdateInlineBotCallbackQuery | PredicateUpdateReadChannelOutbox | PredicateUpdateDraftMessage | PredicateUpdateReadFeaturedStickers | PredicateUpdateRecentStickers | PredicateUpdateConfig | PredicateUpdatePtsChanged | PredicateUpdateChannelWebPage | PredicateUpdateDialogPinned | PredicateUpdatePinnedDialogs | PredicateUpdateBotWebhookJSON | PredicateUpdateBotWebhookJSONQuery | PredicateUpdateBotShippingQuery | PredicateUpdateBotPrecheckoutQuery | PredicateUpdatePhoneCall | PredicateUpdateLangPackTooLong | PredicateUpdateLangPack | PredicateUpdateFavedStickers | PredicateUpdateChannelReadMessagesContents | PredicateUpdateContactsReset | PredicateUpdateChannelAvailableMessages | PredicateUpdateDialogUnreadMark | PredicateUpdateMessagePoll | PredicateUpdateChatDefaultBannedRights | PredicateUpdateFolderPeers | PredicateUpdatePeerSettings | PredicateUpdatePeerLocated | PredicateUpdateNewScheduledMessage | PredicateUpdateDeleteScheduledMessages | PredicateUpdateTheme | PredicateUpdateGeoLiveViewed | PredicateUpdateLoginToken | PredicateUpdateMessagePollVote | PredicateUpdateDialogFilter | PredicateUpdateDialogFilterOrder | PredicateUpdateDialogFilters | PredicateUpdatePhoneCallSignalingData | PredicateUpdateChannelMessageForwards | PredicateUpdateReadChannelDiscussionInbox | PredicateUpdateReadChannelDiscussionOutbox | PredicateUpdatePeerBlocked | PredicateUpdateChannelUserTyping | PredicateUpdatePinnedMessages | PredicateUpdatePinnedChannelMessages | PredicateUpdateChat | PredicateUpdateGroupCallParticipants | PredicateUpdateGroupCall | PredicateUpdatePeerHistoryTTL | PredicateUpdateChatParticipant | PredicateUpdateChannelParticipant | PredicateUpdateBotStopped | PredicateUpdateGroupCallConnection | PredicateUpdateBotCommands | PredicateUpdatePendingJoinRequests | PredicateUpdateBotChatInviteRequester | PredicateUpdateMessageReactions | PredicateUpdateAttachMenuBots | PredicateUpdateWebViewResultSent | PredicateUpdateBotMenuButton | PredicateUpdateSavedRingtones | PredicateUpdateTranscribedAudio | PredicateUpdateReadFeaturedEmojiStickers | PredicateUpdateUserEmojiStatus | PredicateUpdateRecentEmojiStatuses | PredicateUpdateRecentReactions | PredicateUpdateMoveStickerSetToTop | PredicateUpdateMessageExtendedMedia | PredicateUpdateChannelPinnedTopic | PredicateUpdateChannelPinnedTopics | PredicateUpdateUser | PredicateUpdateAutoSaveSettings | PredicateUpdateGroupInvitePrivacyForbidden | PredicateUpdateStory | PredicateUpdateReadStories | PredicateUpdateStoryID | PredicateUpdateStoriesStealthMode | PredicateUpdateSentStoryReaction | PredicateUpdateBotChatBoost | PredicateUpdateChannelViewForumAsMessages | PredicateUpdatePeerWallpaper | PredicateUpdateBotMessageReaction | PredicateUpdateBotMessageReactions | PredicateUpdateSavedDialogPinned | PredicateUpdatePinnedSavedDialogs;

export type UpdatesState = PredicateUpdatesState;

export type UpdatesDifference = PredicateUpdatesDifferenceEmpty | PredicateUpdatesDifference | PredicateUpdatesDifferenceSlice | PredicateUpdatesDifferenceTooLong;

export type Updates = PredicateUpdatesTooLong | PredicateUpdateShortMessage | PredicateUpdateShortChatMessage | PredicateUpdateShort | PredicateUpdatesCombined | PredicateUpdates | PredicateUpdateShortSentMessage;

export type PhotosPhotos = PredicatePhotosPhotos | PredicatePhotosPhotosSlice;

export type PhotosPhoto = PredicatePhotosPhoto;

export type UploadFile = PredicateUploadFile | PredicateUploadFileCdnRedirect;

export type DcOption = PredicateDcOption;

export type Config = PredicateConfig;

export type NearestDc = PredicateNearestDc;

export type HelpAppUpdate = PredicateHelpAppUpdate | PredicateHelpNoAppUpdate;

export type HelpInviteText = PredicateHelpInviteText;

export type EncryptedChat = PredicateEncryptedChatEmpty | PredicateEncryptedChatWaiting | PredicateEncryptedChatRequested | PredicateEncryptedChat | PredicateEncryptedChatDiscarded;

export type InputEncryptedChat = PredicateInputEncryptedChat;

export type EncryptedFile = PredicateEncryptedFileEmpty | PredicateEncryptedFile;

export type InputEncryptedFile = PredicateInputEncryptedFileEmpty | PredicateInputEncryptedFileUploaded | PredicateInputEncryptedFile | PredicateInputEncryptedFileBigUploaded;

export type EncryptedMessage = PredicateEncryptedMessage | PredicateEncryptedMessageService;

export type MessagesDhConfig = PredicateMessagesDhConfigNotModified | PredicateMessagesDhConfig;

export type MessagesSentEncryptedMessage = PredicateMessagesSentEncryptedMessage | PredicateMessagesSentEncryptedFile;

export type InputDocument = PredicateInputDocumentEmpty | PredicateInputDocument;

export type Document = PredicateDocumentEmpty | PredicateDocument;

export type HelpSupport = PredicateHelpSupport;

export type NotifyPeer = PredicateNotifyPeer | PredicateNotifyUsers | PredicateNotifyChats | PredicateNotifyBroadcasts | PredicateNotifyForumTopic;

export type SendMessageAction = PredicateSendMessageTypingAction | PredicateSendMessageCancelAction | PredicateSendMessageRecordVideoAction | PredicateSendMessageUploadVideoAction | PredicateSendMessageRecordAudioAction | PredicateSendMessageUploadAudioAction | PredicateSendMessageUploadPhotoAction | PredicateSendMessageUploadDocumentAction | PredicateSendMessageGeoLocationAction | PredicateSendMessageChooseContactAction | PredicateSendMessageGamePlayAction | PredicateSendMessageRecordRoundAction | PredicateSendMessageUploadRoundAction | PredicateSpeakingInGroupCallAction | PredicateSendMessageHistoryImportAction | PredicateSendMessageChooseStickerAction | PredicateSendMessageEmojiInteraction | PredicateSendMessageEmojiInteractionSeen;

export type ContactsFound = PredicateContactsFound;

export type InputPrivacyKey = PredicateInputPrivacyKeyStatusTimestamp | PredicateInputPrivacyKeyChatInvite | PredicateInputPrivacyKeyPhoneCall | PredicateInputPrivacyKeyPhoneP2P | PredicateInputPrivacyKeyForwards | PredicateInputPrivacyKeyProfilePhoto | PredicateInputPrivacyKeyPhoneNumber | PredicateInputPrivacyKeyAddedByPhone | PredicateInputPrivacyKeyVoiceMessages | PredicateInputPrivacyKeyAbout;

export type PrivacyKey = PredicatePrivacyKeyStatusTimestamp | PredicatePrivacyKeyChatInvite | PredicatePrivacyKeyPhoneCall | PredicatePrivacyKeyPhoneP2P | PredicatePrivacyKeyForwards | PredicatePrivacyKeyProfilePhoto | PredicatePrivacyKeyPhoneNumber | PredicatePrivacyKeyAddedByPhone | PredicatePrivacyKeyVoiceMessages | PredicatePrivacyKeyAbout;

export type InputPrivacyRule = PredicateInputPrivacyValueAllowContacts | PredicateInputPrivacyValueAllowAll | PredicateInputPrivacyValueAllowUsers | PredicateInputPrivacyValueDisallowContacts | PredicateInputPrivacyValueDisallowAll | PredicateInputPrivacyValueDisallowUsers | PredicateInputPrivacyValueAllowChatParticipants | PredicateInputPrivacyValueDisallowChatParticipants | PredicateInputPrivacyValueAllowCloseFriends;

export type PrivacyRule = PredicatePrivacyValueAllowContacts | PredicatePrivacyValueAllowAll | PredicatePrivacyValueAllowUsers | PredicatePrivacyValueDisallowContacts | PredicatePrivacyValueDisallowAll | PredicatePrivacyValueDisallowUsers | PredicatePrivacyValueAllowChatParticipants | PredicatePrivacyValueDisallowChatParticipants | PredicatePrivacyValueAllowCloseFriends;

export type AccountPrivacyRules = PredicateAccountPrivacyRules;

export type AccountDaysTTL = PredicateAccountDaysTTL;

export type DocumentAttribute = PredicateDocumentAttributeImageSize | PredicateDocumentAttributeAnimated | PredicateDocumentAttributeSticker | PredicateDocumentAttributeVideo | PredicateDocumentAttributeAudio | PredicateDocumentAttributeFilename | PredicateDocumentAttributeHasStickers | PredicateDocumentAttributeCustomEmoji;

export type MessagesStickers = PredicateMessagesStickersNotModified | PredicateMessagesStickers;

export type StickerPack = PredicateStickerPack;

export type MessagesAllStickers = PredicateMessagesAllStickersNotModified | PredicateMessagesAllStickers;

export type MessagesAffectedMessages = PredicateMessagesAffectedMessages;

export type WebPage = PredicateWebPageEmpty | PredicateWebPagePending | PredicateWebPage | PredicateWebPageNotModified;

export type Authorization = PredicateAuthorization;

export type AccountAuthorizations = PredicateAccountAuthorizations;

export type AccountPassword = PredicateAccountPassword;

export type AccountPasswordSettings = PredicateAccountPasswordSettings;

export type AccountPasswordInputSettings = PredicateAccountPasswordInputSettings;

export type AuthPasswordRecovery = PredicateAuthPasswordRecovery;

export type ReceivedNotifyMessage = PredicateReceivedNotifyMessage;

export type ExportedChatInvite = PredicateChatInviteExported | PredicateChatInvitePublicJoinRequests;

export type ChatInvite = PredicateChatInviteAlready | PredicateChatInvite | PredicateChatInvitePeek;

export type InputStickerSet = PredicateInputStickerSetEmpty | PredicateInputStickerSetID | PredicateInputStickerSetShortName | PredicateInputStickerSetAnimatedEmoji | PredicateInputStickerSetDice | PredicateInputStickerSetAnimatedEmojiAnimations | PredicateInputStickerSetPremiumGifts | PredicateInputStickerSetEmojiGenericAnimations | PredicateInputStickerSetEmojiDefaultStatuses | PredicateInputStickerSetEmojiDefaultTopicIcons | PredicateInputStickerSetEmojiChannelDefaultStatuses;

export type StickerSet = PredicateStickerSet;

export type MessagesStickerSet = PredicateMessagesStickerSet | PredicateMessagesStickerSetNotModified;

export type BotCommand = PredicateBotCommand;

export type BotInfo = PredicateBotInfo;

export type KeyboardButton = PredicateKeyboardButton | PredicateKeyboardButtonUrl | PredicateKeyboardButtonCallback | PredicateKeyboardButtonRequestPhone | PredicateKeyboardButtonRequestGeoLocation | PredicateKeyboardButtonSwitchInline | PredicateKeyboardButtonGame | PredicateKeyboardButtonBuy | PredicateKeyboardButtonUrlAuth | PredicateInputKeyboardButtonUrlAuth | PredicateKeyboardButtonRequestPoll | PredicateInputKeyboardButtonUserProfile | PredicateKeyboardButtonUserProfile | PredicateKeyboardButtonWebView | PredicateKeyboardButtonSimpleWebView | PredicateKeyboardButtonRequestPeer;

export type KeyboardButtonRow = PredicateKeyboardButtonRow;

export type ReplyMarkup = PredicateReplyKeyboardHide | PredicateReplyKeyboardForceReply | PredicateReplyKeyboardMarkup | PredicateReplyInlineMarkup;

export type MessageEntity = PredicateMessageEntityUnknown | PredicateMessageEntityMention | PredicateMessageEntityHashtag | PredicateMessageEntityBotCommand | PredicateMessageEntityUrl | PredicateMessageEntityEmail | PredicateMessageEntityBold | PredicateMessageEntityItalic | PredicateMessageEntityCode | PredicateMessageEntityPre | PredicateMessageEntityTextUrl | PredicateMessageEntityMentionName | PredicateInputMessageEntityMentionName | PredicateMessageEntityPhone | PredicateMessageEntityCashtag | PredicateMessageEntityUnderline | PredicateMessageEntityStrike | PredicateMessageEntityBankCard | PredicateMessageEntitySpoiler | PredicateMessageEntityCustomEmoji | PredicateMessageEntityBlockquote;

export type InputChannel = PredicateInputChannelEmpty | PredicateInputChannel | PredicateInputChannelFromMessage;

export type ContactsResolvedPeer = PredicateContactsResolvedPeer;

export type MessageRange = PredicateMessageRange;

export type UpdatesChannelDifference = PredicateUpdatesChannelDifferenceEmpty | PredicateUpdatesChannelDifferenceTooLong | PredicateUpdatesChannelDifference;

export type ChannelMessagesFilter = PredicateChannelMessagesFilterEmpty | PredicateChannelMessagesFilter;

export type ChannelParticipant = PredicateChannelParticipant | PredicateChannelParticipantSelf | PredicateChannelParticipantCreator | PredicateChannelParticipantAdmin | PredicateChannelParticipantBanned | PredicateChannelParticipantLeft;

export type ChannelParticipantsFilter = PredicateChannelParticipantsRecent | PredicateChannelParticipantsAdmins | PredicateChannelParticipantsKicked | PredicateChannelParticipantsBots | PredicateChannelParticipantsBanned | PredicateChannelParticipantsSearch | PredicateChannelParticipantsContacts | PredicateChannelParticipantsMentions;

export type ChannelsChannelParticipants = PredicateChannelsChannelParticipants | PredicateChannelsChannelParticipantsNotModified;

export type ChannelsChannelParticipant = PredicateChannelsChannelParticipant;

export type HelpTermsOfService = PredicateHelpTermsOfService;

export type MessagesSavedGifs = PredicateMessagesSavedGifsNotModified | PredicateMessagesSavedGifs;

export type InputBotInlineMessage = PredicateInputBotInlineMessageMediaAuto | PredicateInputBotInlineMessageText | PredicateInputBotInlineMessageMediaGeo | PredicateInputBotInlineMessageMediaVenue | PredicateInputBotInlineMessageMediaContact | PredicateInputBotInlineMessageGame | PredicateInputBotInlineMessageMediaInvoice | PredicateInputBotInlineMessageMediaWebPage;

export type InputBotInlineResult = PredicateInputBotInlineResult | PredicateInputBotInlineResultPhoto | PredicateInputBotInlineResultDocument | PredicateInputBotInlineResultGame;

export type BotInlineMessage = PredicateBotInlineMessageMediaAuto | PredicateBotInlineMessageText | PredicateBotInlineMessageMediaGeo | PredicateBotInlineMessageMediaVenue | PredicateBotInlineMessageMediaContact | PredicateBotInlineMessageMediaInvoice | PredicateBotInlineMessageMediaWebPage;

export type BotInlineResult = PredicateBotInlineResult | PredicateBotInlineMediaResult;

export type MessagesBotResults = PredicateMessagesBotResults;

export type ExportedMessageLink = PredicateExportedMessageLink;

export type MessageFwdHeader = PredicateMessageFwdHeader;

export type AuthCodeType = PredicateAuthCodeTypeSms | PredicateAuthCodeTypeCall | PredicateAuthCodeTypeFlashCall | PredicateAuthCodeTypeMissedCall | PredicateAuthCodeTypeFragmentSms;

export type AuthSentCodeType = PredicateAuthSentCodeTypeApp | PredicateAuthSentCodeTypeSms | PredicateAuthSentCodeTypeCall | PredicateAuthSentCodeTypeFlashCall | PredicateAuthSentCodeTypeMissedCall | PredicateAuthSentCodeTypeEmailCode | PredicateAuthSentCodeTypeSetUpEmailRequired | PredicateAuthSentCodeTypeFragmentSms | PredicateAuthSentCodeTypeFirebaseSms;

export type MessagesBotCallbackAnswer = PredicateMessagesBotCallbackAnswer;

export type MessagesMessageEditData = PredicateMessagesMessageEditData;

export type InputBotInlineMessageID = PredicateInputBotInlineMessageID | PredicateInputBotInlineMessageID64;

export type InlineBotSwitchPM = PredicateInlineBotSwitchPM;

export type MessagesPeerDialogs = PredicateMessagesPeerDialogs;

export type TopPeer = PredicateTopPeer;

export type TopPeerCategory = PredicateTopPeerCategoryBotsPM | PredicateTopPeerCategoryBotsInline | PredicateTopPeerCategoryCorrespondents | PredicateTopPeerCategoryGroups | PredicateTopPeerCategoryChannels | PredicateTopPeerCategoryPhoneCalls | PredicateTopPeerCategoryForwardUsers | PredicateTopPeerCategoryForwardChats;

export type TopPeerCategoryPeers = PredicateTopPeerCategoryPeers;

export type ContactsTopPeers = PredicateContactsTopPeersNotModified | PredicateContactsTopPeers | PredicateContactsTopPeersDisabled;

export type DraftMessage = PredicateDraftMessageEmpty | PredicateDraftMessage;

export type MessagesFeaturedStickers = PredicateMessagesFeaturedStickersNotModified | PredicateMessagesFeaturedStickers;

export type MessagesRecentStickers = PredicateMessagesRecentStickersNotModified | PredicateMessagesRecentStickers;

export type MessagesArchivedStickers = PredicateMessagesArchivedStickers;

export type MessagesStickerSetInstallResult = PredicateMessagesStickerSetInstallResultSuccess | PredicateMessagesStickerSetInstallResultArchive;

export type StickerSetCovered = PredicateStickerSetCovered | PredicateStickerSetMultiCovered | PredicateStickerSetFullCovered | PredicateStickerSetNoCovered;

export type MaskCoords = PredicateMaskCoords;

export type InputStickeredMedia = PredicateInputStickeredMediaPhoto | PredicateInputStickeredMediaDocument;

export type Game = PredicateGame;

export type InputGame = PredicateInputGameID | PredicateInputGameShortName;

export type HighScore = PredicateHighScore;

export type MessagesHighScores = PredicateMessagesHighScores;

export type RichText = PredicateTextEmpty | PredicateTextPlain | PredicateTextBold | PredicateTextItalic | PredicateTextUnderline | PredicateTextStrike | PredicateTextFixed | PredicateTextUrl | PredicateTextEmail | PredicateTextConcat | PredicateTextSubscript | PredicateTextSuperscript | PredicateTextMarked | PredicateTextPhone | PredicateTextImage | PredicateTextAnchor;

export type PageBlock = PredicatePageBlockUnsupported | PredicatePageBlockTitle | PredicatePageBlockSubtitle | PredicatePageBlockAuthorDate | PredicatePageBlockHeader | PredicatePageBlockSubheader | PredicatePageBlockParagraph | PredicatePageBlockPreformatted | PredicatePageBlockFooter | PredicatePageBlockDivider | PredicatePageBlockAnchor | PredicatePageBlockList | PredicatePageBlockBlockquote | PredicatePageBlockPullquote | PredicatePageBlockPhoto | PredicatePageBlockVideo | PredicatePageBlockCover | PredicatePageBlockEmbed | PredicatePageBlockEmbedPost | PredicatePageBlockCollage | PredicatePageBlockSlideshow | PredicatePageBlockChannel | PredicatePageBlockAudio | PredicatePageBlockKicker | PredicatePageBlockTable | PredicatePageBlockOrderedList | PredicatePageBlockDetails | PredicatePageBlockRelatedArticles | PredicatePageBlockMap;

export type PhoneCallDiscardReason = PredicatePhoneCallDiscardReasonMissed | PredicatePhoneCallDiscardReasonDisconnect | PredicatePhoneCallDiscardReasonHangup | PredicatePhoneCallDiscardReasonBusy;

export type DataJSON = PredicateDataJSON;

export type LabeledPrice = PredicateLabeledPrice;

export type Invoice = PredicateInvoice;

export type PaymentCharge = PredicatePaymentCharge;

export type PostAddress = PredicatePostAddress;

export type PaymentRequestedInfo = PredicatePaymentRequestedInfo;

export type PaymentSavedCredentials = PredicatePaymentSavedCredentialsCard;

export type WebDocument = PredicateWebDocument | PredicateWebDocumentNoProxy;

export type InputWebDocument = PredicateInputWebDocument;

export type InputWebFileLocation = PredicateInputWebFileLocation | PredicateInputWebFileGeoPointLocation | PredicateInputWebFileAudioAlbumThumbLocation;

export type UploadWebFile = PredicateUploadWebFile;

export type PaymentsPaymentForm = PredicatePaymentsPaymentForm;

export type PaymentsValidatedRequestedInfo = PredicatePaymentsValidatedRequestedInfo;

export type PaymentsPaymentResult = PredicatePaymentsPaymentResult | PredicatePaymentsPaymentVerificationNeeded;

export type PaymentsPaymentReceipt = PredicatePaymentsPaymentReceipt;

export type PaymentsSavedInfo = PredicatePaymentsSavedInfo;

export type InputPaymentCredentials = PredicateInputPaymentCredentialsSaved | PredicateInputPaymentCredentials | PredicateInputPaymentCredentialsApplePay | PredicateInputPaymentCredentialsGooglePay;

export type AccountTmpPassword = PredicateAccountTmpPassword;

export type ShippingOption = PredicateShippingOption;

export type InputStickerSetItem = PredicateInputStickerSetItem;

export type InputPhoneCall = PredicateInputPhoneCall;

export type PhoneCall = PredicatePhoneCallEmpty | PredicatePhoneCallWaiting | PredicatePhoneCallRequested | PredicatePhoneCallAccepted | PredicatePhoneCall | PredicatePhoneCallDiscarded;

export type PhoneConnection = PredicatePhoneConnection | PredicatePhoneConnectionWebrtc;

export type PhoneCallProtocol = PredicatePhoneCallProtocol;

export type PhonePhoneCall = PredicatePhonePhoneCall;

export type UploadCdnFile = PredicateUploadCdnFileReuploadNeeded | PredicateUploadCdnFile;

export type CdnPublicKey = PredicateCdnPublicKey;

export type CdnConfig = PredicateCdnConfig;

export type LangPackString = PredicateLangPackString | PredicateLangPackStringPluralized | PredicateLangPackStringDeleted;

export type LangPackDifference = PredicateLangPackDifference;

export type LangPackLanguage = PredicateLangPackLanguage;

export type ChannelAdminLogEventAction = PredicateChannelAdminLogEventActionChangeTitle | PredicateChannelAdminLogEventActionChangeAbout | PredicateChannelAdminLogEventActionChangeUsername | PredicateChannelAdminLogEventActionChangePhoto | PredicateChannelAdminLogEventActionToggleInvites | PredicateChannelAdminLogEventActionToggleSignatures | PredicateChannelAdminLogEventActionUpdatePinned | PredicateChannelAdminLogEventActionEditMessage | PredicateChannelAdminLogEventActionDeleteMessage | PredicateChannelAdminLogEventActionParticipantJoin | PredicateChannelAdminLogEventActionParticipantLeave | PredicateChannelAdminLogEventActionParticipantInvite | PredicateChannelAdminLogEventActionParticipantToggleBan | PredicateChannelAdminLogEventActionParticipantToggleAdmin | PredicateChannelAdminLogEventActionChangeStickerSet | PredicateChannelAdminLogEventActionTogglePreHistoryHidden | PredicateChannelAdminLogEventActionDefaultBannedRights | PredicateChannelAdminLogEventActionStopPoll | PredicateChannelAdminLogEventActionChangeLinkedChat | PredicateChannelAdminLogEventActionChangeLocation | PredicateChannelAdminLogEventActionToggleSlowMode | PredicateChannelAdminLogEventActionStartGroupCall | PredicateChannelAdminLogEventActionDiscardGroupCall | PredicateChannelAdminLogEventActionParticipantMute | PredicateChannelAdminLogEventActionParticipantUnmute | PredicateChannelAdminLogEventActionToggleGroupCallSetting | PredicateChannelAdminLogEventActionParticipantJoinByInvite | PredicateChannelAdminLogEventActionExportedInviteDelete | PredicateChannelAdminLogEventActionExportedInviteRevoke | PredicateChannelAdminLogEventActionExportedInviteEdit | PredicateChannelAdminLogEventActionParticipantVolume | PredicateChannelAdminLogEventActionChangeHistoryTTL | PredicateChannelAdminLogEventActionParticipantJoinByRequest | PredicateChannelAdminLogEventActionToggleNoForwards | PredicateChannelAdminLogEventActionSendMessage | PredicateChannelAdminLogEventActionChangeAvailableReactions | PredicateChannelAdminLogEventActionChangeUsernames | PredicateChannelAdminLogEventActionToggleForum | PredicateChannelAdminLogEventActionCreateTopic | PredicateChannelAdminLogEventActionEditTopic | PredicateChannelAdminLogEventActionDeleteTopic | PredicateChannelAdminLogEventActionPinTopic | PredicateChannelAdminLogEventActionToggleAntiSpam | PredicateChannelAdminLogEventActionChangePeerColor | PredicateChannelAdminLogEventActionChangeProfilePeerColor | PredicateChannelAdminLogEventActionChangeWallpaper | PredicateChannelAdminLogEventActionChangeEmojiStatus;

export type ChannelAdminLogEvent = PredicateChannelAdminLogEvent;

export type ChannelsAdminLogResults = PredicateChannelsAdminLogResults;

export type ChannelAdminLogEventsFilter = PredicateChannelAdminLogEventsFilter;

export type PopularContact = PredicatePopularContact;

export type MessagesFavedStickers = PredicateMessagesFavedStickersNotModified | PredicateMessagesFavedStickers;

export type RecentMeUrl = PredicateRecentMeUrlUnknown | PredicateRecentMeUrlUser | PredicateRecentMeUrlChat | PredicateRecentMeUrlChatInvite | PredicateRecentMeUrlStickerSet;

export type HelpRecentMeUrls = PredicateHelpRecentMeUrls;

export type InputSingleMedia = PredicateInputSingleMedia;

export type WebAuthorization = PredicateWebAuthorization;

export type AccountWebAuthorizations = PredicateAccountWebAuthorizations;

export type InputMessage = PredicateInputMessageID | PredicateInputMessageReplyTo | PredicateInputMessagePinned | PredicateInputMessageCallbackQuery;

export type InputDialogPeer = PredicateInputDialogPeer | PredicateInputDialogPeerFolder;

export type DialogPeer = PredicateDialogPeer | PredicateDialogPeerFolder;

export type MessagesFoundStickerSets = PredicateMessagesFoundStickerSetsNotModified | PredicateMessagesFoundStickerSets;

export type FileHash = PredicateFileHash;

export type InputClientProxy = PredicateInputClientProxy;

export type HelpTermsOfServiceUpdate = PredicateHelpTermsOfServiceUpdateEmpty | PredicateHelpTermsOfServiceUpdate;

export type InputSecureFile = PredicateInputSecureFileUploaded | PredicateInputSecureFile;

export type SecureFile = PredicateSecureFileEmpty | PredicateSecureFile;

export type SecureData = PredicateSecureData;

export type SecurePlainData = PredicateSecurePlainPhone | PredicateSecurePlainEmail;

export type SecureValueType = PredicateSecureValueTypePersonalDetails | PredicateSecureValueTypePassport | PredicateSecureValueTypeDriverLicense | PredicateSecureValueTypeIdentityCard | PredicateSecureValueTypeInternalPassport | PredicateSecureValueTypeAddress | PredicateSecureValueTypeUtilityBill | PredicateSecureValueTypeBankStatement | PredicateSecureValueTypeRentalAgreement | PredicateSecureValueTypePassportRegistration | PredicateSecureValueTypeTemporaryRegistration | PredicateSecureValueTypePhone | PredicateSecureValueTypeEmail;

export type SecureValue = PredicateSecureValue;

export type InputSecureValue = PredicateInputSecureValue;

export type SecureValueHash = PredicateSecureValueHash;

export type SecureValueError = PredicateSecureValueErrorData | PredicateSecureValueErrorFrontSide | PredicateSecureValueErrorReverseSide | PredicateSecureValueErrorSelfie | PredicateSecureValueErrorFile | PredicateSecureValueErrorFiles | PredicateSecureValueError | PredicateSecureValueErrorTranslationFile | PredicateSecureValueErrorTranslationFiles;

export type SecureCredentialsEncrypted = PredicateSecureCredentialsEncrypted;

export type AccountAuthorizationForm = PredicateAccountAuthorizationForm;

export type AccountSentEmailCode = PredicateAccountSentEmailCode;

export type HelpDeepLinkInfo = PredicateHelpDeepLinkInfoEmpty | PredicateHelpDeepLinkInfo;

export type SavedContact = PredicateSavedPhoneContact;

export type AccountTakeout = PredicateAccountTakeout;

export type PasswordKdfAlgo = PredicatePasswordKdfAlgoUnknown | PredicatePasswordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow;

export type SecurePasswordKdfAlgo = PredicateSecurePasswordKdfAlgoUnknown | PredicateSecurePasswordKdfAlgoPBKDF2HMACSHA512iter100000 | PredicateSecurePasswordKdfAlgoSHA512;

export type SecureSecretSettings = PredicateSecureSecretSettings;

export type InputCheckPasswordSRP = PredicateInputCheckPasswordEmpty | PredicateInputCheckPasswordSRP;

export type SecureRequiredType = PredicateSecureRequiredType | PredicateSecureRequiredTypeOneOf;

export type HelpPassportConfig = PredicateHelpPassportConfigNotModified | PredicateHelpPassportConfig;

export type InputAppEvent = PredicateInputAppEvent;

export type JSONObjectValue = PredicateJsonObjectValue;

export type JSONValue = PredicateJsonNull | PredicateJsonBool | PredicateJsonNumber | PredicateJsonString | PredicateJsonArray | PredicateJsonObject;

export type PageTableCell = PredicatePageTableCell;

export type PageTableRow = PredicatePageTableRow;

export type PageCaption = PredicatePageCaption;

export type PageListItem = PredicatePageListItemText | PredicatePageListItemBlocks;

export type PageListOrderedItem = PredicatePageListOrderedItemText | PredicatePageListOrderedItemBlocks;

export type PageRelatedArticle = PredicatePageRelatedArticle;

export type Page = PredicatePage;

export type HelpSupportName = PredicateHelpSupportName;

export type HelpUserInfo = PredicateHelpUserInfoEmpty | PredicateHelpUserInfo;

export type PollAnswer = PredicatePollAnswer;

export type Poll = PredicatePoll;

export type PollAnswerVoters = PredicatePollAnswerVoters;

export type PollResults = PredicatePollResults;

export type ChatOnlines = PredicateChatOnlines;

export type StatsURL = PredicateStatsURL;

export type ChatAdminRights = PredicateChatAdminRights;

export type ChatBannedRights = PredicateChatBannedRights;

export type InputWallPaper = PredicateInputWallPaper | PredicateInputWallPaperSlug | PredicateInputWallPaperNoFile;

export type AccountWallPapers = PredicateAccountWallPapersNotModified | PredicateAccountWallPapers;

export type CodeSettings = PredicateCodeSettings;

export type WallPaperSettings = PredicateWallPaperSettings;

export type AutoDownloadSettings = PredicateAutoDownloadSettings;

export type AccountAutoDownloadSettings = PredicateAccountAutoDownloadSettings;

export type EmojiKeyword = PredicateEmojiKeyword | PredicateEmojiKeywordDeleted;

export type EmojiKeywordsDifference = PredicateEmojiKeywordsDifference;

export type EmojiURL = PredicateEmojiURL;

export type EmojiLanguage = PredicateEmojiLanguage;

export type Folder = PredicateFolder;

export type InputFolderPeer = PredicateInputFolderPeer;

export type FolderPeer = PredicateFolderPeer;

export type MessagesSearchCounter = PredicateMessagesSearchCounter;

export type UrlAuthResult = PredicateUrlAuthResultRequest | PredicateUrlAuthResultAccepted | PredicateUrlAuthResultDefault;

export type ChannelLocation = PredicateChannelLocationEmpty | PredicateChannelLocation;

export type PeerLocated = PredicatePeerLocated | PredicatePeerSelfLocated;

export type RestrictionReason = PredicateRestrictionReason;

export type InputTheme = PredicateInputTheme | PredicateInputThemeSlug;

export type Theme = PredicateTheme;

export type AccountThemes = PredicateAccountThemesNotModified | PredicateAccountThemes;

export type AuthLoginToken = PredicateAuthLoginToken | PredicateAuthLoginTokenMigrateTo | PredicateAuthLoginTokenSuccess;

export type AccountContentSettings = PredicateAccountContentSettings;

export type MessagesInactiveChats = PredicateMessagesInactiveChats;

export type BaseTheme = PredicateBaseThemeClassic | PredicateBaseThemeDay | PredicateBaseThemeNight | PredicateBaseThemeTinted | PredicateBaseThemeArctic;

export type InputThemeSettings = PredicateInputThemeSettings;

export type ThemeSettings = PredicateThemeSettings;

export type WebPageAttribute = PredicateWebPageAttributeTheme | PredicateWebPageAttributeStory;

export type MessagesVotesList = PredicateMessagesVotesList;

export type BankCardOpenUrl = PredicateBankCardOpenUrl;

export type PaymentsBankCardData = PredicatePaymentsBankCardData;

export type DialogFilter = PredicateDialogFilter | PredicateDialogFilterDefault | PredicateDialogFilterChatlist;

export type DialogFilterSuggested = PredicateDialogFilterSuggested;

export type StatsDateRangeDays = PredicateStatsDateRangeDays;

export type StatsAbsValueAndPrev = PredicateStatsAbsValueAndPrev;

export type StatsPercentValue = PredicateStatsPercentValue;

export type StatsGraph = PredicateStatsGraphAsync | PredicateStatsGraphError | PredicateStatsGraph;

export type StatsBroadcastStats = PredicateStatsBroadcastStats;

export type HelpPromoData = PredicateHelpPromoDataEmpty | PredicateHelpPromoData;

export type VideoSize = PredicateVideoSize | PredicateVideoSizeEmojiMarkup | PredicateVideoSizeStickerMarkup;

export type StatsGroupTopPoster = PredicateStatsGroupTopPoster;

export type StatsGroupTopAdmin = PredicateStatsGroupTopAdmin;

export type StatsGroupTopInviter = PredicateStatsGroupTopInviter;

export type StatsMegagroupStats = PredicateStatsMegagroupStats;

export type GlobalPrivacySettings = PredicateGlobalPrivacySettings;

export type HelpCountryCode = PredicateHelpCountryCode;

export type HelpCountry = PredicateHelpCountry;

export type HelpCountriesList = PredicateHelpCountriesListNotModified | PredicateHelpCountriesList;

export type MessageViews = PredicateMessageViews;

export type MessagesMessageViews = PredicateMessagesMessageViews;

export type MessagesDiscussionMessage = PredicateMessagesDiscussionMessage;

export type MessageReplyHeader = PredicateMessageReplyHeader | PredicateMessageReplyStoryHeader;

export type MessageReplies = PredicateMessageReplies;

export type PeerBlocked = PredicatePeerBlocked;

export type StatsMessageStats = PredicateStatsMessageStats;

export type GroupCall = PredicateGroupCallDiscarded | PredicateGroupCall;

export type InputGroupCall = PredicateInputGroupCall;

export type GroupCallParticipant = PredicateGroupCallParticipant;

export type PhoneGroupCall = PredicatePhoneGroupCall;

export type PhoneGroupParticipants = PredicatePhoneGroupParticipants;

export type InlineQueryPeerType = PredicateInlineQueryPeerTypeSameBotPM | PredicateInlineQueryPeerTypePM | PredicateInlineQueryPeerTypeChat | PredicateInlineQueryPeerTypeMegagroup | PredicateInlineQueryPeerTypeBroadcast | PredicateInlineQueryPeerTypeBotPM;

export type MessagesHistoryImport = PredicateMessagesHistoryImport;

export type MessagesHistoryImportParsed = PredicateMessagesHistoryImportParsed;

export type MessagesAffectedFoundMessages = PredicateMessagesAffectedFoundMessages;

export type ChatInviteImporter = PredicateChatInviteImporter;

export type MessagesExportedChatInvites = PredicateMessagesExportedChatInvites;

export type MessagesExportedChatInvite = PredicateMessagesExportedChatInvite | PredicateMessagesExportedChatInviteReplaced;

export type MessagesChatInviteImporters = PredicateMessagesChatInviteImporters;

export type ChatAdminWithInvites = PredicateChatAdminWithInvites;

export type MessagesChatAdminsWithInvites = PredicateMessagesChatAdminsWithInvites;

export type MessagesCheckedHistoryImportPeer = PredicateMessagesCheckedHistoryImportPeer;

export type PhoneJoinAsPeers = PredicatePhoneJoinAsPeers;

export type PhoneExportedGroupCallInvite = PredicatePhoneExportedGroupCallInvite;

export type GroupCallParticipantVideoSourceGroup = PredicateGroupCallParticipantVideoSourceGroup;

export type GroupCallParticipantVideo = PredicateGroupCallParticipantVideo;

export type StickersSuggestedShortName = PredicateStickersSuggestedShortName;

export type BotCommandScope = PredicateBotCommandScopeDefault | PredicateBotCommandScopeUsers | PredicateBotCommandScopeChats | PredicateBotCommandScopeChatAdmins | PredicateBotCommandScopePeer | PredicateBotCommandScopePeerAdmins | PredicateBotCommandScopePeerUser;

export type AccountResetPasswordResult = PredicateAccountResetPasswordFailedWait | PredicateAccountResetPasswordRequestedWait | PredicateAccountResetPasswordOk;

export type SponsoredMessage = PredicateSponsoredMessage;

export type MessagesSponsoredMessages = PredicateMessagesSponsoredMessages | PredicateMessagesSponsoredMessagesEmpty;

export type SearchResultsCalendarPeriod = PredicateSearchResultsCalendarPeriod;

export type MessagesSearchResultsCalendar = PredicateMessagesSearchResultsCalendar;

export type SearchResultsPosition = PredicateSearchResultPosition;

export type MessagesSearchResultsPositions = PredicateMessagesSearchResultsPositions;

export type ChannelsSendAsPeers = PredicateChannelsSendAsPeers;

export type UsersUserFull = PredicateUsersUserFull;

export type MessagesPeerSettings = PredicateMessagesPeerSettings;

export type AuthLoggedOut = PredicateAuthLoggedOut;

export type ReactionCount = PredicateReactionCount;

export type MessageReactions = PredicateMessageReactions;

export type MessagesMessageReactionsList = PredicateMessagesMessageReactionsList;

export type AvailableReaction = PredicateAvailableReaction;

export type MessagesAvailableReactions = PredicateMessagesAvailableReactionsNotModified | PredicateMessagesAvailableReactions;

export type MessagePeerReaction = PredicateMessagePeerReaction;

export type GroupCallStreamChannel = PredicateGroupCallStreamChannel;

export type PhoneGroupCallStreamChannels = PredicatePhoneGroupCallStreamChannels;

export type PhoneGroupCallStreamRtmpUrl = PredicatePhoneGroupCallStreamRtmpUrl;

export type AttachMenuBotIconColor = PredicateAttachMenuBotIconColor;

export type AttachMenuBotIcon = PredicateAttachMenuBotIcon;

export type AttachMenuBot = PredicateAttachMenuBot;

export type AttachMenuBots = PredicateAttachMenuBotsNotModified | PredicateAttachMenuBots;

export type AttachMenuBotsBot = PredicateAttachMenuBotsBot;

export type WebViewResult = PredicateWebViewResultUrl;

export type SimpleWebViewResult = PredicateSimpleWebViewResultUrl;

export type WebViewMessageSent = PredicateWebViewMessageSent;

export type BotMenuButton = PredicateBotMenuButtonDefault | PredicateBotMenuButtonCommands | PredicateBotMenuButton;

export type AccountSavedRingtones = PredicateAccountSavedRingtonesNotModified | PredicateAccountSavedRingtones;

export type NotificationSound = PredicateNotificationSoundDefault | PredicateNotificationSoundNone | PredicateNotificationSoundLocal | PredicateNotificationSoundRingtone;

export type AccountSavedRingtone = PredicateAccountSavedRingtone | PredicateAccountSavedRingtoneConverted;

export type AttachMenuPeerType = PredicateAttachMenuPeerTypeSameBotPM | PredicateAttachMenuPeerTypeBotPM | PredicateAttachMenuPeerTypePM | PredicateAttachMenuPeerTypeChat | PredicateAttachMenuPeerTypeBroadcast;

export type InputInvoice = PredicateInputInvoiceMessage | PredicateInputInvoiceSlug | PredicateInputInvoicePremiumGiftCode;

export type PaymentsExportedInvoice = PredicatePaymentsExportedInvoice;

export type MessagesTranscribedAudio = PredicateMessagesTranscribedAudio;

export type HelpPremiumPromo = PredicateHelpPremiumPromo;

export type InputStorePaymentPurpose = PredicateInputStorePaymentPremiumSubscription | PredicateInputStorePaymentGiftPremium | PredicateInputStorePaymentPremiumGiftCode | PredicateInputStorePaymentPremiumGiveaway;

export type PremiumGiftOption = PredicatePremiumGiftOption;

export type PaymentFormMethod = PredicatePaymentFormMethod;

export type EmojiStatus = PredicateEmojiStatusEmpty | PredicateEmojiStatus | PredicateEmojiStatusUntil;

export type AccountEmojiStatuses = PredicateAccountEmojiStatusesNotModified | PredicateAccountEmojiStatuses;

export type Reaction = PredicateReactionEmpty | PredicateReactionEmoji | PredicateReactionCustomEmoji;

export type ChatReactions = PredicateChatReactionsNone | PredicateChatReactionsAll | PredicateChatReactionsSome;

export type MessagesReactions = PredicateMessagesReactionsNotModified | PredicateMessagesReactions;

export type EmailVerifyPurpose = PredicateEmailVerifyPurposeLoginSetup | PredicateEmailVerifyPurposeLoginChange | PredicateEmailVerifyPurposePassport;

export type EmailVerification = PredicateEmailVerificationCode | PredicateEmailVerificationGoogle | PredicateEmailVerificationApple;

export type AccountEmailVerified = PredicateAccountEmailVerified | PredicateAccountEmailVerifiedLogin;

export type PremiumSubscriptionOption = PredicatePremiumSubscriptionOption;

export type SendAsPeer = PredicateSendAsPeer;

export type MessageExtendedMedia = PredicateMessageExtendedMediaPreview | PredicateMessageExtendedMedia;

export type StickerKeyword = PredicateStickerKeyword;

export type Username = PredicateUsername;

export type ForumTopic = PredicateForumTopicDeleted | PredicateForumTopic;

export type MessagesForumTopics = PredicateMessagesForumTopics;

export type DefaultHistoryTTL = PredicateDefaultHistoryTTL;

export type ExportedContactToken = PredicateExportedContactToken;

export type RequestPeerType = PredicateRequestPeerTypeUser | PredicateRequestPeerTypeChat | PredicateRequestPeerTypeBroadcast;

export type EmojiList = PredicateEmojiListNotModified | PredicateEmojiList;

export type EmojiGroup = PredicateEmojiGroup;

export type MessagesEmojiGroups = PredicateMessagesEmojiGroupsNotModified | PredicateMessagesEmojiGroups;

export type TextWithEntities = PredicateTextWithEntities;

export type MessagesTranslatedText = PredicateMessagesTranslateResult;

export type AutoSaveSettings = PredicateAutoSaveSettings;

export type AutoSaveException = PredicateAutoSaveException;

export type AccountAutoSaveSettings = PredicateAccountAutoSaveSettings;

export type HelpAppConfig = PredicateHelpAppConfigNotModified | PredicateHelpAppConfig;

export type InputBotApp = PredicateInputBotAppID | PredicateInputBotAppShortName;

export type BotApp = PredicateBotAppNotModified | PredicateBotApp;

export type MessagesBotApp = PredicateMessagesBotApp;

export type AppWebViewResult = PredicateAppWebViewResultUrl;

export type InlineBotWebView = PredicateInlineBotWebView;

export type ReadParticipantDate = PredicateReadParticipantDate;

export type InputChatlist = PredicateInputChatlistDialogFilter;

export type ExportedChatlistInvite = PredicateExportedChatlistInvite;

export type ChatlistsExportedChatlistInvite = PredicateChatlistsExportedChatlistInvite;

export type ChatlistsExportedInvites = PredicateChatlistsExportedInvites;

export type ChatlistsChatlistInvite = PredicateChatlistsChatlistInviteAlready | PredicateChatlistsChatlistInvite;

export type ChatlistsChatlistUpdates = PredicateChatlistsChatlistUpdates;

export type BotsBotInfo = PredicateBotsBotInfo;

export type MessagePeerVote = PredicateMessagePeerVote | PredicateMessagePeerVoteInputOption | PredicateMessagePeerVoteMultiple;

export type SponsoredWebPage = PredicateSponsoredWebPage;

export type StoryViews = PredicateStoryViews;

export type StoryItem = PredicateStoryItemDeleted | PredicateStoryItemSkipped | PredicateStoryItem;

export type StoriesAllStories = PredicateStoriesAllStoriesNotModified | PredicateStoriesAllStories;

export type StoriesStories = PredicateStoriesStories;

export type StoryView = PredicateStoryView | PredicateStoryViewPublicForward | PredicateStoryViewPublicRepost;

export type StoriesStoryViewsList = PredicateStoriesStoryViewsList;

export type StoriesStoryViews = PredicateStoriesStoryViews;

export type InputReplyTo = PredicateInputReplyToMessage | PredicateInputReplyToStory;

export type ExportedStoryLink = PredicateExportedStoryLink;

export type StoriesStealthMode = PredicateStoriesStealthMode;

export type MediaAreaCoordinates = PredicateMediaAreaCoordinates;

export type MediaArea = PredicateMediaAreaVenue | PredicateInputMediaAreaVenue | PredicateMediaAreaGeoPoint | PredicateMediaAreaSuggestedReaction | PredicateMediaAreaChannelPost | PredicateInputMediaAreaChannelPost;

export type PeerStories = PredicatePeerStories;

export type StoriesPeerStories = PredicateStoriesPeerStories;

export type MessagesWebPage = PredicateMessagesWebPage;

export type PremiumGiftCodeOption = PredicatePremiumGiftCodeOption;

export type PaymentsCheckedGiftCode = PredicatePaymentsCheckedGiftCode;

export type PaymentsGiveawayInfo = PredicatePaymentsGiveawayInfo | PredicatePaymentsGiveawayInfoResults;

export type PrepaidGiveaway = PredicatePrepaidGiveaway;

export type Boost = PredicateBoost;

export type PremiumBoostsList = PredicatePremiumBoostsList;

export type MyBoost = PredicateMyBoost;

export type PremiumMyBoosts = PredicatePremiumMyBoosts;

export type PremiumBoostsStatus = PredicatePremiumBoostsStatus;

export type StoryFwdHeader = PredicateStoryFwdHeader;

export type PostInteractionCounters = PredicatePostInteractionCountersMessage | PredicatePostInteractionCountersStory;

export type StatsStoryStats = PredicateStatsStoryStats;

export type PublicForward = PredicatePublicForwardMessage | PredicatePublicForwardStory;

export type StatsPublicForwards = PredicateStatsPublicForwards;

export type PeerColor = PredicatePeerColor;

export type HelpPeerColorSet = PredicateHelpPeerColorSet | PredicateHelpPeerColorProfileSet;

export type HelpPeerColorOption = PredicateHelpPeerColorOption;

export type HelpPeerColors = PredicateHelpPeerColorsNotModified | PredicateHelpPeerColors;

export type StoryReaction = PredicateStoryReaction | PredicateStoryReactionPublicForward | PredicateStoryReactionPublicRepost;

export type StoriesStoryReactionsList = PredicateStoriesStoryReactionsList;

export type SavedDialog = PredicateSavedDialog;

export type MessagesSavedDialogs = PredicateMessagesSavedDialogs | PredicateMessagesSavedDialogsSlice | PredicateMessagesSavedDialogsNotModified;

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
    email_verification?: EmailVerification
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
    my_stories_from?: true
    id?: InputPeer
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('contacts.block', params, ...args);

export const contactsUnblock = (dependencies: TgUserApiDependencies) => async (params: {
    my_stories_from?: true
    id?: InputPeer
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('contacts.unblock', params, ...args);

export const contactsGetBlocked = (dependencies: TgUserApiDependencies) => async (params: {
    my_stories_from?: true
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
    saved_peer_id?: InputPeer
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
    update_stickersets_order?: true
    invert_media?: true
    peer?: InputPeer
    reply_to?: InputReplyTo
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
    update_stickersets_order?: true
    invert_media?: true
    peer?: InputPeer
    reply_to?: InputReplyTo
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
    top_msg_id?: number
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
    ttl_period?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.createChat', params, ...args);

export const updatesGetState = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<UpdatesState>('updates.getState', params, ...args);

export const updatesGetDifference = (dependencies: TgUserApiDependencies) => async (params: {
    pts?: number
    pts_limit?: number
    pts_total_limit?: number
    date?: number
    qts?: number
    qts_limit?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<UpdatesDifference>('updates.getDifference', params, ...args);

export const photosUpdateProfilePhoto = (dependencies: TgUserApiDependencies) => async (params: {
    fallback?: true
    bot?: InputUser
    id?: InputPhoto
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<PhotosPhoto>('photos.updateProfilePhoto', params, ...args);

export const photosUploadProfilePhoto = (dependencies: TgUserApiDependencies) => async (params: {
    fallback?: true
    bot?: InputUser
    file?: InputFile
    video?: InputFile
    video_start_ts?: number
    video_emoji_markup?: VideoSize
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
    offset?: string
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
    password?: InputCheckPasswordSRP
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
    forum?: true
    title?: string
    about?: string
    geo_point?: InputGeoPoint
    address?: string
    ttl_period?: number
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
    broadcasts_only?: true
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
    size?: string
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
    switch_webview?: InlineBotWebView
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.setInlineBotResults', params, ...args);

export const messagesSendInlineBotResult = (dependencies: TgUserApiDependencies) => async (params: {
    silent?: true
    background?: true
    clear_draft?: true
    hide_via?: true
    peer?: InputPeer
    reply_to?: InputReplyTo
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
    invert_media?: true
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
    invert_media?: true
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
    invert_media?: true
    reply_to?: InputReplyTo
    peer?: InputPeer
    message?: string
    entities?: MessageEntity[]
    media?: InputMedia
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

export const helpSetBotUpdatesStatus = (dependencies: TgUserApiDependencies) => async (params: {
    pending_updates_count?: number
    message?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('help.setBotUpdatesStatus', params, ...args);

export const messagesGetWebPage = (dependencies: TgUserApiDependencies) => async (params: {
    url?: string
    hash?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesWebPage>('messages.getWebPage', params, ...args);

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
    invoice?: InputInvoice
    theme_params?: DataJSON
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<PaymentsPaymentForm>('payments.getPaymentForm', params, ...args);

export const paymentsGetPaymentReceipt = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    msg_id?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<PaymentsPaymentReceipt>('payments.getPaymentReceipt', params, ...args);

export const paymentsValidateRequestedInfo = (dependencies: TgUserApiDependencies) => async (params: {
    save?: true
    invoice?: InputInvoice
    info?: PaymentRequestedInfo
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<PaymentsValidatedRequestedInfo>('payments.validateRequestedInfo', params, ...args);

export const paymentsSendPaymentForm = (dependencies: TgUserApiDependencies) => async (params: {
    form_id?: string
    invoice?: InputInvoice
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
    emojis?: true
    text_color?: true
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
    offset?: string
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
    offset?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<FileHash[]>('upload.getCdnFileHashes', params, ...args);

export const messagesSendScreenshotNotification = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    reply_to?: InputReplyTo
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
    top_msg_id?: number
    offset_id?: number
    add_offset?: number
    limit?: number
    max_id?: number
    min_id?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesMessages>('messages.getUnreadMentions', params, ...args);

export const channelsDeleteHistory = (dependencies: TgUserApiDependencies) => async (params: {
    for_everyone?: true
    channel?: InputChannel
    max_id?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('channels.deleteHistory', params, ...args);

export const helpGetRecentMeUrls = (dependencies: TgUserApiDependencies) => async (params: {
    referer?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<HelpRecentMeUrls>('help.getRecentMeUrls', params, ...args);

export const channelsTogglePreHistoryHidden = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    enabled?: boolean
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('channels.togglePreHistoryHidden', params, ...args);

export const messagesReadMentions = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    top_msg_id?: number
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
    update_stickersets_order?: true
    invert_media?: true
    peer?: InputPeer
    reply_to?: InputReplyTo
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
    offset?: string
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
    purpose?: EmailVerifyPurpose
    email?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AccountSentEmailCode>('account.sendVerifyEmailCode', params, ...args);

export const accountVerifyEmail = (dependencies: TgUserApiDependencies) => async (params: {
    purpose?: EmailVerifyPurpose
    verification?: EmailVerification
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AccountEmailVerified>('account.verifyEmail', params, ...args);

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
    file_max_size?: string
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
    hash?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<HelpAppConfig>('help.getAppConfig', params, ...args);

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
    compare_stories?: true
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
    for_chat?: true
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

export const messagesGetSearchCounters = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    saved_peer_id?: InputPeer
    top_msg_id?: number
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
    thumb_document_id?: string
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
    offset?: string
    limit?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<StatsPublicForwards>('stats.getMessagePublicForwards', params, ...args);

export const statsGetMessageStats = (dependencies: TgUserApiDependencies) => async (params: {
    dark?: true
    channel?: InputChannel
    msg_id?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<StatsMessageStats>('stats.getMessageStats', params, ...args);

export const messagesUnpinAllMessages = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    top_msg_id?: number
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
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<ReadParticipantDate[]>('messages.getMessageReadParticipants', params, ...args);

export const messagesGetSearchResultsCalendar = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    saved_peer_id?: InputPeer
    filter?: MessagesFilter
    offset_id?: number
    offset_date?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesSearchResultsCalendar>('messages.getSearchResultsCalendar', params, ...args);

export const messagesGetSearchResultsPositions = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    saved_peer_id?: InputPeer
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
    confirmed?: true
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
    add_to_recent?: true
    peer?: InputPeer
    msg_id?: number
    reaction?: Reaction[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.sendReaction', params, ...args);

export const messagesGetMessagesReactions = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    id?: number[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.getMessagesReactions', params, ...args);

export const messagesGetMessageReactionsList = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    id?: number
    reaction?: Reaction
    offset?: string
    limit?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesMessageReactionsList>('messages.getMessageReactionsList', params, ...args);

export const messagesSetChatAvailableReactions = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    available_reactions?: ChatReactions
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.setChatAvailableReactions', params, ...args);

export const messagesGetAvailableReactions = (dependencies: TgUserApiDependencies) => async (params: {
    hash?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesAvailableReactions>('messages.getAvailableReactions', params, ...args);

export const messagesSetDefaultReaction = (dependencies: TgUserApiDependencies) => async (params: {
    reaction?: Reaction
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.setDefaultReaction', params, ...args);

export const messagesTranslateText = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    id?: number[]
    text?: TextWithEntities[]
    to_lang?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesTranslatedText>('messages.translateText', params, ...args);

export const messagesGetUnreadReactions = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    top_msg_id?: number
    offset_id?: number
    add_offset?: number
    limit?: number
    max_id?: number
    min_id?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesMessages>('messages.getUnreadReactions', params, ...args);

export const messagesReadReactions = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    top_msg_id?: number
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

export const messagesGetAttachMenuBots = (dependencies: TgUserApiDependencies) => async (params: {
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AttachMenuBots>('messages.getAttachMenuBots', params, ...args);

export const messagesGetAttachMenuBot = (dependencies: TgUserApiDependencies) => async (params: {
    bot?: InputUser
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AttachMenuBotsBot>('messages.getAttachMenuBot', params, ...args);

export const messagesToggleBotInAttachMenu = (dependencies: TgUserApiDependencies) => async (params: {
    write_allowed?: true
    bot?: InputUser
    enabled?: boolean
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.toggleBotInAttachMenu', params, ...args);

export const messagesRequestWebView = (dependencies: TgUserApiDependencies) => async (params: {
    from_bot_menu?: true
    silent?: true
    peer?: InputPeer
    bot?: InputUser
    url?: string
    start_param?: string
    theme_params?: DataJSON
    platform?: string
    reply_to?: InputReplyTo
    send_as?: InputPeer
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<WebViewResult>('messages.requestWebView', params, ...args);

export const messagesProlongWebView = (dependencies: TgUserApiDependencies) => async (params: {
    silent?: true
    peer?: InputPeer
    bot?: InputUser
    query_id?: string
    reply_to?: InputReplyTo
    send_as?: InputPeer
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.prolongWebView', params, ...args);

export const messagesRequestSimpleWebView = (dependencies: TgUserApiDependencies) => async (params: {
    from_switch_webview?: true
    from_side_menu?: true
    bot?: InputUser
    url?: string
    start_param?: string
    theme_params?: DataJSON
    platform?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<SimpleWebViewResult>('messages.requestSimpleWebView', params, ...args);

export const messagesSendWebViewResultMessage = (dependencies: TgUserApiDependencies) => async (params: {
    bot_query_id?: string
    result?: InputBotInlineResult
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<WebViewMessageSent>('messages.sendWebViewResultMessage', params, ...args);

export const messagesSendWebViewData = (dependencies: TgUserApiDependencies) => async (params: {
    bot?: InputUser
    random_id?: string
    button_text?: string
    data?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.sendWebViewData', params, ...args);

export const botsSetBotMenuButton = (dependencies: TgUserApiDependencies) => async (params: {
    user_id?: InputUser
    button?: BotMenuButton
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('bots.setBotMenuButton', params, ...args);

export const botsGetBotMenuButton = (dependencies: TgUserApiDependencies) => async (params: {
    user_id?: InputUser
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<BotMenuButton>('bots.getBotMenuButton', params, ...args);

export const accountGetSavedRingtones = (dependencies: TgUserApiDependencies) => async (params: {
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AccountSavedRingtones>('account.getSavedRingtones', params, ...args);

export const accountSaveRingtone = (dependencies: TgUserApiDependencies) => async (params: {
    id?: InputDocument
    unsave?: boolean
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AccountSavedRingtone>('account.saveRingtone', params, ...args);

export const accountUploadRingtone = (dependencies: TgUserApiDependencies) => async (params: {
    file?: InputFile
    file_name?: string
    mime_type?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Document>('account.uploadRingtone', params, ...args);

export const botsSetBotBroadcastDefaultAdminRights = (dependencies: TgUserApiDependencies) => async (params: {
    admin_rights?: ChatAdminRights
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('bots.setBotBroadcastDefaultAdminRights', params, ...args);

export const botsSetBotGroupDefaultAdminRights = (dependencies: TgUserApiDependencies) => async (params: {
    admin_rights?: ChatAdminRights
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('bots.setBotGroupDefaultAdminRights', params, ...args);

export const phoneSaveCallLog = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPhoneCall
    file?: InputFile
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('phone.saveCallLog', params, ...args);

export const channelsToggleJoinToSend = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    enabled?: boolean
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('channels.toggleJoinToSend', params, ...args);

export const channelsToggleJoinRequest = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    enabled?: boolean
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('channels.toggleJoinRequest', params, ...args);

export const paymentsExportInvoice = (dependencies: TgUserApiDependencies) => async (params: {
    invoice_media?: InputMedia
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<PaymentsExportedInvoice>('payments.exportInvoice', params, ...args);

export const messagesTranscribeAudio = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    msg_id?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesTranscribedAudio>('messages.transcribeAudio', params, ...args);

export const messagesRateTranscribedAudio = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    msg_id?: number
    transcription_id?: string
    good?: boolean
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.rateTranscribedAudio', params, ...args);

export const paymentsAssignAppStoreTransaction = (dependencies: TgUserApiDependencies) => async (params: {
    receipt?: Uint8Array
    purpose?: InputStorePaymentPurpose
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('payments.assignAppStoreTransaction', params, ...args);

export const paymentsAssignPlayMarketTransaction = (dependencies: TgUserApiDependencies) => async (params: {
    receipt?: DataJSON
    purpose?: InputStorePaymentPurpose
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('payments.assignPlayMarketTransaction', params, ...args);

export const paymentsCanPurchasePremium = (dependencies: TgUserApiDependencies) => async (params: {
    purpose?: InputStorePaymentPurpose
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('payments.canPurchasePremium', params, ...args);

export const helpGetPremiumPromo = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<HelpPremiumPromo>('help.getPremiumPromo', params, ...args);

export const messagesGetCustomEmojiDocuments = (dependencies: TgUserApiDependencies) => async (params: {
    document_id?: string[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Document[]>('messages.getCustomEmojiDocuments', params, ...args);

export const messagesGetEmojiStickers = (dependencies: TgUserApiDependencies) => async (params: {
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesAllStickers>('messages.getEmojiStickers', params, ...args);

export const messagesGetFeaturedEmojiStickers = (dependencies: TgUserApiDependencies) => async (params: {
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesFeaturedStickers>('messages.getFeaturedEmojiStickers', params, ...args);

export const accountUpdateEmojiStatus = (dependencies: TgUserApiDependencies) => async (params: {
    emoji_status?: EmojiStatus
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.updateEmojiStatus', params, ...args);

export const accountGetDefaultEmojiStatuses = (dependencies: TgUserApiDependencies) => async (params: {
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AccountEmojiStatuses>('account.getDefaultEmojiStatuses', params, ...args);

export const accountGetRecentEmojiStatuses = (dependencies: TgUserApiDependencies) => async (params: {
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AccountEmojiStatuses>('account.getRecentEmojiStatuses', params, ...args);

export const accountClearRecentEmojiStatuses = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.clearRecentEmojiStatuses', params, ...args);

export const messagesReportReaction = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    id?: number
    reaction_peer?: InputPeer
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.reportReaction', params, ...args);

export const messagesGetTopReactions = (dependencies: TgUserApiDependencies) => async (params: {
    limit?: number
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesReactions>('messages.getTopReactions', params, ...args);

export const messagesGetRecentReactions = (dependencies: TgUserApiDependencies) => async (params: {
    limit?: number
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesReactions>('messages.getRecentReactions', params, ...args);

export const messagesClearRecentReactions = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.clearRecentReactions', params, ...args);

export const messagesGetExtendedMedia = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    id?: number[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.getExtendedMedia', params, ...args);

export const authImportWebTokenAuthorization = (dependencies: TgUserApiDependencies) => async (params: {
    api_id?: number
    api_hash?: string
    web_auth_token?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AuthAuthorization>('auth.importWebTokenAuthorization', params, ...args);

export const accountReorderUsernames = (dependencies: TgUserApiDependencies) => async (params: {
    order?: string[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.reorderUsernames', params, ...args);

export const accountToggleUsername = (dependencies: TgUserApiDependencies) => async (params: {
    username?: string
    active?: boolean
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.toggleUsername', params, ...args);

export const channelsReorderUsernames = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    order?: string[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('channels.reorderUsernames', params, ...args);

export const channelsToggleUsername = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    username?: string
    active?: boolean
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('channels.toggleUsername', params, ...args);

export const channelsDeactivateAllUsernames = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('channels.deactivateAllUsernames', params, ...args);

export const channelsToggleForum = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    enabled?: boolean
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('channels.toggleForum', params, ...args);

export const channelsCreateForumTopic = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    title?: string
    icon_color?: number
    icon_emoji_id?: string
    random_id?: string
    send_as?: InputPeer
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('channels.createForumTopic', params, ...args);

export const channelsGetForumTopics = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    q?: string
    offset_date?: number
    offset_id?: number
    offset_topic?: number
    limit?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesForumTopics>('channels.getForumTopics', params, ...args);

export const channelsGetForumTopicsByID = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    topics?: number[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesForumTopics>('channels.getForumTopicsByID', params, ...args);

export const channelsEditForumTopic = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    topic_id?: number
    title?: string
    icon_emoji_id?: string
    closed?: boolean
    hidden?: boolean
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('channels.editForumTopic', params, ...args);

export const channelsUpdatePinnedForumTopic = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    topic_id?: number
    pinned?: boolean
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('channels.updatePinnedForumTopic', params, ...args);

export const channelsDeleteTopicHistory = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    top_msg_id?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesAffectedHistory>('channels.deleteTopicHistory', params, ...args);

export const channelsReorderPinnedForumTopics = (dependencies: TgUserApiDependencies) => async (params: {
    force?: true
    channel?: InputChannel
    order?: number[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('channels.reorderPinnedForumTopics', params, ...args);

export const channelsToggleAntiSpam = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    enabled?: boolean
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('channels.toggleAntiSpam', params, ...args);

export const channelsReportAntiSpamFalsePositive = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    msg_id?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('channels.reportAntiSpamFalsePositive', params, ...args);

export const messagesSetDefaultHistoryTTL = (dependencies: TgUserApiDependencies) => async (params: {
    period?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.setDefaultHistoryTTL', params, ...args);

export const messagesGetDefaultHistoryTTL = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<DefaultHistoryTTL>('messages.getDefaultHistoryTTL', params, ...args);

export const contactsExportContactToken = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<ExportedContactToken>('contacts.exportContactToken', params, ...args);

export const contactsImportContactToken = (dependencies: TgUserApiDependencies) => async (params: {
    token?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<User>('contacts.importContactToken', params, ...args);

export const photosUploadContactProfilePhoto = (dependencies: TgUserApiDependencies) => async (params: {
    suggest?: true
    save?: true
    user_id?: InputUser
    file?: InputFile
    video?: InputFile
    video_start_ts?: number
    video_emoji_markup?: VideoSize
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<PhotosPhoto>('photos.uploadContactProfilePhoto', params, ...args);

export const channelsToggleParticipantsHidden = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    enabled?: boolean
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('channels.toggleParticipantsHidden', params, ...args);

export const messagesSendBotRequestedPeer = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    msg_id?: number
    button_id?: number
    requested_peers?: InputPeer[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.sendBotRequestedPeer', params, ...args);

export const accountGetDefaultProfilePhotoEmojis = (dependencies: TgUserApiDependencies) => async (params: {
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<EmojiList>('account.getDefaultProfilePhotoEmojis', params, ...args);

export const accountGetDefaultGroupPhotoEmojis = (dependencies: TgUserApiDependencies) => async (params: {
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<EmojiList>('account.getDefaultGroupPhotoEmojis', params, ...args);

export const authRequestFirebaseSms = (dependencies: TgUserApiDependencies) => async (params: {
    phone_number?: string
    phone_code_hash?: string
    safety_net_token?: string
    ios_push_secret?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('auth.requestFirebaseSms', params, ...args);

export const messagesGetEmojiGroups = (dependencies: TgUserApiDependencies) => async (params: {
    hash?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesEmojiGroups>('messages.getEmojiGroups', params, ...args);

export const messagesGetEmojiStatusGroups = (dependencies: TgUserApiDependencies) => async (params: {
    hash?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesEmojiGroups>('messages.getEmojiStatusGroups', params, ...args);

export const messagesGetEmojiProfilePhotoGroups = (dependencies: TgUserApiDependencies) => async (params: {
    hash?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesEmojiGroups>('messages.getEmojiProfilePhotoGroups', params, ...args);

export const messagesSearchCustomEmoji = (dependencies: TgUserApiDependencies) => async (params: {
    emoticon?: string
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<EmojiList>('messages.searchCustomEmoji', params, ...args);

export const messagesTogglePeerTranslations = (dependencies: TgUserApiDependencies) => async (params: {
    disabled?: true
    peer?: InputPeer
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.togglePeerTranslations', params, ...args);

export const accountGetAutoSaveSettings = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AccountAutoSaveSettings>('account.getAutoSaveSettings', params, ...args);

export const accountSaveAutoSaveSettings = (dependencies: TgUserApiDependencies) => async (params: {
    users?: true
    chats?: true
    broadcasts?: true
    peer?: InputPeer
    settings?: AutoSaveSettings
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.saveAutoSaveSettings', params, ...args);

export const accountDeleteAutoSaveExceptions = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.deleteAutoSaveExceptions', params, ...args);

export const stickersChangeSticker = (dependencies: TgUserApiDependencies) => async (params: {
    sticker?: InputDocument
    emoji?: string
    mask_coords?: MaskCoords
    keywords?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesStickerSet>('stickers.changeSticker', params, ...args);

export const stickersRenameStickerSet = (dependencies: TgUserApiDependencies) => async (params: {
    stickerset?: InputStickerSet
    title?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesStickerSet>('stickers.renameStickerSet', params, ...args);

export const stickersDeleteStickerSet = (dependencies: TgUserApiDependencies) => async (params: {
    stickerset?: InputStickerSet
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('stickers.deleteStickerSet', params, ...args);

export const messagesGetBotApp = (dependencies: TgUserApiDependencies) => async (params: {
    app?: InputBotApp
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesBotApp>('messages.getBotApp', params, ...args);

export const messagesRequestAppWebView = (dependencies: TgUserApiDependencies) => async (params: {
    write_allowed?: true
    peer?: InputPeer
    app?: InputBotApp
    start_param?: string
    theme_params?: DataJSON
    platform?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AppWebViewResult>('messages.requestAppWebView', params, ...args);

export const botsSetBotInfo = (dependencies: TgUserApiDependencies) => async (params: {
    bot?: InputUser
    lang_code?: string
    name?: string
    about?: string
    description?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('bots.setBotInfo', params, ...args);

export const botsGetBotInfo = (dependencies: TgUserApiDependencies) => async (params: {
    bot?: InputUser
    lang_code?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<BotsBotInfo>('bots.getBotInfo', params, ...args);

export const authResetLoginEmail = (dependencies: TgUserApiDependencies) => async (params: {
    phone_number?: string
    phone_code_hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AuthSentCode>('auth.resetLoginEmail', params, ...args);

export const chatlistsExportChatlistInvite = (dependencies: TgUserApiDependencies) => async (params: {
    chatlist?: InputChatlist
    title?: string
    peers?: InputPeer[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<ChatlistsExportedChatlistInvite>('chatlists.exportChatlistInvite', params, ...args);

export const chatlistsDeleteExportedInvite = (dependencies: TgUserApiDependencies) => async (params: {
    chatlist?: InputChatlist
    slug?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('chatlists.deleteExportedInvite', params, ...args);

export const chatlistsEditExportedInvite = (dependencies: TgUserApiDependencies) => async (params: {
    chatlist?: InputChatlist
    slug?: string
    title?: string
    peers?: InputPeer[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<ExportedChatlistInvite>('chatlists.editExportedInvite', params, ...args);

export const chatlistsGetExportedInvites = (dependencies: TgUserApiDependencies) => async (params: {
    chatlist?: InputChatlist
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<ChatlistsExportedInvites>('chatlists.getExportedInvites', params, ...args);

export const chatlistsCheckChatlistInvite = (dependencies: TgUserApiDependencies) => async (params: {
    slug?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<ChatlistsChatlistInvite>('chatlists.checkChatlistInvite', params, ...args);

export const chatlistsJoinChatlistInvite = (dependencies: TgUserApiDependencies) => async (params: {
    slug?: string
    peers?: InputPeer[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('chatlists.joinChatlistInvite', params, ...args);

export const chatlistsGetChatlistUpdates = (dependencies: TgUserApiDependencies) => async (params: {
    chatlist?: InputChatlist
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<ChatlistsChatlistUpdates>('chatlists.getChatlistUpdates', params, ...args);

export const chatlistsJoinChatlistUpdates = (dependencies: TgUserApiDependencies) => async (params: {
    chatlist?: InputChatlist
    peers?: InputPeer[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('chatlists.joinChatlistUpdates', params, ...args);

export const chatlistsHideChatlistUpdates = (dependencies: TgUserApiDependencies) => async (params: {
    chatlist?: InputChatlist
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('chatlists.hideChatlistUpdates', params, ...args);

export const chatlistsGetLeaveChatlistSuggestions = (dependencies: TgUserApiDependencies) => async (params: {
    chatlist?: InputChatlist
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Peer[]>('chatlists.getLeaveChatlistSuggestions', params, ...args);

export const chatlistsLeaveChatlist = (dependencies: TgUserApiDependencies) => async (params: {
    chatlist?: InputChatlist
    peers?: InputPeer[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('chatlists.leaveChatlist', params, ...args);

export const botsReorderUsernames = (dependencies: TgUserApiDependencies) => async (params: {
    bot?: InputUser
    order?: string[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('bots.reorderUsernames', params, ...args);

export const botsToggleUsername = (dependencies: TgUserApiDependencies) => async (params: {
    bot?: InputUser
    username?: string
    active?: boolean
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('bots.toggleUsername', params, ...args);

export const messagesSetChatWallPaper = (dependencies: TgUserApiDependencies) => async (params: {
    for_both?: true
    revert?: true
    peer?: InputPeer
    wallpaper?: InputWallPaper
    settings?: WallPaperSettings
    id?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.setChatWallPaper', params, ...args);

export const accountInvalidateSignInCodes = (dependencies: TgUserApiDependencies) => async (params: {
    codes?: string[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.invalidateSignInCodes', params, ...args);

export const channelsClickSponsoredMessage = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    random_id?: Uint8Array
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('channels.clickSponsoredMessage', params, ...args);

export const contactsEditCloseFriends = (dependencies: TgUserApiDependencies) => async (params: {
    id?: string[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('contacts.editCloseFriends', params, ...args);

export const storiesCanSendStory = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('stories.canSendStory', params, ...args);

export const storiesSendStory = (dependencies: TgUserApiDependencies) => async (params: {
    pinned?: true
    noforwards?: true
    fwd_modified?: true
    peer?: InputPeer
    media?: InputMedia
    media_areas?: MediaArea[]
    caption?: string
    entities?: MessageEntity[]
    privacy_rules?: InputPrivacyRule[]
    random_id?: string
    period?: number
    fwd_from_id?: InputPeer
    fwd_from_story?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('stories.sendStory', params, ...args);

export const storiesEditStory = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    id?: number
    media?: InputMedia
    media_areas?: MediaArea[]
    caption?: string
    entities?: MessageEntity[]
    privacy_rules?: InputPrivacyRule[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('stories.editStory', params, ...args);

export const storiesDeleteStories = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    id?: number[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<number[]>('stories.deleteStories', params, ...args);

export const storiesTogglePinned = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    id?: number[]
    pinned?: boolean
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<number[]>('stories.togglePinned', params, ...args);

export const storiesGetAllStories = (dependencies: TgUserApiDependencies) => async (params: {
    next?: true
    hidden?: true
    state?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<StoriesAllStories>('stories.getAllStories', params, ...args);

export const storiesGetPinnedStories = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    offset_id?: number
    limit?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<StoriesStories>('stories.getPinnedStories', params, ...args);

export const storiesGetStoriesArchive = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    offset_id?: number
    limit?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<StoriesStories>('stories.getStoriesArchive', params, ...args);

export const storiesGetStoriesByID = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    id?: number[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<StoriesStories>('stories.getStoriesByID', params, ...args);

export const storiesToggleAllStoriesHidden = (dependencies: TgUserApiDependencies) => async (params: {
    hidden?: boolean
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('stories.toggleAllStoriesHidden', params, ...args);

export const storiesReadStories = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    max_id?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<number[]>('stories.readStories', params, ...args);

export const storiesIncrementStoryViews = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    id?: number[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('stories.incrementStoryViews', params, ...args);

export const storiesGetStoryViewsList = (dependencies: TgUserApiDependencies) => async (params: {
    just_contacts?: true
    reactions_first?: true
    forwards_first?: true
    peer?: InputPeer
    q?: string
    id?: number
    offset?: string
    limit?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<StoriesStoryViewsList>('stories.getStoryViewsList', params, ...args);

export const storiesGetStoriesViews = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    id?: number[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<StoriesStoryViews>('stories.getStoriesViews', params, ...args);

export const storiesExportStoryLink = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    id?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<ExportedStoryLink>('stories.exportStoryLink', params, ...args);

export const storiesReport = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    id?: number[]
    reason?: ReportReason
    message?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('stories.report', params, ...args);

export const storiesActivateStealthMode = (dependencies: TgUserApiDependencies) => async (params: {
    past?: true
    future?: true
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('stories.activateStealthMode', params, ...args);

export const contactsSetBlocked = (dependencies: TgUserApiDependencies) => async (params: {
    my_stories_from?: true
    id?: InputPeer[]
    limit?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('contacts.setBlocked', params, ...args);

export const storiesSendReaction = (dependencies: TgUserApiDependencies) => async (params: {
    add_to_recent?: true
    peer?: InputPeer
    story_id?: number
    reaction?: Reaction
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('stories.sendReaction', params, ...args);

export const botsCanSendMessage = (dependencies: TgUserApiDependencies) => async (params: {
    bot?: InputUser
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('bots.canSendMessage', params, ...args);

export const botsAllowSendMessage = (dependencies: TgUserApiDependencies) => async (params: {
    bot?: InputUser
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('bots.allowSendMessage', params, ...args);

export const botsInvokeWebViewCustomMethod = (dependencies: TgUserApiDependencies) => async (params: {
    bot?: InputUser
    custom_method?: string
    params?: DataJSON
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<DataJSON>('bots.invokeWebViewCustomMethod', params, ...args);

export const storiesGetPeerStories = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<StoriesPeerStories>('stories.getPeerStories', params, ...args);

export const storiesGetAllReadPeerStories = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('stories.getAllReadPeerStories', params, ...args);

export const storiesGetPeerMaxIDs = (dependencies: TgUserApiDependencies) => async (params: {
    id?: InputPeer[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<number[]>('stories.getPeerMaxIDs', params, ...args);

export const storiesGetChatsToSend = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesChats>('stories.getChatsToSend', params, ...args);

export const storiesTogglePeerStoriesHidden = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    hidden?: boolean
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('stories.togglePeerStoriesHidden', params, ...args);

export const paymentsGetPremiumGiftCodeOptions = (dependencies: TgUserApiDependencies) => async (params: {
    boost_peer?: InputPeer
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<PremiumGiftCodeOption[]>('payments.getPremiumGiftCodeOptions', params, ...args);

export const paymentsCheckGiftCode = (dependencies: TgUserApiDependencies) => async (params: {
    slug?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<PaymentsCheckedGiftCode>('payments.checkGiftCode', params, ...args);

export const paymentsApplyGiftCode = (dependencies: TgUserApiDependencies) => async (params: {
    slug?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('payments.applyGiftCode', params, ...args);

export const paymentsGetGiveawayInfo = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    msg_id?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<PaymentsGiveawayInfo>('payments.getGiveawayInfo', params, ...args);

export const paymentsLaunchPrepaidGiveaway = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    giveaway_id?: string
    purpose?: InputStorePaymentPurpose
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('payments.launchPrepaidGiveaway', params, ...args);

export const accountUpdateColor = (dependencies: TgUserApiDependencies) => async (params: {
    for_profile?: true
    color?: number
    background_emoji_id?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.updateColor', params, ...args);

export const channelsUpdateColor = (dependencies: TgUserApiDependencies) => async (params: {
    for_profile?: true
    channel?: InputChannel
    color?: number
    background_emoji_id?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('channels.updateColor', params, ...args);

export const accountGetDefaultBackgroundEmojis = (dependencies: TgUserApiDependencies) => async (params: {
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<EmojiList>('account.getDefaultBackgroundEmojis', params, ...args);

export const premiumGetBoostsList = (dependencies: TgUserApiDependencies) => async (params: {
    gifts?: true
    peer?: InputPeer
    offset?: string
    limit?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<PremiumBoostsList>('premium.getBoostsList', params, ...args);

export const premiumGetMyBoosts = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<PremiumMyBoosts>('premium.getMyBoosts', params, ...args);

export const premiumApplyBoost = (dependencies: TgUserApiDependencies) => async (params: {
    slots?: number[]
    peer?: InputPeer
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<PremiumMyBoosts>('premium.applyBoost', params, ...args);

export const premiumGetBoostsStatus = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<PremiumBoostsStatus>('premium.getBoostsStatus', params, ...args);

export const premiumGetUserBoosts = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    user_id?: InputUser
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<PremiumBoostsList>('premium.getUserBoosts', params, ...args);

export const channelsToggleViewForumAsMessages = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    enabled?: boolean
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('channels.toggleViewForumAsMessages', params, ...args);

export const messagesSearchEmojiStickerSets = (dependencies: TgUserApiDependencies) => async (params: {
    exclude_featured?: true
    q?: string
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesFoundStickerSets>('messages.searchEmojiStickerSets', params, ...args);

export const channelsGetChannelRecommendations = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesChats>('channels.getChannelRecommendations', params, ...args);

export const statsGetStoryStats = (dependencies: TgUserApiDependencies) => async (params: {
    dark?: true
    peer?: InputPeer
    id?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<StatsStoryStats>('stats.getStoryStats', params, ...args);

export const statsGetStoryPublicForwards = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    id?: number
    offset?: string
    limit?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<StatsPublicForwards>('stats.getStoryPublicForwards', params, ...args);

export const helpGetPeerColors = (dependencies: TgUserApiDependencies) => async (params: {
    hash?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<HelpPeerColors>('help.getPeerColors', params, ...args);

export const helpGetPeerProfileColors = (dependencies: TgUserApiDependencies) => async (params: {
    hash?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<HelpPeerColors>('help.getPeerProfileColors', params, ...args);

export const storiesGetStoryReactionsList = (dependencies: TgUserApiDependencies) => async (params: {
    forwards_first?: true
    peer?: InputPeer
    id?: number
    reaction?: Reaction
    offset?: string
    limit?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<StoriesStoryReactionsList>('stories.getStoryReactionsList', params, ...args);

export const channelsUpdateEmojiStatus = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    emoji_status?: EmojiStatus
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('channels.updateEmojiStatus', params, ...args);

export const accountGetChannelDefaultEmojiStatuses = (dependencies: TgUserApiDependencies) => async (params: {
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AccountEmojiStatuses>('account.getChannelDefaultEmojiStatuses', params, ...args);

export const accountGetChannelRestrictedStatusEmojis = (dependencies: TgUserApiDependencies) => async (params: {
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<EmojiList>('account.getChannelRestrictedStatusEmojis', params, ...args);

export const messagesGetSavedDialogs = (dependencies: TgUserApiDependencies) => async (params: {
    exclude_pinned?: true
    offset_date?: number
    offset_id?: number
    offset_peer?: InputPeer
    limit?: number
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesSavedDialogs>('messages.getSavedDialogs', params, ...args);

export const messagesGetSavedHistory = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    offset_id?: number
    offset_date?: number
    add_offset?: number
    limit?: number
    max_id?: number
    min_id?: number
    hash?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesMessages>('messages.getSavedHistory', params, ...args);

export const messagesDeleteSavedHistory = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    max_id?: number
    min_date?: number
    max_date?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesAffectedHistory>('messages.deleteSavedHistory', params, ...args);

export const messagesGetPinnedSavedDialogs = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesSavedDialogs>('messages.getPinnedSavedDialogs', params, ...args);

export const messagesToggleSavedDialogPin = (dependencies: TgUserApiDependencies) => async (params: {
    pinned?: true
    peer?: InputDialogPeer
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.toggleSavedDialogPin', params, ...args);

export const messagesReorderPinnedSavedDialogs = (dependencies: TgUserApiDependencies) => async (params: {
    force?: true
    order?: InputDialogPeer[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.reorderPinnedSavedDialogs', params, ...args);

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
    messagesGetAttachMenuBots: messagesGetAttachMenuBots(dependencies),
    messagesGetAttachMenuBot: messagesGetAttachMenuBot(dependencies),
    messagesToggleBotInAttachMenu: messagesToggleBotInAttachMenu(dependencies),
    messagesRequestWebView: messagesRequestWebView(dependencies),
    messagesProlongWebView: messagesProlongWebView(dependencies),
    messagesRequestSimpleWebView: messagesRequestSimpleWebView(dependencies),
    messagesSendWebViewResultMessage: messagesSendWebViewResultMessage(dependencies),
    messagesSendWebViewData: messagesSendWebViewData(dependencies),
    botsSetBotMenuButton: botsSetBotMenuButton(dependencies),
    botsGetBotMenuButton: botsGetBotMenuButton(dependencies),
    accountGetSavedRingtones: accountGetSavedRingtones(dependencies),
    accountSaveRingtone: accountSaveRingtone(dependencies),
    accountUploadRingtone: accountUploadRingtone(dependencies),
    botsSetBotBroadcastDefaultAdminRights: botsSetBotBroadcastDefaultAdminRights(dependencies),
    botsSetBotGroupDefaultAdminRights: botsSetBotGroupDefaultAdminRights(dependencies),
    phoneSaveCallLog: phoneSaveCallLog(dependencies),
    channelsToggleJoinToSend: channelsToggleJoinToSend(dependencies),
    channelsToggleJoinRequest: channelsToggleJoinRequest(dependencies),
    paymentsExportInvoice: paymentsExportInvoice(dependencies),
    messagesTranscribeAudio: messagesTranscribeAudio(dependencies),
    messagesRateTranscribedAudio: messagesRateTranscribedAudio(dependencies),
    paymentsAssignAppStoreTransaction: paymentsAssignAppStoreTransaction(dependencies),
    paymentsAssignPlayMarketTransaction: paymentsAssignPlayMarketTransaction(dependencies),
    paymentsCanPurchasePremium: paymentsCanPurchasePremium(dependencies),
    helpGetPremiumPromo: helpGetPremiumPromo(dependencies),
    messagesGetCustomEmojiDocuments: messagesGetCustomEmojiDocuments(dependencies),
    messagesGetEmojiStickers: messagesGetEmojiStickers(dependencies),
    messagesGetFeaturedEmojiStickers: messagesGetFeaturedEmojiStickers(dependencies),
    accountUpdateEmojiStatus: accountUpdateEmojiStatus(dependencies),
    accountGetDefaultEmojiStatuses: accountGetDefaultEmojiStatuses(dependencies),
    accountGetRecentEmojiStatuses: accountGetRecentEmojiStatuses(dependencies),
    accountClearRecentEmojiStatuses: accountClearRecentEmojiStatuses(dependencies),
    messagesReportReaction: messagesReportReaction(dependencies),
    messagesGetTopReactions: messagesGetTopReactions(dependencies),
    messagesGetRecentReactions: messagesGetRecentReactions(dependencies),
    messagesClearRecentReactions: messagesClearRecentReactions(dependencies),
    messagesGetExtendedMedia: messagesGetExtendedMedia(dependencies),
    authImportWebTokenAuthorization: authImportWebTokenAuthorization(dependencies),
    accountReorderUsernames: accountReorderUsernames(dependencies),
    accountToggleUsername: accountToggleUsername(dependencies),
    channelsReorderUsernames: channelsReorderUsernames(dependencies),
    channelsToggleUsername: channelsToggleUsername(dependencies),
    channelsDeactivateAllUsernames: channelsDeactivateAllUsernames(dependencies),
    channelsToggleForum: channelsToggleForum(dependencies),
    channelsCreateForumTopic: channelsCreateForumTopic(dependencies),
    channelsGetForumTopics: channelsGetForumTopics(dependencies),
    channelsGetForumTopicsByID: channelsGetForumTopicsByID(dependencies),
    channelsEditForumTopic: channelsEditForumTopic(dependencies),
    channelsUpdatePinnedForumTopic: channelsUpdatePinnedForumTopic(dependencies),
    channelsDeleteTopicHistory: channelsDeleteTopicHistory(dependencies),
    channelsReorderPinnedForumTopics: channelsReorderPinnedForumTopics(dependencies),
    channelsToggleAntiSpam: channelsToggleAntiSpam(dependencies),
    channelsReportAntiSpamFalsePositive: channelsReportAntiSpamFalsePositive(dependencies),
    messagesSetDefaultHistoryTTL: messagesSetDefaultHistoryTTL(dependencies),
    messagesGetDefaultHistoryTTL: messagesGetDefaultHistoryTTL(dependencies),
    contactsExportContactToken: contactsExportContactToken(dependencies),
    contactsImportContactToken: contactsImportContactToken(dependencies),
    photosUploadContactProfilePhoto: photosUploadContactProfilePhoto(dependencies),
    channelsToggleParticipantsHidden: channelsToggleParticipantsHidden(dependencies),
    messagesSendBotRequestedPeer: messagesSendBotRequestedPeer(dependencies),
    accountGetDefaultProfilePhotoEmojis: accountGetDefaultProfilePhotoEmojis(dependencies),
    accountGetDefaultGroupPhotoEmojis: accountGetDefaultGroupPhotoEmojis(dependencies),
    authRequestFirebaseSms: authRequestFirebaseSms(dependencies),
    messagesGetEmojiGroups: messagesGetEmojiGroups(dependencies),
    messagesGetEmojiStatusGroups: messagesGetEmojiStatusGroups(dependencies),
    messagesGetEmojiProfilePhotoGroups: messagesGetEmojiProfilePhotoGroups(dependencies),
    messagesSearchCustomEmoji: messagesSearchCustomEmoji(dependencies),
    messagesTogglePeerTranslations: messagesTogglePeerTranslations(dependencies),
    accountGetAutoSaveSettings: accountGetAutoSaveSettings(dependencies),
    accountSaveAutoSaveSettings: accountSaveAutoSaveSettings(dependencies),
    accountDeleteAutoSaveExceptions: accountDeleteAutoSaveExceptions(dependencies),
    stickersChangeSticker: stickersChangeSticker(dependencies),
    stickersRenameStickerSet: stickersRenameStickerSet(dependencies),
    stickersDeleteStickerSet: stickersDeleteStickerSet(dependencies),
    messagesGetBotApp: messagesGetBotApp(dependencies),
    messagesRequestAppWebView: messagesRequestAppWebView(dependencies),
    botsSetBotInfo: botsSetBotInfo(dependencies),
    botsGetBotInfo: botsGetBotInfo(dependencies),
    authResetLoginEmail: authResetLoginEmail(dependencies),
    chatlistsExportChatlistInvite: chatlistsExportChatlistInvite(dependencies),
    chatlistsDeleteExportedInvite: chatlistsDeleteExportedInvite(dependencies),
    chatlistsEditExportedInvite: chatlistsEditExportedInvite(dependencies),
    chatlistsGetExportedInvites: chatlistsGetExportedInvites(dependencies),
    chatlistsCheckChatlistInvite: chatlistsCheckChatlistInvite(dependencies),
    chatlistsJoinChatlistInvite: chatlistsJoinChatlistInvite(dependencies),
    chatlistsGetChatlistUpdates: chatlistsGetChatlistUpdates(dependencies),
    chatlistsJoinChatlistUpdates: chatlistsJoinChatlistUpdates(dependencies),
    chatlistsHideChatlistUpdates: chatlistsHideChatlistUpdates(dependencies),
    chatlistsGetLeaveChatlistSuggestions: chatlistsGetLeaveChatlistSuggestions(dependencies),
    chatlistsLeaveChatlist: chatlistsLeaveChatlist(dependencies),
    botsReorderUsernames: botsReorderUsernames(dependencies),
    botsToggleUsername: botsToggleUsername(dependencies),
    messagesSetChatWallPaper: messagesSetChatWallPaper(dependencies),
    accountInvalidateSignInCodes: accountInvalidateSignInCodes(dependencies),
    channelsClickSponsoredMessage: channelsClickSponsoredMessage(dependencies),
    contactsEditCloseFriends: contactsEditCloseFriends(dependencies),
    storiesCanSendStory: storiesCanSendStory(dependencies),
    storiesSendStory: storiesSendStory(dependencies),
    storiesEditStory: storiesEditStory(dependencies),
    storiesDeleteStories: storiesDeleteStories(dependencies),
    storiesTogglePinned: storiesTogglePinned(dependencies),
    storiesGetAllStories: storiesGetAllStories(dependencies),
    storiesGetPinnedStories: storiesGetPinnedStories(dependencies),
    storiesGetStoriesArchive: storiesGetStoriesArchive(dependencies),
    storiesGetStoriesByID: storiesGetStoriesByID(dependencies),
    storiesToggleAllStoriesHidden: storiesToggleAllStoriesHidden(dependencies),
    storiesReadStories: storiesReadStories(dependencies),
    storiesIncrementStoryViews: storiesIncrementStoryViews(dependencies),
    storiesGetStoryViewsList: storiesGetStoryViewsList(dependencies),
    storiesGetStoriesViews: storiesGetStoriesViews(dependencies),
    storiesExportStoryLink: storiesExportStoryLink(dependencies),
    storiesReport: storiesReport(dependencies),
    storiesActivateStealthMode: storiesActivateStealthMode(dependencies),
    contactsSetBlocked: contactsSetBlocked(dependencies),
    storiesSendReaction: storiesSendReaction(dependencies),
    botsCanSendMessage: botsCanSendMessage(dependencies),
    botsAllowSendMessage: botsAllowSendMessage(dependencies),
    botsInvokeWebViewCustomMethod: botsInvokeWebViewCustomMethod(dependencies),
    storiesGetPeerStories: storiesGetPeerStories(dependencies),
    storiesGetAllReadPeerStories: storiesGetAllReadPeerStories(dependencies),
    storiesGetPeerMaxIDs: storiesGetPeerMaxIDs(dependencies),
    storiesGetChatsToSend: storiesGetChatsToSend(dependencies),
    storiesTogglePeerStoriesHidden: storiesTogglePeerStoriesHidden(dependencies),
    paymentsGetPremiumGiftCodeOptions: paymentsGetPremiumGiftCodeOptions(dependencies),
    paymentsCheckGiftCode: paymentsCheckGiftCode(dependencies),
    paymentsApplyGiftCode: paymentsApplyGiftCode(dependencies),
    paymentsGetGiveawayInfo: paymentsGetGiveawayInfo(dependencies),
    paymentsLaunchPrepaidGiveaway: paymentsLaunchPrepaidGiveaway(dependencies),
    accountUpdateColor: accountUpdateColor(dependencies),
    channelsUpdateColor: channelsUpdateColor(dependencies),
    accountGetDefaultBackgroundEmojis: accountGetDefaultBackgroundEmojis(dependencies),
    premiumGetBoostsList: premiumGetBoostsList(dependencies),
    premiumGetMyBoosts: premiumGetMyBoosts(dependencies),
    premiumApplyBoost: premiumApplyBoost(dependencies),
    premiumGetBoostsStatus: premiumGetBoostsStatus(dependencies),
    premiumGetUserBoosts: premiumGetUserBoosts(dependencies),
    channelsToggleViewForumAsMessages: channelsToggleViewForumAsMessages(dependencies),
    messagesSearchEmojiStickerSets: messagesSearchEmojiStickerSets(dependencies),
    channelsGetChannelRecommendations: channelsGetChannelRecommendations(dependencies),
    statsGetStoryStats: statsGetStoryStats(dependencies),
    statsGetStoryPublicForwards: statsGetStoryPublicForwards(dependencies),
    helpGetPeerColors: helpGetPeerColors(dependencies),
    helpGetPeerProfileColors: helpGetPeerProfileColors(dependencies),
    storiesGetStoryReactionsList: storiesGetStoryReactionsList(dependencies),
    channelsUpdateEmojiStatus: channelsUpdateEmojiStatus(dependencies),
    accountGetChannelDefaultEmojiStatuses: accountGetChannelDefaultEmojiStatuses(dependencies),
    accountGetChannelRestrictedStatusEmojis: accountGetChannelRestrictedStatusEmojis(dependencies),
    messagesGetSavedDialogs: messagesGetSavedDialogs(dependencies),
    messagesGetSavedHistory: messagesGetSavedHistory(dependencies),
    messagesDeleteSavedHistory: messagesDeleteSavedHistory(dependencies),
    messagesGetPinnedSavedDialogs: messagesGetPinnedSavedDialogs(dependencies),
    messagesToggleSavedDialogPin: messagesToggleSavedDialogPin(dependencies),
    messagesReorderPinnedSavedDialogs: messagesReorderPinnedSavedDialogs(dependencies),
});
