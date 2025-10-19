<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShoppingCarts extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'session_id',
    ];

    // Relationships
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function items()
    {
        return $this->hasMany(CartItems::class, 'shopping_cart_id');
    }

    // Accessors
    public function getTotalAmountAttribute()
    {
        return $this->items->sum('total_price');
    }

    public function getTotalItemsAttribute()
    {
        return $this->items->sum('quantity');
    }
}
