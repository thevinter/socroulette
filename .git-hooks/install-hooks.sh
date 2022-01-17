#!/bin/sh

this_dir=".git-hooks"
repo_root="$(git rev-parse --show-toplevel)"
hooks="pre-commit"

for hook in $hooks; do
	# the link is relative so it will work even if the repo root is moved
	ln -s "../../${this_dir}/${hook}" "${repo_root}/.git/hooks/${hook}" || true # don't fail
done

