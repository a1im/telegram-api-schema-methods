export interface PredicateError {
    _: 'error'
    code: number
    text: string
}

export interface PredicateInputPeerEmpty {
    _: 'inputPeerEmpty'
}

export interface PredicateInputPeerSelf {
    _: 'inputPeerSelf'
}

export interface PredicateInputPeerChat {
    _: 'inputPeerChat'
    chat_id: number
}

export interface PredicateInputUserEmpty {
    _: 'inputUserEmpty'
}

export interface PredicateInputUserSelf {
    _: 'inputUserSelf'
}

export interface PredicateInputPhoneContact {
    _: 'inputPhoneContact'
    client_id: number
    phone: string
    first_name: string
    last_name: string
}

export interface PredicateInputFile {
    _: 'inputFile'
    id: number
    parts: number
    name: string
    md5_checksum: string
}

export interface PredicateInputMediaEmpty {
    _: 'inputMediaEmpty'
}

export interface PredicateInputMediaUploadedPhoto {
    _: 'inputMediaUploadedPhoto'
    file: InputFile
    stickers?: InputDocument[]
    ttl_seconds?: number
}

export interface PredicateInputMediaPhoto {
    _: 'inputMediaPhoto'
    id: InputPhoto
    ttl_seconds?: number
}

export interface PredicateInputMediaGeoPoint {
    _: 'inputMediaGeoPoint'
    geo_point: InputGeoPoint
}

export interface PredicateInputMediaContact {
    _: 'inputMediaContact'
    phone_number: string
    first_name: string
    last_name: string
    vcard: string
}

export interface PredicateInputChatPhotoEmpty {
    _: 'inputChatPhotoEmpty'
}

export interface PredicateInputChatUploadedPhoto {
    _: 'inputChatUploadedPhoto'
    file?: InputFile
    video?: InputFile
    video_start_ts?: number
}

export interface PredicateInputChatPhoto {
    _: 'inputChatPhoto'
    id: InputPhoto
}

export interface PredicateInputGeoPointEmpty {
    _: 'inputGeoPointEmpty'
}

export interface PredicateInputGeoPoint {
    _: 'inputGeoPoint'
    lat: number
    long: number
    accuracy_radius?: number
}

export interface PredicateInputPhotoEmpty {
    _: 'inputPhotoEmpty'
}

export interface PredicateInputPhoto {
    _: 'inputPhoto'
    id: number
    access_hash: number
    file_reference: Uint8Array
}

export interface PredicateInputFileLocation {
    _: 'inputFileLocation'
    volume_id: number
    local_id: number
    secret: number
    file_reference: Uint8Array
}

export interface PredicatePeerUser {
    _: 'peerUser'
    user_id: number
}

export interface PredicatePeerChat {
    _: 'peerChat'
    chat_id: number
}

export interface PredicateStorageFileUnknown {
    _: 'storage.fileUnknown'
}

export interface PredicateStorageFilePartial {
    _: 'storage.filePartial'
}

export interface PredicateStorageFileJpeg {
    _: 'storage.fileJpeg'
}

export interface PredicateStorageFileGif {
    _: 'storage.fileGif'
}

export interface PredicateStorageFilePng {
    _: 'storage.filePng'
}

export interface PredicateStorageFilePdf {
    _: 'storage.filePdf'
}

export interface PredicateStorageFileMp3 {
    _: 'storage.fileMp3'
}

export interface PredicateStorageFileMov {
    _: 'storage.fileMov'
}

export interface PredicateStorageFileMp4 {
    _: 'storage.fileMp4'
}

export interface PredicateStorageFileWebp {
    _: 'storage.fileWebp'
}

export interface PredicateUserEmpty {
    _: 'userEmpty'
    id: number
}

export interface PredicateUserProfilePhotoEmpty {
    _: 'userProfilePhotoEmpty'
}

export interface PredicateUserProfilePhoto {
    _: 'userProfilePhoto'
    has_video?: true
    photo_id: number
    stripped_thumb?: Uint8Array
    dc_id: number
}

export interface PredicateUserStatusEmpty {
    _: 'userStatusEmpty'
}

export interface PredicateUserStatusOnline {
    _: 'userStatusOnline'
    expires: number
}

export interface PredicateUserStatusOffline {
    _: 'userStatusOffline'
    was_online: number
}

export interface PredicateChatEmpty {
    _: 'chatEmpty'
    id: number
}

export interface PredicateChat {
    _: 'chat'
    creator?: true
    left?: true
    deactivated?: true
    call_active?: true
    call_not_empty?: true
    noforwards?: true
    id: number
    title: string
    photo: ChatPhoto
    participants_count: number
    date: number
    version: number
    migrated_to?: InputChannel
    admin_rights?: ChatAdminRights
    default_banned_rights?: ChatBannedRights
}

export interface PredicateChatForbidden {
    _: 'chatForbidden'
    id: number
    title: string
}

export interface PredicateChatFull {
    _: 'chatFull'
    can_set_username?: true
    has_scheduled?: true
    id: number
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
    recent_requesters?: number[]
    available_reactions?: string[]
}

export interface PredicateChatParticipant {
    _: 'chatParticipant'
    user_id: number
    inviter_id: number
    date: number
}

export interface PredicateChatParticipantsForbidden {
    _: 'chatParticipantsForbidden'
    chat_id: number
    self_participant?: ChatParticipant
}

export interface PredicateChatParticipants {
    _: 'chatParticipants'
    chat_id: number
    participants: ChatParticipant[]
    version: number
}

export interface PredicateChatPhotoEmpty {
    _: 'chatPhotoEmpty'
}

export interface PredicateChatPhoto {
    _: 'chatPhoto'
    has_video?: true
    photo_id: number
    stripped_thumb?: Uint8Array
    dc_id: number
}

export interface PredicateMessageEmpty {
    _: 'messageEmpty'
    id: number
    peer_id?: Peer
}

export interface PredicateMessage {
    _: 'message'
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
    via_bot_id?: number
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
    grouped_id?: number
    reactions?: MessageReactions
    restriction_reason?: RestrictionReason[]
    ttl_period?: number
}

export interface PredicateMessageService {
    _: 'messageService'
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
}

export interface PredicateMessageMediaEmpty {
    _: 'messageMediaEmpty'
}

export interface PredicateMessageMediaPhoto {
    _: 'messageMediaPhoto'
    photo?: Photo
    ttl_seconds?: number
}

export interface PredicateMessageMediaGeo {
    _: 'messageMediaGeo'
    geo: GeoPoint
}

export interface PredicateMessageMediaContact {
    _: 'messageMediaContact'
    phone_number: string
    first_name: string
    last_name: string
    vcard: string
    user_id: number
}

export interface PredicateMessageMediaUnsupported {
    _: 'messageMediaUnsupported'
}

export interface PredicateMessageActionEmpty {
    _: 'messageActionEmpty'
}

export interface PredicateMessageActionChatCreate {
    _: 'messageActionChatCreate'
    title: string
    users: number[]
}

export interface PredicateMessageActionChatEditTitle {
    _: 'messageActionChatEditTitle'
    title: string
}

export interface PredicateMessageActionChatEditPhoto {
    _: 'messageActionChatEditPhoto'
    photo: Photo
}

export interface PredicateMessageActionChatDeletePhoto {
    _: 'messageActionChatDeletePhoto'
}

export interface PredicateMessageActionChatAddUser {
    _: 'messageActionChatAddUser'
    users: number[]
}

export interface PredicateMessageActionChatDeleteUser {
    _: 'messageActionChatDeleteUser'
    user_id: number
}

export interface PredicateDialog {
    _: 'dialog'
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
}

export interface PredicatePhotoEmpty {
    _: 'photoEmpty'
    id: number
}

export interface PredicatePhoto {
    _: 'photo'
    has_stickers?: true
    id: number
    access_hash: number
    file_reference: Uint8Array
    date: number
    sizes: PhotoSize[]
    video_sizes?: VideoSize[]
    dc_id: number
}

export interface PredicatePhotoSizeEmpty {
    _: 'photoSizeEmpty'
    type: string
}

export interface PredicatePhotoSize {
    _: 'photoSize'
    type: string
    w: number
    h: number
    size: number
}

export interface PredicatePhotoCachedSize {
    _: 'photoCachedSize'
    type: string
    w: number
    h: number
    bytes: Uint8Array
}

export interface PredicateGeoPointEmpty {
    _: 'geoPointEmpty'
}

export interface PredicateGeoPoint {
    _: 'geoPoint'
    long: number
    lat: number
    access_hash: number
    accuracy_radius?: number
}

export interface PredicateAuthSentCode {
    _: 'auth.sentCode'
    type: AuthSentCodeType
    phone_code_hash: string
    next_type?: AuthCodeType
    timeout?: number
}

export interface PredicateAuthAuthorization {
    _: 'auth.authorization'
    setup_password_required?: true
    otherwise_relogin_days?: number
    tmp_sessions?: number
    user: User
}

export interface PredicateAuthExportedAuthorization {
    _: 'auth.exportedAuthorization'
    id: number
    bytes: Uint8Array
}

export interface PredicateInputNotifyPeer {
    _: 'inputNotifyPeer'
    peer: InputPeer
}

export interface PredicateInputNotifyUsers {
    _: 'inputNotifyUsers'
}

export interface PredicateInputNotifyChats {
    _: 'inputNotifyChats'
}

export interface PredicateInputPeerNotifySettings {
    _: 'inputPeerNotifySettings'
    show_previews?: boolean
    silent?: boolean
    mute_until?: number
    sound?: string
}

export interface PredicatePeerNotifySettings {
    _: 'peerNotifySettings'
    show_previews?: boolean
    silent?: boolean
    mute_until?: number
    sound?: string
}

export interface PredicatePeerSettings {
    _: 'peerSettings'
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
}

export interface PredicateWallPaper {
    _: 'wallPaper'
    id: number
    creator?: true
    default?: true
    pattern?: true
    dark?: true
    access_hash: number
    slug: string
    document: Document
    settings?: WallPaperSettings
}

export interface PredicateInputReportReasonSpam {
    _: 'inputReportReasonSpam'
}

export interface PredicateInputReportReasonViolence {
    _: 'inputReportReasonViolence'
}

export interface PredicateInputReportReasonPornography {
    _: 'inputReportReasonPornography'
}

export interface PredicateInputReportReasonChildAbuse {
    _: 'inputReportReasonChildAbuse'
}

export interface PredicateInputReportReasonOther {
    _: 'inputReportReasonOther'
}

export interface PredicateUserFull {
    _: 'userFull'
    blocked?: true
    phone_calls_available?: true
    phone_calls_private?: true
    can_pin_message?: true
    has_scheduled?: true
    video_calls_available?: true
    id: number
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
}

export interface PredicateContact {
    _: 'contact'
    user_id: number
    mutual: boolean
}

export interface PredicateImportedContact {
    _: 'importedContact'
    user_id: number
    client_id: number
}

export interface PredicateContactStatus {
    _: 'contactStatus'
    user_id: number
    status: UserStatus
}

export interface PredicateContactsContactsNotModified {
    _: 'contacts.contactsNotModified'
}

export interface PredicateContactsContacts {
    _: 'contacts.contacts'
    contacts: Contact[]
    saved_count: number
    users: User[]
}

export interface PredicateContactsImportedContacts {
    _: 'contacts.importedContacts'
    imported: ImportedContact[]
    popular_invites: PopularContact[]
    retry_contacts: number[]
    users: User[]
}

export interface PredicateContactsBlocked {
    _: 'contacts.blocked'
    blocked: PeerBlocked[]
    chats: Chat[]
    users: User[]
}

export interface PredicateContactsBlockedSlice {
    _: 'contacts.blockedSlice'
    count: number
    blocked: PeerBlocked[]
    chats: Chat[]
    users: User[]
}

export interface PredicateMessagesDialogs {
    _: 'messages.dialogs'
    dialogs: Dialog[]
    messages: Message[]
    chats: Chat[]
    users: User[]
}

export interface PredicateMessagesDialogsSlice {
    _: 'messages.dialogsSlice'
    count: number
    dialogs: Dialog[]
    messages: Message[]
    chats: Chat[]
    users: User[]
}

export interface PredicateMessagesMessages {
    _: 'messages.messages'
    messages: Message[]
    chats: Chat[]
    users: User[]
}

export interface PredicateMessagesMessagesSlice {
    _: 'messages.messagesSlice'
    inexact?: true
    count: number
    next_rate?: number
    offset_id_offset?: number
    messages: Message[]
    chats: Chat[]
    users: User[]
}

export interface PredicateMessagesChats {
    _: 'messages.chats'
    chats: Chat[]
}

export interface PredicateMessagesChatFull {
    _: 'messages.chatFull'
    full_chat: ChatFull
    chats: Chat[]
    users: User[]
}

export interface PredicateMessagesAffectedHistory {
    _: 'messages.affectedHistory'
    pts: number
    pts_count: number
    offset: number
}

export interface PredicateInputMessagesFilterEmpty {
    _: 'inputMessagesFilterEmpty'
}

export interface PredicateInputMessagesFilterPhotos {
    _: 'inputMessagesFilterPhotos'
}

export interface PredicateInputMessagesFilterVideo {
    _: 'inputMessagesFilterVideo'
}

export interface PredicateInputMessagesFilterPhotoVideo {
    _: 'inputMessagesFilterPhotoVideo'
}

export interface PredicateInputMessagesFilterDocument {
    _: 'inputMessagesFilterDocument'
}

export interface PredicateInputMessagesFilterUrl {
    _: 'inputMessagesFilterUrl'
}

export interface PredicateInputMessagesFilterGif {
    _: 'inputMessagesFilterGif'
}

export interface PredicateUpdateNewMessage {
    _: 'updateNewMessage'
    message: Message
    pts: number
    pts_count: number
}

export interface PredicateUpdateMessageID {
    _: 'updateMessageID'
    id: number
    random_id: number
}

export interface PredicateUpdateDeleteMessages {
    _: 'updateDeleteMessages'
    messages: number[]
    pts: number
    pts_count: number
}

export interface PredicateUpdateUserTyping {
    _: 'updateUserTyping'
    user_id: number
    action: SendMessageAction
}

export interface PredicateUpdateChatUserTyping {
    _: 'updateChatUserTyping'
    chat_id: number
    from_id: Peer
    action: SendMessageAction
}

export interface PredicateUpdateChatParticipants {
    _: 'updateChatParticipants'
    participants: ChatParticipants
}

export interface PredicateUpdateUserStatus {
    _: 'updateUserStatus'
    user_id: number
    status: UserStatus
}

export interface PredicateUpdateUserName {
    _: 'updateUserName'
    user_id: number
    first_name: string
    last_name: string
    username: string
}

export interface PredicateUpdateUserPhoto {
    _: 'updateUserPhoto'
    user_id: number
    date: number
    photo: UserProfilePhoto
    previous: boolean
}

export interface PredicateUpdatesState {
    _: 'updates.state'
    pts: number
    qts: number
    date: number
    seq: number
    unread_count: number
}

export interface PredicateUpdatesDifferenceEmpty {
    _: 'updates.differenceEmpty'
    date: number
    seq: number
}

export interface PredicateUpdatesDifference {
    _: 'updates.difference'
    new_messages: Message[]
    new_encrypted_messages: EncryptedMessage[]
    other_updates: Update[]
    chats: Chat[]
    users: User[]
    state: UpdatesState
}

export interface PredicateUpdatesDifferenceSlice {
    _: 'updates.differenceSlice'
    new_messages: Message[]
    new_encrypted_messages: EncryptedMessage[]
    other_updates: Update[]
    chats: Chat[]
    users: User[]
    intermediate_state: UpdatesState
}

export interface PredicateUpdatesTooLong {
    _: 'updatesTooLong'
}

export interface PredicateUpdateShortMessage {
    _: 'updateShortMessage'
    out?: true
    mentioned?: true
    media_unread?: true
    silent?: true
    id: number
    user_id: number
    message: string
    pts: number
    pts_count: number
    date: number
    fwd_from?: MessageFwdHeader
    via_bot_id?: number
    reply_to?: MessageReplyHeader
    entities?: MessageEntity[]
    ttl_period?: number
}

export interface PredicateUpdateShortChatMessage {
    _: 'updateShortChatMessage'
    out?: true
    mentioned?: true
    media_unread?: true
    silent?: true
    id: number
    from_id: number
    chat_id: number
    message: string
    pts: number
    pts_count: number
    date: number
    fwd_from?: MessageFwdHeader
    via_bot_id?: number
    reply_to?: MessageReplyHeader
    entities?: MessageEntity[]
    ttl_period?: number
}

export interface PredicateUpdateShort {
    _: 'updateShort'
    update: Update
    date: number
}

export interface PredicateUpdatesCombined {
    _: 'updatesCombined'
    updates: Update[]
    users: User[]
    chats: Chat[]
    date: number
    seq_start: number
    seq: number
}

export interface PredicateUpdates {
    _: 'updates'
    updates: Update[]
    users: User[]
    chats: Chat[]
    date: number
    seq: number
}

export interface PredicatePhotosPhotos {
    _: 'photos.photos'
    photos: Photo[]
    users: User[]
}

export interface PredicatePhotosPhotosSlice {
    _: 'photos.photosSlice'
    count: number
    photos: Photo[]
    users: User[]
}

export interface PredicatePhotosPhoto {
    _: 'photos.photo'
    photo: Photo
    users: User[]
}

export interface PredicateUploadFile {
    _: 'upload.file'
    type: StorageFileType
    mtime: number
    bytes: Uint8Array
}

export interface PredicateDcOption {
    _: 'dcOption'
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
}

export interface PredicateConfig {
    _: 'config'
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
}

export interface PredicateNearestDc {
    _: 'nearestDc'
    country: string
    this_dc: number
    nearest_dc: number
}

export interface PredicateHelpAppUpdate {
    _: 'help.appUpdate'
    can_not_skip?: true
    id: number
    version: string
    text: string
    entities: MessageEntity[]
    document?: Document
    url?: string
    sticker?: Document
}

export interface PredicateHelpNoAppUpdate {
    _: 'help.noAppUpdate'
}

export interface PredicateHelpInviteText {
    _: 'help.inviteText'
    message: string
}

export interface PredicateUpdateNewEncryptedMessage {
    _: 'updateNewEncryptedMessage'
    message: EncryptedMessage
    qts: number
}

export interface PredicateUpdateEncryptedChatTyping {
    _: 'updateEncryptedChatTyping'
    chat_id: number
}

export interface PredicateUpdateEncryption {
    _: 'updateEncryption'
    chat: EncryptedChat
    date: number
}

export interface PredicateUpdateEncryptedMessagesRead {
    _: 'updateEncryptedMessagesRead'
    chat_id: number
    max_date: number
    date: number
}

export interface PredicateEncryptedChatEmpty {
    _: 'encryptedChatEmpty'
    id: number
}

export interface PredicateEncryptedChatWaiting {
    _: 'encryptedChatWaiting'
    id: number
    access_hash: number
    date: number
    admin_id: number
    participant_id: number
}

export interface PredicateEncryptedChatRequested {
    _: 'encryptedChatRequested'
    folder_id?: number
    id: number
    access_hash: number
    date: number
    admin_id: number
    participant_id: number
    g_a: Uint8Array
}

export interface PredicateEncryptedChat {
    _: 'encryptedChat'
    id: number
    access_hash: number
    date: number
    admin_id: number
    participant_id: number
    g_a_or_b: Uint8Array
    key_fingerprint: number
}

export interface PredicateEncryptedChatDiscarded {
    _: 'encryptedChatDiscarded'
    history_deleted?: true
    id: number
}

export interface PredicateInputEncryptedChat {
    _: 'inputEncryptedChat'
    chat_id: number
    access_hash: number
}

export interface PredicateEncryptedFileEmpty {
    _: 'encryptedFileEmpty'
}

export interface PredicateEncryptedFile {
    _: 'encryptedFile'
    id: number
    access_hash: number
    size: number
    dc_id: number
    key_fingerprint: number
}

export interface PredicateInputEncryptedFileEmpty {
    _: 'inputEncryptedFileEmpty'
}

export interface PredicateInputEncryptedFileUploaded {
    _: 'inputEncryptedFileUploaded'
    id: number
    parts: number
    md5_checksum: string
    key_fingerprint: number
}

export interface PredicateInputEncryptedFile {
    _: 'inputEncryptedFile'
    id: number
    access_hash: number
}

export interface PredicateInputEncryptedFileLocation {
    _: 'inputEncryptedFileLocation'
    id: number
    access_hash: number
}

export interface PredicateEncryptedMessage {
    _: 'encryptedMessage'
    random_id: number
    chat_id: number
    date: number
    bytes: Uint8Array
    file: EncryptedFile
}

