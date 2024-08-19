<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use App\Models\Guest;

class WeigoResetPassword extends Mailable
{
    use Queueable, SerializesModels;
    private Guest $user;

    /**
     * Create a new message instance.
     */
    public function __construct(Guest $user)
    {
        //
        $this->user = $user;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Weigo Reset Password',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        $weigoFrontendUrl = env('FRONTEND_URL');
        $data = [
            'name' => $this->user->name,
            'id' => $this->user->id,
            'email' => $this->user->email,
            'weigoFrontendUrl' => $weigoFrontendUrl
        ];
        return new Content(
            view: 'emails.reset-password',
            with: ['data' => $data]
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
