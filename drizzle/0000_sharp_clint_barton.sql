CREATE TABLE `accounts` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`created_at` int,
	`updated_at` int,
	`name` varchar(256),
	CONSTRAINT `accounts_id` PRIMARY KEY(`id`),
	CONSTRAINT `name_idx` UNIQUE(`name`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`created_at` int,
	`updated_at` int,
	`first_name` varchar(256),
	`last_name` varchar(256),
	`email` varchar(256),
	`password` varchar(256),
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `first_name_idx` UNIQUE(`first_name`),
	CONSTRAINT `last_name_idx` UNIQUE(`last_name`)
);