export interface PredicateEncryptedMessageService {
    _: 'encryptedMessageService'
    random_id: number
    chat_id: number
    date: number
    bytes: Uint8Array
}

export interface PredicateMessagesDhConfigNotModified {
    _: 'messages.dhConfigNotModified'
    random: Uint8Array
}

export interface PredicateMessagesDhConfig {
    _: 'messages.dhConfig'
    g: number
    p: Uint8Array
    version: number
    random: Uint8Array
}

export interface PredicateMessagesSentEncryptedMessage {
    _: 'messages.sentEncryptedMessage'
    date: number
}

export interface PredicateMessagesSentEncryptedFile {
    _: 'messages.sentEncryptedFile'
    date: number
    file: EncryptedFile
}

export interface PredicateInputFileBig {
    _: 'inputFileBig'
    id: number
    parts: number
    name: string
}

export interface PredicateInputEncryptedFileBigUploaded {
    _: 'inputEncryptedFileBigUploaded'
    id: number
    parts: number
    key_fingerprint: number
}

export interface PredicateUpdateChatParticipantAdd {
    _: 'updateChatParticipantAdd'
    chat_id: number
    user_id: number
    inviter_id: number
    date: number
    version: number
}

export interface PredicateUpdateChatParticipantDelete {
    _: 'updateChatParticipantDelete'
    chat_id: number
    user_id: number
    version: number
}

export interface PredicateUpdateDcOptions {
    _: 'updateDcOptions'
    dc_options: DcOption[]
}

export interface PredicateInputMediaUploadedDocument {
    _: 'inputMediaUploadedDocument'
    nosound_video?: true
    force_file?: true
    file: InputFile
    thumb?: InputFile
    mime_type: string
    attributes: DocumentAttribute[]
    stickers?: InputDocument[]
    ttl_seconds?: number
}

export interface PredicateInputMediaDocument {
    _: 'inputMediaDocument'
    id: InputDocument
    ttl_seconds?: number
    query?: string
}

export interface PredicateMessageMediaDocument {
    _: 'messageMediaDocument'
    document?: Document
    ttl_seconds?: number
}

export interface PredicateInputDocumentEmpty {
    _: 'inputDocumentEmpty'
}

export interface PredicateInputDocument {
    _: 'inputDocument'
    id: number
    access_hash: number
    file_reference: Uint8Array
}

export interface PredicateInputDocumentFileLocation {
    _: 'inputDocumentFileLocation'
    id: number
    access_hash: number
    file_reference: Uint8Array
    thumb_size: string
}

export interface PredicateDocumentEmpty {
    _: 'documentEmpty'
    id: number
}

export interface PredicateDocument {
    _: 'document'
    id: number
    access_hash: number
    file_reference: Uint8Array
    date: number
    mime_type: string
    size: number
    thumbs?: PhotoSize[]
    video_thumbs?: VideoSize[]
    dc_id: number
    attributes: DocumentAttribute[]
}

export interface PredicateHelpSupport {
    _: 'help.support'
    phone_number: string
    user: User
}

export interface PredicateNotifyPeer {
    _: 'notifyPeer'
    peer: Peer
}

export interface PredicateNotifyUsers {
    _: 'notifyUsers'
}

export interface PredicateNotifyChats {
    _: 'notifyChats'
}

export interface PredicateUpdateNotifySettings {
    _: 'updateNotifySettings'
    peer: NotifyPeer
    notify_settings: PeerNotifySettings
}

export interface PredicateSendMessageTypingAction {
    _: 'sendMessageTypingAction'
}

export interface PredicateSendMessageCancelAction {
    _: 'sendMessageCancelAction'
}

export interface PredicateSendMessageRecordVideoAction {
    _: 'sendMessageRecordVideoAction'
}

export interface PredicateSendMessageUploadVideoAction {
    _: 'sendMessageUploadVideoAction'
    progress: number
}

export interface PredicateSendMessageRecordAudioAction {
    _: 'sendMessageRecordAudioAction'
}

export interface PredicateSendMessageUploadAudioAction {
    _: 'sendMessageUploadAudioAction'
    progress: number
}

export interface PredicateSendMessageUploadPhotoAction {
    _: 'sendMessageUploadPhotoAction'
    progress: number
}

export interface PredicateSendMessageUploadDocumentAction {
    _: 'sendMessageUploadDocumentAction'
    progress: number
}

export interface PredicateSendMessageGeoLocationAction {
    _: 'sendMessageGeoLocationAction'
}

export interface PredicateSendMessageChooseContactAction {
    _: 'sendMessageChooseContactAction'
}

export interface PredicateContactsFound {
    _: 'contacts.found'
    my_results: Peer[]
    results: Peer[]
    chats: Chat[]
    users: User[]
}

export interface PredicateUpdateServiceNotification {
    _: 'updateServiceNotification'
    popup?: true
    inbox_date?: number
    type: string
    message: string
    media: MessageMedia
    entities: MessageEntity[]
}

export interface PredicateUserStatusRecently {
    _: 'userStatusRecently'
}

export interface PredicateUserStatusLastWeek {
    _: 'userStatusLastWeek'
}

export interface PredicateUserStatusLastMonth {
    _: 'userStatusLastMonth'
}

export interface PredicateUpdatePrivacy {
    _: 'updatePrivacy'
    key: PrivacyKey
    rules: PrivacyRule[]
}

export interface PredicateInputPrivacyKeyStatusTimestamp {
    _: 'inputPrivacyKeyStatusTimestamp'
}

export interface PredicatePrivacyKeyStatusTimestamp {
    _: 'privacyKeyStatusTimestamp'
}

export interface PredicateInputPrivacyValueAllowContacts {
    _: 'inputPrivacyValueAllowContacts'
}

export interface PredicateInputPrivacyValueAllowAll {
    _: 'inputPrivacyValueAllowAll'
}

export interface PredicateInputPrivacyValueAllowUsers {
    _: 'inputPrivacyValueAllowUsers'
    users: InputUser[]
}

export interface PredicateInputPrivacyValueDisallowContacts {
    _: 'inputPrivacyValueDisallowContacts'
}

export interface PredicateInputPrivacyValueDisallowAll {
    _: 'inputPrivacyValueDisallowAll'
}

export interface PredicateInputPrivacyValueDisallowUsers {
    _: 'inputPrivacyValueDisallowUsers'
    users: InputUser[]
}

export interface PredicatePrivacyValueAllowContacts {
    _: 'privacyValueAllowContacts'
}

export interface PredicatePrivacyValueAllowAll {
    _: 'privacyValueAllowAll'
}

export interface PredicatePrivacyValueAllowUsers {
    _: 'privacyValueAllowUsers'
    users: number[]
}

export interface PredicatePrivacyValueDisallowContacts {
    _: 'privacyValueDisallowContacts'
}

export interface PredicatePrivacyValueDisallowAll {
    _: 'privacyValueDisallowAll'
}

export interface PredicatePrivacyValueDisallowUsers {
    _: 'privacyValueDisallowUsers'
    users: number[]
}

export interface PredicateAccountPrivacyRules {
    _: 'account.privacyRules'
    rules: PrivacyRule[]
    chats: Chat[]
    users: User[]
}

export interface PredicateAccountDaysTTL {
    _: 'accountDaysTTL'
    days: number
}

export interface PredicateUpdateUserPhone {
    _: 'updateUserPhone'
    user_id: number
    phone: string
}

export interface PredicateDocumentAttributeImageSize {
    _: 'documentAttributeImageSize'
    w: number
    h: number
}

export interface PredicateDocumentAttributeAnimated {
    _: 'documentAttributeAnimated'
}

export interface PredicateDocumentAttributeSticker {
    _: 'documentAttributeSticker'
    mask?: true
    alt: string
    stickerset: InputStickerSet
    mask_coords?: MaskCoords
}

export interface PredicateDocumentAttributeVideo {
    _: 'documentAttributeVideo'
    round_message?: true
    supports_streaming?: true
    duration: number
    w: number
    h: number
}

export interface PredicateDocumentAttributeAudio {
    _: 'documentAttributeAudio'
    voice?: true
    duration: number
    title?: string
    performer?: string
    waveform?: Uint8Array
}

export interface PredicateDocumentAttributeFilename {
    _: 'documentAttributeFilename'
    file_name: string
}

export interface PredicateMessagesStickersNotModified {
    _: 'messages.stickersNotModified'
}

export interface PredicateMessagesStickers {
    _: 'messages.stickers'
    hash: number
    stickers: Document[]
}

export interface PredicateStickerPack {
    _: 'stickerPack'
    emoticon: string
    documents: number[]
}

export interface PredicateMessagesAllStickersNotModified {
    _: 'messages.allStickersNotModified'
}

export interface PredicateMessagesAllStickers {
    _: 'messages.allStickers'
    hash: number
    sets: StickerSet[]
}

export interface PredicateUpdateReadHistoryInbox {
    _: 'updateReadHistoryInbox'
    folder_id?: number
    peer: Peer
    max_id: number
    still_unread_count: number
    pts: number
    pts_count: number
}

export interface PredicateUpdateReadHistoryOutbox {
    _: 'updateReadHistoryOutbox'
    peer: Peer
    max_id: number
    pts: number
    pts_count: number
}

export interface PredicateMessagesAffectedMessages {
    _: 'messages.affectedMessages'
    pts: number
    pts_count: number
}

export interface PredicateUpdateWebPage {
    _: 'updateWebPage'
    webpage: WebPage
    pts: number
    pts_count: number
}

export interface PredicateWebPageEmpty {
    _: 'webPageEmpty'
    id: number
}

export interface PredicateWebPagePending {
    _: 'webPagePending'
    id: number
    date: number
}

export interface PredicateWebPage {
    _: 'webPage'
    id: number
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
}

export interface PredicateMessageMediaWebPage {
    _: 'messageMediaWebPage'
    webpage: WebPage
}

export interface PredicateAuthorization {
    _: 'authorization'
    current?: true
    official_app?: true
    password_pending?: true
    encrypted_requests_disabled?: true
    call_requests_disabled?: true
    hash: number
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
}

export interface PredicateAccountAuthorizations {
    _: 'account.authorizations'
    authorization_ttl_days: number
    authorizations: Authorization[]
}

export interface PredicateAccountPassword {
    _: 'account.password'
    has_recovery?: true
    has_secure_values?: true
    has_password?: true
    current_algo?: PasswordKdfAlgo
    srp_B?: Uint8Array
    srp_id?: number
    hint?: string
    email_unconfirmed_pattern?: string
    new_algo: PasswordKdfAlgo
    new_secure_algo: SecurePasswordKdfAlgo
    secure_random: Uint8Array
    pending_reset_date?: number
}

export interface PredicateAccountPasswordSettings {
    _: 'account.passwordSettings'
    email?: string
    secure_settings?: SecureSecretSettings
}

export interface PredicateAccountPasswordInputSettings {
    _: 'account.passwordInputSettings'
    new_algo?: PasswordKdfAlgo
    new_password_hash?: Uint8Array
    hint?: string
    email?: string
    new_secure_settings?: SecureSecretSettings
}

export interface PredicateAuthPasswordRecovery {
    _: 'auth.passwordRecovery'
    email_pattern: string
}

export interface PredicateInputMediaVenue {
    _: 'inputMediaVenue'
    geo_point: InputGeoPoint
    title: string
    address: string
    provider: string
    venue_id: string
    venue_type: string
}

export interface PredicateMessageMediaVenue {
    _: 'messageMediaVenue'
    geo: GeoPoint
    title: string
    address: string
    provider: string
    venue_id: string
    venue_type: string
}

export interface PredicateReceivedNotifyMessage {
    _: 'receivedNotifyMessage'
    id: number
    flags: number
}

export interface PredicateChatInviteExported {
    _: 'chatInviteExported'
    revoked?: true
    permanent?: true
    request_needed?: true
    link: string
    admin_id: number
    date: number
    start_date?: number
    expire_date?: number
    usage_limit?: number
    usage?: number
    requested?: number
    title?: string
}

export interface PredicateChatInviteAlready {
    _: 'chatInviteAlready'
    chat: Chat
}

export interface PredicateChatInvite {
    _: 'chatInvite'
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
}

export interface PredicateMessageActionChatJoinedByLink {
    _: 'messageActionChatJoinedByLink'
    inviter_id: number
}

export interface PredicateUpdateReadMessagesContents {
    _: 'updateReadMessagesContents'
    messages: number[]
    pts: number
    pts_count: number
}

export interface PredicateInputStickerSetEmpty {
    _: 'inputStickerSetEmpty'
}

export interface PredicateInputStickerSetID {
    _: 'inputStickerSetID'
    id: number
    access_hash: number
}

export interface PredicateInputStickerSetShortName {
    _: 'inputStickerSetShortName'
    short_name: string
}

export interface PredicateStickerSet {
    _: 'stickerSet'
    archived?: true
    official?: true
    masks?: true
    animated?: true
    videos?: true
    emojis?: true
    installed_date?: number
    id: number
    access_hash: number
    title: string
    short_name: string
    thumbs?: PhotoSize[]
    thumb_dc_id?: number
    thumb_version?: number
    count: number
    hash: number
}

export interface PredicateMessagesStickerSet {
    _: 'messages.stickerSet'
    set: StickerSet
    packs: StickerPack[]
    documents: Document[]
}

export interface PredicateUser {
    _: 'user'
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
    id: number
    access_hash?: number
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
}

export interface PredicateBotCommand {
    _: 'botCommand'
    command: string
    description: string
}

export interface PredicateBotInfo {
    _: 'botInfo'
    user_id: number
    description: string
    commands: BotCommand[]
}

export interface PredicateKeyboardButton {
    _: 'keyboardButton'
    text: string
}

export interface PredicateKeyboardButtonRow {
    _: 'keyboardButtonRow'
    buttons: KeyboardButton[]
}

export interface PredicateReplyKeyboardHide {
    _: 'replyKeyboardHide'
    selective?: true
}

export interface PredicateReplyKeyboardForceReply {
    _: 'replyKeyboardForceReply'
    single_use?: true
    selective?: true
    placeholder?: string
}

export interface PredicateReplyKeyboardMarkup {
    _: 'replyKeyboardMarkup'
    resize?: true
    single_use?: true
    selective?: true
    rows: KeyboardButtonRow[]
    placeholder?: string
}

export interface PredicateInputPeerUser {
    _: 'inputPeerUser'
    user_id: number
    access_hash: number
}

export interface PredicateInputUser {
    _: 'inputUser'
    user_id: number
    access_hash: number
}

export interface PredicateMessageEntityUnknown {
    _: 'messageEntityUnknown'
    offset: number
    length: number
}

export interface PredicateMessageEntityMention {
    _: 'messageEntityMention'
    offset: number
    length: number
}

export interface PredicateMessageEntityHashtag {
    _: 'messageEntityHashtag'
    offset: number
    length: number
}

export interface PredicateMessageEntityBotCommand {
    _: 'messageEntityBotCommand'
    offset: number
    length: number
}

export interface PredicateMessageEntityUrl {
    _: 'messageEntityUrl'
    offset: number
    length: number
}

export interface PredicateMessageEntityEmail {
    _: 'messageEntityEmail'
    offset: number
    length: number
}

export interface PredicateMessageEntityBold {
    _: 'messageEntityBold'
    offset: number
    length: number
}

export interface PredicateMessageEntityItalic {
    _: 'messageEntityItalic'
    offset: number
    length: number
}

export interface PredicateMessageEntityCode {
    _: 'messageEntityCode'
    offset: number
    length: number
}

export interface PredicateMessageEntityPre {
    _: 'messageEntityPre'
    offset: number
    length: number
    language: string
}

export interface PredicateMessageEntityTextUrl {
    _: 'messageEntityTextUrl'
    offset: number
    length: number
    url: string
}

export interface PredicateUpdateShortSentMessage {
    _: 'updateShortSentMessage'
    out?: true
    id: number
    pts: number
    pts_count: number
    date: number
    media?: MessageMedia
    entities?: MessageEntity[]
    ttl_period?: number
}

export interface PredicateInputChannelEmpty {
    _: 'inputChannelEmpty'
}

export interface PredicateInputChannel {
    _: 'inputChannel'
    channel_id: number
    access_hash: number
}

export interface PredicatePeerChannel {
    _: 'peerChannel'
    channel_id: number
}

export interface PredicateInputPeerChannel {
    _: 'inputPeerChannel'
    channel_id: number
    access_hash: number
}

export interface PredicateChannel {
    _: 'channel'
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
    id: number
    access_hash?: number
    title: string
    username?: string
    photo: ChatPhoto
    date: number
    restriction_reason?: RestrictionReason[]
    admin_rights?: ChatAdminRights
    banned_rights?: ChatBannedRights
    default_banned_rights?: ChatBannedRights
    participants_count?: number
}

export interface PredicateChannelForbidden {
    _: 'channelForbidden'
    broadcast?: true
    megagroup?: true
    id: number
    access_hash: number
    title: string
    until_date?: number
}

export interface PredicateContactsResolvedPeer {
    _: 'contacts.resolvedPeer'
    peer: Peer
    chats: Chat[]
    users: User[]
}

export interface PredicateChannelFull {
    _: 'channelFull'
    can_view_participants?: true
    can_set_username?: true
    can_set_stickers?: true
    hidden_prehistory?: true
    can_set_location?: true
    has_scheduled?: true
    can_view_stats?: true
    blocked?: true
    id: number
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
    migrated_from_chat_id?: number
    migrated_from_max_id?: number
    pinned_msg_id?: number
    stickerset?: StickerSet
    available_min_id?: number
    folder_id?: number
    linked_chat_id?: number
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
    recent_requesters?: number[]
    default_send_as?: Peer
    available_reactions?: string[]
}

export interface PredicateMessageRange {
    _: 'messageRange'
    min_id: number
    max_id: number
}

export interface PredicateMessagesChannelMessages {
    _: 'messages.channelMessages'
    inexact?: true
    pts: number
    count: number
    offset_id_offset?: number
    messages: Message[]
    chats: Chat[]
    users: User[]
}

export interface PredicateMessageActionChannelCreate {
    _: 'messageActionChannelCreate'
    title: string
}

export interface PredicateUpdateChannelTooLong {
    _: 'updateChannelTooLong'
    channel_id: number
    pts?: number
}

export interface PredicateUpdateChannel {
    _: 'updateChannel'
    channel_id: number
}

export interface PredicateUpdateNewChannelMessage {
    _: 'updateNewChannelMessage'
    message: Message
    pts: number
    pts_count: number
}

export interface PredicateUpdateReadChannelInbox {
    _: 'updateReadChannelInbox'
    folder_id?: number
    channel_id: number
    max_id: number
    still_unread_count: number
    pts: number
}

export interface PredicateUpdateDeleteChannelMessages {
    _: 'updateDeleteChannelMessages'
    channel_id: number
    messages: number[]
    pts: number
    pts_count: number
}

export interface PredicateUpdateChannelMessageViews {
    _: 'updateChannelMessageViews'
    channel_id: number
    id: number
    views: number
}

export interface PredicateUpdatesChannelDifferenceEmpty {
    _: 'updates.channelDifferenceEmpty'
    final?: true
    pts: number
    timeout?: number
}

export interface PredicateUpdatesChannelDifferenceTooLong {
    _: 'updates.channelDifferenceTooLong'
    final?: true
    timeout?: number
    dialog: Dialog
    messages: Message[]
    chats: Chat[]
    users: User[]
}

export interface PredicateUpdatesChannelDifference {
    _: 'updates.channelDifference'
    final?: true
    pts: number
    timeout?: number
    new_messages: Message[]
    other_updates: Update[]
    chats: Chat[]
    users: User[]
}

export interface PredicateChannelMessagesFilterEmpty {
    _: 'channelMessagesFilterEmpty'
}

export interface PredicateChannelMessagesFilter {
    _: 'channelMessagesFilter'
    exclude_new_messages?: true
    ranges: MessageRange[]
}

export interface PredicateChannelParticipant {
    _: 'channelParticipant'
    user_id: number
    date: number
}

export interface PredicateChannelParticipantSelf {
    _: 'channelParticipantSelf'
    via_request?: true
    user_id: number
    inviter_id: number
    date: number
}

export interface PredicateChannelParticipantCreator {
    _: 'channelParticipantCreator'
    user_id: number
    admin_rights: ChatAdminRights
    rank?: string
}

export interface PredicateChannelParticipantsRecent {
    _: 'channelParticipantsRecent'
}

export interface PredicateChannelParticipantsAdmins {
    _: 'channelParticipantsAdmins'
}

export interface PredicateChannelParticipantsKicked {
    _: 'channelParticipantsKicked'
    q: string
}

export interface PredicateChannelsChannelParticipants {
    _: 'channels.channelParticipants'
    count: number
    participants: ChannelParticipant[]
    chats: Chat[]
    users: User[]
}

