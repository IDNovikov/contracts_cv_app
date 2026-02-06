Generation ts-types

npx protoc -I ./proto ./proto/\*.proto --ts_proto_out=./gen --ts_proto_opt=nestJs=true,package=omit
