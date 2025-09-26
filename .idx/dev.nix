{pkgs}: {
  channel = "stable-24.11";

  packages = [
    pkgs.nodejs_20
    pkgs.zulu
    pkgs.python311
    pkgs.python311Packages.pip
    pkgs.python311Packages.numpy
    pkgs.python311Packages.scipy
    pkgs.python311Packages.matplotlib
    pkgs.python311Packages.requests
    pkgs.python311Packages.protobuf
    pkgs.python311Packages.flask
    pkgs.python311Packages.websockets
    pkgs.git
    pkgs.openssh
    pkgs.docker
    pkgs.tailwindcss
  ];

  env = {
    NODE_ENV = "development";
    PYTHONPATH = "${pkgs.python311}/lib/python3.11/site-packages";
  };

  services.firebase.emulators = {
    detect = false;
    projectId = "studio-4265982502-21871";
    services = ["auth" "firestore" "functions" "hosting"];
  };

  idx = {
    extensions = [
      "esbenp.prettier-vscode"
      "dbaeumer.vscode-eslint"
      "bradlc.vscode-tailwindcss"
      "graphql.vscode-graphql"
    ];
    workspace = {
      onCreate = {
        default.openFiles = [
          "src/app/page.tsx"
          "firebase.json"
          "dev.nix"
        ];
      };
    };
    previews = {
      enable = true;
      previews = {
        web = {
          command = ["npm" "run" "dev" "--" "--port" "$PORT" "--hostname" "0.0.0.0"];
          manager = "web";
        };
      };
    };
  };
}
