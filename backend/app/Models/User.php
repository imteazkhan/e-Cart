<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;

    protected $fillable = [
        'name',
        'email',
        'password',
        'role_id',
        'phone',
        'date_of_birth',
        'gender',
        'avatar',
        'is_active',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'date_of_birth' => 'date',
            'is_active' => 'boolean',
        ];
    }

    // Relationships
    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    public function addresses()
    {
        return $this->hasMany(Addresses::class);
    }

    public function orders()
    {
        return $this->hasMany(Orders::class);
    }

    public function reviews()
    {
        return $this->hasMany(Reviews::class);
    }

    public function wishlists()
    {
        return $this->hasMany(Wishlists::class);
    }

    public function shoppingCart()
    {
        return $this->hasOne(ShoppingCarts::class);
    }

    // Helper methods for role checking
    public function isAdmin()
    {
        return $this->role && $this->role->name === 'admin';
    }

    public function isUser()
    {
        return $this->role && $this->role->name === 'user';
    }

    public function hasRole($roleName)
    {
        return $this->role && $this->role->name === $roleName;
    }
}