export interface PredicateChannelsChannelParticipant {
    _: 'channels.channelParticipant'
    participant: ChannelParticipant
    chats: Chat[]
    users: User[]
}

export interface PredicateChatParticipantCreator {
    _: 'chatParticipantCreator'
    user_id: number
}

export interface PredicateChatParticipantAdmin {
    _: 'chatParticipantAdmin'
    user_id: number
    inviter_id: number
    date: number
}

export interface PredicateUpdateChatParticipantAdmin {
    _: 'updateChatParticipantAdmin'
    chat_id: number
    user_id: number
    is_admin: boolean
    version: number
}

export interface PredicateMessageActionChatMigrateTo {
    _: 'messageActionChatMigrateTo'
    channel_id: number
}

export interface PredicateMessageActionChannelMigrateFrom {
    _: 'messageActionChannelMigrateFrom'
    title: string
    chat_id: number
}

export interface PredicateChannelParticipantsBots {
    _: 'channelParticipantsBots'
}

export interface PredicateHelpTermsOfService {
    _: 'help.termsOfService'
    popup?: true
    id: DataJSON
    text: string
    entities: MessageEntity[]
    min_age_confirm?: number
}

export interface PredicateUpdateNewStickerSet {
    _: 'updateNewStickerSet'
    stickerset: MessagesStickerSet
}

export interface PredicateUpdateStickerSetsOrder {
    _: 'updateStickerSetsOrder'
    masks?: true
    emojis?: true
    order: number[]
}

export interface PredicateUpdateStickerSets {
    _: 'updateStickerSets'
}

export interface PredicateMessagesSavedGifsNotModified {
    _: 'messages.savedGifsNotModified'
}

export interface PredicateMessagesSavedGifs {
    _: 'messages.savedGifs'
    hash: number
    gifs: Document[]
}

export interface PredicateUpdateSavedGifs {
    _: 'updateSavedGifs'
}

export interface PredicateInputBotInlineMessageMediaAuto {
    _: 'inputBotInlineMessageMediaAuto'
    message: string
    entities?: MessageEntity[]
    reply_markup?: ReplyMarkup
}

export interface PredicateInputBotInlineMessageText {
    _: 'inputBotInlineMessageText'
    no_webpage?: true
    message: string
    entities?: MessageEntity[]
    reply_markup?: ReplyMarkup
}

export interface PredicateInputBotInlineResult {
    _: 'inputBotInlineResult'
    id: string
    type: string
    title?: string
    description?: string
    url?: string
    thumb?: InputWebDocument
    content?: InputWebDocument
    send_message: InputBotInlineMessage
}

export interface PredicateBotInlineMessageMediaAuto {
    _: 'botInlineMessageMediaAuto'
    message: string
    entities?: MessageEntity[]
    reply_markup?: ReplyMarkup
}

export interface PredicateBotInlineMessageText {
    _: 'botInlineMessageText'
    no_webpage?: true
    message: string
    entities?: MessageEntity[]
    reply_markup?: ReplyMarkup
}

export interface PredicateBotInlineResult {
    _: 'botInlineResult'
    id: string
    type: string
    title?: string
    description?: string
    url?: string
    thumb?: WebDocument
    content?: WebDocument
    send_message: BotInlineMessage
}

export interface PredicateMessagesBotResults {
    _: 'messages.botResults'
    gallery?: true
    query_id: number
    next_offset?: string
    switch_pm?: InlineBotSwitchPM
    results: BotInlineResult[]
    cache_time: number
    users: User[]
}

export interface PredicateUpdateBotInlineQuery {
    _: 'updateBotInlineQuery'
    query_id: number
    user_id: number
    query: string
    geo?: GeoPoint
    peer_type?: InlineQueryPeerType
    offset: string
}

export interface PredicateUpdateBotInlineSend {
    _: 'updateBotInlineSend'
    user_id: number
    query: string
    geo?: GeoPoint
    id: string
    msg_id?: InputBotInlineMessageID
}

export interface PredicateInputMessagesFilterVoice {
    _: 'inputMessagesFilterVoice'
}

export interface PredicateInputMessagesFilterMusic {
    _: 'inputMessagesFilterMusic'
}

export interface PredicateInputPrivacyKeyChatInvite {
    _: 'inputPrivacyKeyChatInvite'
}

export interface PredicatePrivacyKeyChatInvite {
    _: 'privacyKeyChatInvite'
}

export interface PredicateExportedMessageLink {
    _: 'exportedMessageLink'
    link: string
    html: string
}

export interface PredicateMessageFwdHeader {
    _: 'messageFwdHeader'
    imported?: true
    from_id?: Peer
    from_name?: string
    date: number
    channel_post?: number
    post_author?: string
    saved_from_peer?: Peer
    saved_from_msg_id?: number
    psa_type?: string
}

export interface PredicateUpdateEditChannelMessage {
    _: 'updateEditChannelMessage'
    message: Message
    pts: number
    pts_count: number
}

export interface PredicateMessageActionPinMessage {
    _: 'messageActionPinMessage'
}

export interface PredicateAuthCodeTypeSms {
    _: 'auth.codeTypeSms'
}

export interface PredicateAuthCodeTypeCall {
    _: 'auth.codeTypeCall'
}

export interface PredicateAuthCodeTypeFlashCall {
    _: 'auth.codeTypeFlashCall'
}

export interface PredicateAuthSentCodeTypeApp {
    _: 'auth.sentCodeTypeApp'
    length: number
}

export interface PredicateAuthSentCodeTypeSms {
    _: 'auth.sentCodeTypeSms'
    length: number
}

export interface PredicateAuthSentCodeTypeCall {
    _: 'auth.sentCodeTypeCall'
    length: number
}

export interface PredicateAuthSentCodeTypeFlashCall {
    _: 'auth.sentCodeTypeFlashCall'
    pattern: string
}

export interface PredicateKeyboardButtonUrl {
    _: 'keyboardButtonUrl'
    text: string
    url: string
}

export interface PredicateKeyboardButtonCallback {
    _: 'keyboardButtonCallback'
    requires_password?: true
    text: string
    data: Uint8Array
}

export interface PredicateKeyboardButtonRequestPhone {
    _: 'keyboardButtonRequestPhone'
    text: string
}

export interface PredicateKeyboardButtonRequestGeoLocation {
    _: 'keyboardButtonRequestGeoLocation'
    text: string
}

export interface PredicateKeyboardButtonSwitchInline {
    _: 'keyboardButtonSwitchInline'
    same_peer?: true
    text: string
    query: string
}

export interface PredicateReplyInlineMarkup {
    _: 'replyInlineMarkup'
    rows: KeyboardButtonRow[]
}

export interface PredicateMessagesBotCallbackAnswer {
    _: 'messages.botCallbackAnswer'
    alert?: true
    has_url?: true
    native_ui?: true
    message?: string
    url?: string
    cache_time: number
}

export interface PredicateUpdateBotCallbackQuery {
    _: 'updateBotCallbackQuery'
    query_id: number
    user_id: number
    peer: Peer
    msg_id: number
    chat_instance: number
    data?: Uint8Array
    game_short_name?: string
}

export interface PredicateMessagesMessageEditData {
    _: 'messages.messageEditData'
    caption?: true
}

export interface PredicateUpdateEditMessage {
    _: 'updateEditMessage'
    message: Message
    pts: number
    pts_count: number
}

export interface PredicateInputBotInlineMessageMediaGeo {
    _: 'inputBotInlineMessageMediaGeo'
    geo_point: InputGeoPoint
    heading?: number
    period?: number
    proximity_notification_radius?: number
    reply_markup?: ReplyMarkup
}

export interface PredicateInputBotInlineMessageMediaVenue {
    _: 'inputBotInlineMessageMediaVenue'
    geo_point: InputGeoPoint
    title: string
    address: string
    provider: string
    venue_id: string
    venue_type: string
    reply_markup?: ReplyMarkup
}

export interface PredicateInputBotInlineMessageMediaContact {
    _: 'inputBotInlineMessageMediaContact'
    phone_number: string
    first_name: string
    last_name: string
    vcard: string
    reply_markup?: ReplyMarkup
}

export interface PredicateBotInlineMessageMediaGeo {
    _: 'botInlineMessageMediaGeo'
    geo: GeoPoint
    heading?: number
    period?: number
    proximity_notification_radius?: number
    reply_markup?: ReplyMarkup
}

export interface PredicateBotInlineMessageMediaVenue {
    _: 'botInlineMessageMediaVenue'
    geo: GeoPoint
    title: string
    address: string
    provider: string
    venue_id: string
    venue_type: string
    reply_markup?: ReplyMarkup
}

export interface PredicateBotInlineMessageMediaContact {
    _: 'botInlineMessageMediaContact'
    phone_number: string
    first_name: string
    last_name: string
    vcard: string
    reply_markup?: ReplyMarkup
}

export interface PredicateInputBotInlineResultPhoto {
    _: 'inputBotInlineResultPhoto'
    id: string
    type: string
    photo: InputPhoto
    send_message: InputBotInlineMessage
}

export interface PredicateInputBotInlineResultDocument {
    _: 'inputBotInlineResultDocument'
    id: string
    type: string
    title?: string
    description?: string
    document: InputDocument
    send_message: InputBotInlineMessage
}

export interface PredicateBotInlineMediaResult {
    _: 'botInlineMediaResult'
    id: string
    type: string
    photo?: Photo
    document?: Document
    title?: string
    description?: string
    send_message: BotInlineMessage
}

export interface PredicateInputBotInlineMessageID {
    _: 'inputBotInlineMessageID'
    dc_id: number
    id: number
    access_hash: number
}

export interface PredicateUpdateInlineBotCallbackQuery {
    _: 'updateInlineBotCallbackQuery'
    query_id: number
    user_id: number
    msg_id: InputBotInlineMessageID
    chat_instance: number
    data?: Uint8Array
    game_short_name?: string
}

export interface PredicateInlineBotSwitchPM {
    _: 'inlineBotSwitchPM'
    text: string
    start_param: string
}

export interface PredicateMessagesPeerDialogs {
    _: 'messages.peerDialogs'
    dialogs: Dialog[]
    messages: Message[]
    chats: Chat[]
    users: User[]
    state: UpdatesState
}

export interface PredicateTopPeer {
    _: 'topPeer'
    peer: Peer
    rating: number
}

export interface PredicateTopPeerCategoryBotsPM {
    _: 'topPeerCategoryBotsPM'
}

export interface PredicateTopPeerCategoryBotsInline {
    _: 'topPeerCategoryBotsInline'
}

export interface PredicateTopPeerCategoryCorrespondents {
    _: 'topPeerCategoryCorrespondents'
}

export interface PredicateTopPeerCategoryGroups {
    _: 'topPeerCategoryGroups'
}

export interface PredicateTopPeerCategoryChannels {
    _: 'topPeerCategoryChannels'
}

export interface PredicateTopPeerCategoryPeers {
    _: 'topPeerCategoryPeers'
    category: TopPeerCategory
    count: number
    peers: TopPeer[]
}

export interface PredicateContactsTopPeersNotModified {
    _: 'contacts.topPeersNotModified'
}

export interface PredicateContactsTopPeers {
    _: 'contacts.topPeers'
    categories: TopPeerCategoryPeers[]
    chats: Chat[]
    users: User[]
}

export interface PredicateMessageEntityMentionName {
    _: 'messageEntityMentionName'
    offset: number
    length: number
    user_id: number
}

export interface PredicateInputMessageEntityMentionName {
    _: 'inputMessageEntityMentionName'
    offset: number
    length: number
    user_id: InputUser
}

export interface PredicateInputMessagesFilterChatPhotos {
    _: 'inputMessagesFilterChatPhotos'
}

export interface PredicateUpdateReadChannelOutbox {
    _: 'updateReadChannelOutbox'
    channel_id: number
    max_id: number
}

export interface PredicateUpdateDraftMessage {
    _: 'updateDraftMessage'
    peer: Peer
    draft: DraftMessage
}

export interface PredicateDraftMessageEmpty {
    _: 'draftMessageEmpty'
    date?: number
}

export interface PredicateDraftMessage {
    _: 'draftMessage'
    no_webpage?: true
    reply_to_msg_id?: number
    message: string
    entities?: MessageEntity[]
    date: number
}

export interface PredicateMessageActionHistoryClear {
    _: 'messageActionHistoryClear'
}

export interface PredicateMessagesFeaturedStickersNotModified {
    _: 'messages.featuredStickersNotModified'
    count: number
}

export interface PredicateMessagesFeaturedStickers {
    _: 'messages.featuredStickers'
    hash: number
    count: number
    sets: StickerSetCovered[]
    unread: number[]
}

export interface PredicateUpdateReadFeaturedStickers {
    _: 'updateReadFeaturedStickers'
}

export interface PredicateMessagesRecentStickersNotModified {
    _: 'messages.recentStickersNotModified'
}

export interface PredicateMessagesRecentStickers {
    _: 'messages.recentStickers'
    hash: number
    packs: StickerPack[]
    stickers: Document[]
    dates: number[]
}

export interface PredicateUpdateRecentStickers {
    _: 'updateRecentStickers'
}

export interface PredicateMessagesArchivedStickers {
    _: 'messages.archivedStickers'
    count: number
    sets: StickerSetCovered[]
}

export interface PredicateMessagesStickerSetInstallResultSuccess {
    _: 'messages.stickerSetInstallResultSuccess'
}

export interface PredicateMessagesStickerSetInstallResultArchive {
    _: 'messages.stickerSetInstallResultArchive'
    sets: StickerSetCovered[]
}

export interface PredicateStickerSetCovered {
    _: 'stickerSetCovered'
    set: StickerSet
    cover: Document
}

export interface PredicateUpdateConfig {
    _: 'updateConfig'
}

export interface PredicateUpdatePtsChanged {
    _: 'updatePtsChanged'
}

export interface PredicateInputMediaPhotoExternal {
    _: 'inputMediaPhotoExternal'
    url: string
    ttl_seconds?: number
}

export interface PredicateInputMediaDocumentExternal {
    _: 'inputMediaDocumentExternal'
    url: string
    ttl_seconds?: number
}

export interface PredicateStickerSetMultiCovered {
    _: 'stickerSetMultiCovered'
    set: StickerSet
    covers: Document[]
}

export interface PredicateMaskCoords {
    _: 'maskCoords'
    n: number
    x: number
    y: number
    zoom: number
}

export interface PredicateDocumentAttributeHasStickers {
    _: 'documentAttributeHasStickers'
}

export interface PredicateInputStickeredMediaPhoto {
    _: 'inputStickeredMediaPhoto'
    id: InputPhoto
}

export interface PredicateInputStickeredMediaDocument {
    _: 'inputStickeredMediaDocument'
    id: InputDocument
}

export interface PredicateGame {
    _: 'game'
    id: number
    access_hash: number
    short_name: string
    title: string
    description: string
    photo: Photo
    document?: Document
}

export interface PredicateInputBotInlineResultGame {
    _: 'inputBotInlineResultGame'
    id: string
    short_name: string
    send_message: InputBotInlineMessage
}

export interface PredicateInputBotInlineMessageGame {
    _: 'inputBotInlineMessageGame'
    reply_markup?: ReplyMarkup
}

export interface PredicateMessageMediaGame {
    _: 'messageMediaGame'
    game: Game
}

export interface PredicateInputMediaGame {
    _: 'inputMediaGame'
    id: InputGame
}

export interface PredicateInputGameID {
    _: 'inputGameID'
    id: number
    access_hash: number
}

export interface PredicateInputGameShortName {
    _: 'inputGameShortName'
    bot_id: InputUser
    short_name: string
}

export interface PredicateKeyboardButtonGame {
    _: 'keyboardButtonGame'
    text: string
}

export interface PredicateMessageActionGameScore {
    _: 'messageActionGameScore'
    game_id: number
    score: number
}

export interface PredicateHighScore {
    _: 'highScore'
    pos: number
    user_id: number
    score: number
}

export interface PredicateMessagesHighScores {
    _: 'messages.highScores'
    scores: HighScore[]
    users: User[]
}

export interface PredicateUpdatesDifferenceTooLong {
    _: 'updates.differenceTooLong'
    pts: number
}

export interface PredicateUpdateChannelWebPage {
    _: 'updateChannelWebPage'
    channel_id: number
    webpage: WebPage
    pts: number
    pts_count: number
}

export interface PredicateMessagesChatsSlice {
    _: 'messages.chatsSlice'
    count: number
    chats: Chat[]
}

export interface PredicateTextEmpty {
    _: 'textEmpty'
}

export interface PredicateTextPlain {
    _: 'textPlain'
    text: string
}

export interface PredicateTextBold {
    _: 'textBold'
    text: RichText
}

export interface PredicateTextItalic {
    _: 'textItalic'
    text: RichText
}

export interface PredicateTextUnderline {
    _: 'textUnderline'
    text: RichText
}

export interface PredicateTextStrike {
    _: 'textStrike'
    text: RichText
}

export interface PredicateTextFixed {
    _: 'textFixed'
    text: RichText
}

export interface PredicateTextUrl {
    _: 'textUrl'
    text: RichText
    url: string
    webpage_id: number
}

export interface PredicateTextEmail {
    _: 'textEmail'
    text: RichText
    email: string
}

export interface PredicateTextConcat {
    _: 'textConcat'
    texts: RichText[]
}

export interface PredicatePageBlockUnsupported {
    _: 'pageBlockUnsupported'
}

export interface PredicatePageBlockTitle {
    _: 'pageBlockTitle'
    text: RichText
}

export interface PredicatePageBlockSubtitle {
    _: 'pageBlockSubtitle'
    text: RichText
}

export interface PredicatePageBlockAuthorDate {
    _: 'pageBlockAuthorDate'
    author: RichText
    published_date: number
}

export interface PredicatePageBlockHeader {
    _: 'pageBlockHeader'
    text: RichText
}

export interface PredicatePageBlockSubheader {
    _: 'pageBlockSubheader'
    text: RichText
}

export interface PredicatePageBlockParagraph {
    _: 'pageBlockParagraph'
    text: RichText
}

export interface PredicatePageBlockPreformatted {
    _: 'pageBlockPreformatted'
    text: RichText
    language: string
}

export interface PredicatePageBlockFooter {
    _: 'pageBlockFooter'
    text: RichText
}

export interface PredicatePageBlockDivider {
    _: 'pageBlockDivider'
}

export interface PredicatePageBlockAnchor {
    _: 'pageBlockAnchor'
    name: string
}

export interface PredicatePageBlockList {
    _: 'pageBlockList'
    items: PageListItem[]
}

export interface PredicatePageBlockBlockquote {
    _: 'pageBlockBlockquote'
    text: RichText
    caption: RichText
}

export interface PredicatePageBlockPullquote {
    _: 'pageBlockPullquote'
    text: RichText
    caption: RichText
}

export interface PredicatePageBlockPhoto {
    _: 'pageBlockPhoto'
    photo_id: number
    caption: PageCaption
    url?: string
    webpage_id?: number
}

export interface PredicatePageBlockVideo {
    _: 'pageBlockVideo'
    autoplay?: true
    loop?: true
    video_id: number
    caption: PageCaption
}

export interface PredicatePageBlockCover {
    _: 'pageBlockCover'
    cover: PageBlock
}

export interface PredicatePageBlockEmbed {
    _: 'pageBlockEmbed'
    full_width?: true
    allow_scrolling?: true
    url?: string
    html?: string
    poster_photo_id?: number
    w?: number
    h?: number
    caption: PageCaption
}

export interface PredicatePageBlockEmbedPost {
    _: 'pageBlockEmbedPost'
    url: string
    webpage_id: number
    author_photo_id: number
    author: string
    date: number
    blocks: PageBlock[]
    caption: PageCaption
}

export interface PredicatePageBlockCollage {
    _: 'pageBlockCollage'
    items: PageBlock[]
    caption: PageCaption
}

export interface PredicatePageBlockSlideshow {
    _: 'pageBlockSlideshow'
    items: PageBlock[]
    caption: PageCaption
}

export interface PredicateWebPageNotModified {
    _: 'webPageNotModified'
    cached_page_views?: number
}

export interface PredicateInputPrivacyKeyPhoneCall {
    _: 'inputPrivacyKeyPhoneCall'
}

export interface PredicatePrivacyKeyPhoneCall {
    _: 'privacyKeyPhoneCall'
}

export interface PredicateSendMessageGamePlayAction {
    _: 'sendMessageGamePlayAction'
}

export interface PredicatePhoneCallDiscardReasonMissed {
    _: 'phoneCallDiscardReasonMissed'
}

export interface PredicatePhoneCallDiscardReasonDisconnect {
    _: 'phoneCallDiscardReasonDisconnect'
}

export interface PredicatePhoneCallDiscardReasonHangup {
    _: 'phoneCallDiscardReasonHangup'
}

