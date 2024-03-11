#!/bin/bash

bun run db:migrate
bun run db:seed
bun run start