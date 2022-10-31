<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterTemperaturaTableAddUserId extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('temperatura', function(Blueprint $table){
            $table->bigInteger('user_id', false, true)->nullable()->default(null);
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Shema::table('temperatura', function(Blueprint $table){
            $table->dropColumn('user_id');
        });
    }
}