export interface PredicatePhoneCallDiscardReasonBusy {
    _: 'phoneCallDiscardReasonBusy'
}

export interface PredicateUpdateDialogPinned {
    _: 'updateDialogPinned'
    pinned?: true
    folder_id?: number
    peer: DialogPeer
}

export interface PredicateUpdatePinnedDialogs {
    _: 'updatePinnedDialogs'
    folder_id?: number
    order?: DialogPeer[]
}

export interface PredicateDataJSON {
    _: 'dataJSON'
    data: string
}

export interface PredicateUpdateBotWebhookJSON {
    _: 'updateBotWebhookJSON'
    data: DataJSON
}

export interface PredicateUpdateBotWebhookJSONQuery {
    _: 'updateBotWebhookJSONQuery'
    query_id: number
    data: DataJSON
    timeout: number
}

export interface PredicateLabeledPrice {
    _: 'labeledPrice'
    label: string
    amount: number
}

export interface PredicateInvoice {
    _: 'invoice'
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
    max_tip_amount?: number
    suggested_tip_amounts?: number[]
}

export interface PredicateInputMediaInvoice {
    _: 'inputMediaInvoice'
    title: string
    description: string
    photo?: InputWebDocument
    invoice: Invoice
    payload: Uint8Array
    provider: string
    provider_data: DataJSON
    start_param?: string
}

export interface PredicatePaymentCharge {
    _: 'paymentCharge'
    id: string
    provider_charge_id: string
}

export interface PredicateMessageActionPaymentSentMe {
    _: 'messageActionPaymentSentMe'
    currency: string
    total_amount: number
    payload: Uint8Array
    info?: PaymentRequestedInfo
    shipping_option_id?: string
    charge: PaymentCharge
}

export interface PredicateMessageMediaInvoice {
    _: 'messageMediaInvoice'
    shipping_address_requested?: true
    test?: true
    title: string
    description: string
    photo?: WebDocument
    receipt_msg_id?: number
    currency: string
    total_amount: number
    start_param: string
}

export interface PredicatePostAddress {
    _: 'postAddress'
    street_line1: string
    street_line2: string
    city: string
    state: string
    country_iso2: string
    post_code: string
}

export interface PredicatePaymentRequestedInfo {
    _: 'paymentRequestedInfo'
    name?: string
    phone?: string
    email?: string
    shipping_address?: PostAddress
}

export interface PredicateKeyboardButtonBuy {
    _: 'keyboardButtonBuy'
    text: string
}

export interface PredicateMessageActionPaymentSent {
    _: 'messageActionPaymentSent'
    currency: string
    total_amount: number
}

export interface PredicatePaymentSavedCredentialsCard {
    _: 'paymentSavedCredentialsCard'
    id: string
    title: string
}

export interface PredicateWebDocument {
    _: 'webDocument'
    url: string
    access_hash: number
    size: number
    mime_type: string
    attributes: DocumentAttribute[]
}

export interface PredicateInputWebDocument {
    _: 'inputWebDocument'
    url: string
    size: number
    mime_type: string
    attributes: DocumentAttribute[]
}

export interface PredicateInputWebFileLocation {
    _: 'inputWebFileLocation'
    url: string
    access_hash: number
}

export interface PredicateUploadWebFile {
    _: 'upload.webFile'
    size: number
    mime_type: string
    file_type: StorageFileType
    mtime: number
    bytes: Uint8Array
}

export interface PredicatePaymentsPaymentForm {
    _: 'payments.paymentForm'
    can_save_credentials?: true
    password_missing?: true
    form_id: number
    bot_id: number
    invoice: Invoice
    provider_id: number
    url: string
    native_provider?: string
    native_params?: DataJSON
    saved_info?: PaymentRequestedInfo
    saved_credentials?: PaymentSavedCredentials
    users: User[]
}

export interface PredicatePaymentsValidatedRequestedInfo {
    _: 'payments.validatedRequestedInfo'
    id?: string
    shipping_options?: ShippingOption[]
}

export interface PredicatePaymentsPaymentResult {
    _: 'payments.paymentResult'
    updates: Updates
}

export interface PredicatePaymentsPaymentReceipt {
    _: 'payments.paymentReceipt'
    date: number
    bot_id: number
    provider_id: number
    title: string
    description: string
    photo?: WebDocument
    invoice: Invoice
    info?: PaymentRequestedInfo
    shipping?: ShippingOption
    tip_amount?: number
    currency: string
    total_amount: number
    credentials_title: string
    users: User[]
}

export interface PredicatePaymentsSavedInfo {
    _: 'payments.savedInfo'
    has_saved_credentials?: true
    saved_info?: PaymentRequestedInfo
}

export interface PredicateInputPaymentCredentialsSaved {
    _: 'inputPaymentCredentialsSaved'
    id: string
    tmp_password: Uint8Array
}

export interface PredicateInputPaymentCredentials {
    _: 'inputPaymentCredentials'
    save?: true
    data: DataJSON
}

export interface PredicateAccountTmpPassword {
    _: 'account.tmpPassword'
    tmp_password: Uint8Array
    valid_until: number
}

export interface PredicateShippingOption {
    _: 'shippingOption'
    id: string
    title: string
    prices: LabeledPrice[]
}

export interface PredicateUpdateBotShippingQuery {
    _: 'updateBotShippingQuery'
    query_id: number
    user_id: number
    payload: Uint8Array
    shipping_address: PostAddress
}

export interface PredicateUpdateBotPrecheckoutQuery {
    _: 'updateBotPrecheckoutQuery'
    query_id: number
    user_id: number
    payload: Uint8Array
    info?: PaymentRequestedInfo
    shipping_option_id?: string
    currency: string
    total_amount: number
}

export interface PredicateInputStickerSetItem {
    _: 'inputStickerSetItem'
    document: InputDocument
    emoji: string
    mask_coords?: MaskCoords
}

export interface PredicateUpdatePhoneCall {
    _: 'updatePhoneCall'
    phone_call: PhoneCall
}

export interface PredicateInputPhoneCall {
    _: 'inputPhoneCall'
    id: number
    access_hash: number
}

export interface PredicatePhoneCallEmpty {
    _: 'phoneCallEmpty'
    id: number
}

export interface PredicatePhoneCallWaiting {
    _: 'phoneCallWaiting'
    video?: true
    id: number
    access_hash: number
    date: number
    admin_id: number
    participant_id: number
    protocol: PhoneCallProtocol
    receive_date?: number
}

export interface PredicatePhoneCallRequested {
    _: 'phoneCallRequested'
    video?: true
    id: number
    access_hash: number
    date: number
    admin_id: number
    participant_id: number
    g_a_hash: Uint8Array
    protocol: PhoneCallProtocol
}

export interface PredicatePhoneCallAccepted {
    _: 'phoneCallAccepted'
    video?: true
    id: number
    access_hash: number
    date: number
    admin_id: number
    participant_id: number
    g_b: Uint8Array
    protocol: PhoneCallProtocol
}

export interface PredicatePhoneCall {
    _: 'phoneCall'
    p2p_allowed?: true
    video?: true
    id: number
    access_hash: number
    date: number
    admin_id: number
    participant_id: number
    g_a_or_b: Uint8Array
    key_fingerprint: number
    protocol: PhoneCallProtocol
    connections: PhoneConnection[]
    start_date: number
}

export interface PredicatePhoneCallDiscarded {
    _: 'phoneCallDiscarded'
    need_rating?: true
    need_debug?: true
    video?: true
    id: number
    reason?: PhoneCallDiscardReason
    duration?: number
}

export interface PredicatePhoneConnection {
    _: 'phoneConnection'
    id: number
    ip: string
    ipv6: string
    port: number
    peer_tag: Uint8Array
}

export interface PredicatePhoneCallProtocol {
    _: 'phoneCallProtocol'
    udp_p2p?: true
    udp_reflector?: true
    min_layer: number
    max_layer: number
    library_versions: string[]
}

export interface PredicatePhonePhoneCall {
    _: 'phone.phoneCall'
    phone_call: PhoneCall
    users: User[]
}

export interface PredicateInputMessagesFilterPhoneCalls {
    _: 'inputMessagesFilterPhoneCalls'
    missed?: true
}

export interface PredicateMessageActionPhoneCall {
    _: 'messageActionPhoneCall'
    video?: true
    call_id: number
    reason?: PhoneCallDiscardReason
    duration?: number
}

export interface PredicateInputMessagesFilterRoundVoice {
    _: 'inputMessagesFilterRoundVoice'
}

export interface PredicateInputMessagesFilterRoundVideo {
    _: 'inputMessagesFilterRoundVideo'
}

export interface PredicateSendMessageRecordRoundAction {
    _: 'sendMessageRecordRoundAction'
}

export interface PredicateSendMessageUploadRoundAction {
    _: 'sendMessageUploadRoundAction'
    progress: number
}

export interface PredicateUploadFileCdnRedirect {
    _: 'upload.fileCdnRedirect'
    dc_id: number
    file_token: Uint8Array
    encryption_key: Uint8Array
    encryption_iv: Uint8Array
    file_hashes: FileHash[]
}

export interface PredicateUploadCdnFileReuploadNeeded {
    _: 'upload.cdnFileReuploadNeeded'
    request_token: Uint8Array
}

export interface PredicateUploadCdnFile {
    _: 'upload.cdnFile'
    bytes: Uint8Array
}

export interface PredicateCdnPublicKey {
    _: 'cdnPublicKey'
    dc_id: number
    public_key: string
}

export interface PredicateCdnConfig {
    _: 'cdnConfig'
    public_keys: CdnPublicKey[]
}

export interface PredicatePageBlockChannel {
    _: 'pageBlockChannel'
    channel: Chat
}

export interface PredicateLangPackString {
    _: 'langPackString'
    key: string
    value: string
}

export interface PredicateLangPackStringPluralized {
    _: 'langPackStringPluralized'
    key: string
    zero_value?: string
    one_value?: string
    two_value?: string
    few_value?: string
    many_value?: string
    other_value: string
}

export interface PredicateLangPackStringDeleted {
    _: 'langPackStringDeleted'
    key: string
}

export interface PredicateLangPackDifference {
    _: 'langPackDifference'
    lang_code: string
    from_version: number
    version: number
    strings: LangPackString[]
}

export interface PredicateLangPackLanguage {
    _: 'langPackLanguage'
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
}

export interface PredicateUpdateLangPackTooLong {
    _: 'updateLangPackTooLong'
    lang_code: string
}

export interface PredicateUpdateLangPack {
    _: 'updateLangPack'
    difference: LangPackDifference
}

export interface PredicateChannelParticipantAdmin {
    _: 'channelParticipantAdmin'
    can_edit?: true
    self?: true
    user_id: number
    inviter_id?: number
    promoted_by: number
    date: number
    admin_rights: ChatAdminRights
    rank?: string
}

export interface PredicateChannelParticipantBanned {
    _: 'channelParticipantBanned'
    left?: true
    peer: Peer
    kicked_by: number
    date: number
    banned_rights: ChatBannedRights
}

export interface PredicateChannelParticipantsBanned {
    _: 'channelParticipantsBanned'
    q: string
}

export interface PredicateChannelParticipantsSearch {
    _: 'channelParticipantsSearch'
    q: string
}

export interface PredicateChannelAdminLogEventActionChangeTitle {
    _: 'channelAdminLogEventActionChangeTitle'
    prev_value: string
    new_value: string
}

export interface PredicateChannelAdminLogEventActionChangeAbout {
    _: 'channelAdminLogEventActionChangeAbout'
    prev_value: string
    new_value: string
}

export interface PredicateChannelAdminLogEventActionChangeUsername {
    _: 'channelAdminLogEventActionChangeUsername'
    prev_value: string
    new_value: string
}

export interface PredicateChannelAdminLogEventActionChangePhoto {
    _: 'channelAdminLogEventActionChangePhoto'
    prev_photo: Photo
    new_photo: Photo
}

export interface PredicateChannelAdminLogEventActionToggleInvites {
    _: 'channelAdminLogEventActionToggleInvites'
    new_value: boolean
}

export interface PredicateChannelAdminLogEventActionToggleSignatures {
    _: 'channelAdminLogEventActionToggleSignatures'
    new_value: boolean
}

export interface PredicateChannelAdminLogEventActionUpdatePinned {
    _: 'channelAdminLogEventActionUpdatePinned'
    message: Message
}

export interface PredicateChannelAdminLogEventActionEditMessage {
    _: 'channelAdminLogEventActionEditMessage'
    prev_message: Message
    new_message: Message
}

export interface PredicateChannelAdminLogEventActionDeleteMessage {
    _: 'channelAdminLogEventActionDeleteMessage'
    message: Message
}

export interface PredicateChannelAdminLogEventActionParticipantJoin {
    _: 'channelAdminLogEventActionParticipantJoin'
}

export interface PredicateChannelAdminLogEventActionParticipantLeave {
    _: 'channelAdminLogEventActionParticipantLeave'
}

export interface PredicateChannelAdminLogEventActionParticipantInvite {
    _: 'channelAdminLogEventActionParticipantInvite'
    participant: ChannelParticipant
}

export interface PredicateChannelAdminLogEventActionParticipantToggleBan {
    _: 'channelAdminLogEventActionParticipantToggleBan'
    prev_participant: ChannelParticipant
    new_participant: ChannelParticipant
}

export interface PredicateChannelAdminLogEventActionParticipantToggleAdmin {
    _: 'channelAdminLogEventActionParticipantToggleAdmin'
    prev_participant: ChannelParticipant
    new_participant: ChannelParticipant
}

export interface PredicateChannelAdminLogEvent {
    _: 'channelAdminLogEvent'
    id: number
    date: number
    user_id: number
    action: ChannelAdminLogEventAction
}

export interface PredicateChannelsAdminLogResults {
    _: 'channels.adminLogResults'
    events: ChannelAdminLogEvent[]
    chats: Chat[]
    users: User[]
}

export interface PredicateChannelAdminLogEventsFilter {
    _: 'channelAdminLogEventsFilter'
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
}

export interface PredicateTopPeerCategoryPhoneCalls {
    _: 'topPeerCategoryPhoneCalls'
}

export interface PredicatePageBlockAudio {
    _: 'pageBlockAudio'
    audio_id: number
    caption: PageCaption
}

export interface PredicatePopularContact {
    _: 'popularContact'
    client_id: number
    importers: number
}

export interface PredicateMessageActionScreenshotTaken {
    _: 'messageActionScreenshotTaken'
}

export interface PredicateMessagesFavedStickersNotModified {
    _: 'messages.favedStickersNotModified'
}

export interface PredicateMessagesFavedStickers {
    _: 'messages.favedStickers'
    hash: number
    packs: StickerPack[]
    stickers: Document[]
}

export interface PredicateUpdateFavedStickers {
    _: 'updateFavedStickers'
}

export interface PredicateUpdateChannelReadMessagesContents {
    _: 'updateChannelReadMessagesContents'
    channel_id: number
    messages: number[]
}

export interface PredicateInputMessagesFilterMyMentions {
    _: 'inputMessagesFilterMyMentions'
}

export interface PredicateUpdateContactsReset {
    _: 'updateContactsReset'
}

export interface PredicateChannelAdminLogEventActionChangeStickerSet {
    _: 'channelAdminLogEventActionChangeStickerSet'
    prev_stickerset: InputStickerSet
    new_stickerset: InputStickerSet
}

export interface PredicateMessageActionCustomAction {
    _: 'messageActionCustomAction'
    message: string
}

export interface PredicateInputPaymentCredentialsApplePay {
    _: 'inputPaymentCredentialsApplePay'
    payment_data: DataJSON
}

export interface PredicateInputMessagesFilterGeo {
    _: 'inputMessagesFilterGeo'
}

export interface PredicateInputMessagesFilterContacts {
    _: 'inputMessagesFilterContacts'
}

export interface PredicateUpdateChannelAvailableMessages {
    _: 'updateChannelAvailableMessages'
    channel_id: number
    available_min_id: number
}

export interface PredicateChannelAdminLogEventActionTogglePreHistoryHidden {
    _: 'channelAdminLogEventActionTogglePreHistoryHidden'
    new_value: boolean
}

export interface PredicateInputMediaGeoLive {
    _: 'inputMediaGeoLive'
    stopped?: true
    geo_point: InputGeoPoint
    heading?: number
    period?: number
    proximity_notification_radius?: number
}

export interface PredicateMessageMediaGeoLive {
    _: 'messageMediaGeoLive'
    geo: GeoPoint
    heading?: number
    period: number
    proximity_notification_radius?: number
}

export interface PredicateRecentMeUrlUnknown {
    _: 'recentMeUrlUnknown'
    url: string
}

export interface PredicateRecentMeUrlUser {
    _: 'recentMeUrlUser'
    url: string
    user_id: number
}

export interface PredicateRecentMeUrlChat {
    _: 'recentMeUrlChat'
    url: string
    chat_id: number
}

export interface PredicateRecentMeUrlChatInvite {
    _: 'recentMeUrlChatInvite'
    url: string
    chat_invite: ChatInvite
}

export interface PredicateRecentMeUrlStickerSet {
    _: 'recentMeUrlStickerSet'
    url: string
    set: StickerSetCovered
}

export interface PredicateHelpRecentMeUrls {
    _: 'help.recentMeUrls'
    urls: RecentMeUrl[]
    chats: Chat[]
    users: User[]
}

export interface PredicateChannelsChannelParticipantsNotModified {
    _: 'channels.channelParticipantsNotModified'
}

export interface PredicateMessagesMessagesNotModified {
    _: 'messages.messagesNotModified'
    count: number
}

export interface PredicateInputSingleMedia {
    _: 'inputSingleMedia'
    media: InputMedia
    random_id: number
    message: string
    entities?: MessageEntity[]
}

export interface PredicateWebAuthorization {
    _: 'webAuthorization'
    hash: number
    bot_id: number
    domain: string
    browser: string
    platform: string
    date_created: number
    date_active: number
    ip: string
    region: string
}

export interface PredicateAccountWebAuthorizations {
    _: 'account.webAuthorizations'
    authorizations: WebAuthorization[]
    users: User[]
}

export interface PredicateInputMessageID {
    _: 'inputMessageID'
    id: number
}

export interface PredicateInputMessageReplyTo {
    _: 'inputMessageReplyTo'
    id: number
}

export interface PredicateInputMessagePinned {
    _: 'inputMessagePinned'
}

export interface PredicateMessageEntityPhone {
    _: 'messageEntityPhone'
    offset: number
    length: number
}

export interface PredicateMessageEntityCashtag {
    _: 'messageEntityCashtag'
    offset: number
    length: number
}

export interface PredicateMessageActionBotAllowed {
    _: 'messageActionBotAllowed'
    domain: string
}

export interface PredicateInputDialogPeer {
    _: 'inputDialogPeer'
    peer: InputPeer
}

export interface PredicateDialogPeer {
    _: 'dialogPeer'
    peer: Peer
}

export interface PredicateMessagesFoundStickerSetsNotModified {
    _: 'messages.foundStickerSetsNotModified'
}

export interface PredicateMessagesFoundStickerSets {
    _: 'messages.foundStickerSets'
    hash: number
    sets: StickerSetCovered[]
}

export interface PredicateFileHash {
    _: 'fileHash'
    offset: number
    limit: number
    hash: Uint8Array
}

export interface PredicateWebDocumentNoProxy {
    _: 'webDocumentNoProxy'
    url: string
    size: number
    mime_type: string
    attributes: DocumentAttribute[]
}

export interface PredicateInputClientProxy {
    _: 'inputClientProxy'
    address: string
    port: number
}

export interface PredicateHelpTermsOfServiceUpdateEmpty {
    _: 'help.termsOfServiceUpdateEmpty'
    expires: number
}

export interface PredicateHelpTermsOfServiceUpdate {
    _: 'help.termsOfServiceUpdate'
    expires: number
    terms_of_service: HelpTermsOfService
}

export interface PredicateInputSecureFileUploaded {
    _: 'inputSecureFileUploaded'
    id: number
    parts: number
    md5_checksum: string
    file_hash: Uint8Array
    secret: Uint8Array
}

export interface PredicateInputSecureFile {
    _: 'inputSecureFile'
    id: number
    access_hash: number
}

export interface PredicateInputSecureFileLocation {
    _: 'inputSecureFileLocation'
    id: number
    access_hash: number
}

export interface PredicateSecureFileEmpty {
    _: 'secureFileEmpty'
}

export interface PredicateSecureFile {
    _: 'secureFile'
    id: number
    access_hash: number
    size: number
    dc_id: number
    date: number
    file_hash: Uint8Array
    secret: Uint8Array
}

export interface PredicateSecureData {
    _: 'secureData'
    data: Uint8Array
    data_hash: Uint8Array
    secret: Uint8Array
}

