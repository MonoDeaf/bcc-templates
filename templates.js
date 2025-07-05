// Template Content Data
export const messageTemplates = {
    'accept-standard': {
        title: 'Standard Demo Accept',
        content: `Hi {ARTIST_NAME},

Thank you for submitting your demo "{TRACK_NAME}" to {LABEL_NAME}. We're pleased to inform you that we're interested in working with you!

Your track aligns well with our label's vision and we believe it has great potential. We'd love to discuss the next steps and how we can help bring your music to a wider audience.

Please reply to this email with your availability for a call this week, and we'll coordinate a time to discuss the details.

Looking forward to working together!

Best regards,
{LABEL_NAME} Team

---
{DATE}`
    },
    'accept-excited': {
        title: 'Excited Demo Accept',
        content: `Hi {ARTIST_NAME},

WOW! We are absolutely blown away by "{TRACK_NAME}" - this is exactly what we've been looking for!

Your production quality, songwriting, and overall sound is incredible. We're thrilled to have the opportunity to work with such talented artists.

We want to fast-track this and get you signed ASAP. Can we schedule a call within the next 24-48 hours to discuss our offer?

This is going to be huge!

Excited to work together,
{LABEL_NAME} Team

---
{DATE}`
    },
    'accept-conditional': {
        title: 'Conditional Demo Accept',
        content: `Hi {ARTIST_NAME},

Thank you for submitting "{TRACK_NAME}" to {LABEL_NAME}. We're very interested in your music and would like to move forward with some minor adjustments.

What we love: {REASON}

What we'd like to see: We feel the track would benefit from some minor tweaks to better fit our label's sound and market positioning.

If you're open to collaborating on these refinements, we'd love to discuss the specific changes and move forward with a partnership.

Please let us know your thoughts and availability for a discussion.

Best regards,
{LABEL_NAME} Team

---
{DATE}`
    },
    'decline-not-fit': {
        title: 'Not a Fit - Polite Decline',
        content: `Hi {ARTIST_NAME},

Thank you for submitting your demo "{TRACK_NAME}" to {LABEL_NAME}. We appreciate you thinking of us and taking the time to share your music.

After careful consideration, we've decided that while your work shows talent and effort, it doesn't align with our current label direction and the sound we're cultivating.

This is not a reflection of your abilities as an artist - the music industry is very subjective and the right fit is crucial for both parties to succeed.

We wish you the best of luck with your music career and encourage you to keep creating and submitting to other labels that might be a better match for your style.

Keep making music!

Best regards,
{LABEL_NAME} Team

---
{DATE}`
    },
    'decline-quality': {
        title: 'Quality Issues - Constructive Decline',
        content: `Hi {ARTIST_NAME},

Thank you for submitting "{TRACK_NAME}" to {LABEL_NAME}. We can hear the potential in your music and appreciate your creativity.

However, we feel the production quality needs some work before we can consider it for our label. Specifically: {REASON}

We encourage you to:
- Work with an experienced producer or engineer
- Invest in better mixing and mastering
- Consider re-recording certain elements

We'd be happy to listen to revised versions of your work in the future. Keep developing your sound - you have potential!

Best regards,
{LABEL_NAME} Team

---
{DATE}`
    },
    'decline-full-roster': {
        title: 'Full Roster - Capacity Decline',
        content: `Hi {ARTIST_NAME},

Thank you for submitting "{TRACK_NAME}" to {LABEL_NAME}. Your music is impressive and shows real talent.

Unfortunately, we're currently at capacity with our roster and aren't able to take on new artists at this time. We want to ensure we can give proper attention and resources to all our signed artists.

We recommend checking back with us in {REASON} months, as our situation may change. In the meantime, we encourage you to continue developing your sound and building your fanbase.

Thank you for considering us, and we wish you success in your music career!

Best regards,
{LABEL_NAME} Team

---
{DATE}`
    },
    'music-release': {
        title: 'Music Release Announcement',
        content: `🎵 NEW RELEASE ALERT 🎵

{ARTIST_NAME} drops their latest single "{TRACK_NAME}" and it's absolutely incredible!

{REASON}

This track showcases {ARTIST_NAME}'s unique sound and artistic growth. We're so proud to have them as part of the {LABEL_NAME} family.

🔥 Stream now on all platforms
🎧 Link in bio
📱 Share and tag your friends

#NewMusic #Release #IndependentLabel #MusicLovers #NewArtist

---
Released: {DATE}
Label: {LABEL_NAME}`
    },
    'video-release': {
        title: 'Music Video Release',
        content: `🎬 MUSIC VIDEO PREMIERE 🎬

{ARTIST_NAME} - "{TRACK_NAME}" Official Music Video is here!

{REASON}

This visual masterpiece perfectly complements the track's energy and showcases {ARTIST_NAME}'s artistic vision.

🎥 Watch now: [LINK]
👀 Don't forget to like and subscribe
🔔 Turn on notifications for more content

#MusicVideo #Premiere #NewContent #VisualArt #IndependentMusic

---
Premiered: {DATE}
Artist: {ARTIST_NAME}
Label: {LABEL_NAME}`
    },
    'artist-spotlight': {
        title: 'Artist Spotlight',
        content: `✨ ARTIST SPOTLIGHT ✨

Meet {ARTIST_NAME} - one of our incredible talents here at {LABEL_NAME}!

{REASON}

{ARTIST_NAME} represents everything we love about independent music - authenticity, creativity, and pure passion for their craft.

🎵 Latest release: "{TRACK_NAME}"
🔥 Stream their music on all platforms
📱 Follow them: [SOCIAL HANDLES]

Show some love in the comments! 👇

#ArtistSpotlight #IndependentMusic #TalentedArtist #SupportIndependentArtists #MusicDiscovery

---
Featured: {DATE}
Label: {LABEL_NAME}`
    },
    'pulse-pick': {
        title: 'Pulse Pick - Track Feature',
        content: `🎯 PULSE PICK 🎯

Today's featured track: "{TRACK_NAME}" by {ARTIST_NAME}

Why we're vibing with this one:
{REASON}

What caught our attention:
• The production quality is exceptional
• Unique sound design that stands out
• Perfect blend of [GENRE ELEMENTS]
• That hook that gets stuck in your head

This is exactly the kind of innovative music we love to spotlight. Sometimes the best discoveries come from diving deep into the endless ocean of Spotify.

🔗 Stream it now: [SPOTIFY LINK]
💫 Add it to your playlist
🔄 Share with your music-loving friends

What do you think? Drop your thoughts in the comments!

#PulsePick #MusicDiscovery #SpotifyFinds #IndependentMusic #NewMusic #MusicBlog #Hidden

---
Featured: {DATE}
Discovered by: {LABEL_NAME}`
    },
    'album-cover-brief': {
        title: 'Album Cover Design Brief',
        content: `ALBUM COVER DESIGN BRIEF

Artist: {ARTIST_NAME}
Album: {TRACK_NAME}
Label: {LABEL_NAME}

CONCEPT DIRECTION:
{REASON}

VISUAL STYLE:
• Color palette: [Specify preferred colors]
• Mood: [Energetic/Dark/Dreamy/Minimalist/etc.]
• Typography: [Modern/Classic/Hand-drawn/etc.]
• Overall aesthetic: [Electronic/Organic/Futuristic/Vintage/etc.]

TECHNICAL REQUIREMENTS:
• Dimensions: 3000x3000px (minimum)
• Resolution: 300 DPI
• Format: PNG/JPEG
• Text must be readable at thumbnail size

INSPIRATION/REFERENCES:
• [Add reference images or describe similar artwork]
• [Musical influences that should be reflected]

DEADLINE: {DATE}

Please provide 2-3 initial concepts for review.

Contact: [YOUR EMAIL]
Budget: [BUDGET RANGE]`
    },
    'single-cover-brief': {
        title: 'Single Cover Design Brief',
        content: `SINGLE COVER DESIGN BRIEF

Artist: {ARTIST_NAME}
Single: {TRACK_NAME}
Label: {LABEL_NAME}

TRACK VIBE:
{REASON}

DESIGN DIRECTION:
• Style: [Minimalist/Bold/Artistic/Photography-based]
• Color scheme: [Bright/Dark/Monochrome/Colorful]
• Typography: [Clean/Stylized/Hand-lettered]
• Must complement artist's brand

TECHNICAL SPECS:
• Size: 3000x3000px, 300 DPI
• Format: PNG with transparency option
• Readable at 300x300px (streaming thumbnail)

BRAND CONSISTENCY:
• Artist logo/brand elements: [Include if applicable]
• Social media versions needed: Yes/No
• Animation version needed: Yes/No

DEADLINE: {DATE}
BUDGET: [BUDGET RANGE]

Quick turnaround preferred - 24-48 hours if possible.

Contact: [YOUR EMAIL]`
    },
    'instagram-post': {
        title: 'Instagram Post Design',
        content: `INSTAGRAM POST DESIGN REQUEST

Artist: {ARTIST_NAME}
Content: {TRACK_NAME}
Label: {LABEL_NAME}

POST PURPOSE:
{REASON}

DESIGN SPECIFICATIONS:
• Dimensions: 1080x1080px (square post)
• Style: [Clean/Edgy/Colorful/Minimalist/Brand-consistent]
• Text overlay: [Song title/Artist name/Release date/etc.]
• Color scheme: [Match brand/album artwork]

CONTENT ELEMENTS:
• Artist photo: [Include/Not needed]
• Album/single artwork: [Include/Feature prominently]
• Label logo: [Include/Subtle placement]
• Call-to-action: [Stream now/Link in bio/etc.]

TEMPLATE VARIATIONS:
• Stories version (1080x1920px): [Needed/Not needed]
• Carousel version: [Needed/Not needed]
• Animated version: [Needed/Not needed]

BRAND GUIDELINES:
• Font: [Brand font/Modern/Clean]
• Colors: [Brand colors/Album colors]
• Style: [Consistent with previous posts]

DEADLINE: {DATE}
USAGE: Instagram, Facebook, other social platforms

Contact: [YOUR EMAIL]`
    },
    'instagram-story': {
        title: 'Instagram Story Design',
        content: `INSTAGRAM STORY DESIGN REQUEST

Artist: {ARTIST_NAME}
Content: {TRACK_NAME}
Label: {LABEL_NAME}

STORY CONCEPT:
{REASON}

DESIGN SPECS:
• Dimensions: 1080x1920px (9:16 aspect ratio)
• Style: [Dynamic/Minimal/Bold/Branded]
• Animation: [Static/Simple animation/Video background]
• Duration: [15 seconds max for video]

STORY ELEMENTS:
• Swipe-up/Link sticker: [Include streaming link]
• Music sticker: [Include track preview]
• Artist tag: [Include artist handle]
• Hashtags: [#NewMusic #ArtistName #LabelName]

TEMPLATE SERIES:
• Announcement story: [New release alert]
• Behind-the-scenes: [Studio/creative process]
• Countdown: [Release countdown sticker]
• Poll/Question: [Engage audience]

BRAND CONSISTENCY:
• Color palette: [Match artist/label branding]
• Typography: [Consistent with brand]
• Logo placement: [Subtle/prominent]

DEADLINE: {DATE}
QUANTITY: [Single story/Story series]

Contact: [YOUR EMAIL]`
    },
    'artist-spotlight-graphic': {
        title: 'Artist Spotlight Graphic',
        content: `ARTIST SPOTLIGHT GRAPHIC DESIGN

Artist: {ARTIST_NAME}
Feature: {TRACK_NAME}
Label: {LABEL_NAME}

SPOTLIGHT FOCUS:
{REASON}

DESIGN CONCEPT:
• Format: [Square/Landscape/Portrait/Multi-format]
• Style: [Professional/Creative/Edgy/Clean]
• Photography: [New photoshoot/Existing photos/Illustrated]
• Color scheme: [Artist brand/Label brand/Custom]

CONTENT ELEMENTS:
• Artist name: [Prominent placement]
• "Artist Spotlight" text: [Stylized/Clean]
• Key achievements: [Streaming numbers/Awards/etc.]
• Social handles: [Include/Feature prominently]
• Quote from artist: [Include/Optional]

TECHNICAL REQUIREMENTS:
• Dimensions: [Instagram: 1080x1080, Facebook: 1200x630]
• Format: PNG/JPEG
• Print version: [Needed/Not needed]
• Web version: [Needed/Not needed]

BRAND ELEMENTS:
• Label logo: [Include/Subtle placement]
• Artist logo: [Include if available]
• Consistent fonts: [Brand typography]
• Color palette: [Brand colors]

DEADLINE: {DATE}
USAGE: Social media, website, press kit

Contact: [YOUR EMAIL]`
    },
    'new-artist-announcement': {
        title: 'New Artist Announcement',
        content: `NEW ARTIST ANNOUNCEMENT DESIGN

New Artist: {ARTIST_NAME}
Debut Release: {TRACK_NAME}
Label: {LABEL_NAME}

ANNOUNCEMENT THEME:
{REASON}

DESIGN DIRECTION:
• Style: [Welcoming/Exciting/Professional/Bold]
• Format: [Social media/Press release/Website banner]
• Color scheme: [Label brand/Artist brand/Custom]
• Typography: [Modern/Classic/Stylized]

KEY MESSAGING:
• "Welcome to the family" theme
• Artist background: [Brief bio/Origin story]
• What makes them unique: [Sound/Style/Vision]
• First release highlight: [Track name/Release date]

VISUAL ELEMENTS:
• Artist photo: [Professional/Candid/Artistic]
• Label logo: [Prominent placement]
• "New Artist" badge: [Design element]
• Social proof: [Testimonials/Previous work]

DELIVERABLES:
• Social media graphics: [Multiple sizes]
• Website banner: [Header/sidebar]
• Press kit addition: [High-res version]
• Email signature: [Compact version]

BRAND CONSISTENCY:
• Follow label visual guidelines
• Introduce artist brand elements
• Maintain professional appearance

DEADLINE: {DATE}
ANNOUNCEMENT DATE: [PLANNED RELEASE DATE]

Contact: [YOUR EMAIL]`
    },
    'concert-flyer': {
        title: 'Concert Flyer Design',
        content: `CONCERT FLYER DESIGN BRIEF

Event: {TRACK_NAME}
Artist: {ARTIST_NAME}
Venue: [VENUE NAME]
Date: {DATE}

EVENT DETAILS:
{REASON}

DESIGN REQUIREMENTS:
• Format: [Digital/Print/Both]
• Size: [A4/Letter/Custom dimensions]
• Style: [Energetic/Minimal/Artistic/Genre-specific]
• Color scheme: [Vibrant/Dark/Brand colors]

ESSENTIAL INFORMATION:
• Artist name: [Headliner prominence]
• Supporting acts: [If applicable]
• Venue name and address: [Clear and readable]
• Date and time: [Prominent placement]
• Ticket information: [Price/Where to buy]
• Age restrictions: [If applicable]

VISUAL ELEMENTS:
• Artist photo/artwork: [High-energy image]
• Venue photo: [Optional/Background]
• Label logo: [Sponsor placement]
• QR code: [Ticket link/More info]

TECHNICAL SPECS:
• Print: 300 DPI, CMYK color mode
• Digital: 72 DPI, RGB color mode
• Bleed area: [If printing]
• Social media versions: [Multiple sizes]

BRAND ELEMENTS:
• Artist branding: [Consistent with their style]
• Venue branding: [If required]
• Label branding: [Subtle placement]

DEADLINE: {DATE}
PRINT QUANTITY: [If applicable]

Contact: [YOUR EMAIL]`
    },
    'listening-party': {
        title: 'Listening Party Flyer',
        content: `LISTENING PARTY EVENT FLYER

Album: {TRACK_NAME}
Artist: {ARTIST_NAME}
Label: {LABEL_NAME}
Event Date: {DATE}

PARTY CONCEPT:
{REASON}

EVENT DETAILS:
• Type: [Private/Public/Industry only]
• Venue: [Studio/Club/Online/Intimate setting]
• Time: [Start/End times]
• Dress code: [Casual/Smart casual/Themed]
• Special guests: [Industry/Fans/Media]

DESIGN DIRECTION:
• Vibe: [Intimate/Exclusive/Celebratory/Chill]
• Style: [Elegant/Fun/Artistic/Modern]
• Color palette: [Album colors/Warm/Cool]
• Typography: [Elegant/Playful/Bold]

VISUAL ELEMENTS:
• Album artwork: [Feature prominently]
• Artist photo: [Professional/Candid]
• Venue ambiance: [Lighting/Atmosphere]
• RSVP information: [Contact/Link]

ESSENTIAL INFO:
• "Listening Party" title: [Stylized]
• Album title: [Prominent]
• Artist name: [Clear]
• Date, time, location: [Easy to read]
• RSVP required: [Contact details]
• Special notes: [Food/Drinks/Exclusivity]

DELIVERABLES:
• Digital invitation: [Email/Social media]
• Print invitation: [If needed]
• Social media story: [Instagram/Facebook]

DEADLINE: {DATE}
RSVP DEADLINE: [RSVP DATE]

Contact: [YOUR EMAIL]`
    }
};

// Canva Template URLs - Edit these URLs to point to your actual Canva templates
export const canvaTemplates = {
    'album-cover-brief': 'https://canva.com/design/album-cover-template',
    'single-cover-brief': 'https://canva.com/design/single-cover-template',
    'artist-spotlight-graphic': 'https://canva.com/design/artist-spotlight-template',
    'new-artist-announcement': 'https://canva.com/design/new-artist-template',
    'concert-flyer': 'https://canva.com/design/concert-flyer-template',
    'listening-party': 'https://canva.com/design/listening-party-template'
};