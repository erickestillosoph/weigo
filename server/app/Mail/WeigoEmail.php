<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use App\Models\Guest;
use Illuminate\Support\Facades\URL;

class WeigoEmail extends Mailable
{
    use Queueable, SerializesModels;
    private Guest $user;

    /**
     * Create a new message instance.
     */
    public function __construct(Guest $user)
    {
        $this->user = $user;
     
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Weigo Email',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        $url = URL::signedRoute(
            'verification.verify', 
            ['id' => $this->user->id, 'hash' => $this->user->verification_token]
        );

        return new Content(
            view: 'emails.verification-email',
            with: [
                'user' => $this->user,
                'email' => $this->user->email,
                'id' => $this->user->id,
                'hash' => $this->user->verification_token,
                'url' => $url,
            ]
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