export interface PredicateSecurePlainPhone {
    _: 'securePlainPhone'
    phone: string
}

export interface PredicateSecurePlainEmail {
    _: 'securePlainEmail'
    email: string
}

export interface PredicateSecureValueTypePersonalDetails {
    _: 'secureValueTypePersonalDetails'
}

export interface PredicateSecureValueTypePassport {
    _: 'secureValueTypePassport'
}

export interface PredicateSecureValueTypeDriverLicense {
    _: 'secureValueTypeDriverLicense'
}

export interface PredicateSecureValueTypeIdentityCard {
    _: 'secureValueTypeIdentityCard'
}

export interface PredicateSecureValueTypeInternalPassport {
    _: 'secureValueTypeInternalPassport'
}

export interface PredicateSecureValueTypeAddress {
    _: 'secureValueTypeAddress'
}

export interface PredicateSecureValueTypeUtilityBill {
    _: 'secureValueTypeUtilityBill'
}

export interface PredicateSecureValueTypeBankStatement {
    _: 'secureValueTypeBankStatement'
}

export interface PredicateSecureValueTypeRentalAgreement {
    _: 'secureValueTypeRentalAgreement'
}

export interface PredicateSecureValueTypePassportRegistration {
    _: 'secureValueTypePassportRegistration'
}

export interface PredicateSecureValueTypeTemporaryRegistration {
    _: 'secureValueTypeTemporaryRegistration'
}

export interface PredicateSecureValueTypePhone {
    _: 'secureValueTypePhone'
}

export interface PredicateSecureValueTypeEmail {
    _: 'secureValueTypeEmail'
}

export interface PredicateSecureValue {
    _: 'secureValue'
    type: SecureValueType
    data?: SecureData
    front_side?: SecureFile
    reverse_side?: SecureFile
    selfie?: SecureFile
    translation?: SecureFile[]
    files?: SecureFile[]
    plain_data?: SecurePlainData
    hash: Uint8Array
}

export interface PredicateInputSecureValue {
    _: 'inputSecureValue'
    type: SecureValueType
    data?: SecureData
    front_side?: InputSecureFile
    reverse_side?: InputSecureFile
    selfie?: InputSecureFile
    translation?: InputSecureFile[]
    files?: InputSecureFile[]
    plain_data?: SecurePlainData
}

export interface PredicateSecureValueHash {
    _: 'secureValueHash'
    type: SecureValueType
    hash: Uint8Array
}

export interface PredicateSecureValueErrorData {
    _: 'secureValueErrorData'
    type: SecureValueType
    data_hash: Uint8Array
    field: string
    text: string
}

export interface PredicateSecureValueErrorFrontSide {
    _: 'secureValueErrorFrontSide'
    type: SecureValueType
    file_hash: Uint8Array
    text: string
}

export interface PredicateSecureValueErrorReverseSide {
    _: 'secureValueErrorReverseSide'
    type: SecureValueType
    file_hash: Uint8Array
    text: string
}

export interface PredicateSecureValueErrorSelfie {
    _: 'secureValueErrorSelfie'
    type: SecureValueType
    file_hash: Uint8Array
    text: string
}

export interface PredicateSecureValueErrorFile {
    _: 'secureValueErrorFile'
    type: SecureValueType
    file_hash: Uint8Array
    text: string
}

export interface PredicateSecureValueErrorFiles {
    _: 'secureValueErrorFiles'
    type: SecureValueType
    file_hash: Uint8Array[]
    text: string
}

export interface PredicateSecureCredentialsEncrypted {
    _: 'secureCredentialsEncrypted'
    data: Uint8Array
    hash: Uint8Array
    secret: Uint8Array
}

export interface PredicateAccountAuthorizationForm {
    _: 'account.authorizationForm'
    required_types: SecureRequiredType[]
    values: SecureValue[]
    errors: SecureValueError[]
    users: User[]
    privacy_policy_url?: string
}

export interface PredicateAccountSentEmailCode {
    _: 'account.sentEmailCode'
    email_pattern: string
    length: number
}

export interface PredicateMessageActionSecureValuesSentMe {
    _: 'messageActionSecureValuesSentMe'
    values: SecureValue[]
    credentials: SecureCredentialsEncrypted
}

export interface PredicateMessageActionSecureValuesSent {
    _: 'messageActionSecureValuesSent'
    types: SecureValueType[]
}

export interface PredicateHelpDeepLinkInfoEmpty {
    _: 'help.deepLinkInfoEmpty'
}

export interface PredicateHelpDeepLinkInfo {
    _: 'help.deepLinkInfo'
    update_app?: true
    message: string
    entities?: MessageEntity[]
}

export interface PredicateSavedPhoneContact {
    _: 'savedPhoneContact'
    phone: string
    first_name: string
    last_name: string
    date: number
}

export interface PredicateAccountTakeout {
    _: 'account.takeout'
    id: number
}

export interface PredicateInputTakeoutFileLocation {
    _: 'inputTakeoutFileLocation'
}

export interface PredicateUpdateDialogUnreadMark {
    _: 'updateDialogUnreadMark'
    unread?: true
    peer: DialogPeer
}

export interface PredicateMessagesDialogsNotModified {
    _: 'messages.dialogsNotModified'
    count: number
}

export interface PredicateInputWebFileGeoPointLocation {
    _: 'inputWebFileGeoPointLocation'
    geo_point: InputGeoPoint
    access_hash: number
    w: number
    h: number
    zoom: number
    scale: number
}

export interface PredicateContactsTopPeersDisabled {
    _: 'contacts.topPeersDisabled'
}

export interface PredicateInputReportReasonCopyright {
    _: 'inputReportReasonCopyright'
}

export interface PredicatePasswordKdfAlgoUnknown {
    _: 'passwordKdfAlgoUnknown'
}

export interface PredicateSecurePasswordKdfAlgoUnknown {
    _: 'securePasswordKdfAlgoUnknown'
}

export interface PredicateSecurePasswordKdfAlgoPBKDF2HMACSHA512iter100000 {
    _: 'securePasswordKdfAlgoPBKDF2HMACSHA512iter100000'
    salt: Uint8Array
}

export interface PredicateSecurePasswordKdfAlgoSHA512 {
    _: 'securePasswordKdfAlgoSHA512'
    salt: Uint8Array
}

export interface PredicateSecureSecretSettings {
    _: 'secureSecretSettings'
    secure_algo: SecurePasswordKdfAlgo
    secure_secret: Uint8Array
    secure_secret_id: number
}

export interface PredicatePasswordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow {
    _: 'passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow'
    salt1: Uint8Array
    salt2: Uint8Array
    g: number
    p: Uint8Array
}

export interface PredicateInputCheckPasswordEmpty {
    _: 'inputCheckPasswordEmpty'
}

export interface PredicateInputCheckPasswordSRP {
    _: 'inputCheckPasswordSRP'
    srp_id: number
    A: Uint8Array
    M1: Uint8Array
}

export interface PredicateSecureValueError {
    _: 'secureValueError'
    type: SecureValueType
    hash: Uint8Array
    text: string
}

export interface PredicateSecureValueErrorTranslationFile {
    _: 'secureValueErrorTranslationFile'
    type: SecureValueType
    file_hash: Uint8Array
    text: string
}

export interface PredicateSecureValueErrorTranslationFiles {
    _: 'secureValueErrorTranslationFiles'
    type: SecureValueType
    file_hash: Uint8Array[]
    text: string
}

export interface PredicateSecureRequiredType {
    _: 'secureRequiredType'
    native_names?: true
    selfie_required?: true
    translation_required?: true
    type: SecureValueType
}

export interface PredicateSecureRequiredTypeOneOf {
    _: 'secureRequiredTypeOneOf'
    types: SecureRequiredType[]
}

export interface PredicateHelpPassportConfigNotModified {
    _: 'help.passportConfigNotModified'
}

export interface PredicateHelpPassportConfig {
    _: 'help.passportConfig'
    hash: number
    countries_langs: DataJSON
}

export interface PredicateInputAppEvent {
    _: 'inputAppEvent'
    time: number
    type: string
    peer: number
    data: JSONValue
}

export interface PredicateJsonObjectValue {
    _: 'jsonObjectValue'
    key: string
    value: JSONValue
}

export interface PredicateJsonNull {
    _: 'jsonNull'
}

export interface PredicateJsonBool {
    _: 'jsonBool'
    value: boolean
}

export interface PredicateJsonNumber {
    _: 'jsonNumber'
    value: number
}

export interface PredicateJsonString {
    _: 'jsonString'
    value: string
}

export interface PredicateJsonArray {
    _: 'jsonArray'
    value: JSONValue[]
}

export interface PredicateJsonObject {
    _: 'jsonObject'
    value: JSONObjectValue[]
}

export interface PredicateInputNotifyBroadcasts {
    _: 'inputNotifyBroadcasts'
}

export interface PredicateNotifyBroadcasts {
    _: 'notifyBroadcasts'
}

export interface PredicateTextSubscript {
    _: 'textSubscript'
    text: RichText
}

export interface PredicateTextSuperscript {
    _: 'textSuperscript'
    text: RichText
}

export interface PredicateTextMarked {
    _: 'textMarked'
    text: RichText
}

export interface PredicateTextPhone {
    _: 'textPhone'
    text: RichText
    phone: string
}

export interface PredicateTextImage {
    _: 'textImage'
    document_id: number
    w: number
    h: number
}

export interface PredicatePageBlockKicker {
    _: 'pageBlockKicker'
    text: RichText
}

export interface PredicatePageTableCell {
    _: 'pageTableCell'
    header?: true
    align_center?: true
    align_right?: true
    valign_middle?: true
    valign_bottom?: true
    text?: RichText
    colspan?: number
    rowspan?: number
}

export interface PredicatePageTableRow {
    _: 'pageTableRow'
    cells: PageTableCell[]
}

export interface PredicatePageBlockTable {
    _: 'pageBlockTable'
    bordered?: true
    striped?: true
    title: RichText
    rows: PageTableRow[]
}

export interface PredicatePageCaption {
    _: 'pageCaption'
    text: RichText
    credit: RichText
}

export interface PredicatePageListItemText {
    _: 'pageListItemText'
    text: RichText
}

export interface PredicatePageListItemBlocks {
    _: 'pageListItemBlocks'
    blocks: PageBlock[]
}

export interface PredicatePageListOrderedItemText {
    _: 'pageListOrderedItemText'
    num: string
    text: RichText
}

export interface PredicatePageListOrderedItemBlocks {
    _: 'pageListOrderedItemBlocks'
    num: string
    blocks: PageBlock[]
}

export interface PredicatePageBlockOrderedList {
    _: 'pageBlockOrderedList'
    items: PageListOrderedItem[]
}

export interface PredicatePageBlockDetails {
    _: 'pageBlockDetails'
    open?: true
    blocks: PageBlock[]
    title: RichText
}

export interface PredicatePageRelatedArticle {
    _: 'pageRelatedArticle'
    url: string
    webpage_id: number
    title?: string
    description?: string
    photo_id?: number
    author?: string
    published_date?: number
}

export interface PredicatePageBlockRelatedArticles {
    _: 'pageBlockRelatedArticles'
    title: RichText
    articles: PageRelatedArticle[]
}

export interface PredicatePageBlockMap {
    _: 'pageBlockMap'
    geo: GeoPoint
    zoom: number
    w: number
    h: number
    caption: PageCaption
}

export interface PredicatePage {
    _: 'page'
    part?: true
    rtl?: true
    v2?: true
    url: string
    blocks: PageBlock[]
    photos: Photo[]
    documents: Document[]
    views?: number
}

export interface PredicateInputPrivacyKeyPhoneP2P {
    _: 'inputPrivacyKeyPhoneP2P'
}

export interface PredicatePrivacyKeyPhoneP2P {
    _: 'privacyKeyPhoneP2P'
}

export interface PredicateTextAnchor {
    _: 'textAnchor'
    text: RichText
    name: string
}

export interface PredicateHelpSupportName {
    _: 'help.supportName'
    name: string
}

export interface PredicateHelpUserInfoEmpty {
    _: 'help.userInfoEmpty'
}

export interface PredicateHelpUserInfo {
    _: 'help.userInfo'
    message: string
    entities: MessageEntity[]
    author: string
    date: number
}

export interface PredicateMessageActionContactSignUp {
    _: 'messageActionContactSignUp'
}

export interface PredicateUpdateMessagePoll {
    _: 'updateMessagePoll'
    poll_id: number
    poll?: Poll
    results: PollResults
}

export interface PredicatePollAnswer {
    _: 'pollAnswer'
    text: string
    option: Uint8Array
}

export interface PredicatePoll {
    _: 'poll'
    id: number
    closed?: true
    public_voters?: true
    multiple_choice?: true
    quiz?: true
    question: string
    answers: PollAnswer[]
    close_period?: number
    close_date?: number
}

export interface PredicatePollAnswerVoters {
    _: 'pollAnswerVoters'
    chosen?: true
    correct?: true
    option: Uint8Array
    voters: number
}

export interface PredicatePollResults {
    _: 'pollResults'
    min?: true
    results?: PollAnswerVoters[]
    total_voters?: number
    recent_voters?: number[]
    solution?: string
    solution_entities?: MessageEntity[]
}

export interface PredicateInputMediaPoll {
    _: 'inputMediaPoll'
    poll: Poll
    correct_answers?: Uint8Array[]
    solution?: string
    solution_entities?: MessageEntity[]
}

export interface PredicateMessageMediaPoll {
    _: 'messageMediaPoll'
    poll: Poll
    results: PollResults
}

export interface PredicateChatOnlines {
    _: 'chatOnlines'
    onlines: number
}

export interface PredicateStatsURL {
    _: 'statsURL'
    url: string
}

export interface PredicatePhotoStrippedSize {
    _: 'photoStrippedSize'
    type: string
    bytes: Uint8Array
}

export interface PredicateChatAdminRights {
    _: 'chatAdminRights'
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
}

export interface PredicateChatBannedRights {
    _: 'chatBannedRights'
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
}

export interface PredicateUpdateChatDefaultBannedRights {
    _: 'updateChatDefaultBannedRights'
    peer: Peer
    default_banned_rights: ChatBannedRights
    version: number
}

export interface PredicateInputWallPaper {
    _: 'inputWallPaper'
    id: number
    access_hash: number
}

export interface PredicateInputWallPaperSlug {
    _: 'inputWallPaperSlug'
    slug: string
}

export interface PredicateChannelParticipantsContacts {
    _: 'channelParticipantsContacts'
    q: string
}

export interface PredicateChannelAdminLogEventActionDefaultBannedRights {
    _: 'channelAdminLogEventActionDefaultBannedRights'
    prev_banned_rights: ChatBannedRights
    new_banned_rights: ChatBannedRights
}

export interface PredicateChannelAdminLogEventActionStopPoll {
    _: 'channelAdminLogEventActionStopPoll'
    message: Message
}

export interface PredicateAccountWallPapersNotModified {
    _: 'account.wallPapersNotModified'
}

export interface PredicateAccountWallPapers {
    _: 'account.wallPapers'
    hash: number
    wallpapers: WallPaper[]
}

export interface PredicateCodeSettings {
    _: 'codeSettings'
    allow_flashcall?: true
    current_number?: true
    allow_app_hash?: true
    allow_missed_call?: true
    logout_tokens?: Uint8Array[]
}

export interface PredicateWallPaperSettings {
    _: 'wallPaperSettings'
    blur?: true
    motion?: true
    background_color?: number
    second_background_color?: number
    third_background_color?: number
    fourth_background_color?: number
    intensity?: number
    rotation?: number
}

export interface PredicateAutoDownloadSettings {
    _: 'autoDownloadSettings'
    disabled?: true
    video_preload_large?: true
    audio_preload_next?: true
    phonecalls_less_data?: true
    photo_size_max: number
    video_size_max: number
    file_size_max: number
    video_upload_maxbitrate: number
}

export interface PredicateAccountAutoDownloadSettings {
    _: 'account.autoDownloadSettings'
    low: AutoDownloadSettings
    medium: AutoDownloadSettings
    high: AutoDownloadSettings
}

export interface PredicateEmojiKeyword {
    _: 'emojiKeyword'
    keyword: string
    emoticons: string[]
}

export interface PredicateEmojiKeywordDeleted {
    _: 'emojiKeywordDeleted'
    keyword: string
    emoticons: string[]
}

export interface PredicateEmojiKeywordsDifference {
    _: 'emojiKeywordsDifference'
    lang_code: string
    from_version: number
    version: number
    keywords: EmojiKeyword[]
}

export interface PredicateEmojiURL {
    _: 'emojiURL'
    url: string
}

export interface PredicateEmojiLanguage {
    _: 'emojiLanguage'
    lang_code: string
}

export interface PredicateInputPrivacyKeyForwards {
    _: 'inputPrivacyKeyForwards'
}

export interface PredicatePrivacyKeyForwards {
    _: 'privacyKeyForwards'
}

export interface PredicateInputPrivacyKeyProfilePhoto {
    _: 'inputPrivacyKeyProfilePhoto'
}

export interface PredicatePrivacyKeyProfilePhoto {
    _: 'privacyKeyProfilePhoto'
}

export interface PredicateInputPhotoFileLocation {
    _: 'inputPhotoFileLocation'
    id: number
    access_hash: number
    file_reference: Uint8Array
    thumb_size: string
}

export interface PredicateInputPhotoLegacyFileLocation {
    _: 'inputPhotoLegacyFileLocation'
    id: number
    access_hash: number
    file_reference: Uint8Array
    volume_id: number
    local_id: number
    secret: number
}

export interface PredicateInputPeerPhotoFileLocation {
    _: 'inputPeerPhotoFileLocation'
    big?: true
    peer: InputPeer
    photo_id: number
}

export interface PredicateInputStickerSetThumb {
    _: 'inputStickerSetThumb'
    stickerset: InputStickerSet
    thumb_version: number
}

export interface PredicateFolder {
    _: 'folder'
    autofill_new_broadcasts?: true
    autofill_public_groups?: true
    autofill_new_correspondents?: true
    id: number
    title: string
    photo?: ChatPhoto
}

export interface PredicateDialogFolder {
    _: 'dialogFolder'
    pinned?: true
    folder: Folder
    peer: Peer
    top_message: number
    unread_muted_peers_count: number
    unread_unmuted_peers_count: number
    unread_muted_messages_count: number
    unread_unmuted_messages_count: number
}

export interface PredicateInputDialogPeerFolder {
    _: 'inputDialogPeerFolder'
    folder_id: number
}

export interface PredicateDialogPeerFolder {
    _: 'dialogPeerFolder'
    folder_id: number
}

export interface PredicateInputFolderPeer {
    _: 'inputFolderPeer'
    peer: InputPeer
    folder_id: number
}

export interface PredicateFolderPeer {
    _: 'folderPeer'
    peer: Peer
    folder_id: number
}

export interface PredicateUpdateFolderPeers {
    _: 'updateFolderPeers'
    folder_peers: FolderPeer[]
    pts: number
    pts_count: number
}

export interface PredicateInputUserFromMessage {
    _: 'inputUserFromMessage'
    peer: InputPeer
    msg_id: number
    user_id: number
}

export interface PredicateInputChannelFromMessage {
    _: 'inputChannelFromMessage'
    peer: InputPeer
    msg_id: number
    channel_id: number
}

export interface PredicateInputPeerUserFromMessage {
    _: 'inputPeerUserFromMessage'
    peer: InputPeer
    msg_id: number
    user_id: number
}

export interface PredicateInputPeerChannelFromMessage {
    _: 'inputPeerChannelFromMessage'
    peer: InputPeer
    msg_id: number
    channel_id: number
}

export interface PredicateInputPrivacyKeyPhoneNumber {
    _: 'inputPrivacyKeyPhoneNumber'
}

export interface PredicatePrivacyKeyPhoneNumber {
    _: 'privacyKeyPhoneNumber'
}

export interface PredicateTopPeerCategoryForwardUsers {
    _: 'topPeerCategoryForwardUsers'
}

export interface PredicateTopPeerCategoryForwardChats {
    _: 'topPeerCategoryForwardChats'
}

export interface PredicateChannelAdminLogEventActionChangeLinkedChat {
    _: 'channelAdminLogEventActionChangeLinkedChat'
    prev_value: number
    new_value: number
}

export interface PredicateMessagesSearchCounter {
    _: 'messages.searchCounter'
    inexact?: true
    filter: MessagesFilter
    count: number
}

export interface PredicateKeyboardButtonUrlAuth {
    _: 'keyboardButtonUrlAuth'
    text: string
    fwd_text?: string
    url: string
    button_id: number
}

export interface PredicateInputKeyboardButtonUrlAuth {
    _: 'inputKeyboardButtonUrlAuth'
    request_write_access?: true
    text: string
    fwd_text?: string
    url: string
    bot: InputUser
}

