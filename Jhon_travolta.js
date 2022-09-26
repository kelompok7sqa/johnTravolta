var gaji = 15000;
var jamKerja = 40;
var gajiPokok = gaji * jamKerja;
//1) minggu ini kerja 52 jam, berapa gaji untuk 52 jam kerja?
var JamLembur = 52;
var HitungJamLembur = JamLembur - jamKerja;
var gajiLembur = HitungJamLembur * (1.5 * 15000);

var totalGaji = gajiPokok + gajiLembur;
console.log(`total gaji minggu ini adalah ${totalGaji}`);

//2) menuliskan apakah mr Jhon bisa menabung?
var pengeluaran = 600000;

if(totalGaji > pengeluaran){
  console.log("Mr Jhon bisa menabung");
}else if(totalGaji < pengeluaran){
  console.log("Mr Jhon tidak bisa menabung");
}else{
  console.log("Cari Tmabahan");
}