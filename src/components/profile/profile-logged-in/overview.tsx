import React from "react";
import { useI18nStore } from "../../../i18n/i18n-store";
import { useAuthStore } from "../../../auth/auth-store";
import { AdoptedTreeIcon } from "../../icons/adopted-tree-icon";
import { Skeleton } from "../../skeleton/skeleton";
import { WateringCanIcon } from "../../icons/watering-can-icon";

export const Overview: React.FC = () => {
	const i18n = useI18nStore().i18n();
	const { formatNumber } = useI18nStore();

	const { adoptedTrees, adoptedTreesInfo } = useAuthStore();

	const wateringAmountTotal = adoptedTreesInfo?.reduce(
		(acc, tree) => acc + tree.reducedWateringAmount,
		0,
	);

	const wateringCountTotal = adoptedTreesInfo?.reduce(
		(acc, tree) => acc + tree.trees_watered.length,
		0,
	);

	return (
		<div className="md:shadow-gdk-soft mb-3 md:rounded-2xl md:border-2 md:p-7">
			<h2 className="text-2xl font-semibold">
				{i18n.navbar.profile.overview.subtitle}
			</h2>

			<div className="mt-7 flex flex-col gap-3 lg:flex-row lg:justify-start">
				{adoptedTreesInfo === null ? (
					<>
						<div className="basis-1/3">
							<Skeleton className="h-[120px] shadow-gdk-soft rounded-2xl border-2 p-4" />
						</div>
						<div className="basis-2/3 flex gap-3">
							<Skeleton className="h-[120px] shadow-gdk-soft rounded-2xl border-2 p-4" />
							<Skeleton className="h-[120px] shadow-gdk-soft rounded-2xl border-2 p-4" />
						</div>
					</>
				) : (
					<>
						<div className="shadow-gdk-soft flex flex-col justify-between gap-3 lg:w-1/3 rounded-2xl border-2 p-4 font-semibold ">
							{i18n.navbar.profile.overview.liter}
							<span className="flex items-baseline gap-x-5 text-5xl font-medium">
								<img src="images/icon-drop.svg" alt="" className="w-5" />
								{formatNumber(wateringAmountTotal ?? 0)}
							</span>
						</div>

						<div className="flex gap-3 lg:w-2/3">
							<div className="shadow-gdk-soft flex w-full flex-col justify-between lg:w-1/2 gap-3 rounded-2xl border-2 p-4 font-semibold">
								{i18n.navbar.profile.overview.irrigations}
								<span className="flex items-baseline gap-x-5 text-5xl font-medium">
									<div className="text-gdk-dark-green">
										<WateringCanIcon />
									</div>
									{formatNumber(wateringCountTotal ?? 0)}
								</span>
							</div>
							<div className="shadow-gdk-soft flex w-full flex-col justify-between lg:w-1/2 gap-3 rounded-2xl border-2 p-4 font-semibold">
								{i18n.navbar.profile.overview.adoptedTrees}
								<span className="flex items-baseline gap-x-5 text-5xl font-medium">
									<div className="text-gdk-purple stroke-none">
										<AdoptedTreeIcon />
									</div>
									{formatNumber(adoptedTrees?.length)}
								</span>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};