export interface PredicateUrlAuthResultRequest {
    _: 'urlAuthResultRequest'
    request_write_access?: true
    bot: User
    domain: string
}

export interface PredicateUrlAuthResultAccepted {
    _: 'urlAuthResultAccepted'
    url: string
}

export interface PredicateUrlAuthResultDefault {
    _: 'urlAuthResultDefault'
}

export interface PredicateInputPrivacyValueAllowChatParticipants {
    _: 'inputPrivacyValueAllowChatParticipants'
    chats: number[]
}

export interface PredicateInputPrivacyValueDisallowChatParticipants {
    _: 'inputPrivacyValueDisallowChatParticipants'
    chats: number[]
}

export interface PredicatePrivacyValueAllowChatParticipants {
    _: 'privacyValueAllowChatParticipants'
    chats: number[]
}

export interface PredicatePrivacyValueDisallowChatParticipants {
    _: 'privacyValueDisallowChatParticipants'
    chats: number[]
}

export interface PredicateMessageEntityUnderline {
    _: 'messageEntityUnderline'
    offset: number
    length: number
}

export interface PredicateMessageEntityStrike {
    _: 'messageEntityStrike'
    offset: number
    length: number
}

export interface PredicateMessageEntityBlockquote {
    _: 'messageEntityBlockquote'
    offset: number
    length: number
}

export interface PredicateUpdatePeerSettings {
    _: 'updatePeerSettings'
    peer: Peer
    settings: PeerSettings
}

export interface PredicateChannelLocationEmpty {
    _: 'channelLocationEmpty'
}

export interface PredicateChannelLocation {
    _: 'channelLocation'
    geo_point: GeoPoint
    address: string
}

export interface PredicatePeerLocated {
    _: 'peerLocated'
    peer: Peer
    expires: number
    distance: number
}

export interface PredicateUpdatePeerLocated {
    _: 'updatePeerLocated'
    peers: PeerLocated[]
}

export interface PredicateChannelAdminLogEventActionChangeLocation {
    _: 'channelAdminLogEventActionChangeLocation'
    prev_value: ChannelLocation
    new_value: ChannelLocation
}

export interface PredicateInputReportReasonGeoIrrelevant {
    _: 'inputReportReasonGeoIrrelevant'
}

export interface PredicateChannelAdminLogEventActionToggleSlowMode {
    _: 'channelAdminLogEventActionToggleSlowMode'
    prev_value: number
    new_value: number
}

export interface PredicateAuthAuthorizationSignUpRequired {
    _: 'auth.authorizationSignUpRequired'
    terms_of_service?: HelpTermsOfService
}

export interface PredicatePaymentsPaymentVerificationNeeded {
    _: 'payments.paymentVerificationNeeded'
    url: string
}

export interface PredicateInputStickerSetAnimatedEmoji {
    _: 'inputStickerSetAnimatedEmoji'
}

export interface PredicateUpdateNewScheduledMessage {
    _: 'updateNewScheduledMessage'
    message: Message
}

export interface PredicateUpdateDeleteScheduledMessages {
    _: 'updateDeleteScheduledMessages'
    peer: Peer
    messages: number[]
}

export interface PredicateRestrictionReason {
    _: 'restrictionReason'
    platform: string
    reason: string
    text: string
}

export interface PredicateInputTheme {
    _: 'inputTheme'
    id: number
    access_hash: number
}

export interface PredicateInputThemeSlug {
    _: 'inputThemeSlug'
    slug: string
}

export interface PredicateTheme {
    _: 'theme'
    creator?: true
    default?: true
    for_chat?: true
    id: number
    access_hash: number
    slug: string
    title: string
    document?: Document
    settings?: ThemeSettings[]
    emoticon?: string
    installs_count?: number
}

export interface PredicateAccountThemesNotModified {
    _: 'account.themesNotModified'
}

export interface PredicateAccountThemes {
    _: 'account.themes'
    hash: number
    themes: Theme[]
}

export interface PredicateUpdateTheme {
    _: 'updateTheme'
    theme: Theme
}

export interface PredicateInputPrivacyKeyAddedByPhone {
    _: 'inputPrivacyKeyAddedByPhone'
}

export interface PredicatePrivacyKeyAddedByPhone {
    _: 'privacyKeyAddedByPhone'
}

export interface PredicateUpdateGeoLiveViewed {
    _: 'updateGeoLiveViewed'
    peer: Peer
    msg_id: number
}

export interface PredicateUpdateLoginToken {
    _: 'updateLoginToken'
}

export interface PredicateAuthLoginToken {
    _: 'auth.loginToken'
    expires: number
    token: Uint8Array
}

export interface PredicateAuthLoginTokenMigrateTo {
    _: 'auth.loginTokenMigrateTo'
    dc_id: number
    token: Uint8Array
}

export interface PredicateAuthLoginTokenSuccess {
    _: 'auth.loginTokenSuccess'
    authorization: AuthAuthorization
}

export interface PredicateAccountContentSettings {
    _: 'account.contentSettings'
    sensitive_enabled?: true
    sensitive_can_change?: true
}

export interface PredicateMessagesInactiveChats {
    _: 'messages.inactiveChats'
    dates: number[]
    chats: Chat[]
    users: User[]
}

export interface PredicateBaseThemeClassic {
    _: 'baseThemeClassic'
}

export interface PredicateBaseThemeDay {
    _: 'baseThemeDay'
}

export interface PredicateBaseThemeNight {
    _: 'baseThemeNight'
}

export interface PredicateBaseThemeTinted {
    _: 'baseThemeTinted'
}

export interface PredicateBaseThemeArctic {
    _: 'baseThemeArctic'
}

export interface PredicateInputWallPaperNoFile {
    _: 'inputWallPaperNoFile'
    id: number
}

export interface PredicateWallPaperNoFile {
    _: 'wallPaperNoFile'
    id: number
    default?: true
    dark?: true
    settings?: WallPaperSettings
}

export interface PredicateInputThemeSettings {
    _: 'inputThemeSettings'
    message_colors_animated?: true
    base_theme: BaseTheme
    accent_color: number
    outbox_accent_color?: number
    message_colors?: number[]
    wallpaper?: InputWallPaper
    wallpaper_settings?: WallPaperSettings
}

export interface PredicateThemeSettings {
    _: 'themeSettings'
    message_colors_animated?: true
    base_theme: BaseTheme
    accent_color: number
    outbox_accent_color?: number
    message_colors?: number[]
    wallpaper?: WallPaper
}

export interface PredicateWebPageAttributeTheme {
    _: 'webPageAttributeTheme'
    documents?: Document[]
    settings?: ThemeSettings
}

export interface PredicateUpdateMessagePollVote {
    _: 'updateMessagePollVote'
    poll_id: number
    user_id: number
    options: Uint8Array[]
    qts: number
}

export interface PredicateMessageUserVote {
    _: 'messageUserVote'
    user_id: number
    option: Uint8Array
    date: number
}

export interface PredicateMessageUserVoteInputOption {
    _: 'messageUserVoteInputOption'
    user_id: number
    date: number
}

export interface PredicateMessageUserVoteMultiple {
    _: 'messageUserVoteMultiple'
    user_id: number
    options: Uint8Array[]
    date: number
}

export interface PredicateMessagesVotesList {
    _: 'messages.votesList'
    count: number
    votes: MessageUserVote[]
    users: User[]
    next_offset?: string
}

export interface PredicateKeyboardButtonRequestPoll {
    _: 'keyboardButtonRequestPoll'
    quiz?: boolean
    text: string
}

export interface PredicateMessageEntityBankCard {
    _: 'messageEntityBankCard'
    offset: number
    length: number
}

export interface PredicateBankCardOpenUrl {
    _: 'bankCardOpenUrl'
    url: string
    name: string
}

export interface PredicatePaymentsBankCardData {
    _: 'payments.bankCardData'
    title: string
    open_urls: BankCardOpenUrl[]
}

export interface PredicatePeerSelfLocated {
    _: 'peerSelfLocated'
    expires: number
}

export interface PredicateDialogFilter {
    _: 'dialogFilter'
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
}

export interface PredicateDialogFilterSuggested {
    _: 'dialogFilterSuggested'
    filter: DialogFilter
    description: string
}

export interface PredicateUpdateDialogFilter {
    _: 'updateDialogFilter'
    id: number
    filter?: DialogFilter
}

export interface PredicateUpdateDialogFilterOrder {
    _: 'updateDialogFilterOrder'
    order: number[]
}

export interface PredicateUpdateDialogFilters {
    _: 'updateDialogFilters'
}

export interface PredicateStatsDateRangeDays {
    _: 'statsDateRangeDays'
    min_date: number
    max_date: number
}

export interface PredicateStatsAbsValueAndPrev {
    _: 'statsAbsValueAndPrev'
    current: number
    previous: number
}

export interface PredicateStatsPercentValue {
    _: 'statsPercentValue'
    part: number
    total: number
}

export interface PredicateStatsGraphAsync {
    _: 'statsGraphAsync'
    token: string
}

export interface PredicateStatsGraphError {
    _: 'statsGraphError'
    error: string
}

export interface PredicateStatsGraph {
    _: 'statsGraph'
    json: DataJSON
    zoom_token?: string
}

export interface PredicateMessageInteractionCounters {
    _: 'messageInteractionCounters'
    msg_id: number
    views: number
    forwards: number
}

export interface PredicateStatsBroadcastStats {
    _: 'stats.broadcastStats'
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
}

export interface PredicateInputMediaDice {
    _: 'inputMediaDice'
    emoticon: string
}

export interface PredicateMessageMediaDice {
    _: 'messageMediaDice'
    value: number
    emoticon: string
}

export interface PredicateInputStickerSetDice {
    _: 'inputStickerSetDice'
    emoticon: string
}

export interface PredicateHelpPromoDataEmpty {
    _: 'help.promoDataEmpty'
    expires: number
}

export interface PredicateHelpPromoData {
    _: 'help.promoData'
    proxy?: true
    expires: number
    peer: Peer
    chats: Chat[]
    users: User[]
    psa_type?: string
    psa_message?: string
}

export interface PredicateVideoSize {
    _: 'videoSize'
    type: string
    w: number
    h: number
    size: number
    video_start_ts?: number
}

export interface PredicateUpdatePhoneCallSignalingData {
    _: 'updatePhoneCallSignalingData'
    phone_call_id: number
    data: Uint8Array
}

export interface PredicateChatInvitePeek {
    _: 'chatInvitePeek'
    chat: Chat
    expires: number
}

export interface PredicateStatsGroupTopPoster {
    _: 'statsGroupTopPoster'
    user_id: number
    messages: number
    avg_chars: number
}

export interface PredicateStatsGroupTopAdmin {
    _: 'statsGroupTopAdmin'
    user_id: number
    deleted: number
    kicked: number
    banned: number
}

export interface PredicateStatsGroupTopInviter {
    _: 'statsGroupTopInviter'
    user_id: number
    invitations: number
}

export interface PredicateStatsMegagroupStats {
    _: 'stats.megagroupStats'
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
}

export interface PredicateGlobalPrivacySettings {
    _: 'globalPrivacySettings'
    archive_and_mute_new_noncontact_peers?: boolean
}

export interface PredicatePhoneConnectionWebrtc {
    _: 'phoneConnectionWebrtc'
    turn?: true
    stun?: true
    id: number
    ip: string
    ipv6: string
    port: number
    username: string
    password: string
}

export interface PredicateHelpCountryCode {
    _: 'help.countryCode'
    country_code: string
    prefixes?: string[]
    patterns?: string[]
}

export interface PredicateHelpCountry {
    _: 'help.country'
    hidden?: true
    iso2: string
    default_name: string
    name?: string
    country_codes: HelpCountryCode[]
}

export interface PredicateHelpCountriesListNotModified {
    _: 'help.countriesListNotModified'
}

export interface PredicateHelpCountriesList {
    _: 'help.countriesList'
    countries: HelpCountry[]
    hash: number
}

export interface PredicateMessageViews {
    _: 'messageViews'
    views?: number
    forwards?: number
    replies?: MessageReplies
}

export interface PredicateUpdateChannelMessageForwards {
    _: 'updateChannelMessageForwards'
    channel_id: number
    id: number
    forwards: number
}

export interface PredicatePhotoSizeProgressive {
    _: 'photoSizeProgressive'
    type: string
    w: number
    h: number
    sizes: number[]
}

export interface PredicateMessagesMessageViews {
    _: 'messages.messageViews'
    views: MessageViews[]
    chats: Chat[]
    users: User[]
}

export interface PredicateUpdateReadChannelDiscussionInbox {
    _: 'updateReadChannelDiscussionInbox'
    channel_id: number
    top_msg_id: number
    read_max_id: number
    broadcast_id?: number
    broadcast_post?: number
}

export interface PredicateUpdateReadChannelDiscussionOutbox {
    _: 'updateReadChannelDiscussionOutbox'
    channel_id: number
    top_msg_id: number
    read_max_id: number
}

export interface PredicateMessagesDiscussionMessage {
    _: 'messages.discussionMessage'
    messages: Message[]
    max_id?: number
    read_inbox_max_id?: number
    read_outbox_max_id?: number
    unread_count: number
    chats: Chat[]
    users: User[]
}

export interface PredicateMessageReplyHeader {
    _: 'messageReplyHeader'
    reply_to_scheduled?: true
    reply_to_msg_id: number
    reply_to_peer_id?: Peer
    reply_to_top_id?: number
}

export interface PredicateMessageReplies {
    _: 'messageReplies'
    comments?: true
    replies: number
    replies_pts: number
    recent_repliers?: Peer[]
    channel_id?: number
    max_id?: number
    read_max_id?: number
}

export interface PredicateUpdatePeerBlocked {
    _: 'updatePeerBlocked'
    peer_id: Peer
    blocked: boolean
}

export interface PredicatePeerBlocked {
    _: 'peerBlocked'
    peer_id: Peer
    date: number
}

export interface PredicateUpdateChannelUserTyping {
    _: 'updateChannelUserTyping'
    channel_id: number
    top_msg_id?: number
    from_id: Peer
    action: SendMessageAction
}

export interface PredicateInputMessageCallbackQuery {
    _: 'inputMessageCallbackQuery'
    id: number
    query_id: number
}

export interface PredicateChannelParticipantLeft {
    _: 'channelParticipantLeft'
    peer: Peer
}

export interface PredicateChannelParticipantsMentions {
    _: 'channelParticipantsMentions'
    q?: string
    top_msg_id?: number
}

export interface PredicateUpdatePinnedMessages {
    _: 'updatePinnedMessages'
    pinned?: true
    peer: Peer
    messages: number[]
    pts: number
    pts_count: number
}

export interface PredicateUpdatePinnedChannelMessages {
    _: 'updatePinnedChannelMessages'
    pinned?: true
    channel_id: number
    messages: number[]
    pts: number
    pts_count: number
}

export interface PredicateInputMessagesFilterPinned {
    _: 'inputMessagesFilterPinned'
}

export interface PredicateStatsMessageStats {
    _: 'stats.messageStats'
    views_graph: StatsGraph
}

export interface PredicateMessageActionGeoProximityReached {
    _: 'messageActionGeoProximityReached'
    from_id: Peer
    to_id: Peer
    distance: number
}

export interface PredicatePhotoPathSize {
    _: 'photoPathSize'
    type: string
    bytes: Uint8Array
}

export interface PredicateSpeakingInGroupCallAction {
    _: 'speakingInGroupCallAction'
}

export interface PredicateGroupCallDiscarded {
    _: 'groupCallDiscarded'
    id: number
    access_hash: number
    duration: number
}

export interface PredicateGroupCall {
    _: 'groupCall'
    join_muted?: true
    can_change_join_muted?: true
    join_date_asc?: true
    schedule_start_subscribed?: true
    can_start_video?: true
    record_video_active?: true
    rtmp_stream?: true
    listeners_hidden?: true
    id: number
    access_hash: number
    participants_count: number
    title?: string
    stream_dc_id?: number
    record_start_date?: number
    schedule_date?: number
    unmuted_video_count?: number
    unmuted_video_limit: number
    version: number
}

export interface PredicateInputGroupCall {
    _: 'inputGroupCall'
    id: number
    access_hash: number
}

export interface PredicateMessageActionGroupCall {
    _: 'messageActionGroupCall'
    call: InputGroupCall
    duration?: number
}

export interface PredicateMessageActionInviteToGroupCall {
    _: 'messageActionInviteToGroupCall'
    call: InputGroupCall
    users: number[]
}

export interface PredicateGroupCallParticipant {
    _: 'groupCallParticipant'
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
    raise_hand_rating?: number
    video?: GroupCallParticipantVideo
    presentation?: GroupCallParticipantVideo
}

export interface PredicateUpdateChat {
    _: 'updateChat'
    chat_id: number
}

export interface PredicateUpdateGroupCallParticipants {
    _: 'updateGroupCallParticipants'
    call: InputGroupCall
    participants: GroupCallParticipant[]
    version: number
}

export interface PredicateUpdateGroupCall {
    _: 'updateGroupCall'
    chat_id: number
    call: GroupCall
}

export interface PredicatePhoneGroupCall {
    _: 'phone.groupCall'
    call: GroupCall
    participants: GroupCallParticipant[]
    participants_next_offset: string
    chats: Chat[]
    users: User[]
}

export interface PredicatePhoneGroupParticipants {
    _: 'phone.groupParticipants'
    count: number
    participants: GroupCallParticipant[]
    next_offset: string
    chats: Chat[]
    users: User[]
    version: number
}

export interface PredicateInlineQueryPeerTypeSameBotPM {
    _: 'inlineQueryPeerTypeSameBotPM'
}

export interface PredicateInlineQueryPeerTypePM {
    _: 'inlineQueryPeerTypePM'
}

export interface PredicateInlineQueryPeerTypeChat {
    _: 'inlineQueryPeerTypeChat'
}

export interface PredicateInlineQueryPeerTypeMegagroup {
    _: 'inlineQueryPeerTypeMegagroup'
}

export interface PredicateInlineQueryPeerTypeBroadcast {
    _: 'inlineQueryPeerTypeBroadcast'
}

export interface PredicateChannelAdminLogEventActionStartGroupCall {
    _: 'channelAdminLogEventActionStartGroupCall'
    call: InputGroupCall
}

export interface PredicateChannelAdminLogEventActionDiscardGroupCall {
    _: 'channelAdminLogEventActionDiscardGroupCall'
    call: InputGroupCall
}

export interface PredicateChannelAdminLogEventActionParticipantMute {
    _: 'channelAdminLogEventActionParticipantMute'
    participant: GroupCallParticipant
}

export interface PredicateChannelAdminLogEventActionParticipantUnmute {
    _: 'channelAdminLogEventActionParticipantUnmute'
    participant: GroupCallParticipant
}

export interface PredicateChannelAdminLogEventActionToggleGroupCallSetting {
    _: 'channelAdminLogEventActionToggleGroupCallSetting'
    join_muted: boolean
}

export interface PredicateInputPaymentCredentialsGooglePay {
    _: 'inputPaymentCredentialsGooglePay'
    payment_token: DataJSON
}

export interface PredicateMessagesHistoryImport {
    _: 'messages.historyImport'
    id: number
}

export interface PredicateSendMessageHistoryImportAction {
    _: 'sendMessageHistoryImportAction'
    progress: number
}

export interface PredicateMessagesHistoryImportParsed {
    _: 'messages.historyImportParsed'
    pm?: true
    group?: true
    title?: string
}

export interface PredicateInputReportReasonFake {
    _: 'inputReportReasonFake'
}

export interface PredicateMessagesAffectedFoundMessages {
    _: 'messages.affectedFoundMessages'
    pts: number
    pts_count: number
    offset: number
    messages: number[]
}

export interface PredicateMessageActionSetMessagesTTL {
    _: 'messageActionSetMessagesTTL'
    period: number
}

export interface PredicateUpdatePeerHistoryTTL {
    _: 'updatePeerHistoryTTL'
    peer: Peer
    ttl_period?: number
}

export interface PredicateUpdateChatParticipant {
    _: 'updateChatParticipant'
    chat_id: number
    date: number
    actor_id: number
    user_id: number
    prev_participant?: ChatParticipant
    new_participant?: ChatParticipant
    invite?: ExportedChatInvite
    qts: number
}

export interface PredicateUpdateChannelParticipant {
    _: 'updateChannelParticipant'
    channel_id: number
    date: number
    actor_id: number
    user_id: number
    prev_participant?: ChannelParticipant
    new_participant?: ChannelParticipant
    invite?: ExportedChatInvite
    qts: number
}

export interface PredicateUpdateBotStopped {
    _: 'updateBotStopped'
    user_id: number
    date: number
    stopped: boolean
    qts: number
}

