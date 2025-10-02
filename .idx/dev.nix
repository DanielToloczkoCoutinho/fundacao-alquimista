{ pkgs, ... }: {
  channel = "stable-23.11";

  packages = [
    pkgs.nodejs_20
    pkgs.nodePackages.pnpm
    pkgs.mongodb
  ];

  env = {
    MONGODB_DBPATH = "${builtins.getEnv "HOME"}/data/db";
  };
}