export interface PredicateChatInviteImporter {
    _: 'chatInviteImporter'
    requested?: true
    user_id: number
    date: number
    about?: string
    approved_by?: number
}

export interface PredicateMessagesExportedChatInvites {
    _: 'messages.exportedChatInvites'
    count: number
    invites: ExportedChatInvite[]
    users: User[]
}

export interface PredicateMessagesExportedChatInvite {
    _: 'messages.exportedChatInvite'
    invite: ExportedChatInvite
    users: User[]
}

export interface PredicateMessagesExportedChatInviteReplaced {
    _: 'messages.exportedChatInviteReplaced'
    invite: ExportedChatInvite
    new_invite: ExportedChatInvite
    users: User[]
}

export interface PredicateMessagesChatInviteImporters {
    _: 'messages.chatInviteImporters'
    count: number
    importers: ChatInviteImporter[]
    users: User[]
}

export interface PredicateChatAdminWithInvites {
    _: 'chatAdminWithInvites'
    admin_id: number
    invites_count: number
    revoked_invites_count: number
}

export interface PredicateMessagesChatAdminsWithInvites {
    _: 'messages.chatAdminsWithInvites'
    admins: ChatAdminWithInvites[]
    users: User[]
}

export interface PredicateChannelAdminLogEventActionParticipantJoinByInvite {
    _: 'channelAdminLogEventActionParticipantJoinByInvite'
    invite: ExportedChatInvite
}

export interface PredicateChannelAdminLogEventActionExportedInviteDelete {
    _: 'channelAdminLogEventActionExportedInviteDelete'
    invite: ExportedChatInvite
}

export interface PredicateChannelAdminLogEventActionExportedInviteRevoke {
    _: 'channelAdminLogEventActionExportedInviteRevoke'
    invite: ExportedChatInvite
}

export interface PredicateChannelAdminLogEventActionExportedInviteEdit {
    _: 'channelAdminLogEventActionExportedInviteEdit'
    prev_invite: ExportedChatInvite
    new_invite: ExportedChatInvite
}

export interface PredicateChannelAdminLogEventActionParticipantVolume {
    _: 'channelAdminLogEventActionParticipantVolume'
    participant: GroupCallParticipant
}

export interface PredicateChannelAdminLogEventActionChangeHistoryTTL {
    _: 'channelAdminLogEventActionChangeHistoryTTL'
    prev_value: number
    new_value: number
}

export interface PredicateMessagesCheckedHistoryImportPeer {
    _: 'messages.checkedHistoryImportPeer'
    confirm_text: string
}

export interface PredicateInputGroupCallStream {
    _: 'inputGroupCallStream'
    call: InputGroupCall
    time_ms: number
    scale: number
    video_channel?: number
    video_quality?: number
}

export interface PredicatePhoneJoinAsPeers {
    _: 'phone.joinAsPeers'
    peers: Peer[]
    chats: Chat[]
    users: User[]
}

export interface PredicatePhoneExportedGroupCallInvite {
    _: 'phone.exportedGroupCallInvite'
    link: string
}

export interface PredicateInputBotInlineMessageMediaInvoice {
    _: 'inputBotInlineMessageMediaInvoice'
    title: string
    description: string
    photo?: InputWebDocument
    invoice: Invoice
    payload: Uint8Array
    provider: string
    provider_data: DataJSON
    reply_markup?: ReplyMarkup
}

export interface PredicateBotInlineMessageMediaInvoice {
    _: 'botInlineMessageMediaInvoice'
    shipping_address_requested?: true
    test?: true
    title: string
    description: string
    photo?: WebDocument
    currency: string
    total_amount: number
    reply_markup?: ReplyMarkup
}

export interface PredicateMessageActionGroupCallScheduled {
    _: 'messageActionGroupCallScheduled'
    call: InputGroupCall
    schedule_date: number
}

export interface PredicateGroupCallParticipantVideoSourceGroup {
    _: 'groupCallParticipantVideoSourceGroup'
    semantics: string
    sources: number[]
}

export interface PredicateGroupCallParticipantVideo {
    _: 'groupCallParticipantVideo'
    paused?: true
    endpoint: string
    source_groups: GroupCallParticipantVideoSourceGroup[]
    audio_source?: number
}

export interface PredicateUpdateGroupCallConnection {
    _: 'updateGroupCallConnection'
    presentation?: true
    params: DataJSON
}

export interface PredicateStickersSuggestedShortName {
    _: 'stickers.suggestedShortName'
    short_name: string
}

export interface PredicateBotCommandScopeDefault {
    _: 'botCommandScopeDefault'
}

export interface PredicateBotCommandScopeUsers {
    _: 'botCommandScopeUsers'
}

export interface PredicateBotCommandScopeChats {
    _: 'botCommandScopeChats'
}

export interface PredicateBotCommandScopeChatAdmins {
    _: 'botCommandScopeChatAdmins'
}

export interface PredicateBotCommandScopePeer {
    _: 'botCommandScopePeer'
    peer: InputPeer
}

export interface PredicateBotCommandScopePeerAdmins {
    _: 'botCommandScopePeerAdmins'
    peer: InputPeer
}

export interface PredicateBotCommandScopePeerUser {
    _: 'botCommandScopePeerUser'
    peer: InputPeer
    user_id: InputUser
}

export interface PredicateAccountResetPasswordFailedWait {
    _: 'account.resetPasswordFailedWait'
    retry_date: number
}

export interface PredicateAccountResetPasswordRequestedWait {
    _: 'account.resetPasswordRequestedWait'
    until_date: number
}

export interface PredicateAccountResetPasswordOk {
    _: 'account.resetPasswordOk'
}

export interface PredicateUpdateBotCommands {
    _: 'updateBotCommands'
    peer: Peer
    bot_id: number
    commands: BotCommand[]
}

export interface PredicateMessageActionSetChatTheme {
    _: 'messageActionSetChatTheme'
    emoticon: string
}

export interface PredicateSendMessageChooseStickerAction {
    _: 'sendMessageChooseStickerAction'
}

export interface PredicateSponsoredMessage {
    _: 'sponsoredMessage'
    recommended?: true
    random_id: Uint8Array
    from_id?: Peer
    chat_invite?: ChatInvite
    chat_invite_hash?: string
    channel_post?: number
    start_param?: string
    message: string
    entities?: MessageEntity[]
}

export interface PredicateMessagesSponsoredMessages {
    _: 'messages.sponsoredMessages'
    messages: SponsoredMessage[]
    chats: Chat[]
    users: User[]
}

export interface PredicateInputStickerSetAnimatedEmojiAnimations {
    _: 'inputStickerSetAnimatedEmojiAnimations'
}

export interface PredicateSendMessageEmojiInteraction {
    _: 'sendMessageEmojiInteraction'
    emoticon: string
    msg_id: number
    interaction: DataJSON
}

export interface PredicateSendMessageEmojiInteractionSeen {
    _: 'sendMessageEmojiInteractionSeen'
    emoticon: string
}

export interface PredicateInputBotInlineMessageID64 {
    _: 'inputBotInlineMessageID64'
    dc_id: number
    owner_id: number
    id: number
    access_hash: number
}

export interface PredicateSearchResultsCalendarPeriod {
    _: 'searchResultsCalendarPeriod'
    date: number
    min_msg_id: number
    max_msg_id: number
    count: number
}

export interface PredicateMessagesSearchResultsCalendar {
    _: 'messages.searchResultsCalendar'
    inexact?: true
    count: number
    min_date: number
    min_msg_id: number
    offset_id_offset?: number
    periods: SearchResultsCalendarPeriod[]
    messages: Message[]
    chats: Chat[]
    users: User[]
}

export interface PredicateSearchResultPosition {
    _: 'searchResultPosition'
    msg_id: number
    date: number
    offset: number
}

export interface PredicateMessagesSearchResultsPositions {
    _: 'messages.searchResultsPositions'
    count: number
    positions: SearchResultsPosition[]
}

export interface PredicateMessageActionChatJoinedByRequest {
    _: 'messageActionChatJoinedByRequest'
}

export interface PredicateUpdatePendingJoinRequests {
    _: 'updatePendingJoinRequests'
    peer: Peer
    requests_pending: number
    recent_requesters: number[]
}

export interface PredicateUpdateBotChatInviteRequester {
    _: 'updateBotChatInviteRequester'
    peer: Peer
    date: number
    user_id: number
    about: string
    invite: ExportedChatInvite
    qts: number
}

export interface PredicateChannelAdminLogEventActionParticipantJoinByRequest {
    _: 'channelAdminLogEventActionParticipantJoinByRequest'
    invite: ExportedChatInvite
    approved_by: number
}

export interface PredicateInputKeyboardButtonUserProfile {
    _: 'inputKeyboardButtonUserProfile'
    text: string
    user_id: InputUser
}

export interface PredicateKeyboardButtonUserProfile {
    _: 'keyboardButtonUserProfile'
    text: string
    user_id: number
}

export interface PredicateChannelsSendAsPeers {
    _: 'channels.sendAsPeers'
    peers: Peer[]
    chats: Chat[]
    users: User[]
}

export interface PredicateChannelAdminLogEventActionToggleNoForwards {
    _: 'channelAdminLogEventActionToggleNoForwards'
    new_value: boolean
}

export interface PredicateMessagesStickerSetNotModified {
    _: 'messages.stickerSetNotModified'
}

export interface PredicateUsersUserFull {
    _: 'users.userFull'
    full_user: UserFull
    chats: Chat[]
    users: User[]
}

export interface PredicateMessagesPeerSettings {
    _: 'messages.peerSettings'
    settings: PeerSettings
    chats: Chat[]
    users: User[]
}

export interface PredicateChannelAdminLogEventActionSendMessage {
    _: 'channelAdminLogEventActionSendMessage'
    message: Message
}

export interface PredicateAuthCodeTypeMissedCall {
    _: 'auth.codeTypeMissedCall'
}

export interface PredicateAuthSentCodeTypeMissedCall {
    _: 'auth.sentCodeTypeMissedCall'
    prefix: string
    length: number
}

export interface PredicateAuthLoggedOut {
    _: 'auth.loggedOut'
    future_auth_token?: Uint8Array
}

export interface PredicateUpdateMessageReactions {
    _: 'updateMessageReactions'
    peer: Peer
    msg_id: number
    reactions: MessageReactions
}

export interface PredicateReactionCount {
    _: 'reactionCount'
    chosen?: true
    reaction: string
    count: number
}

export interface PredicateMessageReactions {
    _: 'messageReactions'
    min?: true
    can_see_list?: true
    results: ReactionCount[]
    recent_reactions?: MessagePeerReaction[]
}

export interface PredicateMessagesMessageReactionsList {
    _: 'messages.messageReactionsList'
    count: number
    reactions: MessagePeerReaction[]
    chats: Chat[]
    users: User[]
    next_offset?: string
}

export interface PredicateAvailableReaction {
    _: 'availableReaction'
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
}

export interface PredicateMessagesAvailableReactionsNotModified {
    _: 'messages.availableReactionsNotModified'
}

export interface PredicateMessagesAvailableReactions {
    _: 'messages.availableReactions'
    hash: number
    reactions: AvailableReaction[]
}

export interface PredicateMessageEntitySpoiler {
    _: 'messageEntitySpoiler'
    offset: number
    length: number
}

export interface PredicateChannelAdminLogEventActionChangeAvailableReactions {
    _: 'channelAdminLogEventActionChangeAvailableReactions'
    prev_value: string[]
    new_value: string[]
}

export interface PredicateMessagesTranslateNoResult {
    _: 'messages.translateNoResult'
}

export interface PredicateMessagesTranslateResultText {
    _: 'messages.translateResultText'
    text: string
}

export interface PredicateMessagePeerReaction {
    _: 'messagePeerReaction'
    big?: true
    unread?: true
    peer_id: Peer
    reaction: string
}

export interface PredicateGroupCallStreamChannel {
    _: 'groupCallStreamChannel'
    channel: number
    scale: number
    last_timestamp_ms: number
}

export interface PredicatePhoneGroupCallStreamChannels {
    _: 'phone.groupCallStreamChannels'
    channels: GroupCallStreamChannel[]
}

export interface PredicateInputReportReasonIllegalDrugs {
    _: 'inputReportReasonIllegalDrugs'
}

export interface PredicateInputReportReasonPersonalDetails {
    _: 'inputReportReasonPersonalDetails'
}

export interface PredicatePhoneGroupCallStreamRtmpUrl {
    _: 'phone.groupCallStreamRtmpUrl'
    url: string
    key: string
}

export type Error = PredicateError;

export type InputPeer = PredicateInputPeerEmpty | PredicateInputPeerSelf | PredicateInputPeerChat | PredicateInputPeerUser | PredicateInputPeerChannel | PredicateInputPeerUserFromMessage | PredicateInputPeerChannelFromMessage;

export type InputUser = PredicateInputUserEmpty | PredicateInputUserSelf | PredicateInputUser | PredicateInputUserFromMessage;

export type InputContact = PredicateInputPhoneContact;

export type InputFile = PredicateInputFile | PredicateInputFileBig;

export type InputMedia = PredicateInputMediaEmpty | PredicateInputMediaUploadedPhoto | PredicateInputMediaPhoto | PredicateInputMediaGeoPoint | PredicateInputMediaContact | PredicateInputMediaUploadedDocument | PredicateInputMediaDocument | PredicateInputMediaVenue | PredicateInputMediaPhotoExternal | PredicateInputMediaDocumentExternal | PredicateInputMediaGame | PredicateInputMediaInvoice | PredicateInputMediaGeoLive | PredicateInputMediaPoll | PredicateInputMediaDice;

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

export type MessageMedia = PredicateMessageMediaEmpty | PredicateMessageMediaPhoto | PredicateMessageMediaGeo | PredicateMessageMediaContact | PredicateMessageMediaUnsupported | PredicateMessageMediaDocument | PredicateMessageMediaWebPage | PredicateMessageMediaVenue | PredicateMessageMediaGame | PredicateMessageMediaInvoice | PredicateMessageMediaGeoLive | PredicateMessageMediaPoll | PredicateMessageMediaDice;

export type MessageAction = PredicateMessageActionEmpty | PredicateMessageActionChatCreate | PredicateMessageActionChatEditTitle | PredicateMessageActionChatEditPhoto | PredicateMessageActionChatDeletePhoto | PredicateMessageActionChatAddUser | PredicateMessageActionChatDeleteUser | PredicateMessageActionChatJoinedByLink | PredicateMessageActionChannelCreate | PredicateMessageActionChatMigrateTo | PredicateMessageActionChannelMigrateFrom | PredicateMessageActionPinMessage | PredicateMessageActionHistoryClear | PredicateMessageActionGameScore | PredicateMessageActionPaymentSentMe | PredicateMessageActionPaymentSent | PredicateMessageActionPhoneCall | PredicateMessageActionScreenshotTaken | PredicateMessageActionCustomAction | PredicateMessageActionBotAllowed | PredicateMessageActionSecureValuesSentMe | PredicateMessageActionSecureValuesSent | PredicateMessageActionContactSignUp | PredicateMessageActionGeoProximityReached | PredicateMessageActionGroupCall | PredicateMessageActionInviteToGroupCall | PredicateMessageActionSetMessagesTTL | PredicateMessageActionGroupCallScheduled | PredicateMessageActionSetChatTheme | PredicateMessageActionChatJoinedByRequest;

export type Dialog = PredicateDialog | PredicateDialogFolder;

export type Photo = PredicatePhotoEmpty | PredicatePhoto;

export type PhotoSize = PredicatePhotoSizeEmpty | PredicatePhotoSize | PredicatePhotoCachedSize | PredicatePhotoStrippedSize | PredicatePhotoSizeProgressive | PredicatePhotoPathSize;

export type GeoPoint = PredicateGeoPointEmpty | PredicateGeoPoint;

export type AuthSentCode = PredicateAuthSentCode;

export type AuthAuthorization = PredicateAuthAuthorization | PredicateAuthAuthorizationSignUpRequired;

export type AuthExportedAuthorization = PredicateAuthExportedAuthorization;

export type InputNotifyPeer = PredicateInputNotifyPeer | PredicateInputNotifyUsers | PredicateInputNotifyChats | PredicateInputNotifyBroadcasts;

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

export type Update = PredicateUpdateNewMessage | PredicateUpdateMessageID | PredicateUpdateDeleteMessages | PredicateUpdateUserTyping | PredicateUpdateChatUserTyping | PredicateUpdateChatParticipants | PredicateUpdateUserStatus | PredicateUpdateUserName | PredicateUpdateUserPhoto | PredicateUpdateNewEncryptedMessage | PredicateUpdateEncryptedChatTyping | PredicateUpdateEncryption | PredicateUpdateEncryptedMessagesRead | PredicateUpdateChatParticipantAdd | PredicateUpdateChatParticipantDelete | PredicateUpdateDcOptions | PredicateUpdateNotifySettings | PredicateUpdateServiceNotification | PredicateUpdatePrivacy | PredicateUpdateUserPhone | PredicateUpdateReadHistoryInbox | PredicateUpdateReadHistoryOutbox | PredicateUpdateWebPage | PredicateUpdateReadMessagesContents | PredicateUpdateChannelTooLong | PredicateUpdateChannel | PredicateUpdateNewChannelMessage | PredicateUpdateReadChannelInbox | PredicateUpdateDeleteChannelMessages | PredicateUpdateChannelMessageViews | PredicateUpdateChatParticipantAdmin | PredicateUpdateNewStickerSet | PredicateUpdateStickerSetsOrder | PredicateUpdateStickerSets | PredicateUpdateSavedGifs | PredicateUpdateBotInlineQuery | PredicateUpdateBotInlineSend | PredicateUpdateEditChannelMessage | PredicateUpdateBotCallbackQuery | PredicateUpdateEditMessage | PredicateUpdateInlineBotCallbackQuery | PredicateUpdateReadChannelOutbox | PredicateUpdateDraftMessage | PredicateUpdateReadFeaturedStickers | PredicateUpdateRecentStickers | PredicateUpdateConfig | PredicateUpdatePtsChanged | PredicateUpdateChannelWebPage | PredicateUpdateDialogPinned | PredicateUpdatePinnedDialogs | PredicateUpdateBotWebhookJSON | PredicateUpdateBotWebhookJSONQuery | PredicateUpdateBotShippingQuery | PredicateUpdateBotPrecheckoutQuery | PredicateUpdatePhoneCall | PredicateUpdateLangPackTooLong | PredicateUpdateLangPack | PredicateUpdateFavedStickers | PredicateUpdateChannelReadMessagesContents | PredicateUpdateContactsReset | PredicateUpdateChannelAvailableMessages | PredicateUpdateDialogUnreadMark | PredicateUpdateMessagePoll | PredicateUpdateChatDefaultBannedRights | PredicateUpdateFolderPeers | PredicateUpdatePeerSettings | PredicateUpdatePeerLocated | PredicateUpdateNewScheduledMessage | PredicateUpdateDeleteScheduledMessages | PredicateUpdateTheme | PredicateUpdateGeoLiveViewed | PredicateUpdateLoginToken | PredicateUpdateMessagePollVote | PredicateUpdateDialogFilter | PredicateUpdateDialogFilterOrder | PredicateUpdateDialogFilters | PredicateUpdatePhoneCallSignalingData | PredicateUpdateChannelMessageForwards | PredicateUpdateReadChannelDiscussionInbox | PredicateUpdateReadChannelDiscussionOutbox | PredicateUpdatePeerBlocked | PredicateUpdateChannelUserTyping | PredicateUpdatePinnedMessages | PredicateUpdatePinnedChannelMessages | PredicateUpdateChat | PredicateUpdateGroupCallParticipants | PredicateUpdateGroupCall | PredicateUpdatePeerHistoryTTL | PredicateUpdateChatParticipant | PredicateUpdateChannelParticipant | PredicateUpdateBotStopped | PredicateUpdateGroupCallConnection | PredicateUpdateBotCommands | PredicateUpdatePendingJoinRequests | PredicateUpdateBotChatInviteRequester | PredicateUpdateMessageReactions;

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

export type NotifyPeer = PredicateNotifyPeer | PredicateNotifyUsers | PredicateNotifyChats | PredicateNotifyBroadcasts;

export type SendMessageAction = PredicateSendMessageTypingAction | PredicateSendMessageCancelAction | PredicateSendMessageRecordVideoAction | PredicateSendMessageUploadVideoAction | PredicateSendMessageRecordAudioAction | PredicateSendMessageUploadAudioAction | PredicateSendMessageUploadPhotoAction | PredicateSendMessageUploadDocumentAction | PredicateSendMessageGeoLocationAction | PredicateSendMessageChooseContactAction | PredicateSendMessageGamePlayAction | PredicateSendMessageRecordRoundAction | PredicateSendMessageUploadRoundAction | PredicateSpeakingInGroupCallAction | PredicateSendMessageHistoryImportAction | PredicateSendMessageChooseStickerAction | PredicateSendMessageEmojiInteraction | PredicateSendMessageEmojiInteractionSeen;

export type ContactsFound = PredicateContactsFound;

export type InputPrivacyKey = PredicateInputPrivacyKeyStatusTimestamp | PredicateInputPrivacyKeyChatInvite | PredicateInputPrivacyKeyPhoneCall | PredicateInputPrivacyKeyPhoneP2P | PredicateInputPrivacyKeyForwards | PredicateInputPrivacyKeyProfilePhoto | PredicateInputPrivacyKeyPhoneNumber | PredicateInputPrivacyKeyAddedByPhone;

export type PrivacyKey = PredicatePrivacyKeyStatusTimestamp | PredicatePrivacyKeyChatInvite | PredicatePrivacyKeyPhoneCall | PredicatePrivacyKeyPhoneP2P | PredicatePrivacyKeyForwards | PredicatePrivacyKeyProfilePhoto | PredicatePrivacyKeyPhoneNumber | PredicatePrivacyKeyAddedByPhone;

export type InputPrivacyRule = PredicateInputPrivacyValueAllowContacts | PredicateInputPrivacyValueAllowAll | PredicateInputPrivacyValueAllowUsers | PredicateInputPrivacyValueDisallowContacts | PredicateInputPrivacyValueDisallowAll | PredicateInputPrivacyValueDisallowUsers | PredicateInputPrivacyValueAllowChatParticipants | PredicateInputPrivacyValueDisallowChatParticipants;

export type PrivacyRule = PredicatePrivacyValueAllowContacts | PredicatePrivacyValueAllowAll | PredicatePrivacyValueAllowUsers | PredicatePrivacyValueDisallowContacts | PredicatePrivacyValueDisallowAll | PredicatePrivacyValueDisallowUsers | PredicatePrivacyValueAllowChatParticipants | PredicatePrivacyValueDisallowChatParticipants;

export type AccountPrivacyRules = PredicateAccountPrivacyRules;

export type AccountDaysTTL = PredicateAccountDaysTTL;

export type DocumentAttribute = PredicateDocumentAttributeImageSize | PredicateDocumentAttributeAnimated | PredicateDocumentAttributeSticker | PredicateDocumentAttributeVideo | PredicateDocumentAttributeAudio | PredicateDocumentAttributeFilename | PredicateDocumentAttributeHasStickers;

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

export type ExportedChatInvite = PredicateChatInviteExported;

export type ChatInvite = PredicateChatInviteAlready | PredicateChatInvite | PredicateChatInvitePeek;

export type InputStickerSet = PredicateInputStickerSetEmpty | PredicateInputStickerSetID | PredicateInputStickerSetShortName | PredicateInputStickerSetAnimatedEmoji | PredicateInputStickerSetDice | PredicateInputStickerSetAnimatedEmojiAnimations;

export type StickerSet = PredicateStickerSet;

export type MessagesStickerSet = PredicateMessagesStickerSet | PredicateMessagesStickerSetNotModified;

export type BotCommand = PredicateBotCommand;

export type BotInfo = PredicateBotInfo;

export type KeyboardButton = PredicateKeyboardButton | PredicateKeyboardButtonUrl | PredicateKeyboardButtonCallback | PredicateKeyboardButtonRequestPhone | PredicateKeyboardButtonRequestGeoLocation | PredicateKeyboardButtonSwitchInline | PredicateKeyboardButtonGame | PredicateKeyboardButtonBuy | PredicateKeyboardButtonUrlAuth | PredicateInputKeyboardButtonUrlAuth | PredicateKeyboardButtonRequestPoll | PredicateInputKeyboardButtonUserProfile | PredicateKeyboardButtonUserProfile;

export type KeyboardButtonRow = PredicateKeyboardButtonRow;

export type ReplyMarkup = PredicateReplyKeyboardHide | PredicateReplyKeyboardForceReply | PredicateReplyKeyboardMarkup | PredicateReplyInlineMarkup;

export type MessageEntity = PredicateMessageEntityUnknown | PredicateMessageEntityMention | PredicateMessageEntityHashtag | PredicateMessageEntityBotCommand | PredicateMessageEntityUrl | PredicateMessageEntityEmail | PredicateMessageEntityBold | PredicateMessageEntityItalic | PredicateMessageEntityCode | PredicateMessageEntityPre | PredicateMessageEntityTextUrl | PredicateMessageEntityMentionName | PredicateInputMessageEntityMentionName | PredicateMessageEntityPhone | PredicateMessageEntityCashtag | PredicateMessageEntityUnderline | PredicateMessageEntityStrike | PredicateMessageEntityBlockquote | PredicateMessageEntityBankCard | PredicateMessageEntitySpoiler;

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

export type InputBotInlineMessage = PredicateInputBotInlineMessageMediaAuto | PredicateInputBotInlineMessageText | PredicateInputBotInlineMessageMediaGeo | PredicateInputBotInlineMessageMediaVenue | PredicateInputBotInlineMessageMediaContact | PredicateInputBotInlineMessageGame | PredicateInputBotInlineMessageMediaInvoice;

export type InputBotInlineResult = PredicateInputBotInlineResult | PredicateInputBotInlineResultPhoto | PredicateInputBotInlineResultDocument | PredicateInputBotInlineResultGame;

export type BotInlineMessage = PredicateBotInlineMessageMediaAuto | PredicateBotInlineMessageText | PredicateBotInlineMessageMediaGeo | PredicateBotInlineMessageMediaVenue | PredicateBotInlineMessageMediaContact | PredicateBotInlineMessageMediaInvoice;

export type BotInlineResult = PredicateBotInlineResult | PredicateBotInlineMediaResult;

export type MessagesBotResults = PredicateMessagesBotResults;

export type ExportedMessageLink = PredicateExportedMessageLink;

export type MessageFwdHeader = PredicateMessageFwdHeader;

export type AuthCodeType = PredicateAuthCodeTypeSms | PredicateAuthCodeTypeCall | PredicateAuthCodeTypeFlashCall | PredicateAuthCodeTypeMissedCall;

export type AuthSentCodeType = PredicateAuthSentCodeTypeApp | PredicateAuthSentCodeTypeSms | PredicateAuthSentCodeTypeCall | PredicateAuthSentCodeTypeFlashCall | PredicateAuthSentCodeTypeMissedCall;

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

export type StickerSetCovered = PredicateStickerSetCovered | PredicateStickerSetMultiCovered;

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

export type InputWebFileLocation = PredicateInputWebFileLocation | PredicateInputWebFileGeoPointLocation;

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

export type ChannelAdminLogEventAction = PredicateChannelAdminLogEventActionChangeTitle | PredicateChannelAdminLogEventActionChangeAbout | PredicateChannelAdminLogEventActionChangeUsername | PredicateChannelAdminLogEventActionChangePhoto | PredicateChannelAdminLogEventActionToggleInvites | PredicateChannelAdminLogEventActionToggleSignatures | PredicateChannelAdminLogEventActionUpdatePinned | PredicateChannelAdminLogEventActionEditMessage | PredicateChannelAdminLogEventActionDeleteMessage | PredicateChannelAdminLogEventActionParticipantJoin | PredicateChannelAdminLogEventActionParticipantLeave | PredicateChannelAdminLogEventActionParticipantInvite | PredicateChannelAdminLogEventActionParticipantToggleBan | PredicateChannelAdminLogEventActionParticipantToggleAdmin | PredicateChannelAdminLogEventActionChangeStickerSet | PredicateChannelAdminLogEventActionTogglePreHistoryHidden | PredicateChannelAdminLogEventActionDefaultBannedRights | PredicateChannelAdminLogEventActionStopPoll | PredicateChannelAdminLogEventActionChangeLinkedChat | PredicateChannelAdminLogEventActionChangeLocation | PredicateChannelAdminLogEventActionToggleSlowMode | PredicateChannelAdminLogEventActionStartGroupCall | PredicateChannelAdminLogEventActionDiscardGroupCall | PredicateChannelAdminLogEventActionParticipantMute | PredicateChannelAdminLogEventActionParticipantUnmute | PredicateChannelAdminLogEventActionToggleGroupCallSetting | PredicateChannelAdminLogEventActionParticipantJoinByInvite | PredicateChannelAdminLogEventActionExportedInviteDelete | PredicateChannelAdminLogEventActionExportedInviteRevoke | PredicateChannelAdminLogEventActionExportedInviteEdit | PredicateChannelAdminLogEventActionParticipantVolume | PredicateChannelAdminLogEventActionChangeHistoryTTL | PredicateChannelAdminLogEventActionParticipantJoinByRequest | PredicateChannelAdminLogEventActionToggleNoForwards | PredicateChannelAdminLogEventActionSendMessage | PredicateChannelAdminLogEventActionChangeAvailableReactions;

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

export type WebPageAttribute = PredicateWebPageAttributeTheme;

export type MessageUserVote = PredicateMessageUserVote | PredicateMessageUserVoteInputOption | PredicateMessageUserVoteMultiple;

export type MessagesVotesList = PredicateMessagesVotesList;

export type BankCardOpenUrl = PredicateBankCardOpenUrl;

export type PaymentsBankCardData = PredicatePaymentsBankCardData;

export type DialogFilter = PredicateDialogFilter;

export type DialogFilterSuggested = PredicateDialogFilterSuggested;

export type StatsDateRangeDays = PredicateStatsDateRangeDays;

export type StatsAbsValueAndPrev = PredicateStatsAbsValueAndPrev;

export type StatsPercentValue = PredicateStatsPercentValue;

export type StatsGraph = PredicateStatsGraphAsync | PredicateStatsGraphError | PredicateStatsGraph;

export type MessageInteractionCounters = PredicateMessageInteractionCounters;

export type StatsBroadcastStats = PredicateStatsBroadcastStats;

export type HelpPromoData = PredicateHelpPromoDataEmpty | PredicateHelpPromoData;

export type VideoSize = PredicateVideoSize;

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

export type MessageReplyHeader = PredicateMessageReplyHeader;

export type MessageReplies = PredicateMessageReplies;

export type PeerBlocked = PredicatePeerBlocked;

export type StatsMessageStats = PredicateStatsMessageStats;

export type GroupCall = PredicateGroupCallDiscarded | PredicateGroupCall;

export type InputGroupCall = PredicateInputGroupCall;

export type GroupCallParticipant = PredicateGroupCallParticipant;

export type PhoneGroupCall = PredicatePhoneGroupCall;

export type PhoneGroupParticipants = PredicatePhoneGroupParticipants;

export type InlineQueryPeerType = PredicateInlineQueryPeerTypeSameBotPM | PredicateInlineQueryPeerTypePM | PredicateInlineQueryPeerTypeChat | PredicateInlineQueryPeerTypeMegagroup | PredicateInlineQueryPeerTypeBroadcast;

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

export type MessagesSponsoredMessages = PredicateMessagesSponsoredMessages;

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

export type MessagesTranslatedText = PredicateMessagesTranslateNoResult | PredicateMessagesTranslateResultText;

export type MessagePeerReaction = PredicateMessagePeerReaction;

export type GroupCallStreamChannel = PredicateGroupCallStreamChannel;

export type PhoneGroupCallStreamChannels = PredicatePhoneGroupCallStreamChannels;

export type PhoneGroupCallStreamRtmpUrl = PredicatePhoneGroupCallStreamRtmpUrl;

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
    msg_id?: number
    query?: any
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<any>('invokeAfterMsg', params, ...args);

export const invokeAfterMsgs = (dependencies: TgUserApiDependencies) => async (params: {
    msg_ids?: number[]
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
    id?: number
    bytes?: Uint8Array
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AuthAuthorization>('auth.importAuthorization', params, ...args);

export const authBindTempAuthKey = (dependencies: TgUserApiDependencies) => async (params: {
    perm_auth_key_id?: number
    nonce?: number
    expires_at?: number
    encrypted_message?: Uint8Array
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('auth.bindTempAuthKey', params, ...args);

export const accountRegisterDevice = (dependencies: TgUserApiDependencies) => async (params: {
    no_muted?: true
    token_type?: number
    token?: string
    app_sandbox?: boolean
    secret?: Uint8Array
    other_uids?: number[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.registerDevice', params, ...args);

export const accountUnregisterDevice = (dependencies: TgUserApiDependencies) => async (params: {
    token_type?: number
    token?: string
    other_uids?: number[]
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
    hash?: number
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
    hash?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<number[]>('contacts.getContactIDs', params, ...args);

export const contactsGetStatuses = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<ContactStatus[]>('contacts.getStatuses', params, ...args);

export const contactsGetContacts = (dependencies: TgUserApiDependencies) => async (params: {
    hash?: number
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
    hash?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesDialogs>('messages.getDialogs', params, ...args);

export const messagesGetHistory = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    offset_id?: number
    offset_date?: number
    add_offset?: number
    limit?: number
    max_id?: number
    min_id?: number
    hash?: number
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
    hash?: number
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
    random_id?: number
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
    random_id?: number
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
    random_id?: number[]
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
    id?: number[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesChats>('messages.getChats', params, ...args);

export const messagesGetFullChat = (dependencies: TgUserApiDependencies) => async (params: {
    chat_id?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesChatFull>('messages.getFullChat', params, ...args);

export const messagesEditChatTitle = (dependencies: TgUserApiDependencies) => async (params: {
    chat_id?: number
    title?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.editChatTitle', params, ...args);

export const messagesEditChatPhoto = (dependencies: TgUserApiDependencies) => async (params: {
    chat_id?: number
    photo?: InputChatPhoto
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.editChatPhoto', params, ...args);

export const messagesAddChatUser = (dependencies: TgUserApiDependencies) => async (params: {
    chat_id?: number
    user_id?: InputUser
    fwd_limit?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.addChatUser', params, ...args);

export const messagesDeleteChatUser = (dependencies: TgUserApiDependencies) => async (params: {
    revoke_history?: true
    chat_id?: number
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
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<number[]>('photos.deletePhotos', params, ...args);

export const uploadSaveFilePart = (dependencies: TgUserApiDependencies) => async (params: {
    file_id?: number
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
    max_id?: number
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
    key_fingerprint?: number
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
    random_id?: number
    data?: Uint8Array
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesSentEncryptedMessage>('messages.sendEncrypted', params, ...args);

export const messagesSendEncryptedFile = (dependencies: TgUserApiDependencies) => async (params: {
    silent?: true
    peer?: InputEncryptedChat
    random_id?: number
    data?: Uint8Array
    file?: InputEncryptedFile
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesSentEncryptedMessage>('messages.sendEncryptedFile', params, ...args);

export const messagesSendEncryptedService = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputEncryptedChat
    random_id?: number
    data?: Uint8Array
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesSentEncryptedMessage>('messages.sendEncryptedService', params, ...args);

export const messagesReceivedQueue = (dependencies: TgUserApiDependencies) => async (params: {
    max_qts?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<number[]>('messages.receivedQueue', params, ...args);

export const messagesReportEncryptedSpam = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputEncryptedChat
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.reportEncryptedSpam', params, ...args);

export const uploadSaveBigFilePart = (dependencies: TgUserApiDependencies) => async (params: {
    file_id?: number
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
    hash?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesStickers>('messages.getStickers', params, ...args);

export const messagesGetAllStickers = (dependencies: TgUserApiDependencies) => async (params: {
    hash?: number
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
    hash?: number
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
    random_id?: number
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
    hash?: number
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
    chat_id?: number
    user_id?: InputUser
    is_admin?: boolean
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.editChatAdmin', params, ...args);

export const messagesMigrateChat = (dependencies: TgUserApiDependencies) => async (params: {
    chat_id?: number
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
    order?: number[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.reorderStickerSets', params, ...args);

export const messagesGetDocumentByHash = (dependencies: TgUserApiDependencies) => async (params: {
    sha256?: Uint8Array
    size?: number
    mime_type?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Document>('messages.getDocumentByHash', params, ...args);

export const messagesGetSavedGifs = (dependencies: TgUserApiDependencies) => async (params: {
    hash?: number
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
    query_id?: number
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
    random_id?: number
    query_id?: number
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
    query_id?: number
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
    hash?: number
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
    hash?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesFeaturedStickers>('messages.getFeaturedStickers', params, ...args);

export const messagesReadFeaturedStickers = (dependencies: TgUserApiDependencies) => async (params: {
    id?: number[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.readFeaturedStickers', params, ...args);

export const messagesGetRecentStickers = (dependencies: TgUserApiDependencies) => async (params: {
    attached?: true
    hash?: number
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
    offset_id?: number
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
    hash?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesAllStickers>('messages.getMaskStickers', params, ...args);

export const messagesGetAttachedStickers = (dependencies: TgUserApiDependencies) => async (params: {
    media?: InputStickeredMedia
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<StickerSetCovered[]>('messages.getAttachedStickers', params, ...args);

export const authDropTempAuthKeys = (dependencies: TgUserApiDependencies) => async (params: {
    except_auth_keys?: number[]
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
    max_id?: number
    limit?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessagesChats>('messages.getCommonChats', params, ...args);

export const messagesGetAllChats = (dependencies: TgUserApiDependencies) => async (params: {
    except_ids?: number[]
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
    query_id?: number
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
    form_id?: number
    peer?: InputPeer
    msg_id?: number
    requested_info_id?: string
    shipping_option_id?: string
    credentials?: InputPaymentCredentials
    tip_amount?: number
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
    query_id?: number
    error?: string
    shipping_options?: ShippingOption[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('messages.setBotShippingResults', params, ...args);

export const messagesSetBotPrecheckoutResults = (dependencies: TgUserApiDependencies) => async (params: {
    success?: true
    query_id?: number
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
    key_fingerprint?: number
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
    connection_id?: number
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
    max_id?: number
    min_id?: number
    limit?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<ChannelsAdminLogResults>('channels.getAdminLog', params, ...args);

export const uploadGetCdnFileHashes = (dependencies: TgUserApiDependencies) => async (params: {
    file_token?: Uint8Array
    offset?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<FileHash[]>('upload.getCdnFileHashes', params, ...args);

export const messagesSendScreenshotNotification = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    reply_to_msg_id?: number
    random_id?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Updates>('messages.sendScreenshotNotification', params, ...args);

export const channelsSetStickers = (dependencies: TgUserApiDependencies) => async (params: {
    channel?: InputChannel
    stickerset?: InputStickerSet
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('channels.setStickers', params, ...args);

export const messagesGetFavedStickers = (dependencies: TgUserApiDependencies) => async (params: {
    hash?: number
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
    hash?: number
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
    hash?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.resetWebAuthorization', params, ...args);

export const accountResetWebAuthorizations = (dependencies: TgUserApiDependencies) => async (params: {

} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.resetWebAuthorizations', params, ...args);

export const messagesSearchStickerSets = (dependencies: TgUserApiDependencies) => async (params: {
    exclude_featured?: true
    q?: string
    hash?: number
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
    secure_secret_id?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<SecureValue>('account.saveSecureValue', params, ...args);

export const accountDeleteSecureValue = (dependencies: TgUserApiDependencies) => async (params: {
    types?: SecureValueType[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('account.deleteSecureValue', params, ...args);

export const usersSetSecureValueErrors = (dependencies: TgUserApiDependencies) => async (params: {
    id?: InputUser
    errors?: SecureValueError[]
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<boolean>('users.setSecureValueErrors', params, ...args);

export const accountGetAuthorizationForm = (dependencies: TgUserApiDependencies) => async (params: {
    bot_id?: number
    scope?: string
    public_key?: string
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AccountAuthorizationForm>('account.getAuthorizationForm', params, ...args);

export const accountAcceptAuthorization = (dependencies: TgUserApiDependencies) => async (params: {
    bot_id?: number
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
    takeout_id?: number
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
    hash?: number
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
    document_id?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<Theme>('account.getTheme', params, ...args);

export const accountGetThemes = (dependencies: TgUserApiDependencies) => async (params: {
    format?: string
    hash?: number
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<AccountThemes>('account.getThemes', params, ...args);

export const authExportLoginToken = (dependencies: TgUserApiDependencies) => async (params: {
    api_id?: number
    api_hash?: string
    except_ids?: number[]
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
    x?: number
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
    hash?: number
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
    hash?: number
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
    chat_id?: number
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
    import_id?: number
    file_name?: string
    media?: InputMedia
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<MessageMedia>('messages.uploadImportedMedia', params, ...args);

export const messagesStartHistoryImport = (dependencies: TgUserApiDependencies) => async (params: {
    peer?: InputPeer
    import_id?: number
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
    hash?: number
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
} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<number[]>('messages.getMessageReadParticipants', params, ...args);

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
    hash?: number
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
